"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Shield, Globe, ChevronDown } from "lucide-react";

const WORDS = ["capacity", "accounting", "SMSF & audit", "operations", "growth"];

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
      className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-white overflow-hidden text-[#0b1524]"
    >
      {/* ── Background Layers ──────────────────────────────────── */}

      {/* Mesh gradient */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
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
          src="/images/svg-hero.svg"
          alt="NICS Offshore Delivery Center"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Left gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 lg:via-[#f8fafc]/70 to-transparent" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-[#f8fafc]/30" />
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-[#0056b3]/5 mix-blend-multiply" />
      </motion.div>

      {/* ── Content ────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col flex-1 justify-center pt-32 pb-20 max-w-[1360px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl">

          {/* Main headline — stagger words */}
          <div className="mb-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-extrabold leading-[1.04] tracking-tight-title text-[#0b1524]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Line 1 */}
              <motion.span
                className="block text-[#0b1524]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Scale Your Business
              </motion.span>

              {/* Line 2 — animated cycling word */}
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[#0b1524]">without building </span>
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
                        background: "linear-gradient(135deg, #0056b3 0%, #0099db 60%, #c89d5c 100%)",
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
                className="block text-[#0b1524]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                every function in-house.
              </motion.span>
            </motion.h1>
          </div>

          {/* Body text */}
          <motion.p
            className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            NICS provides Australian businesses with a flexible offshore delivery model that gives you access to experienced professionals without the cost and complexity of building every support function internally. You remain focused on your clients. We help you manage the workload behind them.
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
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-[#0056b3]/25"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore our services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 text-[#0b1524] font-semibold text-sm rounded-xl transition-all duration-300 shadow-xs"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin className="w-4 h-4 text-stone-500 group-hover:text-[#0056b3]" />
              Discuss what to move offshore
            </motion.a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-stone-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            {[
              { value: "Flexible", label: "Capacity" },
              { value: "Cost", label: "Efficiency", color: true },
              { value: "AASB", label: "Aligned", accent: "cyan" },
              { value: "ISO 27001", label: "Principles", accent: "gold" },
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
                        ? "#916524"
                        : stat.accent === "cyan"
                        ? "#007bb5"
                        : "#0b1524",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-medium mt-0.5">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            <div className="h-8 w-px bg-stone-200 hidden sm:block" />

            {/* NICS Delivery badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 rounded-xl shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#0056b3]" />
              <span className="text-[11px] text-stone-600 font-medium">
                NICS Delivery · India & Australia
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
          className="w-64 p-4 rounded-2xl border border-stone-200 shadow-xl"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-[#0056b3] border border-blue-100 rounded-lg">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#0056b3]">
                Information Security
              </div>
              <div className="text-[12px] font-bold text-[#0b1524]">
                ISO/IEC 27001 Aligned
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-1 rounded-full bg-[#c89d5c]" />
            ))}
            <span className="text-[10px] text-stone-500 ml-1 font-medium">Offshore Delivery Partner</span>
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
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-stone-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
