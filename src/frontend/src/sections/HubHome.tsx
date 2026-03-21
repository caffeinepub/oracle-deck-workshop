import { motion } from "motion/react";
import { SectionWrapper } from "../components/SectionWrapper";

export function HubHome() {
  return (
    <SectionWrapper
      icon="🌀"
      title="Oracle Deck Workshop"
      subtitle="Your Creative Process Hub"
    >
      <div className="max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
          }}
        >
          <h2
            className="font-display text-xl font-semibold mb-3"
            style={{ color: "oklch(var(--primary))" }}
          >
            Welcome to the Workshop
          </h2>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "oklch(var(--foreground) / 0.85)" }}
          >
            This is your creative container — a structured, self-paced space for
            building a personal oracle deck rooted in your own symbols, stories,
            and inner wisdom. Here you will explore archetypes and spirit
            animals, develop visual and written card language, track your
            creative process, and assemble a deck that is entirely your own.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(var(--foreground) / 0.85)" }}
          >
            You can move through the sections in any order. Return to any phase
            as often as you need. There is no right way to use this workshop —
            only your way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
          }}
        >
          <h2
            className="font-display text-xl font-semibold mb-4"
            style={{ color: "oklch(var(--primary))" }}
          >
            How This Workshop Works
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "🌿",
                heading: "Self-Paced",
                body: "There are no deadlines. Move at the speed that feels right. Linger where you need to. Skip what doesn't call you yet.",
              },
              {
                icon: "🔮",
                heading: "Reflective",
                body: "Every section includes prompts and questions to help you turn inward. The deck you build is a map of your inner world.",
              },
              {
                icon: "🗺️",
                heading: "Guided Process",
                body: "Six creative phases — from Symbol Exploration through Integration Close — give structure without rigidity. Use the Process Map to orient yourself at any stage.",
              },
              {
                icon: "📚",
                heading: "Symbol Library as Inspiration",
                body: "The Spirit Animal Library offers 88 archetypes with light and shadow qualities. Use them as starting points, not endpoints. Remix, reinvent, and invent symbols entirely your own.",
              },
            ].map((item) => (
              <div key={item.heading} className="flex gap-3 items-start">
                <span className="text-lg flex-shrink-0 mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "oklch(var(--foreground))" }}
                  >
                    {item.heading}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl p-5"
          style={{
            background: "oklch(var(--primary) / 0.06)",
            border: "1px solid oklch(var(--primary) / 0.2)",
          }}
        >
          <p
            className="text-xs leading-relaxed italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            This workshop is a creative and reflective container, not a
            therapeutic program. Engage at your own pace, honor your own
            boundaries, and reach out to a qualified professional if deeper
            support is needed. — ACleaverArt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
          }}
        >
          <h2
            className="font-display text-xl font-semibold mb-4"
            style={{ color: "oklch(var(--primary))" }}
          >
            What's Inside
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: "🌅",
                label: "Arrival & Intent",
                desc: "Set your intentions and open the creative container",
              },
              {
                icon: "🗺️",
                label: "Process Map",
                desc: "Visual guide through all 7 creative phases",
              },
              {
                icon: "🂴",
                label: "Symbol Draw",
                desc: "Select and explore your card symbols",
              },
              {
                icon: "🔮",
                label: "Reflection",
                desc: "Define card voice, meaning, and emotional tone",
              },
              {
                icon: "🗂️",
                label: "Creation Log",
                desc: "Record your work, uploads, patterns, and progress",
              },
              {
                icon: "📚",
                label: "Symbol Library",
                desc: "88 Spirit Animals with light and shadow qualities",
              },
              {
                icon: "🎨",
                label: "Visual Reference",
                desc: "Color, form, motif, texture, and tone library",
              },
              {
                icon: "👁️",
                label: "Witness Space",
                desc: "Optional reflective sharing and community space",
              },
              {
                icon: "✶",
                label: "Pattern Insights",
                desc: "Notice recurring themes across your deck",
              },
              {
                icon: "🕯️",
                label: "Integration Close",
                desc: "Review, reflect, and plan next steps",
              },
              {
                icon: "🃏",
                label: "Your Deck",
                desc: "All 22 lesson cards — your full deck curriculum",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-2.5 items-start rounded-xl p-3"
                style={{ background: "oklch(var(--muted) / 0.4)" }}
              >
                <span className="text-base flex-shrink-0">{item.icon}</span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "oklch(var(--foreground))" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
