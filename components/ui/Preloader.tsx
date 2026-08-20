"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOAD_STEPS = [
  { label: "Initialising systems…", pct: 12 },
  { label: "Loading practice data…", pct: 30 },
  { label: "Calibrating insights…", pct: 54 },
  { label: "Connecting global network…", pct: 75 },
  { label: "Preparing your experience…", pct: 91 },
  { label: "Almost ready…", pct: 99 },
];

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let step = 0;
    const advance = () => {
      if (step >= LOAD_STEPS.length) {
        // Shoot to 100 then exit
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 750);
        }, 400);
        return;
      }
      const { pct } = LOAD_STEPS[step];
      setProgress(pct);
      setStepIndex(step);
      step++;
      setTimeout(advance, step === 1 ? 220 : step === LOAD_STEPS.length ? 150 : 280);
    };
    const id = setTimeout(advance, 150);
    return () => clearTimeout(id);
  }, [onComplete]);

  const displayCounter = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
          }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated background grid */}
          <div className="preloader__grid" />

          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099db]/30 to-transparent z-10 pointer-events-none"
            animate={{ y: ["0vh", "100vh"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner decorators */}
          {[
            "top-6 left-6",
            "top-6 right-6",
            "bottom-6 left-6",
            "bottom-6 right-6",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-10 h-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.3 + i * 0.07 }}
            >
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path
                  d={
                    i === 0
                      ? "M0 20 L0 0 L20 0"
                      : i === 1
                      ? "M40 20 L40 0 L20 0"
                      : i === 2
                      ? "M0 20 L0 40 L20 40"
                      : "M40 20 L40 40 L20 40"
                  }
                  stroke="#0099db"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
          ))}

          {/* Radial ambient light */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,86,179,0.12) 0%, transparent 70%)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central content */}
          <div className="preloader__logo flex flex-col items-center gap-6">
            {/* Spinning ring + Vikas CA monogram */}
            <div className="relative flex items-center justify-center">
              {/* Outer ring */}
              <motion.svg
                width={120}
                height={120}
                viewBox="0 0 120 120"
                className="absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  fill="none"
                  stroke="rgba(0,153,219,0.15)"
                  strokeWidth="1"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="80 270"
                />
                <defs>
                  <linearGradient id="ringGrad" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#0099db" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Inner ring (reverse) */}
              <motion.svg
                width={88}
                height={88}
                viewBox="0 0 88 88"
                className="absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="none"
                  stroke="rgba(200,157,92,0.2)"
                  strokeWidth="1"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="none"
                  stroke="#c89d5c"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="30 220"
                  opacity="0.5"
                />
              </motion.svg>

              {/* Vikas CA monogram */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center"
              >
                <span
                  className="text-3xl font-extrabold tracking-tighter text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Vikas CA
                </span>
              </motion.div>
            </div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="preloader__counter">
                {String(displayCounter).padStart(2, "0")}
                <span className="text-[#0099db]">%</span>
              </div>

              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="preloader__label"
              >
                {LOAD_STEPS[Math.min(stepIndex, LOAD_STEPS.length - 1)]?.label}
              </motion.div>
            </motion.div>

            {/* Vikas CA wordmark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-[0.22em] font-medium"
            >
              <span className="w-6 h-px bg-stone-700" />
              MANN JUDD AUSTRALIA
              <span className="w-6 h-px bg-stone-700" />
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div className="preloader__bar" style={{ width: `${progress}%` }} />

          {/* Bottom status bar */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[10px] text-stone-600 uppercase tracking-widest font-medium">
            <span>Vikas CA International Network — 157 Countries</span>
            <span>Client Choice Awards 2026 — #1 Accounting Firm</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
