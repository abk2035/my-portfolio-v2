"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
      className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft"
    >
      {/* Les deux icônes sont rendues, le CSS choisit : pas de flash d'hydratation */}
      <Sun size={18} className="hidden dark:block" aria-hidden />
      <Moon size={18} className="block dark:hidden" aria-hidden />
    </button>
  );
}
