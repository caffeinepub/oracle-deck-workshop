import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { SectionWrapper } from "../components/SectionWrapper";

const phases = [
  {
    number: 1,
    title: "Symbol Exploration",
    summary:
      "Discover potential symbols for your deck. Look at the Spirit Animal library, sketch, or journal freely.",
    objective:
      "Begin connecting with symbols that resonate with your personal narrative.",
    steps: [
      {
        label: "Browse & Notice",
        text: "Use the Spirit Animal Library. Scroll through the 88 animals. Pause on any that catch your eye, spark curiosity, or feel \u201calive.\u201d Don\u2019t overthink — notice your gut response.",
      },
      {
        label: "Journaling & Sketching",
        text: "Pick 3\u20135 animals that stand out. Write down any words, feelings, or memories they evoke. Sketch freely — shapes, patterns, or abstract forms inspired by each animal.",
      },
      {
        label: "Reflection Prompts",
        text: "Which animal calls to me most strongly? Why? · What qualities of this animal resonate with my current intentions? · Are there any patterns emerging in the animals I choose?",
      },
    ],
    tip: "This is a playful exploration, not a test. There are no \u201cwrong\u201d selections. Let curiosity guide you.",
  },
  {
    number: 2,
    title: "Card Creation",
    summary:
      "Start translating symbols into visual and textual representations. Play with form, color, and words.",
    objective:
      "Begin translating your chosen symbols into individual card concepts.",
    steps: [
      {
        label: "Visual Development",
        text: "Take one symbol at a time. Sketch, paint, or digitally create a representation. Include elements that feel essential: color, form, motifs, or textures.",
      },
      {
        label: "Textual Layer",
        text: "Add a title, keywords, or a short phrase for the card. Consider its voice: is it gentle, bold, mysterious, playful?",
      },
      {
        label: "Experiment & Play",
        text: "Try multiple sketches or word combinations for the same symbol. Layer multiple motifs or hybrid ideas — your deck can evolve naturally.",
      },
      {
        label: "Reflection Prompts",
        text: "What essence am I capturing in this card? · How could someone else intuitively understand this symbol? · Does the card feel \u201calive\u201d when I look at it?",
      },
    ],
    tip: null,
  },
  {
    number: 3,
    title: "Voice & Meaning",
    summary:
      "Explore the narrative or energy of each card. What story or guidance does it carry?",
    objective: "Develop the narrative and emotional energy of each card.",
    steps: [
      {
        label: "Storytelling",
        text: "Write 1\u20133 sentences describing what the card \u201csays\u201d or \u201cteaches.\u201d Imagine a scenario in which this card might offer guidance.",
      },
      {
        label: "Emotional Tone",
        text: "Note the feeling of the card: playful, grounding, meditative, energetic. Consider how it fits into the larger narrative of your deck.",
      },
      {
        label: "Reflection Prompts",
        text: "What is this card\u2019s personality or energy? · How does it interact with the other symbols I\u2019ve chosen? · What surprises me about what this card communicates?",
      },
    ],
    tip: "Your deck is a conversation between you and the symbols, not a rulebook.",
  },
  {
    number: 4,
    title: "Deck Assembly",
    summary:
      "Arrange your cards in ways that feel coherent to you. Consider sequences, spreads, or themes.",
    objective: "Arrange your cards into a coherent, meaningful structure.",
    steps: [
      {
        label: "Sequencing",
        text: "Lay out all cards. Consider sequences by theme, energy, or intuition. Try different orders and note which feels most coherent.",
      },
      {
        label: "Spread Design",
        text: "Experiment with layouts for readings — linear, circular, or custom spreads. Consider pairing cards to reveal hidden patterns or connections.",
      },
      {
        label: "Identify Gaps",
        text: "Are there missing symbols or ideas you\u2019d like to add? Add additional sketches or cards as needed.",
      },
      {
        label: "Reflection Prompts",
        text: "Which cards feel central to my deck? · Are there cards that surprise me when placed next to others? · Does the overall deck tell a story? If so, what story?",
      },
    ],
    tip: null,
  },
  {
    number: 5,
    title: "Reflection & Connection",
    summary:
      "Spend time journaling, noticing patterns, or seeing links between cards.",
    objective:
      "Notice patterns, insights, and personal connections within your deck.",
    steps: [
      {
        label: "Observe",
        text: "Review all your cards together. Notice recurring motifs, colors, or words. Journal any unexpected patterns or ideas.",
      },
      {
        label: "Connect",
        text: "How do the cards relate to your original intentions from Phase 1? How might these cards inform your daily reflections or creative practice?",
      },
      {
        label: "Optional Sharing",
        text: "Use the Witness Space to share your work. Receive reflective, curiosity-driven feedback only.",
      },
      {
        label: "Reflection Prompts",
        text: "What did I learn about my symbolic language through this deck? · Which cards feel most \u201calive\u201d or meaningful to me? · What connections emerge across the cards?",
      },
    ],
    tip: null,
  },
  {
    number: 6,
    title: "Integration Close",
    summary:
      "Review your deck. Observe surprises, insights, or themes. Decide how this deck will continue to live — in practice, in journaling, in shared spaces.",
    objective: "Consolidate your learning, insights, and next steps.",
    steps: [
      {
        label: "Review & Reflect",
        text: "Revisit your initial intentions. How has the process aligned with or shifted them? Record surprises, favorite cards, or emergent patterns.",
      },
      {
        label: "Decide Next Steps",
        text: "How will you continue to use your deck? Ideas: Journaling with individual cards · Designing card spreads for reflection · Sharing in workshops or the community gallery.",
      },
      {
        label: "Final Reflection Prompts",
        text: "How has this workshop expanded my symbolic or creative thinking? · What is the story of this deck? · How do I want to honor and continue engaging with it?",
      },
    ],
    tip: null,
  },
];

