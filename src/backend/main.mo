import List "mo:core/List";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Core types and modules
  public type UserProfile = {
    username : Text;
    email : Text;
  };

  public type JournalEntry = {
    title : Text;
    body : Text;
    spiritAnimal : Text;
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
  public shared ({ caller }) func createJournalEntry(title : Text, body : Text, spiritAnimal : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create journal entries");
    };

    let newEntry : JournalEntry = {
      title;
      body;
      spiritAnimal;
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
};
