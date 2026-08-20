"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { navigationData } from "@/data/navigationData";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 30);
      // Hide nav on scroll down, show on scroll up
      if (y > 120) {
        setIsVisible(y < lastScrollY.current);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cmd+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeItem = navigationData.find((i) => i.title === activeMegaMenu);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -90,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed left-4 right-4 top-4 z-50 rounded-2xl transition-all duration-300",
          isScrolled
            ? "glass-nav top-3"
            : "bg-[#0b1524]/70 backdrop-blur-md border border-white/[0.06]"
        )}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        {/* Subtle top highlight line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl" />

        <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
          >
            {/* Animated icon mark */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-lg bg-[#0056b3]"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
              <span className="relative z-10 text-white font-black text-sm tracking-tighter">
                H
              </span>
            </div>

            <div className="flex flex-col -gap-0.5">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold tracking-tighter text-white leading-none group-hover:text-[#00a3e0] transition-colors duration-300">
                  Vikas CA
                </span>
                <span className="text-[11px] font-semibold text-stone-400 tracking-widest uppercase">
                  MANN JUDD
                </span>
              </div>
              <span className="text-[9px] font-medium text-stone-500 tracking-[0.2em] uppercase -mt-0.5 hidden sm:block">
                ADVISORY · ACCOUNTING · WEALTH
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationData.map((item) => {
              const isActive = activeMegaMenu === item.title;
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu(item.title)}
                >
                  <button
                    onClick={() =>
                      setActiveMegaMenu(isActive ? null : item.title)
                    }
                    className={clsx(
                      "relative px-3 xl:px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 rounded-lg flex items-center gap-1 focus:outline-none cursor-pointer",
                      isActive
                        ? "text-white bg-white/8"
                        : "text-stone-300 hover:text-white hover:bg-white/5"
                    )}
                    aria-expanded={isActive}
                  >
                    {item.title}
                    <ChevronDown
                      className={clsx(
                        "w-3 h-3 text-stone-500 transition-transform duration-300",
                        isActive && "rotate-180 text-[#00a3e0]"
                      )}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-white/8 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* ── Right Actions ────────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-[12px] font-medium text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-lg transition-all duration-200 cursor-pointer"
              aria-label="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-stone-500">Search</span>
              <kbd className="hidden md:inline-block text-[10px] text-stone-600 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Contact CTA */}
            <motion.a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold bg-[#0056b3] hover:bg-[#004494] text-white rounded-xl transition-all duration-200 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Mega Menu Panel ──────────────────────────────── */}
        <AnimatePresence>
          {activeItem && (
            <MegaMenu
              item={activeItem}
              isOpen
              onClose={() => setActiveMegaMenu(null)}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
