"use client";

const soldProperties = [
  {
    image: "/01_1519ImperialAve_2001_HiRes.jpg",
    address: "1519 Imperial Ave",
    location: "Nassau County",
    soldPrice: "$649,000",
    listPrice: "$629,000",
    daysOnMarket: 12,
    highlight: "Over asking",
  },
  {
    image: "/imageasset_2.jpg",
    address: "42-15 Parsons Blvd",
    location: "Queens",
    soldPrice: "$725,000",
    listPrice: "$699,000",
    daysOnMarket: 8,
    highlight: "Multiple offers",
  },
  {
    image: "/imageasset_3.jpg",
    address: "82-35 Sanford Ave",
    location: "Queens",
    soldPrice: "$589,000",
    listPrice: "$575,000",
    daysOnMarket: 18,
    highlight: "First-time buyer",
  },
];

const stats = [
  { value: "$38M+", label: "Total volume closed" },
  { value: "12", label: "Avg. days on market" },
  { value: "102%", label: "Avg. list-to-sale ratio" },
  { value: "98%", label: "Client retention rate" },
];

export default function SoldByRobin() {
  return (
    <div className="py-24 bg-bh-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">Track Record</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-robin-navy mt-3 mb-4">Sold by Robin</h2>
          <p className="font-body text-bh-slate max-w-xl mx-auto">
            Results speak louder than listings. Here&apos;s a sample of recent closings across Robin&apos;s markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-robin-navy rounded-xl p-5 text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-bh-gold">{s.value}</div>
              <div className="font-body text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {soldProperties.map((prop) => (
            <div key={prop.address}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <img src={prop.image} alt={prop.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-robin-navy text-bh-gold px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-sm">
                    Sold
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-robin-navy px-3 py-1 text-xs font-mono font-semibold rounded-sm">
                    {prop.daysOnMarket} days
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-display text-2xl font-bold text-bh-burgundy mb-1">{prop.soldPrice}</div>
                <h3 className="font-display font-bold text-robin-navy text-lg">{prop.address}</h3>
                <p className="text-bh-slate text-sm font-body mb-3">{prop.location}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="font-body text-xs text-bh-slate">
                    Listed at <span className="font-semibold">{prop.listPrice}</span>
                  </div>
                  <span className="data-tag bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {prop.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact"
            className="inline-block border-2 border-bh-burgundy text-bh-burgundy px-8 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy hover:text-white transition-all">
            Work With Robin
          </a>
        </div>
      </div>
    </div>
  );
}
