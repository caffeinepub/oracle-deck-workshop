import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Loader2, LogIn, LogOut, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { ArrivalIntent } from "./sections/ArrivalIntent";
import { IntegrationClose } from "./sections/IntegrationClose";
import { Journal } from "./sections/Journal";
import { PatternInsights } from "./sections/PatternInsights";
import { ProcessMap } from "./sections/ProcessMap";
import { Reflection } from "./sections/Reflection";
import { SymbolDraw } from "./sections/SymbolDraw";
import { SymbolLibrary } from "./sections/SymbolLibrary";
import { VisualReference } from "./sections/VisualReference";
import { WitnessSpace } from "./sections/WitnessSpace";

const SECTIONS = [
  {
    id: "arrival",
    label: "Arrival & Intent",
    icon: "🌅",
    component: ArrivalIntent,
  },
  {
    id: "process",
    label: "Process Map",
    icon: "🗺️",
    component: ProcessMap,
  },
  { id: "draw", label: "Symbol Draw", icon: "🂴", component: SymbolDraw },
  { id: "reflection", label: "Reflection", icon: "🔮", component: Reflection },
  { id: "journal", label: "Creation Log", icon: "🗂️", component: Journal },
  {
    id: "library",
    label: "Symbol Library",
    icon: "📚",
    component: SymbolLibrary,
  },
  {
    id: "visual",
    label: "Visual Reference",
    icon: "🎨",
    component: VisualReference,
  },
  {
    id: "witness",
    label: "Witness Space",
    icon: "👁️",
    component: WitnessSpace,
  },
  {
    id: "patterns",
    label: "Pattern Insights",
    icon: "✶",
    component: PatternInsights,
  },
  {
    id: "close",
    label: "Integration Close",
    icon: "🕯️",
    component: IntegrationClose,
  },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export default function App() {
  const [active, setActive] = useState<SectionId>("arrival");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { identity, login, clear, isInitializing, isLoggingIn } =
    useInternetIdentity();

  const ActiveComponent =
    SECTIONS.find((s) => s.id === active)?.component ?? ArrivalIntent;

  const authBusy = isInitializing || isLoggingIn;

  return (
    <div
      className="grain min-h-screen flex flex-col"
      style={{ background: "oklch(var(--background))" }}
    >
      {/* Atmospheric background orbs */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.14 75 / 0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.18 310 / 0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.16 55 / 0.2), transparent 70%)",
          }}
        />
      </div>

      {/* Mobile header */}
      <header
        className="md:hidden flex items-center justify-between px-4 py-3 border-b sticky top-0 z-50"
        style={{
          background: "oklch(var(--sidebar) / 0.95)",
          borderColor: "oklch(var(--sidebar-border))",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🌀</span>
          <span
            className="font-display font-semibold text-base"
            style={{ color: "oklch(var(--primary))" }}
          >
            Oracle Deck Workshop
          </span>
        </div>
        <button
          type="button"
          data-ocid="nav.toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 rounded-lg"
          style={{ color: "oklch(var(--sidebar-foreground))" }}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 pt-14"
            style={{
              background: "oklch(var(--sidebar) / 0.98)",
              backdropFilter: "blur(12px)",
            }}
          >
            <nav className="p-4 space-y-1">
              {SECTIONS.map((section) => (
                <button
                  type="button"
                  key={section.id}
                  data-ocid={`nav.${section.id}.link`}
                  onClick={() => {
                    setActive(section.id);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all",
                    active === section.id ? "font-semibold" : "",
                  )}
                  style={{
                    background:
                      active === section.id
                        ? "oklch(var(--sidebar-accent))"
                        : "transparent",
                    color:
                      active === section.id
                        ? "oklch(var(--sidebar-primary))"
                        : "oklch(var(--sidebar-foreground))",
                  }}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-sans text-sm">{section.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile auth */}
            <div className="px-4 pb-4">
              {authBusy ? (
                <div
                  className="flex items-center gap-2 px-4 py-2"
                  style={{ color: "oklch(var(--sidebar-foreground) / 0.5)" }}
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Loading…</span>
                </div>
              ) : identity ? (
                <button
                  type="button"
                  data-ocid="auth.toggle"
                  onClick={clear}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-left"
                  style={{ color: "oklch(var(--sidebar-foreground) / 0.7)" }}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Sign Out</span>
                </button>
              ) : (
                <button
                  type="button"
                  data-ocid="auth.primary_button"
                  onClick={login}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{
                    background: "oklch(var(--primary) / 0.15)",
                    color: "oklch(var(--primary))",
                  }}
                >
                  <LogIn className="h-4 w-4" />
                  <span className="text-sm font-medium">Sign In</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main layout */}
      <div className="flex flex-1 relative z-10">
        {/* Sidebar */}
        <aside
          className="hidden md:flex flex-col w-64 flex-shrink-0 border-r sticky top-0 h-screen overflow-y-auto"
          style={{
            background: "oklch(var(--sidebar))",
            borderColor: "oklch(var(--sidebar-border))",
          }}
        >
          {/* Logo */}
          <div
            className="p-6 border-b"
            style={{ borderColor: "oklch(var(--sidebar-border))" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🌀</span>
              <h2
                className="font-display font-bold text-base text-glow"
                style={{ color: "oklch(var(--sidebar-primary))" }}
              >
                Oracle Deck
              </h2>
            </div>
            <p
              className="text-xs"
              style={{ color: "oklch(var(--sidebar-foreground) / 0.5)" }}
            >
              Workshop
            </p>
          </div>

          {/* Nav items */}
          <nav className="flex-1 p-3 space-y-0.5">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <button
                  type="button"
                  key={section.id}
                  data-ocid={`nav.${section.id}.link`}
                  onClick={() => setActive(section.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all group",
                    isActive ? "" : "hover:bg-sidebar-accent/50",
                  )}
                  style={{
                    background: isActive
                      ? "oklch(var(--sidebar-accent))"
                      : "transparent",
                    color: isActive
                      ? "oklch(var(--sidebar-primary))"
                      : "oklch(var(--sidebar-foreground) / 0.75)",
                  }}
                >
                  <span className="text-base w-6 text-center flex-shrink-0">
                    {section.icon}
                  </span>
                  <span className="font-sans text-sm truncate">
                    {section.label}
                  </span>
                  {isActive && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(var(--sidebar-primary))" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className="p-4 border-t space-y-3"
            style={{ borderColor: "oklch(var(--sidebar-border))" }}
          >
            {/* Auth button */}
            {authBusy ? (
              <div
                className="flex items-center gap-2 px-2 py-1.5"
                style={{ color: "oklch(var(--sidebar-foreground) / 0.45)" }}
              >
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span className="text-xs">Loading…</span>
              </div>
            ) : identity ? (
              <div className="space-y-1">
                <p
                  className="text-xs px-2"
                  style={{ color: "oklch(var(--primary) / 0.8)" }}
                >
                  ✦ Signed in
                </p>
                <button
                  type="button"
                  data-ocid="auth.toggle"
                  onClick={clear}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors hover:bg-sidebar-accent/50"
                  style={{ color: "oklch(var(--sidebar-foreground) / 0.6)" }}
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span className="text-xs">Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                data-ocid="auth.primary_button"
                onClick={login}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
                style={{
                  background: "oklch(var(--primary) / 0.12)",
                  color: "oklch(var(--primary))",
                  border: "1px solid oklch(var(--primary) / 0.25)",
                }}
              >
                <LogIn className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">
                  Sign In to save entries
                </span>
              </button>
            )}

            <p
              className="text-xs text-center"
              style={{ color: "oklch(var(--sidebar-foreground) / 0.4)" }}
            >
              &copy; {new Date().getFullYear()}. Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "oklch(var(--sidebar-primary) / 0.7)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="min-h-full"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
