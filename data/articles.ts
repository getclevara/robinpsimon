export interface Article {
  id: string;
  category: "MARKET INTEL" | "PLAYBOOK" | "NY LIVING" | "INSIDER" | "CONTRARIAN TAKE";
  title: string;
  subtitle: string;
  readTime: string;
  content: string[];
  callout?: { label: string; value: string };
  takeaway: string;
  shareText: string;
}

export const articles: Article[] = [
  {
    id: "elmont-next-floral-park",
    category: "MARKET INTEL",
    title: "Why Elmont Is the Next Floral Park",
    subtitle: "The Belmont Park redevelopment is doing to Elmont what the LIRR did to Floral Park 15 years ago. Here's the data.",
    readTime: "4 min",
    content: [
      "In 2008, you could buy a 3-bedroom in Floral Park for $420K. Today that same house sells for $690K — a 64% gain that outpaced every neighboring zip code. The catalyst wasn't a school redistricting or a zoning change. It was perception catching up to reality: Floral Park had always been 30 minutes to Penn Station. The market just finally priced it in.",
      "Elmont is sitting in the exact same position right now. The UBS Arena at Belmont Park brought 18,000-seat concert and sports venue infrastructure to a neighborhood that most Manhattan buyers still couldn't point to on a map. The upcoming LIRR Elmont station — part of the Third Track project — will cut commute times to Penn to under 35 minutes.",
      "But here's what the Zillow crowd misses: Elmont's median home price is $520K while neighboring Floral Park is $690K. That's a $170K gap for neighborhoods that share the same hospital system, the same parkways, and will soon share the same commute time. Gaps like that don't stay open.",
      "The smart money is already moving. Year-over-year transaction volume in Elmont 11003 is up 18% while inventory is tightening. Multiple-offer situations that were rare two years ago are now standard on turnkey properties under $550K.",
    ],
    callout: { label: "Price gap closing", value: "$170K" },
    takeaway: "If you're priced out of Floral Park or New Hyde Park, Elmont isn't a compromise — it's an early position. The infrastructure is already being built. The commute time is already being cut. The only thing that hasn't caught up yet is the price.",
    shareText: "The $170K price gap between Elmont and Floral Park won't last. Here's why.",
  },
  {
    id: "nyc-to-suburbs-playbook",
    category: "PLAYBOOK",
    title: "The NYC-to-Suburbs Playbook",
    subtitle: "You've decided to leave the city. Here's the decision framework that saves my clients $40K+ and 6 months of wasted weekends.",
    readTime: "6 min",
    content: [
      "Every week I get the same call: 'We're ready to leave the city, we're thinking about Long Island, where do we start?' And every week I watch people make the same three mistakes that cost them months of time and tens of thousands of dollars. Here's how to skip all of that.",
      "MISTAKE 1: STARTING WITH TOWNS INSTEAD OF TRADEOFFS. Don't tell me you want to look at Garden City. Tell me what you're optimizing for. Every suburban town is a bundle of tradeoffs — schools vs. commute, space vs. walkability, taxes vs. amenities. Garden City scores a 95 on schools and lifestyle but a 20 on affordability. Hicksville scores 85 on commute and 65 on affordability but 72 on lifestyle. Neither is 'better.' They're different tradeoff bundles. Start by ranking your priorities, not towns.",
      "MISTAKE 2: IGNORING THE TAX MATH. A $650K house in Queens Village (NYC) and a $650K house in Floral Park (Nassau) are not the same financial proposition. The Queens house has lower property taxes (~$7,200/yr vs ~$13,500/yr) but you're paying NYC income tax. For a household earning $250K, that's roughly $8,500/year in city tax you eliminate by crossing into Nassau. Run the full tax picture — property tax + income tax + commute cost — before you compare sticker prices.",
      "MISTAKE 3: BUYING AT THE TOP OF YOUR BUDGET. In a market where rates are volatile and property taxes are high, your max approval is not your target. I tell every client to budget as if rates are 1% higher than their lock. On a $600K mortgage, that's an extra $400/month cushion. The clients who ignored this advice in 2022 are the ones refinancing or selling now.",
      "THE FRAMEWORK: Score your priorities 1-10 (use the Move Score tool on this site). Filter to your budget. Visit your top 3 matches on a weekday AND a weekend — the neighborhood changes. Don't just drive the blocks; park, walk to the train station, eat at the local spot. The commute doesn't start at Penn Station. It starts at your front door.",
    ],
    takeaway: "The best suburb for you is the one where your specific tradeoffs align — not the one your coworker moved to. Use the tools on this site to find your actual match, then call me to see them in person.",
    shareText: "The 3 mistakes every NYC-to-suburbs buyer makes (and the framework to avoid them).",
  },
  {
    id: "property-tax-hack",
    category: "NY LIVING",
    title: "The Property Tax Grievance Hack Nobody Talks About",
    subtitle: "68% of Nassau County homeowners are overassessed. Most never file. Here's the exact process.",
    readTime: "3 min",
    content: [
      "Nassau County reassessed every property in 2020 for the first time in decades. The result: thousands of homeowners are paying taxes on inflated assessments that don't reflect their home's actual market value. The county makes it possible to challenge your assessment, but they don't exactly advertise it.",
      "Here's how it works. Every January, Nassau publishes tentative assessment rolls. You have until March to file a grievance with the Assessment Review Commission (ARC). You don't need a lawyer — though firms will do it for a contingency fee of ~30-50% of the first year's savings. The process requires comparable sales data showing your assessment exceeds your home's market value.",
      "The success rate is surprisingly high. In recent cycles, roughly 60-70% of grievances result in reductions. The average savings: $800-$1,500 per year. That's real money compounding forever — a $1,200/yr reduction over a 10-year hold is $12,000+ back in your pocket.",
      "My recommendation: file the grievance yourself first. Pull 3-5 comparable recent sales from your neighborhood that sold below your assessed value per square foot. Fill out the ARC form. If you're denied, then consider hiring a firm for the Small Claims Assessment Review (SCAR) — that's where having professional representation helps.",
    ],
    callout: { label: "Avg annual savings", value: "$800–$1,500" },
    takeaway: "If you own in Nassau County and haven't filed a tax grievance, you're probably leaving money on the table. I help my clients pull the comps and file — it's part of the service after closing.",
    shareText: "68% of Nassau County homeowners are overassessed. Here's the exact process to challenge yours.",
  },
  {
    id: "dont-buy-in-garden-city",
    category: "CONTRARIAN TAKE",
    title: "Why You Shouldn't Buy in Garden City (Yet)",
    subtitle: "It's the most desirable town on Long Island. That's exactly the problem for buyers right now.",
    readTime: "4 min",
    content: [
      "Garden City is gorgeous. The schools are elite. The downtown is walkable. The LIRR gets you to Penn in 37 minutes. I've closed deals there and my clients love it. So why am I telling you to think twice?",
      "Because at a $1.15M median with $24K/yr in property taxes, Garden City is priced for perfection in a market that isn't perfect. Rates are elevated, inventory is historically tight, and the premium you pay over comparable school districts is at a 15-year high. Syosset offers 95-rated schools at a $920K median. Jericho offers the #1 district in NY at $875K. Floral Park gives you a 30-minute commute at $690K.",
      "The Garden City premium has always existed, but it used to be $100-150K over Syosset. Right now it's $230K. That delta buys a full kitchen renovation, 3 years of property taxes, or a significant rate buydown on your mortgage. For a first-time buyer stretching to get in, that premium is the difference between comfortable and house-poor.",
      "The contrarian play: buy in a high-trajectory market like Floral Park or Elmont now, build equity for 5-7 years, then trade up to Garden City when (a) you have $300K+ in equity and (b) the premium normalizes. That's not settling — it's positioning.",
    ],
    takeaway: "Garden City will always be Garden City. But the smartest move isn't always the most prestigious zip code — it's the one that sets up your next move. Let's map out the 2-move strategy that gets you there.",
    shareText: "Garden City's premium over comparable school districts is at a 15-year high. Here's the contrarian play.",
  },
  {
    id: "survive-first-winter",
    category: "NY LIVING",
    title: "The New Homeowner's First-Winter Survival Guide",
    subtitle: "You closed on a house. Congratulations. Now here's everything nobody told you before November hits.",
    readTime: "5 min",
    content: [
      "Your Brooklyn landlord handled the boiler, the ice, and the drafts. Now that's you. I send this guide to every buyer I close with because the first winter in a house you own is a wake-up call. Here's how to avoid the expensive surprises.",
      "HEATING: Get your furnace or boiler serviced in September. Not November — September. Every HVAC company on Long Island is booked solid by October. A $150 tune-up now prevents a $3,000 emergency repair in January. If you have oil heat (common in older Nassau/Queens homes), lock in your oil price before October. Prices spike 20-30% once cold weather hits.",
      "PIPES: Know where your main water shutoff is. Not 'generally' — know the exact valve and make sure it turns. Frozen pipes are the #1 insurance claim for new homeowners on Long Island. If you have exterior hose bibs, disconnect the hoses and shut off the interior valve feeding them. If your garage has plumbing, a $30 pipe heating cable is cheap insurance.",
      "ICE DAMS: If you have gutters (most LI homes do), clean them in November. Clogged gutters cause ice dams, ice dams cause roof leaks, roof leaks cause $10K+ in damage. While you're up there, check that your attic has adequate insulation — the #1 cause of ice dams is heat escaping through the roof.",
      "THE EMERGENCY KIT: Keep a flashlight, batteries, a battery-powered radio, and 3 gallons of water in your basement. Long Island loses power in nor'easters more than people expect. A portable generator ($400-800) is worth it if you have a sump pump — no power means no pump means a flooded basement.",
      "SNOW REMOVAL: Nassau County requires you to clear your sidewalk within a specified time after snowfall or you can be fined. Line up a plow service before the first storm — most good ones are fully booked by December. Budget $300-500 for a seasonal contract.",
    ],
    takeaway: "I send a version of this to every buyer I close with, along with my recommended contractors for each service. It's the kind of thing your agent should be doing after the deal closes — not just before.",
    shareText: "The first-winter survival guide I send to every buyer I close with. Things nobody tells you before November.",
  },
  {
    id: "queens-vs-nassau-tax",
    category: "INSIDER",
    title: "Queens vs. Nassau: The Real Tax Math Nobody Does",
    subtitle: "Property taxes are lower in Queens. But that's not the whole story — and the answer might surprise you.",
    readTime: "4 min",
    content: [
      "I hear it constantly: 'Nassau taxes are insane, we should just stay in Queens.' And on the surface, they're right. A $700K home in Bayside might pay $9,000/yr in property tax. The same-priced home in New Hyde Park pays $14,200. Case closed, right?",
      "Not if you earn over $150K as a household. New York City charges an additional income tax that ranges from 3.078% to 3.876% depending on your bracket. For a household earning $250K, that's roughly $8,500/yr in city income tax that disappears the moment you move to Nassau.",
      "Let's run the real numbers. Bayside home, $700K: property tax $9,000 + NYC income tax $8,500 = $17,500/yr in location-based taxes. New Hyde Park home, $700K: property tax $14,200 + NYC income tax $0 = $14,200/yr. Nassau is actually $3,300/yr cheaper when you account for income tax. Over a 10-year hold, that's $33,000.",
      "The breakeven point is roughly $180K household income. Below that, Queens wins on total tax burden. Above that, Nassau starts winning — and the gap widens as income grows. At $350K household income, Nassau saves you roughly $7,000-8,000/yr over Queens.",
      "There are other factors: Queens has slightly lower homeowner insurance rates, but Nassau homes tend to appreciate faster in the $600-800K range. STAR exemptions and veterans' exemptions also differ. The point isn't that one is universally better — it's that you need to run YOUR numbers, not someone else's.",
    ],
    callout: { label: "Breakeven income", value: "$180K" },
    takeaway: "Before you decide Queens vs. Nassau, let me run a tax comparison with your actual income and target price range. The answer is personal — and it's usually not what people expect.",
    shareText: "Queens vs. Nassau taxes: property tax alone doesn't tell the story. Here's the real math.",
  },
];
