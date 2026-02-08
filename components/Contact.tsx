"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "buyer",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  return (
    <div
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/victorlazarovubFLRP4c1gunsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-robin-navy/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Start the Conversation
          </h2>
          <p className="font-body text-white/60 max-w-lg mx-auto">
            Whether you&apos;re buying, selling, or just curious about the market — Robin is here to help.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 text-center border border-white/10">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="font-body text-white/70">
              Robin will get back to you within 24 hours. For urgent inquiries, call directly.
            </p>
            <a
              href="tel:+15165551234"
              className="inline-block mt-6 bg-bh-gold text-robin-navy px-8 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm"
            >
              Call Now
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-10 border border-white/10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/70 text-xs font-body font-medium uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:border-bh-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-body font-medium uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:border-bh-gold transition-colors"
                  placeholder="(516) 555-1234"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-xs font-body font-medium uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:border-bh-gold transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-white/70 text-xs font-body font-medium uppercase tracking-wider mb-2">
                I&apos;m a...
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "buyer", label: "Buyer" },
                  { value: "seller", label: "Seller" },
                  { value: "both", label: "Both" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: option.value })}
                    className={`py-3 rounded-lg border font-body font-medium text-sm transition-all ${
                      formData.type === option.value
                        ? "border-bh-gold bg-bh-gold/20 text-bh-gold"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-xs font-body font-medium uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:border-bh-gold transition-colors resize-none"
                placeholder="Tell Robin about your real estate goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-bh-gold text-robin-navy py-4 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-gold/90 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
