import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { SectionWrapper } from "../components/SectionWrapper";

const colorData = [
  {
    color: "Red",
    swatch: "bg-red-500",
    associations: "Energy, courage, passion",
    exercise:
      "Pick a card and experiment adding red highlights — notice how it changes the feeling.",
  },
  {
    color: "Orange",
    swatch: "bg-orange-400",
    associations: "Playfulness, creativity",
    exercise: "Try layering orange in a border or motif — does it feel lively?",
  },
  {
    color: "Yellow",
    swatch: "bg-yellow-400",
    associations: "Joy, clarity",
    exercise: "Sketch a small accent in yellow — journal what it evokes.",
  },
  {
    color: "Green",
    swatch: "bg-green-500",
    associations: "Growth, balance",
    exercise: 'Add green textures — notice which cards feel "grounded."',
  },
  {
    color: "Blue",
    swatch: "bg-blue-500",
    associations: "Calm, intuition",
    exercise: "Layer soft blues — does it evoke reflection?",
  },
  {
    color: "Purple",
    swatch: "bg-purple-500",
    associations: "Mystery, imagination",
    exercise:
      "Add subtle purple gradients — does it feel magical or enigmatic?",
  },
  {
    color: "Brown",
    swatch: "bg-amber-800",
    associations: "Stability, connection",
    exercise: "Use as background or texture — how does it anchor the card?",
  },
  {
    color: "Black",
    swatch: "bg-neutral-900",
    associations: "Shadow, depth",
    exercise: "Use sparingly for contrast or symbolic weight.",
  },
  {
    color: "White",
    swatch: "bg-neutral-100 border",
    associations: "Openness, clarity",
    exercise: "Try empty space around your motif — how does it affect focus?",
  },
  {
    color: "Multicolor",
    swatch: "bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400",
    associations: "Complexity, layered meaning",
    exercise: "Blend 2–3 colors and reflect: what story emerges?",
  },
];

const shapeData = [
  {
    form: "Circle",
    meaning: "Wholeness, cycles",
    exercise:
      "Sketch a central motif in a circle — journal its emotional tone.",
  },
  {
    form: "Spiral",
    meaning: "Growth, evolution",
    exercise:
      "Draw a small spiral somewhere in the card — what feeling does it evoke?",
  },
  {
    form: "Triangle",
    meaning: "Stability, tension",
    exercise:
      "Add a triangle pointing up or down — notice the directional energy.",
  },
  {
    form: "Square / Rectangle",
    meaning: "Structure, grounding",
    exercise:
      "Frame your text or motif inside a square — how does it feel anchored?",
  },
  {
    form: "Wave / Curve",
    meaning: "Flow, flexibility",
    exercise:
      "Add a curving line or pattern — does it feel calming or dynamic?",
  },
  {
    form: "Zigzag",
    meaning: "Challenge, energy",
    exercise: "Insert a zigzag accent — does it change the card's tension?",
  },
  {
    form: "Dot / Point",
    meaning: "Focus, seed",
    exercise:
      "Place dots to mark important areas — which part of the card draws attention?",
  },
  {
    form: "Lines / Stripes",
    meaning: "Path, rhythm",
    exercise: "Use lines to guide the eye — notice the implied movement.",
  },
];

const textualData = [
  {
    element: "Card Title",
    notes:
      "Short, evocative, central or top of card — write 2 options and pick one.",
  },
  {
    element: "Keywords",
    notes:
      "1–3 words for clarity — experiment placing them around or under the symbol.",
  },
  {
    element: "Short Phrase",
    notes:
      "1–2 lines of guidance — try writing it in two different positions on the card.",
  },
  {
    element: "Layout Options",
    notes:
      "Central: symbol dominates; Framed: text surrounds motif; Balanced: shared space — sketch each to see which resonates.",
  },
  {
    element: "Integration",
    notes:
      "Combine visual + textual motifs — notice if they strengthen or compete with each other.",
  },
];

const toneData = [
  {
    tone: "Playful",
    notes: "Curvy shapes, warm/brighter colors, whimsical motifs",
    exercise: 'Make a card that feels "lighthearted" — journal the effect.',
  },
  {
    tone: "Grounded",
    notes: "Earth tones, structured shapes, stable textures",
    exercise: "Anchor a card with brown or grid-like motifs.",
  },
  {
    tone: "Meditative",
    notes: "Soft blues/purples, layered textures, minimal design",
    exercise: "Sketch a calm card, leaving white space.",
  },
  {
    tone: "Dynamic",
    notes: "Bright contrasts, angular forms, zigzags",
    exercise: "Create a card with movement or tension — reflect on energy.",
  },
  {
    tone: "Mysterious",
    notes: "Dark tones, layered motifs, gradients",
    exercise: "Make a card that feels enigmatic — notice emotional response.",
  },
];

