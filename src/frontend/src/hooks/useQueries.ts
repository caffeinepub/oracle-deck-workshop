import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { DailyIntention, DrawnSymbol, JournalEntry } from "../backend.d";
import { useActor } from "./useActor";

export function useGetDailyIntention() {
  const { actor, isFetching } = useActor();
  return useQuery<DailyIntention | null>({
    queryKey: ["dailyIntention"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getDailyIntention();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetDailyIntention() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (text: string) => {
      if (!actor) throw new Error("No actor");
      return actor.setDailyIntention(text);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dailyIntention"] });
    },
  });
}

export function useGetDrawHistory() {
  const { actor, isFetching } = useActor();
  return useQuery<DrawnSymbol[]>({
    queryKey: ["drawHistory"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDrawHistory();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddDrawnSymbol() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (spiritAnimal: string) => {
      if (!actor) throw new Error("No actor");
      return actor.addDrawnSymbol(spiritAnimal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["drawHistory"] });
    },
  });
}

export function useGetJournalEntries() {
  const { actor, isFetching } = useActor();
  return useQuery<JournalEntry[]>({
    queryKey: ["journalEntries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getJournalEntries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateJournalEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      body,
      spiritAnimal,
    }: { title: string; body: string; spiritAnimal: string }) => {
      if (!actor) throw new Error("No actor");
      return actor.createJournalEntry(title, body, spiritAnimal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["journalEntries"] });
    },
  });
}

export function useDeleteJournalEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (title: string) => {
      if (!actor) throw new Error("No actor");
      return actor.deleteJournalEntry(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["journalEntries"] });
    },
  });
}
