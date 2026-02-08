"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MoveScoreQuiz from "@/components/MoveScoreQuiz";
import ProfitCalculator from "@/components/ProfitCalculator";
import FeaturedListings from "@/components/FeaturedListings";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <Hero onNavigate={setActiveSection} />
      <section id="score">
        <MoveScoreQuiz />
      </section>
      <section id="calculator">
        <ProfitCalculator />
      </section>
      <section id="listings">
        <FeaturedListings />
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
