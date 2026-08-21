"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Globe, Users } from "lucide-react";
import { announcementsData } from "@/data/announcementsData";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = announcementsData.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(handleNext, 7000);
    return () => clearInterval(id);
  }, [isPaused, handleNext]);

  const current = announcementsData[currentIndex];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Recognition": return <Award className="w-4 h-4 text-[#c89d5c]" />;
      case "Sustainability": return <Globe className="w-4 h-4 text-[#00a3e0]" />;
      default: return <Users className="w-4 h-4 text-[#0056b3]" />;
    }
  };

  return (
    <section
      id="announcements"
      className="relative bg-[#f8fafc] border-y border-stone-200 overflow-hidden text-[#0b1524]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured announcements"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/[0.03] via-transparent to-transparent pointer-events-none" />

      <Container size="default" className="relative z-10 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          {/* Left: counter + nav */}
          <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 flex-shrink-0">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0056b3] flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] animate-pulse-slow" />
                Featured
              </div>
              <div className="font-mono font-bold text-[#0b1524] text-xl">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-stone-400 text-sm font-normal">
                  {" "}/ {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-[#0b1524] rounded-lg transition-all shadow-2xs cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-[#0b1524] rounded-lg transition-all shadow-2xs cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center: animated content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1.5"
              >
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  {getCategoryIcon(current.category)}
                  <span className="font-semibold text-[#0b1524]">{current.badge}</span>
                  <span>·</span>
                  <span>{current.date}</span>
                </div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#0b1524] leading-snug line-clamp-2">
                  {current.title}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 line-clamp-1">
                  {current.summary}
                </p>
                <ArrowLink href={current.href} variant="blue" size="sm">
                  {current.linkText}
                </ArrowLink>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: image thumbnail */}
          <div className="hidden md:block relative w-28 h-18 flex-shrink-0 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-200 h-[2px] mt-5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0056b3] to-[#0099db]"
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </Container>
    </section>
  );
}
