"use client";

import React from "react";
import Image from "next/image";
import { Mic, Building2, UserCheck, Play, Quote } from "lucide-react";
import { featuredCaseStudy, podcastStory, peopleQAStory } from "@/data/storiesData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";

export function ClientStories() {
  return (
    <section id="stories" className="bg-[#fbfbfa] py-20 lg:py-32 border-b border-[#e6e4dc]">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Clear Ownership & Governance"
          title="A Delivery Model Built Around Your Business"
          description="There is no standard outsourcing package at NICS. Whether you need one dedicated accountant, an entire finance team, or seasonal audit support, our delivery model is structured around your specific requirements."
          align="split"
        />

        {/* Major Split Layout: Featured Delivery Model */}
        <div className="bg-white border border-[#e7e5dc] rounded-xs shadow-sm overflow-hidden mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[340px] lg:min-h-[480px]">
              <Image
                src={featuredCaseStudy.image}
                alt="NICS offshore team delivery model"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Client Badge on Image */}
              <div className="absolute top-6 left-6">
                <Badge variant="white" size="md">
                  {featuredCaseStudy.badge}
                </Badge>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-[#00a3e0] font-semibold mb-1">
                  {featuredCaseStudy.category}
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  What You Keep. What We Take Care Of.
                </div>
              </div>
            </div>

            {/* Right Story Content & Testimonial */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0056b3] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Operating Principle
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1524] leading-snug">
                  {featuredCaseStudy.headline}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {featuredCaseStudy.subheadline}
                </p>

                {/* Client Quote Box */}
                {featuredCaseStudy.quote && (
                  <div className="p-5 bg-stone-50 border-l-2 border-[#0056b3] rounded-xs space-y-3">
                    <Quote className="w-5 h-5 text-[#0056b3]/50" />
                    <p className="text-sm italic text-stone-700 leading-relaxed font-serif">
                      &ldquo;{featuredCaseStudy.quote}&rdquo;
                    </p>
                    {featuredCaseStudy.author && (
                      <div className="text-xs font-semibold text-[#0b1524]">
                        {featuredCaseStudy.author.name} — <span className="text-stone-500">{featuredCaseStudy.author.title}, {featuredCaseStudy.author.firm}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Stats Bar */}
                {featuredCaseStudy.stats && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
                    {featuredCaseStudy.stats.map((st, i) => (
                      <div key={i}>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#0b1524] font-mono">
                          {st.value}
                        </div>
                        <div className="text-[11px] text-stone-500 font-medium mt-0.5">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <ArrowLink href={featuredCaseStudy.href} variant="navy" size="md">
                  {featuredCaseStudy.linkText}
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Story Cards: Podcast & People Q&A */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Talking Family Business Podcast */}
          <div className="bg-white border border-[#e7e5dc] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-stone-400 transition-colors group">
            <div className="space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden">
                <Image
                  src={podcastStory.image}
                  alt="Talking Family Business podcast recording studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-3 left-3">
                  <Badge variant="navy" size="sm">
                    {podcastStory.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 p-2.5 bg-[#0056b3] text-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-[#0056b3] flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5" />
                {podcastStory.category}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b1524]">
                {podcastStory.headline}
              </h4>

              <p className="text-sm text-stone-600 leading-relaxed">
                {podcastStory.synopsis}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {podcastStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <ArrowLink href={podcastStory.href} variant="navy" size="md">
                {podcastStory.linkText}
              </ArrowLink>
            </div>
          </div>

          {/* Card 2: People Q&A with Will & Rémi */}
          <div className="bg-white border border-[#e7e5dc] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-stone-400 transition-colors group">
            <div className="space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden">
                <Image
                  src={peopleQAStory.image}
                  alt="NICS professionals Will and Rémi collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-3 left-3">
                  <Badge variant="navy" size="sm">
                    {peopleQAStory.badge}
                  </Badge>
                </div>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-[#0056b3] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                {peopleQAStory.category}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b1524]">
                {peopleQAStory.headline}
              </h4>

              <p className="text-sm text-stone-600 leading-relaxed">
                {peopleQAStory.synopsis}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {peopleQAStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <ArrowLink href={peopleQAStory.href} variant="navy" size="md">
                {peopleQAStory.linkText}
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
