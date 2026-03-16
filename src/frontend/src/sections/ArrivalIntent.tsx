import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SectionWrapper } from "../components/SectionWrapper";
import {
  useGetDailyIntention,
  useSetDailyIntention,
} from "../hooks/useQueries";

const checkInPrompts = [
  "What draws me to this workshop today?",
  "What questions or intentions do I carry for this deck?",
  "How do I want my symbols to support my thinking, imagination, or intuition?",
];

export function ArrivalIntent() {
  const { data: intention, isLoading } = useGetDailyIntention();
  const setIntention = useSetDailyIntention();
  const [text, setText] = useState("");

  useEffect(() => {
    if (intention?.text) {
      setText(intention.text);
    }
  }, [intention]);

  const handleSave = async () => {
    if (!text.trim()) return;
    try {
      await setIntention.mutateAsync(text.trim());
      toast.success("Intention set. May it guide your day.");
    } catch {
      toast.error("Unable to save intention. Please try again.");
    }
  };

  return (
    <SectionWrapper
      title="Arrival & Intent"
      subtitle="Begin here. Set the tone for your symbolic work today."
      icon="🌅"
    >
      <div className="max-w-2xl space-y-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-6 border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.03 280), oklch(0.14 0.02 300))",
            borderColor: "oklch(var(--primary) / 0.2)",
          }}
        >
          <p
            className="font-display text-lg leading-relaxed"
            style={{ color: "oklch(var(--foreground) / 0.9)" }}
          >
            Welcome to your Oracle Deck Workshop — a creative container for
            symbolic work and personal meaning-making. You don't need to be
            ready. You just need to begin.
          </p>
        </motion.div>

        {/* Your Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h3
            className="font-display text-base font-semibold uppercase tracking-widest"
            style={{ color: "oklch(var(--primary))" }}
          >
            Your Invitation
          </h3>
          <ul className="space-y-2">
            {[
              "Give yourself emotional permission to explore, reflect, and play.",
              "Approach each card, each symbol, each mark with curiosity, not pressure.",
              "This is not about \u201cperfect\u201d decks — it\u2019s about creative discovery and inner dialogue.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "oklch(var(--foreground) / 0.8)" }}
              >
                <span
                  className="mt-0.5 text-base flex-shrink-0"
                  style={{ color: "oklch(var(--primary) / 0.7)" }}
                >
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Reflective Check-In Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-5 border"
          style={{
            background: "oklch(var(--muted) / 0.3)",
            borderColor: "oklch(var(--primary) / 0.15)",
          }}
        >
          <h3
            className="font-display text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--primary) / 0.8)" }}
          >
            Reflective Check-In
          </h3>
          <ul className="space-y-2">
            {checkInPrompts.map((prompt, i) => (
              <li
                key={prompt}
                className="flex items-start gap-2 text-sm italic leading-relaxed"
                style={{ color: "oklch(var(--foreground) / 0.75)" }}
              >
                <span
                  className="text-xs mt-1 flex-shrink-0"
                  style={{ color: "oklch(var(--primary) / 0.5)" }}
                >
                  {i + 1}.
                </span>
                {prompt}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Current saved intention */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              data-ocid="arrival.loading_state"
              className="flex items-center gap-2"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading your intention…</span>
            </motion.div>
          ) : intention?.text ? (
            <motion.div
              key="existing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl p-4 border"
              style={{
                background: "oklch(var(--muted) / 0.4)",
                borderColor: "oklch(var(--primary) / 0.15)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "oklch(var(--primary) / 0.7)" }}
              >
                Today's Intention
              </p>
              <p
                className="italic"
                style={{ color: "oklch(var(--foreground) / 0.9)" }}
              >
                &ldquo;{intention.text}&rdquo;
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Input */}
        <div className="space-y-3">
          <Textarea
            data-ocid="arrival.textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="I intend to… explore what calls me with openness and curiosity."
            rows={4}
            className="resize-none text-base"
            style={{
              background: "oklch(var(--input))",
              borderColor: "oklch(var(--border))",
              color: "oklch(var(--foreground))",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.metaKey) handleSave();
            }}
          />
          <Button
            data-ocid="arrival.primary_button"
            onClick={handleSave}
            disabled={setIntention.isPending || !text.trim()}
            className="w-full md:w-auto"
            style={{
              background: "oklch(var(--primary))",
              color: "oklch(var(--primary-foreground))",
            }}
          >
            {setIntention.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Setting intention…
              </>
            ) : (
              "Set My Intention"
            )}
          </Button>
          <p
            className="text-xs"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Tip: Press ⌘ + Enter to save
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
