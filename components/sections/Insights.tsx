"use client";

import React from "react";
import Image from "next/image";
import { Clock, ArrowRight, User } from "lucide-react";
import { featuredInsight, secondaryInsights } from "@/data/insightsData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Insights() {
  return (
    <section id="insights" className="bg-white py-20 lg:py-32 border-b border-stone-200">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Intelligence & Market Perspectives"
          title="Insights"
          description="Authoritative thought leadership, accounting standard interpretations, tax alerts, and economic updates from our senior partners."
          align="split"
          action={
            <Button
              href="#news"
              variant="outline-dark"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Browse all publications
            </Button>
          }
        />

        {/* Major Editorial Grid: 1 Dominant Feature + 3 Secondary Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-stretch">
          {/* Dominant Flagship Publication Card */}
          <div className="lg:col-span-7 bg-white text-[#0b1524] rounded-xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between group card-lift cursor-pointer">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={featuredInsight.image}
                alt={featuredInsight.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <Badge variant="navy" size="md" className="bg-[#0056b3] text-white border-none shadow-xs">
                  {featuredInsight.edition}
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00a3e0]" />
                  <span>{featuredInsight.readTime}</span>
                  <span>•</span>
                  <span>{featuredInsight.date}</span>
                </div>
                <div className="flex items-center gap-1 text-white font-medium">
                  <User className="w-3.5 h-3.5 text-[#00a3e0]" />
                  <span>{featuredInsight.author.office} Office</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0056b3]">
                  {featuredInsight.category}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1524] leading-snug group-hover:text-[#0056b3] transition-colors">
                  {featuredInsight.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredInsight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <ArrowLink href={featuredInsight.href} variant="blue" size="md">
                  Read full issue of The Bottom Line
                </ArrowLink>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {secondaryInsights.map((art) => (
              <div
                key={art.id}
                className="bg-[#fbfbfa] border border-[#e7e5dc] rounded-xs p-5 sm:p-6 hover:border-stone-400 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-semibold text-[#0056b3] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">
                    By {art.author.name} ({art.author.office})
                  </span>
                  <ArrowLink href={art.href} variant="navy" size="sm">
                    Read
                  </ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
