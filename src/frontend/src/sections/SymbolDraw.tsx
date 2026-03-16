import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Loader2, Shuffle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { AnimalCard } from "../components/AnimalCard";
import { SectionWrapper } from "../components/SectionWrapper";
import { spiritAnimals } from "../data/spiritAnimals";
import { useAddDrawnSymbol, useCreateJournalEntry } from "../hooks/useQueries";

const guidedPrompts = [
  "Pick a Spirit Animal card. Sketch it without reference. What feeling does it evoke?",
  "Write three words describing this animal's energy in your life.",
  "Add a personal symbol or motif that resonates with the card's qualities.",
  "Imagine a situation where this card could guide you — sketch, write, or create a pattern around it.",
  "Reflect: Which card surprised you? Why?",
];

export function SymbolDraw() {
  const [currentAnimal, setCurrentAnimal] = useState(
    spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)],
  );
  const [isFlipping, setIsFlipping] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  const [journalTitle, setJournalTitle] = useState("");
  const [journalBody, setJournalBody] = useState("");
  const addDraw = useAddDrawnSymbol();
  const createEntry = useCreateJournalEntry();

  const drawAgain = useCallback(async () => {
    setIsFlipping(true);
    await new Promise((r) => setTimeout(r, 300));
    const next =
      spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    setCurrentAnimal(next);
    setIsFlipping(false);
  }, []);

  const recordDraw = async () => {
    try {
      await addDraw.mutateAsync(currentAnimal.name);
      toast.success(`${currentAnimal.name} recorded to your draw history.`);
    } catch {
      toast.error("Could not record draw.");
    }
  };

  const recordAndJournal = async () => {
    try {
      await addDraw.mutateAsync(currentAnimal.name);
      setJournalTitle(`Reflection on ${currentAnimal.name}`);
      setJournalBody("");
      setJournalOpen(true);
    } catch {
      toast.error("Could not record draw.");
    }
  };

  const saveJournal = async () => {
    if (!journalTitle.trim() || !journalBody.trim()) return;
    try {
      await createEntry.mutateAsync({
        title: journalTitle,
        body: journalBody,
        spiritAnimal: currentAnimal.name,
      });
      toast.success("Journal entry saved.");
      setJournalOpen(false);
    } catch {
      toast.error("Could not save journal entry.");
    }
  };

  return (
    <SectionWrapper
      title="Symbol Draw"
      subtitle="Draw from the living oracle. Let the symbol meet you where you are."
      icon="🂴"
    >
      <div className="max-w-xl space-y-6">
        {/* Guided Creation Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl p-5 border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.03 260), oklch(0.14 0.02 290))",
            borderColor: "oklch(var(--primary) / 0.2)",
          }}
        >
          <h3
            className="font-display text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--primary) / 0.85)" }}
          >
            Guided Creation Prompts
          </h3>
          <ul className="space-y-2">
            {guidedPrompts.map((prompt, i) => (
              <li
                key={prompt}
                className="flex items-start gap-2 text-sm leading-relaxed"
                style={{ color: "oklch(var(--foreground) / 0.8)" }}
              >
                <span
                  className="flex-shrink-0 font-semibold text-xs mt-0.5"
                  style={{ color: "oklch(var(--primary) / 0.6)" }}
                >
                  {i + 1}.
                </span>
                {prompt}
              </li>
            ))}
          </ul>
          <p
            className="mt-3 text-xs italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Prompts can be repeated, adapted, or layered with personal symbolism
            as the deck grows.
          </p>
        </motion.div>

        {/* Card reveal */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isFlipping && (
              <motion.div
                key={currentAnimal.name}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <AnimalCard animal={currentAnimal} variant="full" />
              </motion.div>
            )}
          </AnimatePresence>

          {isFlipping && (
            <div
              className="rounded-xl p-6 border flex items-center justify-center h-64 animate-pulse"
              style={{
                background: "oklch(var(--card))",
                borderColor: "oklch(var(--primary) / 0.3)",
              }}
            >
              <div
                className="text-5xl animate-spin"
                style={{ animationDuration: "0.4s" }}
              >
                ✦
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Button
            data-ocid="draw.primary_button"
            onClick={drawAgain}
            disabled={isFlipping}
            variant="outline"
            className="flex-1"
            style={{
              borderColor: "oklch(var(--primary) / 0.4)",
              color: "oklch(var(--primary))",
            }}
          >
            <Shuffle className="mr-2 h-4 w-4" />
            Draw Again
          </Button>

          <Button
            data-ocid="draw.secondary_button"
            onClick={recordDraw}
            disabled={addDraw.isPending}
            className="flex-1"
            style={{
              background: "oklch(var(--accent))",
              color: "oklch(var(--accent-foreground))",
            }}
          >
            {addDraw.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Recording…
              </>
            ) : (
              <>✦ Record This Draw</>
            )}
          </Button>

          <Button
            data-ocid="draw.open_modal_button"
            onClick={recordAndJournal}
            disabled={addDraw.isPending}
            variant="outline"
            className="flex-1"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Record & Journal
          </Button>
        </div>
      </div>

      {/* Journal Dialog */}
      <Dialog open={journalOpen} onOpenChange={setJournalOpen}>
        <DialogContent
          data-ocid="draw.dialog"
          style={{
            background: "oklch(var(--card))",
            borderColor: "oklch(var(--border))",
          }}
          className="max-w-lg"
        >
          <DialogHeader>
            <DialogTitle
              className="font-display"
              style={{ color: "oklch(var(--primary))" }}
            >
              Journal — {currentAnimal.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 pt-2">
            <p
              className="text-sm italic"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              &ldquo;{currentAnimal.question}&rdquo;
            </p>
            <input
              data-ocid="draw.input"
              className="w-full rounded-lg px-3 py-2 text-sm border outline-none focus:ring-1"
              style={{
                background: "oklch(var(--input))",
                borderColor: "oklch(var(--border))",
                color: "oklch(var(--foreground))",
              }}
              value={journalTitle}
              onChange={(e) => setJournalTitle(e.target.value)}
              placeholder="Entry title…"
            />
            <Textarea
              data-ocid="draw.textarea"
              rows={6}
              className="resize-none"
              style={{
                background: "oklch(var(--input))",
                borderColor: "oklch(var(--border))",
                color: "oklch(var(--foreground))",
              }}
              value={journalBody}
              onChange={(e) => setJournalBody(e.target.value)}
              placeholder="What arises when you sit with this symbol…"
            />
            <div className="flex gap-2 justify-end">
              <Button
                data-ocid="draw.cancel_button"
                variant="ghost"
                onClick={() => setJournalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                data-ocid="draw.save_button"
                onClick={saveJournal}
                disabled={
                  createEntry.isPending ||
                  !journalTitle.trim() ||
                  !journalBody.trim()
                }
                style={{
                  background: "oklch(var(--primary))",
                  color: "oklch(var(--primary-foreground))",
                }}
              >
                {createEntry.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving…
                  </>
                ) : (
                  "Save Entry"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
