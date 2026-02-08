"use client";

import MoveScoreQuiz from "@/components/MoveScoreQuiz";

export default function ScorePage() {
  return (
    <main className="min-h-screen bg-bh-cream">
      <header className="bg-robin-navy py-4">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-white tracking-tight">Robin Simon</span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-body font-medium text-bh-gold">
              Berkshire Hathaway HomeServices
            </span>
          </a>
          <a href="tel:+15165551234"
            className="bg-bh-gold text-robin-navy px-5 py-2 text-xs font-body font-bold uppercase tracking-wider rounded-sm">
            Call Robin
          </a>
        </div>
      </header>
      <MoveScoreQuiz />
      <footer className="bg-robin-navy py-6 text-center">
        <p className="font-body text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Robin Simon &middot; Berkshire Hathaway HomeServices &middot; Laffey International Realty
        </p>
      </footer>
    </main>
  );
}
