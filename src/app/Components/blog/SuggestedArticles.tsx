"use client";

import { useState, type ReactNode } from "react";
import { BookOpen } from "lucide-react";

// All cards are server-rendered and passed in; this only toggles visibility,
// so every suggested link is present in the HTML for crawlers.
export default function SuggestedArticles({ cards }: { cards: ReactNode[] }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className={!showAll && i >= 3 ? "hidden" : undefined}>
            {card}
          </div>
        ))}
      </div>

      {cards.length > 3 && (
        <div className="mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-white/25"
          >
            <BookOpen className="w-4 h-4" /> {showAll ? "Show Less" : "View More Articles"}
          </button>
        </div>
      )}
    </>
  );
}
