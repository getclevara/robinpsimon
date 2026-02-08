import type { Metadata } from "next";
import ScorePage from "@/components/ScorePage";

export const metadata: Metadata = {
  title: "What's Your Move Score? | Robin Simon — Berkshire Hathaway HomeServices",
  description: "Find your perfect neighborhood in 60 seconds. Personalized rankings for Queens, Nassau & Suffolk County.",
  openGraph: {
    title: "What's Your Move Score?",
    description: "Find your perfect neighborhood in 60 seconds.",
    type: "website",
    images: ["/victorlazarovubFLRP4c1gunsplash.jpg"],
  },
};

export default function Score() {
  return <ScorePage />;
}
