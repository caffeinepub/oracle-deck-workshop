import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { useState } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { LESSONS, type Lesson } from "../data/lessons";

const SECTION_ICONS: Record<string, string> = {
  "Symbol Exploration": "🔍",
  "Visual Elements": "🎨",
  "Voice & Meaning": "🗣️",
  Reflection: "📓",
};

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "oklch(var(--card))",
        border: "1px solid oklch(var(--border))",
      }}
      data-ocid={`deck.item.${lesson.number}`}
    >
      <button
        type="button"
        data-ocid={`deck.toggle.${lesson.number}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-4 text-left transition-colors"
        style={{
          background: open ? "oklch(var(--primary) / 0.08)" : "transparent",
        }}
      >
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: "oklch(var(--primary) / 0.15)",
            color: "oklch(var(--primary))",
          }}
        >
          {lesson.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3
              className="font-display font-semibold text-sm"
              style={{ color: "oklch(var(--foreground))" }}
            >
              {lesson.title}
            </h3>
            <Badge
              variant="outline"
              className="text-xs flex-shrink-0"
              style={{
                borderColor: "oklch(var(--primary) / 0.3)",
                color: "oklch(var(--primary) / 0.7)",
              }}
            >
              {open ? "Close" : "Explore"}
            </Badge>
          </div>
          <p
            className="text-xs mt-1 leading-snug line-clamp-2"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {lesson.objective}
          </p>
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-4 pb-4"
        >
          <div
            className="h-px mb-4"
            style={{ background: "oklch(var(--border))" }}
          />
          <p
            className="text-xs leading-relaxed mb-4 italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <span
              className="font-semibold not-italic"
              style={{ color: "oklch(var(--primary) / 0.8)" }}
            >
              Objective:{" "}
            </span>
            {lesson.objective}
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            {lesson.sections.map((section) => (
              <AccordionItem
                key={section.title}
                value={section.title}
                className="rounded-xl overflow-hidden border-0"
                style={{
                  background: "oklch(var(--muted) / 0.4)",
                  border: "1px solid oklch(var(--border) / 0.5)",
                }}
              >
                <AccordionTrigger
                  className="px-3 py-2.5 text-xs font-semibold hover:no-underline"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  <span className="flex items-center gap-2">
                    <span>{SECTION_ICONS[section.title] ?? "✶"}</span>
                    <span>{section.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3">
                  <p
                    className="text-xs leading-relaxed whitespace-pre-line"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    {section.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      )}
    </motion.div>
  );
}

export function YourDeck() {
  return (
    <SectionWrapper
      icon="🃏"
      title="Your Deck"
      subtitle="22 lesson cards — your full deck curriculum"
    >
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm leading-relaxed mb-8"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          Each card below is a complete lesson for one archetype in your oracle
          deck. Open any card to explore its Symbol Exploration, Visual
          Elements, Voice & Meaning, and Reflection prompts. Work through them
          in any order — or follow the sequence from 1 to 22.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LESSONS.map((lesson, i) => (
            <LessonCard key={lesson.number} lesson={lesson} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
