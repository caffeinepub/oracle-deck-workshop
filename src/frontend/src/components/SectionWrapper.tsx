import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  icon?: string;
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  icon,
}: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-6 md:p-10 min-h-full"
    >
      <header className="mb-8">
        {icon && <div className="text-4xl mb-3 animate-float">{icon}</div>}
        <h1
          className="font-display text-3xl md:text-4xl font-semibold text-glow"
          style={{ color: "oklch(var(--primary))" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-2 text-base"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            {subtitle}
          </p>
        )}
        <div
          className="mt-4 h-px w-24"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--primary) / 0.6), transparent)",
          }}
        />
      </header>
      {children}
    </motion.div>
  );
}
