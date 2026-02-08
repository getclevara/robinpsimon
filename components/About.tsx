"use client";

export default function About() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src="/key326127562.jpg" alt="Robin Simon - Berkshire Hathaway HomeServices" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-robin-navy text-white p-5 rounded-lg shadow-xl max-w-[200px]">
              <div className="font-mono text-3xl font-bold text-bh-gold">15+</div>
              <div className="font-body text-sm text-white/70 mt-1">Years serving Queens &amp; Long Island families</div>
            </div>
          </div>

          <div>
            <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">About Robin</span>
            <h2 className="font-display text-4xl font-bold text-robin-navy mt-3 mb-6">
              Local Expertise.<br />Global Brand.
            </h2>
            <div className="space-y-4 font-body text-bh-slate leading-relaxed">
              <p>
                Robin Simon brings over 15 years of real estate experience across Queens, Nassau County, and Western Suffolk County, backed by the power of Berkshire Hathaway HomeServices and Laffey International Realty.
              </p>
              <p>
                Specializing in the corridor from Forest Hills to Jericho to Melville, Robin combines deep neighborhood knowledge with data-driven market analysis to help buyers find the right community and sellers maximize their equity.
              </p>
              <p>
                Whether you&apos;re a first-time buyer navigating the NYC-to-suburbs transition or a homeowner looking to understand your position in today&apos;s market, Robin provides the intelligence and advocacy you need to make your next move with confidence.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+15165551234"
                className="bg-bh-burgundy text-white px-6 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all">
                Call Robin
              </a>
              <a href="https://www.linkedin.com/in/robinsimon" target="_blank" rel="noopener noreferrer"
                className="border border-gray-300 text-bh-slate px-6 py-3 font-body font-medium text-sm rounded-sm hover:bg-gray-50 transition-all">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
