import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { SectionWrapper } from "../components/SectionWrapper";
import { getAnimalEmoji } from "../data/spiritAnimals";
import { useGetDrawHistory } from "../hooks/useQueries";

export function PatternInsights() {
  const { data: history, isLoading } = useGetDrawHistory();

  const counts: Record<string, number> = {};
  for (const draw of history ?? []) {
    counts[draw.spiritAnimal] = (counts[draw.spiritAnimal] ?? 0) + 1;
  }

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const maxCount = sorted[0]?.[1] ?? 1;

  return (
    <SectionWrapper
      title="Pattern Insights"
      subtitle="The symbols that return most often carry your deepest messages."
      icon="✦"
    >
      {isLoading ? (
        <div
          data-ocid="patterns.loading_state"
          className="flex items-center gap-2"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Reading patterns…</span>
        </div>
      ) : sorted.length === 0 ? (
        <motion.div
          data-ocid="patterns.empty_state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-5xl mb-4">🌌</div>
          <p
            className="font-display text-xl"
            style={{ color: "oklch(var(--primary))" }}
          >
            No patterns yet
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Draw some symbols and patterns will emerge here.
          </p>
        </motion.div>
      ) : (
        <div className="max-w-2xl space-y-3">
          <p
            className="text-sm"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Top {sorted.length} recurring spirits across all your draws:
          </p>
          {sorted.map(([name, count], i) => {
            const pct = (count / maxCount) * 100;
            return (
              <motion.div
                key={name}
                data-ocid={`patterns.item.${i + 1}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <span className="text-2xl w-8 flex-shrink-0 text-center">
                  {getAnimalEmoji(name)}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <span
                      className="font-display text-sm font-semibold"
                      style={{ color: "oklch(var(--foreground))" }}
                    >
                      {name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      {count}×
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "oklch(var(--muted) / 0.5)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "oklch(var(--primary))" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.07,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
}
