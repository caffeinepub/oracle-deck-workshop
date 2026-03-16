import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DailyIntention {
    date: Time;
    text: string;
}
export type Time = bigint;
export interface JournalEntry {
    title: string;
    body: string;
    spiritAnimal: string;
    timestamp: Time;
}
export interface DrawnSymbol {
    spiritAnimal: string;
    timestamp: Time;
}
export interface UserProfile {
    username: string;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addDrawnSymbol(spiritAnimal: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createJournalEntry(title: string, body: string, spiritAnimal: string): Promise<void>;
    deleteJournalEntry(title: string): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getDailyIntention(): Promise<DailyIntention | null>;
    getDrawHistory(): Promise<Array<DrawnSymbol>>;
    getJournalEntries(): Promise<Array<JournalEntry>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setDailyIntention(text: string): Promise<void>;
}
