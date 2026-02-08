"use client";

import { useState, useMemo } from "react";
import { calculateNetProceeds, neighborhoods } from "@/data/neighborhoods";

export default function ProfitCalculator() {
  const [salePrice, setSalePrice] = useState(650000);
  const [mortgageBalance, setMortgageBalance] = useState(350000);
  const [commission, setCommission] = useState(5);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => calculateNetProceeds(salePrice, mortgageBalance, commission / 100), [salePrice, mortgageBalance, commission]);

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const equityDestinations = useMemo(() => {
    if (results.netProceeds <= 0) return [];
    const maxPurchase = results.netProceeds / 0.2;
    return neighborhoods.filter((n) => n.medianPrice <= maxPurchase * 1.1)
      .sort((a, b) => b.scores.investment - a.scores.investment).slice(0, 4);
  }, [results.netProceeds]);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">Seller Tools</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-robin-navy mt-3 mb-4">Know Your Position</h2>
          <p className="font-body text-bh-slate max-w-xl mx-auto">
            See exactly what you&apos;ll walk away with after closing — including NY transfer taxes, mansion tax, and all closing costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-bh-cream rounded-xl p-8 border border-bh-gold/10">
            <h3 className="font-display text-xl font-bold text-robin-navy mb-6">Your Property Details</h3>
            <div className="mb-6">
              <label className="flex items-center justify-between mb-2">
                <span className="font-body font-semibold text-bh-charcoal text-sm">Expected Sale Price</span>
                <span className="font-mono font-bold text-bh-burgundy">{formatPrice(salePrice)}</span>
              </label>
              <input type="range" min={200000} max={3000000} step={10000} value={salePrice}
                onChange={(e) => setSalePrice(parseInt(e.target.value))} className="w-full" />
              <div className="flex justify-between text-xs text-bh-slate/50 font-body mt-1"><span>$200K</span><span>$3M</span></div>
            </div>
            <div className="mb-6">
              <label className="flex items-center justify-between mb-2">
                <span className="font-body font-semibold text-bh-charcoal text-sm">Remaining Mortgage</span>
                <span className="font-mono font-bold text-bh-burgundy">{formatPrice(mortgageBalance)}</span>
              </label>
              <input type="range" min={0} max={salePrice} step={5000} value={mortgageBalance}
                onChange={(e) => setMortgageBalance(parseInt(e.target.value))} className="w-full" />
              <div className="flex justify-between text-xs text-bh-slate/50 font-body mt-1"><span>$0</span><span>{formatPrice(salePrice)}</span></div>
            </div>
            <div className="mb-8">
              <label className="flex items-center justify-between mb-2">
                <span className="font-body font-semibold text-bh-charcoal text-sm">Broker Commission</span>
                <span className="font-mono font-bold text-bh-burgundy">{commission}%</span>
              </label>
              <input type="range" min={3} max={6} step={0.5} value={commission}
                onChange={(e) => setCommission(parseFloat(e.target.value))} className="w-full" />
              <div className="flex justify-between text-xs text-bh-slate/50 font-body mt-1"><span>3%</span><span>6%</span></div>
            </div>
            <button onClick={() => setShowResults(true)}
              className="w-full bg-bh-burgundy text-white px-6 py-4 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all">
              Calculate My Net Proceeds
            </button>
          </div>

          <div>
            {showResults ? (
              <div className="animate-fade-up">
                <div className="bg-robin-navy rounded-xl p-8 text-center mb-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bh-gold to-transparent" />
                  <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">Estimated Net Proceeds</span>
                  <div className={`font-display text-4xl md:text-5xl font-bold mt-3 ${results.netProceeds >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {formatPrice(results.netProceeds)}
                  </div>
                  <p className="text-white/40 font-body text-xs mt-2">After all closing costs &amp; fees</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-3">
                  <h4 className="font-display font-bold text-robin-navy mb-4">Closing Cost Breakdown</h4>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">Sale Price</span>
                    <span className="font-semibold text-bh-charcoal">{formatPrice(results.salePrice)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">Mortgage Payoff</span>
                    <span className="font-semibold text-red-600">-{formatPrice(results.mortgageBalance)}</span>
                  </div>
                  <div className="h-px bg-gray-100 my-2" />
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">Broker Commission ({commission}%)</span>
                    <span className="font-semibold text-red-600">-{formatPrice(results.commission)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">NY Transfer Tax (0.4%)</span>
                    <span className="font-semibold text-red-600">-{formatPrice(results.transferTax)}</span>
                  </div>
                  {results.mansionTax > 0 && (
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-bh-slate">Mansion Tax (1%)</span>
                      <span className="font-semibold text-red-600">-{formatPrice(results.mansionTax)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">Attorney Fees</span>
                    <span className="font-semibold text-red-600">-{formatPrice(results.attorneyFees)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-bh-slate">Misc. Fees &amp; Adjustments</span>
                    <span className="font-semibold text-red-600">-{formatPrice(results.miscFees)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2" />
                  <div className="flex justify-between font-body">
                    <span className="font-bold text-robin-navy">You Walk Away With</span>
                    <span className={`font-bold text-lg ${results.netProceeds >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                      {formatPrice(results.netProceeds)}
                    </span>
                  </div>
                </div>

                {equityDestinations.length > 0 && (
                  <div className="mt-6 bg-bh-cream rounded-xl p-6 border border-bh-gold/10">
                    <h4 className="font-display font-bold text-robin-navy mb-1">Where Your Equity Could Take You</h4>
                    <p className="font-body text-bh-slate text-xs mb-4">
                      With {formatPrice(results.netProceeds)} as a 20% down payment:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {equityDestinations.map((n) => (
                        <div key={n.name} className="bg-white rounded-lg p-3 border border-gray-100">
                          <span className="font-display font-bold text-robin-navy text-sm">{n.name}</span>
                          <div className="text-xs text-bh-slate font-body mt-0.5">{formatPrice(n.medianPrice)} median</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-16 h-16 rounded-full bg-bh-cream flex items-center justify-center mx-auto mb-4">
                    <span className="text-bh-burgundy font-mono text-lg font-bold">$</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-robin-navy/30 mb-2">Your Breakdown Will Appear Here</h3>
                  <p className="font-body text-bh-slate/40 text-sm">
                    Adjust the sliders and calculate to see your net proceeds with full NY closing cost transparency.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