const phaseColors = [
  "oklch(0.72 0.18 55)",
  "oklch(0.68 0.18 140)",
  "oklch(0.65 0.18 260)",
  "oklch(0.72 0.18 310)",
  "oklch(0.68 0.20 20)",
  "oklch(0.75 0.16 75)",
];

export function ProcessMap() {
  return (
    <SectionWrapper
      title="Process Map"
      subtitle="Your staged creation path — six phases from symbol to integration."
      icon="🗺️"
    >
      <div className="max-w-2xl space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm leading-relaxed"
          style={{ color: "oklch(var(--foreground) / 0.7)" }}
        >
          Each phase builds on the last. Move through them at your own pace —
          return, revisit, and repeat as needed.
        </motion.p>

        <Accordion type="single" collapsible className="space-y-3">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <AccordionItem
                value={`phase-${phase.number}`}
                data-ocid={`process.item.${i + 1}`}
                className="rounded-xl border overflow-hidden"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <AccordionTrigger
                  data-ocid={`process.panel.${i + 1}`}
                  className="px-5 py-4 hover:no-underline"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: `${phaseColors[i]} / 0.15`,
                        backgroundColor: `color-mix(in oklch, ${phaseColors[i]} 15%, transparent)`,
                        color: phaseColors[i],
                        border: `1px solid ${phaseColors[i]}`,
                      }}
                    >
                      {phase.number}
                    </div>
                    <div>
                      <p
                        className="font-display font-semibold text-sm"
                        style={{ color: "oklch(var(--foreground))" }}
                      >
                        Phase {phase.number} — {phase.title}
                      </p>
                      <p
                        className="text-xs mt-0.5 font-normal"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        {phase.summary}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="space-y-4 pt-2">
                    <p
                      className="text-sm font-medium"
                      style={{ color: phaseColors[i] }}
                    >
                      Objective: {phase.objective}
                    </p>
                    <div className="space-y-3">
                      {phase.steps.map((step, si) => (
                        <div key={step.label} className="flex gap-3">
                          <div
                            className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              backgroundColor: `color-mix(in oklch, ${phaseColors[i]} 12%, transparent)`,
                              color: phaseColors[i],
                            }}
                          >
                            {si + 1}
                          </div>
                          <div>
                            <p
                              className="text-sm font-semibold"
                              style={{
                                color: "oklch(var(--foreground) / 0.9)",
                              }}
                            >
                              {step.label}
                            </p>
                            <p
                              className="text-sm mt-0.5 leading-relaxed"
                              style={{
                                color: "oklch(var(--muted-foreground))",
                              }}
                            >
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {phase.tip && (
                      <div
                        className="rounded-lg px-4 py-3 text-sm italic"
                        style={{
                          background: `color-mix(in oklch, ${phaseColors[i]} 8%, transparent)`,
                          color: "oklch(var(--foreground) / 0.75)",
                          borderLeft: `3px solid ${phaseColors[i]}`,
                        }}
                      >
                        💡 {phase.tip}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
