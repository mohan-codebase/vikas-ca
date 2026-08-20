"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Award, Shield, Globe, ChevronDown } from "lucide-react";

const WORDS = ["accounting", "advisory", "strategy", "confidence", "clarity"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cycling animated word
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col bg-[#060c15] overflow-hidden"
    >
      {/* ── Background Layers ──────────────────────────────────── */}

      {/* Mesh gradient */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099db]/20 to-transparent pointer-events-none"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* ── Large Background Image ─────────────────────────── */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none"
        style={{ y: imageY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
          alt="Modern Australian corporate architecture — Vikas CA"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Left gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c15] via-[#060c15]/80 lg:via-[#060c15]/60 to-transparent" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c15] via-transparent to-[#060c15]/30" />
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-[#0056b3]/5 mix-blend-multiply" />
      </motion.div>

      {/* ── Content ────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col flex-1 justify-center pt-32 pb-20 max-w-[1360px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0056b3]/15 border border-[#0056b3]/30 rounded-full backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-[#c89d5c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#00a3e0]">
                Client Choice Awards 2026 — #1 Accounting Firm
              </span>
            </div>
          </motion.div>

          {/* Main headline — stagger words */}
          <div className="mb-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] font-extrabold leading-[1.03] tracking-tight-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Line 1 */}
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Better
              </motion.span>

              {/* Line 2 — animated cycling word */}
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-white">advice </span>
                <span className="relative inline-block overflow-hidden h-[1.1em] align-bottom">
                  {WORDS.map((w, i) => (
                    <motion.span
                      key={w}
                      className="absolute inset-0 flex items-center"
                      initial={false}
                      animate={{
                        y: i === wordIndex ? 0 : i < wordIndex ? "-100%" : "100%",
                        opacity: i === wordIndex ? 1 : 0,
                      }}
                      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                      style={{
                        background: "linear-gradient(135deg, #0099db 0%, #0056b3 60%, #c89d5c 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        whiteSpace: "nowrap",
                        paddingRight: "0.05em",
                      }}
                    >
                      {w}
                    </motion.span>
                  ))}
                  {/* Width placeholder from longest word */}
                  <span className="invisible" aria-hidden>
                    {WORDS.reduce((a, b) => (a.length > b.length ? a : b))}
                  </span>
                </span>
              </motion.span>

              {/* Line 3 */}
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                for what&apos;s next.
              </motion.span>
            </motion.h1>
          </div>

          {/* Body text */}
          <motion.p
            className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Accounting, advisory, and wealth expertise built around the pivotal decisions that shape your commercial legacy — delivered by Australia&apos;s premier independent network.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="#services"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-[#0056b3]/20"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#locations"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm rounded-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin className="w-4 h-4 text-stone-400 group-hover:text-[#00a3e0]" />
              Find an office
            </motion.a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-white/[0.07]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            {[
              { value: "10", label: "Offices AU & NZ" },
              { value: "130+", label: "Partners", color: true },
              { value: "40+", label: "Years", accent: "cyan" },
              { value: "#1", label: "Client Choice 2026", accent: "gold" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="flex flex-col"
              >
                <span
                  className="text-2xl sm:text-3xl font-black tracking-tight font-mono"
                  style={{
                    color:
                      stat.accent === "gold"
                        ? "#c89d5c"
                        : stat.accent === "cyan"
                        ? "#00a3e0"
                        : "#ffffff",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-medium mt-0.5">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            {/* Vikas CA International badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-xl"
            >
              <Globe className="w-3.5 h-3.5 text-[#00a3e0]" />
              <span className="text-[11px] text-stone-400 font-medium">
                Vikas CA International · 157 Countries
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating Trust Cards ───────────────────────────── */}
      {/* Bottom-right floating card */}
      <motion.div
        className="absolute bottom-28 right-6 lg:right-[8%] hidden lg:block z-20"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        <div
          className="w-64 p-4 rounded-2xl border border-white/[0.09] shadow-2xl"
          style={{
            background: "rgba(10, 18, 30, 0.88)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#0056b3]/20 text-[#00a3e0] rounded-lg">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#00a3e0]">
                Award Recognition
              </div>
              <div className="text-[12px] font-bold text-white">
                Client Choice Awards 2026
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-1 rounded-full bg-[#c89d5c] opacity-80" />
            ))}
            <span className="text-[10px] text-stone-500 ml-1">Best Accounting Firm</span>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ───────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-stone-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-stone-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
