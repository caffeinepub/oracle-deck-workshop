import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { SectionWrapper } from "../components/SectionWrapper";
import { getAnimalEmoji, spiritAnimals } from "../data/spiritAnimals";
import { useGetDrawHistory } from "../hooks/useQueries";

function formatTime(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function Reflection() {
  const { data: history, isLoading } = useGetDrawHistory();

  const todayDraws = (history ?? []).filter((d) => {
    const ms = Number(d.timestamp) / 1_000_000;
    const drawn = new Date(ms);
    const now = new Date();
    return (
      drawn.getFullYear() === now.getFullYear() &&
      drawn.getMonth() === now.getMonth() &&
      drawn.getDate() === now.getDate()
    );
  });

  return (
    <SectionWrapper
      title="Reflection"
      subtitle="Notice patterns, insights, and connections within your deck."
      icon="🔮"
    >
      {isLoading ? (
        <div
          data-ocid="reflection.loading_state"
          className="flex items-center gap-2"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading today's draws…</span>
        </div>
      ) : todayDraws.length === 0 ? (
        <motion.div
          data-ocid="reflection.empty_state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 max-w-md mx-auto"
        >
          <div className="text-5xl mb-4">🌙</div>
          <p
            className="font-display text-xl"
            style={{ color: "oklch(var(--primary))" }}
          >
            No draws yet today
          </p>
          <p
            className="mt-2 text-sm"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Visit Symbol Draw to begin.
          </p>
        </motion.div>
      ) : (
        <div className="max-w-xl space-y-4">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "oklch(var(--primary) / 0.6)" }}
          >
            {todayDraws.length} draw{todayDraws.length !== 1 ? "s" : ""} today
          </p>
          {todayDraws.map((draw, i) => {
            const animal = spiritAnimals.find(
              (a) => a.name === draw.spiritAnimal,
            );
            return (
              <motion.div
                key={`${draw.spiritAnimal}-${i}`}
                data-ocid={`reflection.item.${i + 1}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl p-5 border"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">
                    {getAnimalEmoji(draw.spiritAnimal)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className="font-display font-semibold"
                        style={{ color: "oklch(var(--foreground))" }}
                      >
                        {draw.spiritAnimal}
                      </h3>
                      <span
                        className="text-xs flex-shrink-0"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        {formatTime(draw.timestamp)}
                      </span>
                    </div>
                    {animal && (
                      <>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {animal.qualities.map((q) => (
                            <span
                              key={q}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: "oklch(var(--primary) / 0.12)",
                                color: "oklch(var(--primary))",
                              }}
                            >
                              {q}
                            </span>
                          ))}
                        </div>
                        <p
                          className="mt-2 text-sm italic leading-relaxed"
                          style={{ color: "oklch(var(--muted-foreground))" }}
                        >
                          {animal.question}
                        </p>
                      </>
                    )}
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
