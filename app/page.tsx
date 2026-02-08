"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import MoveScoreQuiz from "@/components/MoveScoreQuiz";
import ProfitCalculator from "@/components/ProfitCalculator";
import Insights from "@/components/Insights";
import SoldByRobin from "@/components/SoldByRobin";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <Hero onNavigate={setActiveSection} />
      <MarketTicker />
      <section id="insights">
        <Insights />
      </section>
      <section id="score">
        <MoveScoreQuiz />
      </section>
      <section id="calculator">
        <ProfitCalculator />
      </section>
      <section id="sold">
        <SoldByRobin />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
