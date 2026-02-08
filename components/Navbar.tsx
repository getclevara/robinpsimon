"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "insights", label: "Insights" },
    { id: "score", label: "Move Score" },
    { id: "calculator", label: "Calculator" },
    { id: "sold", label: "Track Record" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("home")}>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-bh-burgundy" : "text-white"
            }`}>Robin Simon</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-body font-medium text-bh-gold">
              Berkshire Hathaway HomeServices
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)}
              className={`text-sm font-body font-medium transition-all hover:opacity-100 ${
                scrolled ? "text-bh-charcoal hover:text-bh-burgundy" : "text-white/80 hover:text-white"
              }`}>
              {item.label}
            </button>
          ))}
          <a href="tel:+15165551234"
            className="bg-bh-burgundy text-white px-5 py-2.5 text-sm font-body font-semibold rounded-sm hover:bg-bh-burgundy/90 transition-all">
            Call Robin
          </a>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-bh-charcoal" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-bh-charcoal" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-bh-charcoal" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)}
                className="text-left text-bh-charcoal font-body font-medium text-lg hover:text-bh-burgundy transition-colors">
                {item.label}
              </button>
            ))}
            <a href="tel:+15165551234"
              className="bg-bh-burgundy text-white px-5 py-3 text-center font-body font-semibold rounded-sm mt-2">
              Call Robin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
