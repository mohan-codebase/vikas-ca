"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/Preloader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { CultureStatement } from "@/components/sections/CultureStatement";
import { Services } from "@/components/sections/Services";
import { ClientStories } from "@/components/sections/ClientStories";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { Locations } from "@/components/sections/Locations";
import { Insights } from "@/components/sections/Insights";
import { LatestNews } from "@/components/sections/LatestNews";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  // Cursor glow tracker
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      {/* ── Cinematic Preloader ──────────────────────── */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* ── Ambient cursor glow (desktop only) ──────── */}
      <div
        className="cursor-glow hidden lg:block"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* ── Main site content ───────────────────────── */}
      <AnimatePresence>
        {preloaderDone && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col min-h-screen bg-white text-[#0f172a]"
          >
            {/* Floating Navbar */}
            <Header />

            {/* Main scrollable content */}
            <ScrollReveal>
              <main>
                {/* 1. Cinematic parallax hero */}
                <Hero />

                {/* 2. News slider */}
                <div className="reveal">
                  <AnnouncementBar />
                </div>

                {/* 3. Culture statement */}
                <div className="reveal">
                  <CultureStatement />
                </div>

                {/* 4. Interactive services explorer */}
                <div className="reveal">
                  <Services />
                </div>

                {/* 5. Client stories & case studies */}
                <div className="reveal">
                  <ClientStories />
                </div>

                {/* 6. Careers banner */}
                <div className="reveal">
                  <CareersBanner />
                </div>

                {/* 7. Locations explorer */}
                <div className="reveal">
                  <Locations />
                </div>

                {/* 8. Insights magazine */}
                <div className="reveal">
                  <Insights />
                </div>

                {/* 9. Latest news */}
                <div className="reveal">
                  <LatestNews />
                </div>

                {/* 10. Contact CTA */}
                <div className="reveal">
                  <ContactCTA />
                </div>
              </main>

              {/* Floating footer */}
              <Footer />
            </ScrollReveal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
