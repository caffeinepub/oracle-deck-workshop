import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Plus, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { SectionWrapper } from "../components/SectionWrapper";
import { getAnimalEmoji, spiritAnimals } from "../data/spiritAnimals";
import {
  useCreateJournalEntry,
  useDeleteJournalEntry,
  useGetJournalEntries,
} from "../hooks/useQueries";

function formatDate(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function Journal() {
  const { data: entries, isLoading } = useGetJournalEntries();
  const createEntry = useCreateJournalEntry();
  const deleteEntry = useDeleteJournalEntry();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [animal, setAnimal] = useState("");

  const resetForm = () => {
    setTitle("");
    setBody("");
    setAnimal("");
    setShowForm(false);
  };

  const handleCreate = async () => {
    if (!title.trim() || !body.trim()) return;
    try {
      await createEntry.mutateAsync({
        title: title.trim(),
        body: body.trim(),
        spiritAnimal: animal || "",
      });
      toast.success("Entry woven into your creation log.");
      resetForm();
    } catch {
      toast.error("Could not save entry.");
    }
  };

  const handleDelete = async (t: string) => {
    try {
      await deleteEntry.mutateAsync(t);
      toast.success("Entry released.");
    } catch {
      toast.error("Could not delete entry.");
    }
  };

  return (
    <SectionWrapper
      title="Creation Log"
      subtitle="Your reflective record — intentions, inspirations, and pattern observations."
      icon="🗂️"
    >
      <div className="max-w-2xl space-y-6">
        <div>
          {!showForm ? (
            <Button
              data-ocid="journal.primary_button"
              onClick={() => setShowForm(true)}
              style={{
                background: "oklch(var(--primary))",
                color: "oklch(var(--primary-foreground))",
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Entry
            </Button>
          ) : (
            <AnimatePresence>
              <motion.div
                key="form"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-xl p-5 border space-y-3"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--primary) / 0.2)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="font-display text-base font-semibold"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    New Entry
                  </h3>
                  <button
                    type="button"
                    onClick={resetForm}
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <Input
                  data-ocid="journal.input"
                  placeholder="Entry title…"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    background: "oklch(var(--input))",
                    borderColor: "oklch(var(--border))",
                  }}
                />
                <Select value={animal} onValueChange={setAnimal}>
                  <SelectTrigger
                    data-ocid="journal.select"
                    style={{
                      background: "oklch(var(--input))",
                      borderColor: "oklch(var(--border))",
                    }}
                  >
                    <SelectValue placeholder="Associated spirit animal (optional)" />
                  </SelectTrigger>
                  <SelectContent
                    style={{
                      background: "oklch(var(--popover))",
                      borderColor: "oklch(var(--border))",
                    }}
                  >
                    {spiritAnimals.map((a) => (
                      <SelectItem key={a.name} value={a.name}>
                        {getAnimalEmoji(a.name)} {a.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  data-ocid="journal.textarea"
                  rows={6}
                  placeholder="Write freely about what arises…"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="resize-none"
                  style={{
                    background: "oklch(var(--input))",
                    borderColor: "oklch(var(--border))",
                  }}
                />
                <div className="flex gap-2 justify-end">
                  <Button
                    data-ocid="journal.cancel_button"
                    variant="ghost"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    data-ocid="journal.submit_button"
                    onClick={handleCreate}
                    disabled={
                      createEntry.isPending || !title.trim() || !body.trim()
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
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {isLoading ? (
          <div
            data-ocid="journal.loading_state"
            className="flex items-center gap-2"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading entries…</span>
          </div>
        ) : !entries || entries.length === 0 ? (
          <motion.div
            data-ocid="journal.empty_state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-4xl mb-3">🗂️</div>
            <p
              className="font-display text-lg"
              style={{ color: "oklch(var(--primary))" }}
            >
              Your creation log awaits
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Record your first reflection above.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.title}
                data-ocid={`journal.item.${i + 1}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl p-5 border"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {entry.spiritAnimal && (
                        <span className="text-lg">
                          {getAnimalEmoji(entry.spiritAnimal)}
                        </span>
                      )}
                      <h3
                        className="font-display font-semibold text-base"
                        style={{ color: "oklch(var(--foreground))" }}
                      >
                        {entry.title}
                      </h3>
                    </div>
                    {entry.spiritAnimal && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(var(--primary) / 0.7)" }}
                      >
                        {entry.spiritAnimal}
                      </p>
                    )}
                    <p
                      className="mt-2 text-sm leading-relaxed line-clamp-3"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      {entry.body}
                    </p>
                    <p
                      className="mt-2 text-xs"
                      style={{
                        color: "oklch(var(--muted-foreground) / 0.6)",
                      }}
                    >
                      {formatDate(entry.timestamp)}
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        data-ocid={`journal.delete_button.${i + 1}`}
                        className="flex-shrink-0 p-1.5 rounded-lg transition-colors hover:bg-destructive/10"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent
                      style={{
                        background: "oklch(var(--card))",
                        borderColor: "oklch(var(--border))",
                      }}
                    >
                      <AlertDialogHeader>
                        <AlertDialogTitle
                          className="font-display"
                          style={{ color: "oklch(var(--foreground))" }}
                        >
                          Release this entry?
                        </AlertDialogTitle>
                        <AlertDialogDescription
                          style={{ color: "oklch(var(--muted-foreground))" }}
                        >
                          &ldquo;{entry.title}&rdquo; will be permanently
                          removed from your creation log.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel data-ocid="journal.cancel_button">
                          Keep it
                        </AlertDialogCancel>
                        <AlertDialogAction
                          data-ocid="journal.confirm_button"
                          onClick={() => handleDelete(entry.title)}
                          style={{
                            background: "oklch(var(--destructive))",
                            color: "oklch(var(--destructive-foreground))",
                          }}
                        >
                          Release
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
