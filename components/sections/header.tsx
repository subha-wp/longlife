"use client";

import { PhoneCall, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { PowerEffect } from "@/components/power-effect";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleCallNow = () => {
    window.location.href = "tel:917001070713";
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">LongLife</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" onClick={handleCallNow}>
              <PhoneCall className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <span className="sr-only">Toggle theme</span>
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>
      <PowerEffect />
    </div>
  );
}
