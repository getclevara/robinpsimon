"use client";

export default function Footer() {
  return (
    <footer className="bg-robin-navy py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold text-white mb-1">Robin Simon</div>
            <div className="text-bh-gold text-xs uppercase tracking-[0.2em] font-body font-semibold mb-4">
              Berkshire Hathaway HomeServices
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed">
              Laffey International Realty
              <br />
              Serving Queens, Nassau County &amp; Western Suffolk
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <div className="space-y-2">
              {[
                { href: "#score", label: "Move Score Quiz" },
                { href: "#calculator", label: "Profit Calculator" },
                { href: "#listings", label: "Featured Listings" },
                { href: "#about", label: "About Robin" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-white/40 text-sm hover:text-bh-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </div>
            <div className="space-y-2 font-body text-white/40 text-sm">
              <a href="tel:+15165551234" className="block hover:text-bh-gold transition-colors">
                (516) 555-1234
              </a>
              <a href="mailto:robin@robinsimon.com" className="block hover:text-bh-gold transition-colors">
                robin@robinsimon.com
              </a>
              <a
                href="https://www.linkedin.com/in/robinsimon"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-bh-gold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Robin Simon. All rights reserved.
          </p>
          <p className="font-body text-white/25 text-xs text-center md:text-right">
            Equal Housing Opportunity. Each office is independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  );
}
