import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AnimalCard } from "../components/AnimalCard";
import { SectionWrapper } from "../components/SectionWrapper";
import { getAnimalEmoji, spiritAnimals } from "../data/spiritAnimals";
import type { SpiritAnimal } from "../data/spiritAnimals";

const usageTips = [
  "Choose symbols that speak to you intuitively.",
  "Combine or remix symbols to create hybrid cards.",
  "Reference, don\u2019t restrict \u2014 your deck is your language.",
];

export function SymbolLibrary() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SpiritAnimal | null>(null);

  const filtered = spiritAnimals.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.qualities.some((q) => q.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <SectionWrapper
      title="Symbol Library"
      subtitle={`All 88 spirit animals \u2014 the complete oracle. ${spiritAnimals.length} symbols awaiting you.`}
      icon="📚"
    >
      <div className="space-y-5">
        {/* Usage Tips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl p-4 border max-w-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.16 0.025 280), oklch(0.14 0.02 310))",
            borderColor: "oklch(var(--primary) / 0.18)",
          }}
        >
          <h3
            className="font-display text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "oklch(var(--primary) / 0.8)" }}
          >
            Usage Tips
          </h3>
          <ul className="space-y-1.5">
            {usageTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-sm"
                style={{ color: "oklch(var(--foreground) / 0.75)" }}
              >
                <span
                  className="flex-shrink-0 mt-0.5 text-xs"
                  style={{ color: "oklch(var(--primary) / 0.5)" }}
                >
                  ✦
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <Input
            data-ocid="library.search_input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or quality…"
            className="pl-9 pr-9"
            style={{
              background: "oklch(var(--input))",
              borderColor: "oklch(var(--border))",
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <p
          className="text-xs"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          {filtered.length} of {spiritAnimals.length} spirits
        </p>

        {filtered.length === 0 ? (
          <div data-ocid="library.empty_state" className="text-center py-12">
            <p
              className="font-display text-lg"
              style={{ color: "oklch(var(--primary))" }}
            >
              No spirits found
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Try a different search.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            <AnimatePresence>
              {filtered.map((animal, i) => (
                <motion.div
                  key={animal.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(i * 0.02, 0.3) }}
                  data-ocid={`library.item.${i + 1}`}
                >
                  <AnimalCard
                    animal={animal}
                    onClick={() => setSelected(animal)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        {selected && (
          <DialogContent
            data-ocid="library.dialog"
            style={{
              background: "oklch(var(--card))",
              borderColor: "oklch(var(--primary) / 0.3)",
            }}
            className="max-w-md"
          >
            <DialogHeader>
              <DialogTitle
                className="font-display text-2xl"
                style={{ color: "oklch(var(--primary))" }}
              >
                <span className="mr-2">{getAnimalEmoji(selected.name)}</span>
                {selected.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              {/* Light qualities */}
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "oklch(var(--primary) / 0.6)" }}
                >
                  Positive Qualities
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.qualities.map((q) => (
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
              </div>

              {/* Shadow note */}
              <div
                className="rounded-lg px-4 py-3 border text-sm"
                style={{
                  background: "oklch(0.14 0.02 290)",
                  borderColor: "oklch(var(--border))",
                  color: "oklch(var(--muted-foreground))",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.65 0.12 310)" }}
                >
                  Shadow Aspect
                </p>
                <p className="italic text-sm">
                  Every animal carries both light and shadow aspects. Sit with
                  the full spectrum of this symbol’s energy as you work with it.
                </p>
              </div>

              <div
                className="rounded-xl p-4 border"
                style={{
                  background: "oklch(var(--muted) / 0.3)",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "oklch(var(--primary) / 0.6)" }}
                >
                  Reflective Question
                </p>
                <p
                  className="italic text-sm leading-relaxed"
                  style={{ color: "oklch(var(--foreground) / 0.9)" }}
                >
                  &ldquo;{selected.question}&rdquo;
                </p>
              </div>
              <button
                type="button"
                data-ocid="library.close_button"
                onClick={() => setSelected(null)}
                className="text-xs"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Close
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </SectionWrapper>
  );
}
