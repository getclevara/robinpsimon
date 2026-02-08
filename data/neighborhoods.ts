export interface Neighborhood {
  name: string;
  region: "Nassau County" | "Queens" | "Western Suffolk";
  scores: {
    schools: number;
    commute: number;
    affordability: number;
    safety: number;
    lifestyle: number;
    investment: number;
  };
  medianPrice: number;
  avgPropertyTax: number;
  description: string;
  highlights: string[];
  zipCode: string;
}

export const neighborhoods: Neighborhood[] = [
  // Nassau County
  {
    name: "Jericho",
    region: "Nassau County",
    scores: { schools: 98, commute: 72, affordability: 35, safety: 95, lifestyle: 80, investment: 85 },
    medianPrice: 875000,
    avgPropertyTax: 18500,
    description: "Top-rated schools and a peaceful suburban setting make Jericho one of the most sought-after communities on Long Island.",
    highlights: ["#1 School District in NY", "Low crime rate", "Close to Northern State Pkwy"],
    zipCode: "11753",
  },
  {
    name: "Syosset",
    region: "Nassau County",
    scores: { schools: 95, commute: 68, affordability: 30, safety: 94, lifestyle: 78, investment: 82 },
    medianPrice: 920000,
    avgPropertyTax: 20000,
    description: "Premier school district with strong property values and easy access to the LIRR for Manhattan commuters.",
    highlights: ["Top 5 LI schools", "LIRR station", "Cold Spring Harbor nearby"],
    zipCode: "11791",
  },
  {
    name: "Massapequa",
    region: "Nassau County",
    scores: { schools: 82, commute: 65, affordability: 55, safety: 88, lifestyle: 82, investment: 78 },
    medianPrice: 620000,
    avgPropertyTax: 14000,
    description: "Family-friendly community with waterfront access, strong schools, and a vibrant downtown strip.",
    highlights: ["Bar Harbor waterfront", "Strong school district", "Active downtown"],
    zipCode: "11758",
  },
  {
    name: "Hicksville",
    region: "Nassau County",
    scores: { schools: 75, commute: 85, affordability: 65, safety: 80, lifestyle: 72, investment: 80 },
    medianPrice: 560000,
    avgPropertyTax: 12500,
    description: "A transit hub with rapidly appreciating values. The LIRR hub station makes it one of the best-connected towns on LI.",
    highlights: ["LIRR hub station", "Rapidly appreciating", "Diverse dining scene"],
    zipCode: "11801",
  },
  {
    name: "Floral Park",
    region: "Nassau County",
    scores: { schools: 85, commute: 90, affordability: 50, safety: 90, lifestyle: 85, investment: 88 },
    medianPrice: 690000,
    avgPropertyTax: 13500,
    description: "Charming village feel with excellent schools and one of the shortest LIRR commutes to Penn Station.",
    highlights: ["30-min to Penn Station", "Village charm", "Strong appreciation"],
    zipCode: "11001",
  },
  {
    name: "New Hyde Park",
    region: "Nassau County",
    scores: { schools: 82, commute: 88, affordability: 48, safety: 88, lifestyle: 80, investment: 85 },
    medianPrice: 720000,
    avgPropertyTax: 14200,
    description: "Excellent location straddling the Queens border with top medical facilities and strong community ties.",
    highlights: ["Near LIJ Medical Center", "Quick city access", "Diverse community"],
    zipCode: "11040",
  },
  {
    name: "Elmont",
    region: "Nassau County",
    scores: { schools: 72, commute: 92, affordability: 72, safety: 78, lifestyle: 70, investment: 90 },
    medianPrice: 520000,
    avgPropertyTax: 11000,
    description: "Rapidly transforming with the new UBS Arena and Belmont Park redevelopment. One of the best investment plays on LI.",
    highlights: ["UBS Arena / Belmont Park", "Highest appreciation corridor", "NYC border"],
    zipCode: "11003",
  },
  {
    name: "Franklin Square",
    region: "Nassau County",
    scores: { schools: 78, commute: 82, affordability: 60, safety: 85, lifestyle: 75, investment: 80 },
    medianPrice: 580000,
    avgPropertyTax: 12800,
    description: "Solid middle-market community with good schools, easy highway access, and steady property values.",
    highlights: ["Near Hempstead Tpke corridor", "Good school options", "Affordable entry point"],
    zipCode: "11010",
  },
  {
    name: "Garden City",
    region: "Nassau County",
    scores: { schools: 95, commute: 80, affordability: 20, safety: 96, lifestyle: 92, investment: 75 },
    medianPrice: 1150000,
    avgPropertyTax: 24000,
    description: "The gold standard of Long Island living. Tree-lined streets, top schools, and a walkable downtown.",
    highlights: ["Iconic village center", "Roosevelt Field nearby", "Premier school district"],
    zipCode: "11530",
  },

  // Queens
  {
    name: "Bellerose",
    region: "Queens",
    scores: { schools: 78, commute: 88, affordability: 58, safety: 85, lifestyle: 72, investment: 82 },
    medianPrice: 650000,
    avgPropertyTax: 8500,
    description: "Queens village on the Nassau border offering lower taxes and strong transit access to Manhattan.",
    highlights: ["Queens/Nassau border", "Lower property taxes", "Suburban feel in NYC"],
    zipCode: "11426",
  },
  {
    name: "Glen Oaks",
    region: "Queens",
    scores: { schools: 80, commute: 82, affordability: 55, safety: 88, lifestyle: 75, investment: 80 },
    medianPrice: 680000,
    avgPropertyTax: 7800,
    description: "Quiet, tree-lined neighborhood with co-op and single-family options and proximity to major highways.",
    highlights: ["Near LIE & Cross Island", "NYC tax benefits", "Glen Oaks Village co-ops"],
    zipCode: "11004",
  },
  {
    name: "Forest Hills",
    region: "Queens",
    scores: { schools: 85, commute: 95, affordability: 40, safety: 90, lifestyle: 95, investment: 85 },
    medianPrice: 850000,
    avgPropertyTax: 9200,
    description: "One of Queens' most desirable neighborhoods with the Forest Hills Gardens, vibrant Austin Street, and express subway access.",
    highlights: ["Express E/F/R trains", "Forest Hills Gardens", "Austin St restaurants & shops"],
    zipCode: "11375",
  },
  {
    name: "Little Neck",
    region: "Queens",
    scores: { schools: 88, commute: 78, affordability: 48, safety: 92, lifestyle: 80, investment: 82 },
    medianPrice: 780000,
    avgPropertyTax: 8800,
    description: "Top-performing schools in District 26 with a peaceful, suburban atmosphere and LIRR access.",
    highlights: ["District 26 schools", "LIRR to Penn Station", "Marathon course landmark"],
    zipCode: "11362",
  },
  {
    name: "Bayside",
    region: "Queens",
    scores: { schools: 85, commute: 82, affordability: 45, safety: 90, lifestyle: 88, investment: 84 },
    medianPrice: 820000,
    avgPropertyTax: 9000,
    description: "Waterfront dining on the bay, excellent schools, and strong LIRR + bus connectivity to the city.",
    highlights: ["Bell Blvd dining strip", "Bay Terrace waterfront", "Top Queens schools"],
    zipCode: "11361",
  },
  {
    name: "Queens Village",
    region: "Queens",
    scores: { schools: 72, commute: 80, affordability: 68, safety: 78, lifestyle: 68, investment: 85 },
    medianPrice: 560000,
    avgPropertyTax: 7200,
    description: "Affordable entry point for NYC homeownership with detached homes, yards, and strong investment upside.",
    highlights: ["LIRR station", "Detached homes with yards", "Best value in Eastern Queens"],
    zipCode: "11428",
  },

  // Western Suffolk
  {
    name: "Melville",
    region: "Western Suffolk",
    scores: { schools: 88, commute: 55, affordability: 38, safety: 92, lifestyle: 82, investment: 78 },
    medianPrice: 780000,
    avgPropertyTax: 16500,
    description: "Corporate hub meets residential elegance. Home to major company HQs with excellent Half Hollow Hills schools.",
    highlights: ["Half Hollow Hills SD", "Corporate corridor (Route 110)", "Walt Whitman Shops"],
    zipCode: "11747",
  },
  {
    name: "Deer Park",
    region: "Western Suffolk",
    scores: { schools: 70, commute: 58, affordability: 72, safety: 78, lifestyle: 68, investment: 82 },
    medianPrice: 480000,
    avgPropertyTax: 11500,
    description: "Affordable Suffolk County option with strong appreciation potential and easy access to major parkways.",
    highlights: ["Tanger Outlets", "Affordable entry point", "Near state parks"],
    zipCode: "11729",
  },
  {
    name: "Farmingville",
    region: "Western Suffolk",
    scores: { schools: 72, commute: 50, affordability: 70, safety: 80, lifestyle: 65, investment: 80 },
    medianPrice: 460000,
    avgPropertyTax: 10800,
    description: "Value-oriented community in the Sachem school district with room for growth and proximity to Stony Brook.",
    highlights: ["Sachem School District", "Near Stony Brook University", "Growing appreciation"],
    zipCode: "11738",
  },
];

