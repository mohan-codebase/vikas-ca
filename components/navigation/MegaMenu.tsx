"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MegaMenuItem } from "@/data/navigationData";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";

interface MegaMenuProps {
  item: MegaMenuItem;
  isOpen?: boolean;
  onClose: () => void;
}

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl overflow-hidden shadow-2xl border border-stone-200"
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(32px) saturate(180%)",
        WebkitBackdropFilter: "blur(32px) saturate(180%)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 2px 10px rgba(0,0,0,0.04)",
      }}
      onMouseLeave={onClose}
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0056b3]/50 to-transparent" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left: Overview + Featured card */}
          <div className="col-span-4 flex flex-col gap-5 border-r border-stone-200 pr-8">
            {/* Eyebrow */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#0056b3] mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-px bg-[#0056b3]" />
                {item.title}
              </div>
              <h3 className="text-xl font-bold text-[#0b1524] tracking-tight mb-2">
                {item.title} Services
              </h3>
              <p className="text-[13px] text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Featured spotlight card */}
            {item.featured && (
              <Link
                href={item.featured.href}
                onClick={onClose}
                className="group block rounded-xl overflow-hidden border border-stone-200 hover:border-[#0056b3]/50 transition-all bg-stone-50/70 hover:bg-stone-100/80 shadow-2xs"
              >
                {item.featured.image && (
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={item.featured.image}
                      alt={item.featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#0056b3] text-white px-2 py-0.5 rounded">
                        {item.featured.tag}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-3.5 space-y-1.5">
                  <div className="text-[12px] font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors line-clamp-2 leading-snug">
                    {item.featured.title}
                  </div>
                  <p className="text-[11px] text-stone-500 line-clamp-2">
                    {item.featured.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[#0056b3] font-semibold pt-0.5">
                    <span>{item.featured.linkText}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            )}

            {/* View all link */}
            <div className="pt-1 mt-auto">
              <Link
                href={item.href}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-600 hover:text-[#0056b3] transition-colors"
              >
                View all {item.title}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right: Structured columns */}
          <div className="col-span-8">
            <div className="grid grid-cols-3 gap-6">
              {item.columns?.map((col, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                  className="space-y-3"
                >
                  <h4 className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 border-b border-stone-200 pb-2">
                    {col.heading}
                  </h4>
                  <ul className="space-y-0.5">
                    {col.items.map((sub, si) => (
                      <li key={si}>
                        <Link
                          href={sub.href}
                          onClick={onClose}
                          className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-stone-100 transition-colors"
                        >
                          <div>
                            <span className="text-[13px] font-medium text-stone-700 group-hover:text-[#0056b3] transition-colors block">
                              {sub.title}
                            </span>
                            {sub.description && (
                              <span className="text-[11px] text-stone-500 group-hover:text-stone-600 block mt-0.5">
                                {sub.description}
                              </span>
                            )}
                          </div>
                          {sub.badge && (
                            <Badge variant="blue" size="sm" className="text-[9px] ml-2 flex-shrink-0">
                              {sub.badge}
                            </Badge>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200 bg-stone-50/70 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[11px] text-stone-500">
          <span>10 AU/NZ Offices</span>
          <span className="w-px h-3 bg-stone-300" />
          <span>Vikas CA International — 157 Countries</span>
        </div>
        <ArrowLink href="#contact" variant="blue" size="sm" onClick={onClose}>
          Book a consultation
        </ArrowLink>
      </div>
    </motion.div>
  );
}
