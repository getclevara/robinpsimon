"use client";

const dataPoints = [
  { label: "ELMONT YOY", value: "+18% volume", trend: "up" },
  { label: "GARDEN CITY MEDIAN", value: "$1.15M", trend: "neutral" },
  { label: "NASSAU TAX GRIEVANCE SUCCESS", value: "~65%", trend: "up" },
  { label: "FLORAL PARK TO PENN", value: "30 min", trend: "neutral" },
  { label: "QUEENS VILLAGE MEDIAN", value: "$560K", trend: "up" },
  { label: "NYC INCOME TAX (250K HH)", value: "$8,500/yr", trend: "down" },
  { label: "NASSAU VS QUEENS TAX BREAKEVEN", value: "$180K income", trend: "neutral" },
  { label: "FOREST HILLS SCORE", value: "95 lifestyle", trend: "up" },
];

export default function MarketTicker() {
  const items = [...dataPoints, ...dataPoints];

  return (
    <div className="bg-robin-navy border-y border-bh-gold/20 py-3 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {items.map((d, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <span className="data-tag bg-bh-gold/10 text-bh-gold/70">{d.label}</span>
            <span className="font-mono text-xs font-semibold text-white/90">{d.value}</span>
            <span className={`text-xs ${
              d.trend === "up" ? "text-emerald-400" : d.trend === "down" ? "text-red-400" : "text-white/30"
            }`}>
              {d.trend === "up" ? "\u2191" : d.trend === "down" ? "\u2193" : "\u2014"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
