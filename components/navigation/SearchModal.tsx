"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Building, FileText, Briefcase, MapPin, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { locationsData } from "@/data/locationsData";
import { latestNewsItems, secondaryInsights, featuredInsight } from "@/data/insightsData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or trigger
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allSearchableItems = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: "Services" | "Locations" | "Insights" | "Industries";
      href: string;
      icon: typeof Briefcase;
    }> = [];

    // Services & subservices
    servicesData.forEach((s) => {
      items.push({
        id: `svc-${s.id}`,
        title: s.title,
        subtitle: s.leadSummary,
        category: "Services",
        href: `#services`,
        icon: Briefcase,
      });
      s.subServices.forEach((sub, idx) => {
        items.push({
          id: `sub-${s.id}-${idx}`,
          title: `${sub.name} (${s.title})`,
          subtitle: sub.description,
          category: "Services",
          href: `#services`,
          icon: Briefcase,
        });
      });
    });

    // Locations
    locationsData.forEach((loc) => {
      items.push({
        id: `loc-${loc.id}`,
        title: `Vikas CA ${loc.name} Office`,
        subtitle: `${loc.address} • Lead: ${loc.leadPartner}`,
        category: "Locations",
        href: `#locations`,
        icon: MapPin,
      });
    });

    // Insights
    items.push({
      id: `insight-feat`,
      title: featuredInsight.title,
      subtitle: featuredInsight.excerpt,
      category: "Insights",
      href: `#insights`,
      icon: FileText,
    });

    secondaryInsights.forEach((i) => {
      items.push({
        id: `insight-${i.id}`,
        title: i.title,
        subtitle: i.excerpt,
        category: "Insights",
        href: `#insights`,
        icon: FileText,
      });
    });

    latestNewsItems.forEach((n) => {
      items.push({
        id: `news-${n.id}`,
        title: n.title,
        subtitle: `${n.category} • ${n.date}`,
        category: "Insights",
        href: `#news`,
        icon: FileText,
      });
    });

    // Industries
    const industries = [
      "Family Business & Succession",
      "Mining, Resources & Clean Energy",
      "Property & Construction",
      "Aged Care & Healthcare",
      "Not For Profit & Charities",
      "Funds Management & Private Equity",
      "Hospitality, Food & Beverage",
      "Government & Public Administration",
      "Law Firms & Barristers",
    ];
    industries.forEach((ind, i) => {
      items.push({
        id: `ind-${i}`,
        title: ind,
        subtitle: "Specialized sector advisory & compliance",
        category: "Industries",
        href: `#industries`,
        icon: Building,
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allSearchableItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, allSearchableItems]);

  const popularSearches = [
    "AASB 18 Disclosures",
    "Family Business Succession",
    "Debt Advisory",
    "UN Global Compact",
    "Sydney Office",
    "R&D Tax Incentives",
    "Perth Mining Advisory",
  ];

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#060b13]/80 backdrop-blur-md animate-fade-in-fast"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden transform transition-all animate-slide-down rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-stone-200 bg-stone-50/50">
          <Search className="w-5 h-5 text-stone-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, insights, offices, or people..."
            className="w-full text-base sm:text-lg text-[#0b1524] placeholder-stone-400 bg-transparent border-none outline-none focus:ring-0"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-stone-400 hover:text-stone-700 transition-colors mr-2 cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-stone-500 bg-stone-200/80 hover:bg-stone-300 rounded transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === "" ? (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-stone-400 uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0056b3]" />
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs sm:text-sm px-3 py-1.5 bg-stone-100 hover:bg-[#0056b3] hover:text-white text-stone-700 rounded-sm transition-colors cursor-pointer border border-stone-200/80"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold tracking-wider text-stone-400 uppercase mb-3">
                Browse By Topic
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <Link
                  href="#services"
                  onClick={onClose}
                  className="p-3 bg-stone-50 hover:bg-[#0b1524] hover:text-white group border border-stone-200/70 rounded-xs transition-colors"
                >
                  <Briefcase className="w-4 h-4 mb-2 text-[#0056b3] group-hover:text-white" />
                  <span className="text-xs font-semibold block">5 Core Services</span>
                </Link>
                <Link
                  href="#locations"
                  onClick={onClose}
                  className="p-3 bg-stone-50 hover:bg-[#0b1524] hover:text-white group border border-stone-200/70 rounded-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 mb-2 text-[#0056b3] group-hover:text-white" />
                  <span className="text-xs font-semibold block">10 AU/NZ Offices</span>
                </Link>
                <Link
                  href="#insights"
                  onClick={onClose}
                  className="p-3 bg-stone-50 hover:bg-[#0b1524] hover:text-white group border border-stone-200/70 rounded-xs transition-colors"
                >
                  <FileText className="w-4 h-4 mb-2 text-[#0056b3] group-hover:text-white" />
                  <span className="text-xs font-semibold block">The Bottom Line</span>
                </Link>
                <Link
                  href="#stories"
                  onClick={onClose}
                  className="p-3 bg-stone-50 hover:bg-[#0b1524] hover:text-white group border border-stone-200/70 rounded-xs transition-colors"
                >
                  <Building className="w-4 h-4 mb-2 text-[#0056b3] group-hover:text-white" />
                  <span className="text-xs font-semibold block">Client Stories</span>
                </Link>
              </div>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-wider text-stone-400 uppercase mb-2">
                Search Results ({filteredItems.length})
              </div>
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start justify-between p-3.5 hover:bg-stone-100/90 rounded-sm group transition-colors border border-transparent hover:border-stone-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-stone-100 group-hover:bg-white text-[#0056b3] rounded-xs mt-0.5 transition-colors border border-stone-200/60">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0b1524] group-hover:text-[#0056b3] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-stone-400 group-hover:text-[#0056b3]">
                      <span>{item.category}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <Search className="w-8 h-8 text-stone-300 mx-auto mb-3" />
              <p className="text-stone-700 font-semibold">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-stone-400 mt-1">
                Try searching for &ldquo;Services&rdquo;, &ldquo;Sydney&rdquo;, &ldquo;Tax&rdquo;, or &ldquo;Advisory&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Vikas CA Knowledge & Service Directory</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
