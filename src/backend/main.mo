import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Storage
  include MixinStorage();

  // Core types and modules
  public type UserProfile = {
    username : Text;
    email : Text;
  };

  public type JournalEntry = {
    title : Text;
    body : Text;
    imageUrl : ?Text;
    isPublic : Bool;
    timestamp : Time.Time;
  };

  public type DailyIntention = {
    text : Text;
    date : Time.Time;
  };

  public type DrawnSymbol = {
    spiritAnimal : Text;
    timestamp : Time.Time;
  };

  // Persistent storage maps
  let journalEntries = Map.empty<Principal, List.List<JournalEntry>>();
  let dailyIntentions = Map.empty<Principal, DailyIntention>();
  let drawnSymbols = Map.empty<Principal, List.List<DrawnSymbol>>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let imageStore = Map.empty<Text, Storage.ExternalBlob>();

  // User Profile Functions (required by frontend)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Journal Entry Functions
  public shared ({ caller }) func createJournalEntry(title : Text, body : Text, imageUrl : ?Text, isPublic : Bool) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create journal entries");
    };

    let newEntry : JournalEntry = {
      title;
      body;
      imageUrl;
      isPublic;
      timestamp = Time.now();
    };

    let currentEntries = switch (journalEntries.get(caller)) {
      case (null) { List.empty<JournalEntry>() };
      case (?entries) { entries };
    };

    currentEntries.add(newEntry);
    journalEntries.add(caller, currentEntries);
  };

  public query ({ caller }) func getJournalEntries() : async [JournalEntry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view journal entries");
    };

    switch (journalEntries.get(caller)) {
      case (null) { [] };
      case (?entries) { entries.toArray() };
    };
  };

  public shared ({ caller }) func deleteJournalEntry(title : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete journal entries");
    };

    let currentEntries = switch (journalEntries.get(caller)) {
      case (null) { List.empty<JournalEntry>() };
      case (?entries) { entries };
    };

    let filteredEntries = currentEntries.filter(
      func(entry) {
        entry.title != title;
      }
    );

    journalEntries.add(caller, filteredEntries);
  };

  // Daily Intention Functions
  public shared ({ caller }) func setDailyIntention(text : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can set daily intentions");
    };

    let intention : DailyIntention = {
      text;
      date = Time.now();
    };

    dailyIntentions.add(caller, intention);
  };

  public query ({ caller }) func getDailyIntention() : async ?DailyIntention {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get daily intentions");
    };
    dailyIntentions.get(caller);
  };

  // Drawn Symbols Functions
  public shared ({ caller }) func addDrawnSymbol(spiritAnimal : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add drawn symbols");
    };

    let newSymbol : DrawnSymbol = {
      spiritAnimal;
      timestamp = Time.now();
    };

    let currentSymbols = switch (drawnSymbols.get(caller)) {
      case (null) { List.empty<DrawnSymbol>() };
      case (?symbols) { symbols };
    };

    currentSymbols.add(newSymbol);

    // Only keep last 30 entries using Iter.take converted back to List
    let limitedSymbols = List.empty<DrawnSymbol>();
    let iter = currentSymbols.values().take(30);
    iter.forEach(func(symbol) { limitedSymbols.add(symbol) });

    drawnSymbols.add(caller, limitedSymbols);
  };

  public query ({ caller }) func getDrawHistory() : async [DrawnSymbol] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get draw history");
    };

    switch (drawnSymbols.get(caller)) {
      case (null) { [] };
      case (?symbols) {
        let limitedSymbols = symbols.values().take(30).toArray();
        limitedSymbols;
      };
    };
  };

  // Public journal entries - accessible to all including guests
  public query ({ caller }) func getPublicJournalEntries() : async [JournalEntry] {
    let allEntries = List.empty<JournalEntry>();
    for ((_, entries) in journalEntries.entries()) {
      for (entry in entries.values()) {
        if (entry.isPublic) {
          allEntries.add(entry);
        };
      };
    };
    allEntries.toArray();
  };

  public shared ({ caller }) func addDrawHistory(spiritAnimal : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add draw history");
    };

    let newDrawnSymbol : DrawnSymbol = {
      spiritAnimal;
      timestamp = Time.now();
    };

    let currentSymbols = switch (drawnSymbols.get(caller)) {
      case (null) { List.empty<DrawnSymbol>() };
      case (?symbols) { symbols };
    };

    currentSymbols.add(newDrawnSymbol);

    // Only keep last 30 entries
    let limitedSymbols = List.empty<DrawnSymbol>();
    let iter = currentSymbols.values().take(30);
    iter.forEach(func(symbol) { limitedSymbols.add(symbol) });

    drawnSymbols.add(caller, limitedSymbols);
  };

  public shared ({ caller }) func saveImage(url : Text, blob : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save images");
    };
    imageStore.add(url, blob);
  };

  public shared ({ caller }) func updateImageUrl(title : Text, newUrl : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update image URLs");
    };

    let currentEntries = switch (journalEntries.get(caller)) {
      case (null) { List.empty<JournalEntry>() };
      case (?entries) { entries };
    };

    let updatedEntries = currentEntries.map<JournalEntry, JournalEntry>(
      func(entry) {
        if (entry.title == title) {
          { entry with imageUrl = ?newUrl };
        } else {
          entry;
        };
      }
    );

    journalEntries.add(caller, updatedEntries);
  };

  // Public image access - accessible to all including guests
  public query ({ caller }) func getImage(url : Text) : async ?Storage.ExternalBlob {
    imageStore.get(url);
  };

  public shared ({ caller }) func updateImage(title : Text, blob : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update images");
    };

    switch (journalEntries.get(caller)) {
      case (null) {
        Runtime.trap("Journal entry not found for current user");
      };
      case (?entries) {
        let entry = entries.find(func(e) { e.title == title });
        switch (entry) {
          case (null) {
            Runtime.trap("Journal entry not found for current user");
          };
          case (?e) {
            switch (e.imageUrl) {
              case (null) {
                Runtime.trap("Image URL not found for journal entry");
              };
              case (?url) {
                imageStore.add(url, blob);
              };
            };
          };
        };
      };
    };
  };
};
