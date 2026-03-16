import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { SectionWrapper } from "../components/SectionWrapper";
import { useGetPublicJournalEntries } from "../hooks/useQueries";

const sharingPrompts = [
  "What do you notice about this card?",
  "Which card speaks to you most and why?",
];

function formatDate(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function WitnessSpace() {
  const { data: publicEntries, isLoading } = useGetPublicJournalEntries();
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState("");

  const handleSave = () => {
    if (!reflection.trim()) return;
    setSaved(reflection.trim());
    toast.success("Your reflection has been witnessed.");
  };

  return (
    <SectionWrapper
      title="Witness Space"
      subtitle="An optional space for sharing and reflective connection."
      icon="👁️"
    >
      <div className="max-w-2xl space-y-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "oklch(var(--foreground) / 0.85)" }}
          >
            Share works-in-progress with others. Feedback is reflective only —
            curiosity, insight, and support, never judgment.
          </p>
          <p
            className="text-sm italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            This space is optional; presence is enough.
          </p>
        </motion.div>

        {/* Sharing prompts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl p-5 border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.025 280), oklch(0.14 0.02 310))",
            borderColor: "oklch(var(--primary) / 0.2)",
          }}
        >
          <h3
            className="font-display text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--primary) / 0.85)" }}
          >
            Suggested Prompts for Sharing
          </h3>
          <ul className="space-y-2">
            {sharingPrompts.map((prompt) => (
              <li
                key={prompt}
                className="flex items-start gap-2 text-sm italic"
                style={{ color: "oklch(var(--foreground) / 0.8)" }}
              >
                <span
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(var(--primary) / 0.5)" }}
                >
                  ✦
                </span>
                &ldquo;{prompt}&rdquo;
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Public Creation Log entries */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-4"
        >
          <h3
            className="font-display text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(var(--primary) / 0.85)" }}
          >
            Shared from the Creation Log
          </h3>

          {isLoading ? (
            <div
              data-ocid="witness.loading_state"
              className="flex items-center gap-2"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading shared entries…</span>
            </div>
          ) : !publicEntries || publicEntries.length === 0 ? (
            <motion.div
              data-ocid="witness.empty_state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl p-6 border text-center"
              style={{
                background: "oklch(var(--muted) / 0.2)",
                borderColor: "oklch(var(--border))",
              }}
            >
              <p className="text-3xl mb-2">🌀</p>
              <p
                className="text-sm"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                No shared entries yet. Mark a Creation Log entry as public to
                see it here.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {publicEntries.map((entry, i) => (
                <motion.div
                  key={`${entry.title}-${i}`}
                  data-ocid={`witness.item.${i + 1}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl p-5 border"
                  style={{
                    background: "oklch(var(--card))",
                    borderColor: "oklch(var(--primary) / 0.15)",
                  }}
                >
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h4
                      className="font-display font-semibold text-base"
                      style={{ color: "oklch(var(--foreground))" }}
                    >
                      {entry.title}
                    </h4>
                    <Badge
                      className="flex items-center gap-1 text-xs"
                      style={{
                        background: "oklch(var(--primary) / 0.15)",
                        color: "oklch(var(--primary))",
                        border: "1px solid oklch(var(--primary) / 0.3)",
                      }}
                    >
                      <Globe className="h-3 w-3" />
                      Public
                    </Badge>
                  </div>

                  {entry.imageUrl && (
                    <div className="mb-3">
                      <img
                        src={entry.imageUrl}
                        alt={entry.title}
                        className="rounded-lg object-cover max-h-48 w-full"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                  )}

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    {entry.body}
                  </p>
                  <p
                    className="mt-2 text-xs"
                    style={{ color: "oklch(var(--muted-foreground) / 0.6)" }}
                  >
                    {formatDate(entry.timestamp)}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Saved reflection preview */}
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-4 border"
            style={{
              background: "oklch(var(--muted) / 0.3)",
              borderColor: "oklch(var(--primary) / 0.12)",
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: "oklch(var(--primary) / 0.6)" }}
            >
              Your last reflection
            </p>
            <p
              className="text-sm italic leading-relaxed"
              style={{ color: "oklch(var(--foreground) / 0.8)" }}
            >
              &ldquo;{saved}&rdquo;
            </p>
          </motion.div>
        )}

        {/* Reflection textarea */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <p
            className="text-sm"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Write a reflection, share a card description, or simply note what
            you notice in this moment.
          </p>
          <Textarea
            data-ocid="witness.textarea"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="What do you notice in your work today…"
            rows={5}
            className="resize-none"
            style={{
              background: "oklch(var(--input))",
              borderColor: "oklch(var(--border))",
              color: "oklch(var(--foreground))",
            }}
          />
          <div className="flex items-center gap-3">
            <Button
              data-ocid="witness.primary_button"
              onClick={handleSave}
              disabled={!reflection.trim()}
              style={{
                background: "oklch(var(--primary))",
                color: "oklch(var(--primary-foreground))",
              }}
            >
              Witness This
            </Button>
            <p
              className="text-xs"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Saved locally to your personal space
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
