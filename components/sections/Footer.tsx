"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Globe, Radio } from "lucide-react";
import { footerColumns, legalLinks } from "@/data/footerData";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-12 mx-4 mb-4 rounded-3xl overflow-hidden glass-footer border border-stone-200 shadow-xs bg-[#f8fafc]">
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent" />

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(0,86,179,0.03) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 20%, rgba(0,153,219,0.02) 0%, transparent 60%)",
        }}
      />

      <Container size="default" className="relative z-10 pt-14 pb-8">
        {/* ── Brand + Social + Back-to-top ────────────────── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-stone-200">
          <div className="space-y-4 max-w-sm">
            <Logo className="h-[54px]" />
            <p className="text-[13px] text-stone-600 leading-relaxed">
              Chartered Accountants, Business Advisers & Wealth Specialists.<br />
              India&apos;s trusted back-office partner for accounting and advisory firms worldwide.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2 pt-1">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/nics/",
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                  ),
                },
                {
                  label: "X (Twitter)",
                  href: "https://x.com/NICS",
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/user/NICS",
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: "Podcast",
                  href: "#stories",
                  icon: <Radio className="w-3.5 h-3.5" />,
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="p-2 bg-white hover:bg-[#0056b3] text-stone-600 hover:text-white rounded-lg border border-stone-200 hover:border-[#0056b3] shadow-2xs transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 self-start px-4 py-2 bg-white hover:bg-stone-100 text-[12px] font-semibold text-stone-700 hover:text-[#0b1524] rounded-xl border border-stone-200 shadow-2xs transition-all cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 text-[#0056b3]" />
          </motion.button>
        </div>

        {/* ── Directory Columns ────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-stone-200">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b1524]">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-stone-600 hover:text-[#0056b3] transition-colors underline-grow"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── NICS International Notice ──────────────────── */}
        <div className="py-6 border-b border-stone-200 space-y-2">
          <div className="flex items-center gap-2 text-[12px] text-stone-800 font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#0056b3]" />
            NICS International Member Network
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed max-w-3xl">
            NICS is an independent network of accounting and advisory firms. Member firms of NICS International, a worldwide network present in 157 countries. Each member firm is a separate and independent legal entity.
          </p>
          <p className="text-[11px] text-stone-500">
            Liability limited by a scheme approved under Professional Standards Legislation.
          </p>
        </div>

        {/* ── Legal strip ──────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <span>
            &copy; {new Date().getFullYear()} NICS. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#0056b3] transition-colors">
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
