"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем после того, как пользователь проскроллил Hero
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <p className="hidden text-sm text-text-secondary sm:block">
          Generate hooks and content packs in under 60 seconds
        </p>
        <a
          href="#pricing"
          className="ml-auto inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Start Free Trial
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}