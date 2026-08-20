"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Search, PhoneCall, MapPin, ArrowRight } from "lucide-react";
import { navigationData } from "@/data/navigationData";
import { locationsData } from "@/data/locationsData";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenAccordion(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
      className="fixed inset-0 z-50 bg-[#060b13]/80 backdrop-blur-md lg:hidden animate-fade-in-fast"
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0b1524] text-white flex flex-col shadow-2xl overflow-hidden border-l border-stone-800 animate-slide-down">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-xl text-white">Vikas CA</span>
            <span className="text-stone-400 text-xs uppercase tracking-widest font-semibold border-l border-stone-700 pl-2">
              Australia
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800/60 rounded-sm transition-colors cursor-pointer"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Search Action */}
        <div className="p-6 pb-4 border-b border-stone-800">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-4 py-3 bg-stone-900 border border-stone-700/80 rounded-sm text-stone-300 hover:text-white hover:border-stone-500 transition-colors text-sm"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#00a3e0]" />
              Search services, offices, insights...
            </span>
            <span className="text-xs text-stone-400 bg-stone-800 px-2 py-0.5 rounded">⌘K</span>
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1 divide-y divide-stone-800/60">
          {navigationData.map((item) => {
            const isExpanded = openAccordion === item.title;
            return (
              <div key={item.title} className="pt-2">
                <button
                  onClick={() => toggleAccordion(item.title)}
                  className="w-full flex items-center justify-between py-3 text-left font-semibold text-lg text-white hover:text-[#00a3e0] transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#00a3e0]" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pl-3 pb-4 pt-1 space-y-4 animate-fade-in-fast">
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.description}
                    </p>

                    {item.columns?.map((col, cIdx) => (
                      <div key={cIdx} className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                          {col.heading}
                        </div>
                        <ul className="space-y-1.5 pl-2 border-l border-stone-800">
                          {col.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                onClick={onClose}
                                className="block py-1 text-sm text-stone-300 hover:text-white"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pt-2">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] hover:underline flex items-center gap-1.5"
                      >
                        Explore all {item.title}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Offices List */}
          <div className="pt-6 pb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00a3e0]" />
              Direct Office Lines (10 Locations)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {locationsData.slice(0, 6).map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                  className="p-2 bg-stone-900/80 border border-stone-800 rounded hover:border-stone-600 block transition-colors"
                >
                  <span className="font-semibold text-white block">{loc.name}</span>
                  <span className="text-stone-400 text-[11px]">{loc.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-6 border-t border-stone-800 bg-[#060b13] space-y-3">
          <Button
            href="#contact"
            onClick={onClose}
            variant="primary-blue"
            className="w-full justify-center"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Contact our team
          </Button>
          <div className="flex items-center justify-center gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
              1300 Vikas CA AUS
            </span>
            <span>•</span>
            <Link href="#locations" onClick={onClose} className="hover:text-white underline">
              All 10 Offices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
