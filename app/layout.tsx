import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin Simon | Berkshire Hathaway HomeServices — Your Move. Your Advantage.",
  description:
    "Robin Simon helps buyers and sellers across Queens, Nassau County & Western Suffolk make smarter real estate decisions with neighborhood intelligence and market insights no other agent provides.",
  openGraph: {
    title: "Robin Simon | Your Move. Your Advantage.",
    description:
      "Neighborhood intelligence, market insights & equity tools for Queens, Nassau & Suffolk County real estate.",
    type: "website",
    images: ["/harrygillen1j6ebGoAic0unsplash.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
