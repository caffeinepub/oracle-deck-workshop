import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { getAnimalEmoji } from "../data/spiritAnimals";
import type { SpiritAnimal } from "../data/spiritAnimals";

interface AnimalCardProps {
  animal: SpiritAnimal;
  onClick?: () => void;
  variant?: "compact" | "full";
}

export function AnimalCard({
  animal,
  onClick,
  variant = "compact",
}: AnimalCardProps) {
  const emoji = getAnimalEmoji(animal.name);

  if (variant === "full") {
    return (
      <div
        className="rounded-xl p-6 border glow-gold"
        style={{
          background: "oklch(var(--card))",
          borderColor: "oklch(var(--primary) / 0.3)",
        }}
      >
        <div className="text-5xl mb-4 text-center">{emoji}</div>
        <h2
          className="font-display text-2xl font-semibold text-center mb-4"
          style={{ color: "oklch(var(--primary))" }}
        >
          {animal.name}
        </h2>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {animal.qualities.map((q) => (
            <Badge
              key={q}
              variant="outline"
              style={{
                borderColor: "oklch(var(--primary) / 0.4)",
                color: "oklch(var(--primary))",
              }}
            >
              {q}
            </Badge>
          ))}
        </div>
        <blockquote
          className="text-center italic text-sm mt-4 px-4"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          &ldquo;{animal.question}&rdquo;
        </blockquote>
      </div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left rounded-xl p-4 border transition-all cursor-pointer"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "oklch(var(--primary) / 0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 20px oklch(var(--primary) / 0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "oklch(var(--border))";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{emoji}</span>
        <div className="min-w-0">
          <h3
            className="font-display font-semibold text-base"
            style={{ color: "oklch(var(--foreground))" }}
          >
            {animal.name}
          </h3>
          <p
            className="text-xs mt-1 truncate"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {animal.qualities.join(" · ")}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
