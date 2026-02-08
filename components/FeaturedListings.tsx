"use client";

const listings = [
  {
    image: "/01_1519ImperialAve_2001_HiRes.jpg",
    address: "1519 Imperial Ave",
    location: "Nassau County",
    price: "$649,000",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    status: "Active" as const,
  },
  {
    image: "/imageasset_2.jpg",
    address: "42-15 Parsons Blvd",
    location: "Queens",
    price: "$725,000",
    beds: 4,
    baths: 2.5,
    sqft: "2,200",
    status: "Active" as const,
  },
  {
    image: "/imageasset_3.jpg",
    address: "82-35 Sanford Ave",
    location: "Queens",
    price: "$589,000",
    beds: 3,
    baths: 1.5,
    sqft: "1,600",
    status: "Active" as const,
  },
];

export default function FeaturedListings() {
  return (
    <div className="py-24 bg-bh-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">
            Current Listings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-robin-navy mt-3 mb-4">
            Featured Properties
          </h2>
          <p className="font-body text-bh-slate max-w-xl mx-auto">
            Hand-selected homes across Robin&apos;s Queens, Nassau &amp; Suffolk County markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.address}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-body font-bold uppercase tracking-wider rounded-sm">
                    {listing.status}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="font-display text-2xl font-bold text-bh-burgundy mb-1">
                  {listing.price}
                </div>
                <h3 className="font-display font-bold text-robin-navy text-lg">
                  {listing.address}
                </h3>
                <p className="text-bh-slate text-sm font-body mb-4">{listing.location}</p>

                <div className="flex items-center gap-4 text-sm font-body text-bh-slate border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-bh-charcoal">{listing.beds}</span> beds
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-bh-charcoal">{listing.baths}</span> baths
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-bh-charcoal">{listing.sqft}</span> sqft
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border-2 border-bh-burgundy text-bh-burgundy px-8 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy hover:text-white transition-all"
          >
            See All Listings
          </a>
        </div>
      </div>
    </div>
  );
}