export const closingCosts = {
  ny: {
    transferTax: {
      rate: 0.004, // $4 per $1000 for properties under $3M
      mansionTaxThreshold: 1000000,
      mansionTaxRate: 0.01,
    },
    attorneyFees: { min: 2000, max: 4000 },
    titleInsurance: 0.005,
    mortgageRecordingTax: 0.01925,
    bankAttorneyFee: 900,
    miscFees: 1500,
  },
};

export function calculateNetProceeds(
  salePrice: number,
  mortgageBalance: number,
  brokerCommission: number = 0.05
) {
  const commission = salePrice * brokerCommission;
  const transferTax = salePrice * closingCosts.ny.transferTax.rate;
  const mansionTax = salePrice >= closingCosts.ny.transferTax.mansionTaxThreshold
    ? salePrice * closingCosts.ny.transferTax.mansionTaxRate
    : 0;
  const attorney = (closingCosts.ny.attorneyFees.min + closingCosts.ny.attorneyFees.max) / 2;
  const misc = closingCosts.ny.miscFees;

  const totalClosingCosts = commission + transferTax + mansionTax + attorney + misc;
  const netProceeds = salePrice - mortgageBalance - totalClosingCosts;

  return {
    salePrice,
    mortgageBalance,
    commission,
    transferTax,
    mansionTax,
    attorneyFees: attorney,
    miscFees: misc,
    totalClosingCosts,
    netProceeds,
  };
}

export function calculateMoveScore(
  priorities: Record<string, number>,
  neighborhood: Neighborhood
): number {
  const totalWeight = Object.values(priorities).reduce((a, b) => a + b, 0);
  if (totalWeight === 0) return 0;

  let weightedSum = 0;
  for (const [key, weight] of Object.entries(priorities)) {
    const score = neighborhood.scores[key as keyof Neighborhood["scores"]] || 0;
    weightedSum += score * weight;
  }

  return Math.round(weightedSum / totalWeight);
}
