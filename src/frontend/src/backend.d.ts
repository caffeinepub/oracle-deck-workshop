import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export type Time = bigint;
export interface JournalEntry {
    title: string;
    body: string;
    imageUrl?: string;
    timestamp: Time;
    isPublic: boolean;
}
export interface DailyIntention {
    date: Time;
    text: string;
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
    addDrawHistory(spiritAnimal: string): Promise<void>;
    addDrawnSymbol(spiritAnimal: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createJournalEntry(title: string, body: string, imageUrl: string | null, isPublic: boolean): Promise<void>;
    deleteJournalEntry(title: string): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getDailyIntention(): Promise<DailyIntention | null>;
    getDrawHistory(): Promise<Array<DrawnSymbol>>;
    getImage(url: string): Promise<ExternalBlob | null>;
    getJournalEntries(): Promise<Array<JournalEntry>>;
    getPublicJournalEntries(): Promise<Array<JournalEntry>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveImage(url: string, blob: ExternalBlob): Promise<void>;
    setDailyIntention(text: string): Promise<void>;
    updateImage(title: string, blob: ExternalBlob): Promise<void>;
    updateImageUrl(title: string, newUrl: string): Promise<void>;
}
