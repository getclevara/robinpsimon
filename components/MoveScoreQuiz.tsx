"use client";

import { useState, useMemo } from "react";
import { neighborhoods, calculateMoveScore, type Neighborhood } from "@/data/neighborhoods";

const priorityLabels: Record<string, { label: string; icon: string; description: string }> = {
  schools: { label: "Schools", icon: "🎓", description: "Quality of school districts" },
  commute: { label: "Commute", icon: "🚂", description: "Transit & highway access to Manhattan" },
  affordability: { label: "Affordability", icon: "💰", description: "Lower price point & taxes" },
  safety: { label: "Safety", icon: "🛡️", description: "Low crime & family-friendly" },
  lifestyle: { label: "Lifestyle", icon: "🍽️", description: "Dining, shopping & walkability" },
  investment: { label: "Investment", icon: "📈", description: "Appreciation potential & ROI" },
};

const regionOptions = ["All Regions", "Nassau County", "Queens", "Western Suffolk"] as const;

type Step = "welcome" | "region" | "priorities" | "results";

export default function MoveScoreQuiz() {
  const [step, setStep] = useState<Step>("welcome");
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions");
  const [priorities, setPriorities] = useState<Record<string, number>>({
    schools: 5,
    commute: 5,
    affordability: 5,
    safety: 5,
    lifestyle: 5,
    investment: 5,
  });
  const [showAll, setShowAll] = useState(false);

  const results = useMemo(() => {
    const filtered =
      selectedRegion === "All Regions"
        ? neighborhoods
        : neighborhoods.filter((n) => n.region === selectedRegion);

    return filtered
      .map((n) => ({
        neighborhood: n,
        score: calculateMoveScore(priorities, n),
      }))
      .sort((a, b) => b.score - a.score);
  }, [selectedRegion, priorities]);

  const displayedResults = showAll ? results : results.slice(0, 5);

  const handlePriority = (key: string, value: number) => {
    setPriorities((prev) => ({ ...prev, [key]: value }));
  };

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-emerald-600";
    if (score >= 70) return "text-bh-gold";
    return "text-orange-500";
  };

  const getScoreRingColor = (score: number) => {
    if (score >= 85) return "#059669";
    if (score >= 70) return "#C4A55A";
    return "#F97316";
  };

  return (
    <div className="py-24 bg-bh-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">
            Neighborhood Intelligence
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-robin-navy mt-3 mb-4">
            What&apos;s Your Move Score?
          </h2>
          <p className="font-body text-bh-slate max-w-xl mx-auto">
            Tell us your priorities and we&apos;ll rank every neighborhood in Robin&apos;s market based on what matters most to you.
          </p>
        </div>

        {/* Welcome step */}
        {step === "welcome" && (
          <div className="text-center animate-fade-up">
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto border border-bh-gold/10">
              <div className="text-6xl mb-6">🏡</div>
              <h3 className="font-display text-2xl font-bold text-robin-navy mb-3">
                Find Your Perfect Neighborhood
              </h3>
              <p className="font-body text-bh-slate mb-8">
                This 60-second quiz matches your lifestyle priorities to real neighborhood data across Queens, Nassau County &amp; Western Suffolk. No signup required.
              </p>
              <button
                onClick={() => setStep("region")}
                className="bg-bh-burgundy text-white px-10 py-4 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all"
              >
                Start the Quiz
              </button>
            </div>
          </div>
        )}

        {/* Region selection */}
        {step === "region" && (
          <div className="animate-fade-up">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl mx-auto border border-bh-gold/10">
              <h3 className="font-display text-xl font-bold text-robin-navy mb-2">
                Where are you looking?
              </h3>
              <p className="font-body text-bh-slate text-sm mb-8">
                Select a region or search all of Robin&apos;s markets.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {regionOptions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-4 rounded-lg border-2 text-left font-body font-medium transition-all ${
                      selectedRegion === region
                        ? "border-bh-burgundy bg-bh-burgundy/5 text-bh-burgundy"
                        : "border-gray-200 hover:border-bh-gold/50 text-bh-charcoal"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("welcome")}
                  className="border border-gray-300 text-bh-slate px-6 py-3 font-body font-medium text-sm rounded-sm hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep("priorities")}
                  className="flex-1 bg-bh-burgundy text-white px-6 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all"
                >
                  Next: Set Your Priorities
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Priority sliders */}
        {step === "priorities" && (
          <div className="animate-fade-up">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl mx-auto border border-bh-gold/10">
              <h3 className="font-display text-xl font-bold text-robin-navy mb-2">
                What matters most to you?
              </h3>
              <p className="font-body text-bh-slate text-sm mb-8">
                Drag each slider to reflect your priorities. Higher = more important.
              </p>
              <div className="space-y-6 mb-10">
                {Object.entries(priorityLabels).map(([key, { label, icon, description }]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{icon}</span>
                        <span className="font-body font-semibold text-bh-charcoal text-sm">
                          {label}
                        </span>
                      </div>
                      <span className="font-body font-bold text-bh-burgundy text-sm">
                        {priorities[key]}/10
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={priorities[key]}
                      onChange={(e) => handlePriority(key, parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-xs text-bh-slate/60 mt-1 font-body">{description}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("region")}
                  className="border border-gray-300 text-bh-slate px-6 py-3 font-body font-medium text-sm rounded-sm hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep("results")}
                  className="flex-1 bg-bh-burgundy text-white px-6 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all"
                >
                  See My Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {step === "results" && (
          <div className="animate-fade-up">
            {/* Top result hero */}
            {results.length > 0 && (
              <div className="bg-robin-navy rounded-xl p-8 md:p-12 mb-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bh-gold to-transparent" />
                <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">
                  Your #1 Match
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-2">
                  {results[0].neighborhood.name}
                </h3>
                <p className="text-white/50 font-body text-sm mb-6">
                  {results[0].neighborhood.region} &middot; {results[0].neighborhood.zipCode}
                </p>

                {/* Score ring */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#1B2838" strokeWidth="8" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke={getScoreRingColor(results[0].score)}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(results[0].score / 100) * 314} 314`}
                      transform="rotate(-90 60 60)"
                      style={{ transition: "stroke-dasharray 1s ease-out" }}
                    />
                  </svg>
                  <span className="absolute font-display text-3xl font-bold text-white">
                    {results[0].score}
                  </span>
                </div>

                <p className="text-white/70 font-body max-w-lg mx-auto text-sm leading-relaxed">
                  {results[0].neighborhood.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {results[0].neighborhood.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-body"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
                  <div>
                    <div className="text-bh-gold font-display text-xl font-bold">
                      {formatPrice(results[0].neighborhood.medianPrice)}
                    </div>
                    <div className="text-white/40 text-xs font-body mt-1">Median Price</div>
                  </div>
                  <div>
                    <div className="text-bh-gold font-display text-xl font-bold">
                      {formatPrice(results[0].neighborhood.avgPropertyTax)}
                    </div>
                    <div className="text-white/40 text-xs font-body mt-1">Avg Property Tax/yr</div>
                  </div>
                  <div>
                    <div className="text-bh-gold font-display text-xl font-bold">
                      {formatPrice(Math.round((results[0].neighborhood.medianPrice * 0.065 + results[0].neighborhood.avgPropertyTax) / 12))}
                    </div>
                    <div className="text-white/40 text-xs font-body mt-1">Est. Monthly Cost</div>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining results */}
            <div className="space-y-3">
              {displayedResults.slice(1).map((r, i) => (
                <div
                  key={r.neighborhood.name}
                  className="bg-white rounded-lg border border-gray-100 p-5 flex items-center gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bh-cream flex items-center justify-center font-display font-bold text-bh-burgundy text-sm">
                    #{i + 2}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-bold text-robin-navy">
                        {r.neighborhood.name}
                      </span>
                      <span className="text-xs text-bh-slate/50 font-body">
                        {r.neighborhood.region}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-bh-slate font-body">
                      <span>{formatPrice(r.neighborhood.medianPrice)}</span>
                      <span>Tax: {formatPrice(r.neighborhood.avgPropertyTax)}/yr</span>
                    </div>
                  </div>
                  <div className={`font-display text-2xl font-bold ${getScoreColor(r.score)}`}>
                    {r.score}
                  </div>
                </div>
              ))}
            </div>

            {results.length > 5 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full mt-4 py-3 border border-bh-gold/30 text-bh-burgundy font-body font-semibold text-sm rounded-lg hover:bg-bh-cream transition-all"
              >
                Show All {results.length} Neighborhoods
              </button>
            )}

            {/* CTA */}
            <div className="mt-10 bg-white rounded-xl border border-bh-gold/20 p-8 text-center">
              <h4 className="font-display text-xl font-bold text-robin-navy mb-2">
                Want to explore these neighborhoods in person?
              </h4>
              <p className="font-body text-bh-slate text-sm mb-6">
                Robin can set up private tours and provide market data for your top matches.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+15165551234"
                  className="bg-bh-burgundy text-white px-8 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all"
                >
                  Call Robin
                </a>
                <button
                  onClick={() => {
                    setStep("welcome");
                    setShowAll(false);
                  }}
                  className="border border-gray-300 text-bh-slate px-8 py-3 font-body font-medium text-sm rounded-sm hover:bg-gray-50 transition-all"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
