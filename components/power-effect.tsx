"use client";

import { useState, useEffect } from "react";
import { Car, Zap } from "lucide-react";

export function PowerEffect() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const newScrollPercentage = (scrolled / documentHeight) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-secondary h-8 relative overflow-hidden">
      <Car
        className="h-10 w-10 text-primary absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{ left: `${scrollPercentage}%` }}
      />
    </div>
  );
}
