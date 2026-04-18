"use client";

import * as React from "react";
import { Moon, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] p-2 rounded-full border border-border bg-card/80 backdrop-blur-md w-10 h-10" />
    );
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:bg-border/50 hover:scale-110 active:scale-95 cursor-pointer shadow-2xl group overflow-hidden"
      aria-label="Toggle colorful theme"
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        {resolvedTheme === "dark" ? (
          <Sparkles className="h-5 w-5 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)] transition-all duration-500" />
        ) : (
          <Moon className="h-5 w-5 text-white transition-all duration-500" />
        )}
      </div>
    </button>
  );
}
