import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { SectionWrapper } from "../components/SectionWrapper";

const AFFIRMATIONS = [
  "I carry what I've received with care and openness.",
  "The wisdom of the symbols lives within me now.",
  "I close this space with gratitude and return to my life renewed.",
  "What I've uncovered here becomes medicine for my path.",
  "I honor the process of becoming, even when it is slow.",
  "The work continues, even in silence and stillness.",
  "I trust the spiral of my own unfolding.",
];

const reflectivePrompts = [
  "What surprised me about this process?",
  "Which cards felt most alive or resonant?",
  "How does this deck connect with my intentions or personal symbols?",
];

const nextStepIdeas = [
  "Use your deck in journaling with individual cards",
  "Design card spreads for reflection",
  "Share your deck as a creative artifact in workshops",
];

export function IntegrationClose() {
  const [gratitude, setGratitude] = useState("");
  const [closed, setClosed] = useState(false);
  const [affirmation] = useState(
    () => AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)],
  );

  const handleClose = () => {
    if (!gratitude.trim()) {
      toast.error(
        "Please share at least one thing you're grateful for before closing.",
      );
      return;
    }
    setClosed(true);
    toast.success("Session closed with grace. Until next time.");
  };

  const handleReturn = () => {
    setClosed(false);
    setGratitude("");
  };

  return (
    <SectionWrapper
      title="Integration Close"
      subtitle="Seal this session. Carry what matters. Release the rest."
      icon="🕯️"
    >
      <div className="max-w-xl space-y-6">
        <AnimatePresence mode="wait">
          {!closed ? (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="space-y-6"
            >
              {/* Review Intro */}
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.16 0.03 280), oklch(0.14 0.025 300))",
                  borderColor: "oklch(var(--primary) / 0.25)",
                }}
              >
                <p
                  className="font-display text-base leading-relaxed"
                  style={{ color: "oklch(var(--foreground) / 0.9)" }}
                >
                  Review your completed deck (or what you&rsquo;ve made so far).
                  Observe surprises, insights, and emerging themes.
                </p>
              </div>

              {/* Reflective Prompts */}
              <div
                className="rounded-xl p-5 border"
                style={{
                  background: "oklch(var(--muted) / 0.25)",
                  borderColor: "oklch(var(--primary) / 0.15)",
                }}
              >
                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(var(--primary) / 0.8)" }}
                >
                  Reflective Prompts
                </h3>
                <ul className="space-y-2">
                  {reflectivePrompts.map((prompt, i) => (
                    <li
                      key={prompt}
                      className="flex items-start gap-2 text-sm italic leading-relaxed"
                      style={{ color: "oklch(var(--foreground) / 0.75)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-0.5 text-xs not-italic"
                        style={{ color: "oklch(var(--primary) / 0.5)" }}
                      >
                        {i + 1}.
                      </span>
                      {prompt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div
                className="rounded-xl p-5 border"
                style={{
                  background: "oklch(var(--muted) / 0.2)",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(var(--foreground) / 0.7)" }}
                >
                  Decide Next Steps
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  How will you continue to use your deck? Some ideas:
                </p>
                <ul className="space-y-1.5">
                  {nextStepIdeas.map((idea) => (
                    <li
                      key={idea}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "oklch(var(--foreground) / 0.75)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "oklch(var(--primary) / 0.5)" }}
                      >
                        ✦
                      </span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affirmation */}
              <div
                className="rounded-2xl p-5 border text-center"
                style={{
                  background: "oklch(0.15 0.025 285)",
                  borderColor: "oklch(var(--primary) / 0.2)",
                }}
              >
                <div className="text-2xl mb-2">✨</div>
                <p
                  className="font-display text-base italic leading-relaxed"
                  style={{ color: "oklch(var(--foreground) / 0.9)" }}
                >
                  &ldquo;{affirmation}&rdquo;
                </p>
              </div>

              {/* Gratitude Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="gratitude-input"
                  className="text-sm font-medium"
                  style={{ color: "oklch(var(--foreground) / 0.8)" }}
                >
                  What are you grateful for from this session?
                </Label>
                <Textarea
                  id="gratitude-input"
                  data-ocid="close.textarea"
                  value={gratitude}
                  onChange={(e) => setGratitude(e.target.value)}
                  placeholder="I am grateful for… the symbol that found me, the question that opened something, the stillness I touched."
                  rows={4}
                  className="resize-none"
                  style={{
                    background: "oklch(var(--input))",
                    borderColor: "oklch(var(--border))",
                  }}
                />
              </div>

              <Button
                data-ocid="close.primary_button"
                onClick={handleClose}
                className="w-full"
                style={{
                  background: "oklch(var(--primary))",
                  color: "oklch(var(--primary-foreground))",
                }}
              >
                🕯️ Close This Session
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-6 py-8"
            >
              <div className="text-6xl animate-float">🌙</div>
              <div>
                <h2
                  className="font-display text-2xl text-glow"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  Session Complete
                </h2>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  You carried this work with intention. The symbols have spoken.
                  Rest, integrate, return.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border mx-auto max-w-sm"
                style={{
                  background: "oklch(var(--muted) / 0.3)",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "oklch(var(--primary) / 0.6)" }}
                >
                  Your Gratitude
                </p>
                <p
                  className="italic text-sm"
                  style={{ color: "oklch(var(--foreground) / 0.85)" }}
                >
                  &ldquo;{gratitude}&rdquo;
                </p>
              </div>
              <Button
                data-ocid="close.secondary_button"
                onClick={handleReturn}
                variant="outline"
                style={{
                  borderColor: "oklch(var(--primary) / 0.3)",
                  color: "oklch(var(--primary))",
                }}
              >
                Begin a New Session
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