const tips = [
  "Reference this toolbox during Card Creation, Voice & Meaning, and Deck Assembly.",
  "Experiment freely — combine elements across categories.",
  "Take notes on personal interpretations to build a consistent symbolic language for your deck.",
  "Revisit patterns as your deck develops — recurring colors, forms, or textures create cohesion and depth.",
];

function ReflectionPrompt({ text }: { text: string }) {
  return (
    <div
      className="mt-4 rounded-lg px-4 py-3 border-l-4"
      style={{
        background: "oklch(var(--primary) / 0.06)",
        borderLeftColor: "oklch(var(--primary) / 0.6)",
      }}
    >
      <p className="text-sm italic" style={{ color: "oklch(var(--primary))" }}>
        💬 Reflection: {text}
      </p>
    </div>
  );
}

function WhyItMatters({ text }: { text: string }) {
  return (
    <p
      className="text-sm mb-4"
      style={{ color: "oklch(var(--muted-foreground))" }}
    >
      <span
        className="font-semibold"
        style={{ color: "oklch(var(--foreground))" }}
      >
        Why it matters:
      </span>{" "}
      {text}
    </p>
  );
}

function ReferenceTable({
  headers,
  rows,
}: { headers: string[]; rows: string[][] }) {
  return (
    <div
      className="overflow-x-auto rounded-lg border"
      style={{ borderColor: "oklch(var(--border))" }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "oklch(var(--muted) / 0.4)" }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wider"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-t"
              style={{ borderColor: "oklch(var(--border))" }}
            >
              {row.map((cell, j) => (
                <td
                  // biome-ignore lint/suspicious/noArrayIndexKey: column index is structural, not a list item
                  key={j}
                  className="px-4 py-3 leading-relaxed"
                  style={{
                    color:
                      j === 0
                        ? "oklch(var(--foreground))"
                        : "oklch(var(--muted-foreground))",
                    fontWeight: j === 0 ? 500 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VisualReference() {
  return (
    <SectionWrapper
      title="Visual Reference"
      subtitle="Personal Symbology & Visual Elements — Workshop Reference"
      icon="🎨"
    >
      <div className="max-w-3xl space-y-6">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base leading-relaxed"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          Your cards communicate not just meaning, but feeling, tone, and story.
          This section is your creative toolbox, offering colors, forms, motifs,
          textures, and textual strategies to inspire your deck. Use it as a
          reference, not a rulebook — let your intuition guide your choices.
        </motion.p>

        {/* Tabs */}
        <Tabs defaultValue="colors" data-ocid="visual.tab">
          <TabsList
            className="flex flex-wrap h-auto gap-1 p-1 rounded-xl"
            style={{ background: "oklch(var(--muted) / 0.4)" }}
          >
            {[
              { value: "colors", label: "1️⃣ Colors" },
              { value: "shapes", label: "2️⃣ Shapes" },
              { value: "motifs", label: "3️⃣ Motifs" },
              { value: "textures", label: "4️⃣ Textures" },
              { value: "textual", label: "5️⃣ Text & Layout" },
              { value: "tone", label: "6️⃣ Tone" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                data-ocid={`visual.${tab.value}.tab`}
                className="text-xs rounded-lg px-3 py-1.5"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 1 — Colors */}
          <TabsContent value="colors" className="mt-6 space-y-4">
            <WhyItMatters text="Color communicates emotional tone, symbolic meaning, and focus before words are even read." />
            <div
              className="overflow-x-auto rounded-lg border"
              style={{ borderColor: "oklch(var(--border))" }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "oklch(var(--muted) / 0.4)" }}>
                    {["Color", "Associations", "Mini Exercise"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wider"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {colorData.map((row) => (
                    <tr
                      key={row.color}
                      className="border-t"
                      style={{ borderColor: "oklch(var(--border))" }}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded-full flex-shrink-0 ${row.swatch}`}
                          />
                          <span
                            className="font-medium"
                            style={{ color: "oklch(var(--foreground))" }}
                          >
                            {row.color}
                          </span>
                        </div>
                      </td>
                      <td
                        className="px-4 py-3"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        {row.associations}
                      </td>
                      <td
                        className="px-4 py-3 leading-relaxed"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        {row.exercise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ReflectionPrompt text="Which colors consistently feel 'mine' when creating? Why do they call to me?" />
          </TabsContent>

          {/* 2 — Shapes */}
          <TabsContent value="shapes" className="mt-6 space-y-4">
            <WhyItMatters text="Shapes carry meaning through visual language. They convey energy, direction, and emotional resonance." />
            <ReferenceTable
              headers={["Form", "Symbolic Meaning", "Mini Exercise"]}
              rows={shapeData.map((r) => [r.form, r.meaning, r.exercise])}
            />
            <ReflectionPrompt text="Which forms feel natural for my symbols? How do shapes influence the card's 'voice'?" />
          </TabsContent>

          {/* 3 — Motifs */}
          <TabsContent value="motifs" className="mt-6 space-y-4">
            <WhyItMatters text="Motifs become your symbolic language, giving each card personal meaning and consistency across the deck." />
            <div
              className="rounded-lg p-5 border space-y-4"
              style={{
                background: "oklch(var(--card))",
                borderColor: "oklch(var(--border))",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Ideas for Inspiration:
              </p>
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Nature",
                    items: "leaves, branches, stones, water ripples, sun, moon",
                  },
                  {
                    label: "Animals",
                    items:
                      "Spirit animals, hybrid creatures, symbolic sketches",
                  },
                  {
                    label: "Objects",
                    items: "Keys, doors, bridges, ladders, vessels",
                  },
                  {
                    label: "Abstract patterns",
                    items: "spirals, waves, fractals, grids",
                  },
                  {
                    label: "Cultural or personal symbols",
                    items: "runes, sigils, personal marks",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2 text-sm">
                    <span
                      className="font-medium flex-shrink-0"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      {item.label}:
                    </span>
                    <span style={{ color: "oklch(var(--muted-foreground))" }}>
                      {item.items}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-lg px-4 py-3 border"
              style={{
                background: "oklch(var(--accent) / 0.15)",
                borderColor: "oklch(var(--accent) / 0.3)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Mini Exercise
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Pick one motif and create 3 variations on a card — sketch,
                color, or texture it differently. Notice which variation feels
                "most alive."
              </p>
            </div>
            <ReflectionPrompt text="Which motifs feel uniquely personal? Could any appear across multiple cards to form a symbolic thread?" />
          </TabsContent>

          {/* 4 — Textures */}
          <TabsContent value="textures" className="mt-6 space-y-4">
            <WhyItMatters text="Texture adds depth, tactile feeling, and emotional resonance." />
            <div
              className="rounded-lg p-5 border space-y-4"
              style={{
                background: "oklch(var(--card))",
                borderColor: "oklch(var(--border))",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Ideas to Explore:
              </p>
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Physical",
                    items:
                      "watercolor washes, pencil marks, ink splatters, collage, layering papers",
                  },
                  {
                    label: "Digital",
                    items: "opacity layers, brush effects, gradients, overlays",
                  },
                  {
                    label: "Symbolic",
                    items:
                      "rough = tension, smooth = calm, layered = complexity",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2 text-sm">
                    <span
                      className="font-medium flex-shrink-0"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      {item.label}:
                    </span>
                    <span style={{ color: "oklch(var(--muted-foreground))" }}>
                      {item.items}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-lg px-4 py-3 border"
              style={{
                background: "oklch(var(--accent) / 0.15)",
                borderColor: "oklch(var(--accent) / 0.3)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Mini Exercise
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Experiment with one new texture per card. Note how it changes
                mood or emphasis.
              </p>
            </div>
            <ReflectionPrompt text="Which textures amplify the card's emotional tone? Do recurring textures create cohesion across the deck?" />
          </TabsContent>

          {/* 5 — Textual Elements & Layout */}
          <TabsContent value="textual" className="mt-6 space-y-4">
            <WhyItMatters text="Words guide interpretation, add context, and interact visually with your symbols." />
            <ReferenceTable
              headers={["Element", "Notes & Mini Exercise"]}
              rows={textualData.map((r) => [r.element, r.notes])}
            />
            <ReflectionPrompt text="Does the layout highlight the card's core message? Which layout feels most 'alive' or intuitive?" />
          </TabsContent>

          {/* 6 — Tone */}
          <TabsContent value="tone" className="mt-6 space-y-4">
            <WhyItMatters text="The tone conveys the voice and energy of the card beyond words or symbols." />
            <ReferenceTable
              headers={["Tone", "Visual / Creative Notes", "Mini Exercise"]}
              rows={toneData.map((r) => [r.tone, r.notes, r.exercise])}
            />
            <ReflectionPrompt text="Which tones dominate your deck? Are you intentionally mixing tones for contrast?" />
          </TabsContent>
        </Tabs>

        <Separator style={{ background: "oklch(var(--border))" }} />

        {/* Tips callout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl p-5 border"
          style={{
            background: "oklch(var(--primary) / 0.06)",
            borderColor: "oklch(var(--primary) / 0.25)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge
              style={{
                background: "oklch(var(--primary) / 0.15)",
                color: "oklch(var(--primary))",
              }}
            >
              ✨ Tips for Using This Library
            </Badge>
          </div>
          <ul className="space-y-2">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm leading-relaxed">
                <span style={{ color: "oklch(var(--primary))" }}>→</span>
                <span style={{ color: "oklch(var(--muted-foreground))" }}>
                  {tip}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
