"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Newspaper, BellRing } from "lucide-react";
import { latestNewsItems } from "@/data/insightsData";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function LatestNews() {
  return (
    <section id="news" className="bg-[#f7f6f2] py-16 lg:py-24 border-b border-[#e6e4dc]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Newsletter Subscribe Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#0056b3] mb-2 flex items-center gap-1.5">
                <Newspaper className="w-4 h-4" />
                Timely Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b1524]">
                Latest News & Alerts
              </h2>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              Stay ahead of legislative developments, ATO tax benchmarks, and reporting standards with our regular news briefings.
            </p>

            <div className="p-5 bg-white border border-[#e6e4dc] rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0b1524] uppercase tracking-wider">
                <BellRing className="w-4 h-4 text-[#0056b3]" />
                Tax & Advisory Alerts
              </div>
              <p className="text-xs text-stone-600">
                Receive crucial regulatory and tax updates directly to your inbox every fortnight.
              </p>
              <ArrowLink href="#contact" variant="blue" size="sm">
                Subscribe to Vikas CA alerts
              </ArrowLink>
            </div>
          </div>

          {/* Right Column: Compact Editorial List with Dividers */}
          <div className="lg:col-span-8 bg-white border border-[#e6e4dc] rounded-xs divide-y divide-[#e6e4dc] shadow-xs">
            {latestNewsItems.map((item, idx) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 hover:bg-stone-50 transition-colors gap-3"
              >
                <div className="space-y-1 sm:max-w-xl">
                  <div className="flex items-center gap-3 text-xs text-stone-400">
                    <span className="font-semibold text-[#0056b3] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span>•</span>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime} read</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-400 group-hover:text-[#0056b3] group-hover:translate-x-1 transition-all flex-shrink-0 self-end sm:self-center">
                  <span>Read alert</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
