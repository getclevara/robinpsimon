"use client";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollTo = (id: string) => {
    onNavigate(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/harrygillen1j6ebGoAic0unsplash.jpg')" }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-robin-navy/70 via-robin-navy/50 to-robin-navy/80" />
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bh-gold to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brokerage tag */}
        <div className="animate-fade-up mb-6">
          <span className="inline-block text-bh-gold text-xs uppercase tracking-[0.35em] font-body font-semibold border border-bh-gold/30 px-4 py-2 rounded-sm backdrop-blur-sm">
            Berkshire Hathaway HomeServices &middot; Laffey International Realty
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
          Your Move.
          <br />
          <span className="gold-shimmer">Your Advantage.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 font-body text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Neighborhood intelligence and equity tools for buyers and sellers across
          Queens, Nassau County &amp; Western Suffolk.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("score")}
            className="group relative bg-bh-gold text-robin-navy px-8 py-4 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-gold/90 transition-all w-full sm:w-auto"
          >
            Find Your Neighborhood
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-robin-navy group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollTo("calculator")}
            className="group border-2 border-white/40 text-white px-8 py-4 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-white/10 hover:border-white/60 transition-all w-full sm:w-auto"
          >
            Know Your Position
          </button>
        </div>

        {/* Markets served */}
        <div className="animate-fade-up-delay-3 mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-xs font-body uppercase tracking-widest">
          <span>Jericho</span>
          <span className="text-bh-gold/50">&bull;</span>
          <span>Forest Hills</span>
          <span className="text-bh-gold/50">&bull;</span>
          <span>Garden City</span>
          <span className="text-bh-gold/50">&bull;</span>
          <span>Bayside</span>
          <span className="text-bh-gold/50">&bull;</span>
          <span>Melville</span>
          <span className="text-bh-gold/50">&bull;</span>
          <span>Floral Park</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
