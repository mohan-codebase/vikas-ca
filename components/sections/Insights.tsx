"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ArrowRight,
  User,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import clsx from "clsx";
import { featuredInsight, secondaryInsights, InsightArticle } from "@/data/insightsData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Insights() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [featuredExpanded, setFeaturedExpanded] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="insights" className="bg-white py-20 lg:py-32 border-b border-stone-200">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Security & Practice Intelligence"
          title="Information Security & Standards"
          description="Our operating approach is designed around recognized information security principles, ISO/IEC 27001, and AASB requirements for Australian practices."
          align="split"
          action={
            <Button
              href="#news"
              variant="outline-dark"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              View all briefings
            </Button>
          }
        />

        {/* Major Editorial Grid: 1 Dominant Feature + 3 Secondary Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          {/* Dominant Flagship Publication Card */}
          <div className="lg:col-span-6 xl:col-span-6 bg-white text-[#0b1524] rounded-xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between group transition-all duration-300">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={featuredInsight.image}
                alt={featuredInsight.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
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

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0056b3]">
                    {featuredInsight.category}
                  </span>
                  {featuredExpanded && (
                    <Badge variant="blue" size="sm" className="text-[10px] px-2 py-0.5">
                      Full Briefing
                    </Badge>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1524] leading-snug group-hover:text-[#0056b3] transition-colors">
                  {featuredInsight.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>

                {/* Expanded content for featured insight */}
                <AnimatePresence>
                  {featuredExpanded && featuredInsight.fullContent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden space-y-4 pt-3 border-t border-stone-100"
                    >
                      <p className="text-sm text-stone-700 leading-relaxed font-normal">
                        {featuredInsight.fullContent.overview}
                      </p>

                      <div className="space-y-3">
                        {featuredInsight.fullContent.sections.map((sec, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-xs"
                          >
                            <h4 className="text-xs font-bold text-[#0b1524] flex items-center gap-2 mb-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#0056b3]" />
                              {sec.heading}
                            </h4>
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {sec.body}
                            </p>
                          </div>
                        ))}
                      </div>

                      {featuredInsight.fullContent.bullets && (
                        <div className="p-3.5 bg-[#f0f7ff] border border-[#bcd7f5] rounded-xs space-y-2">
                          <div className="text-xs font-bold text-[#0056b3] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#0056b3]" />
                            Security Highlights
                          </div>
                          <ul className="space-y-1.5 text-xs text-stone-700">
                            {featuredInsight.fullContent.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          {featuredInsight.fullContent.keyTakeaway && (
                            <div className="pt-2 border-t border-[#bcd7f5]/60 text-xs text-stone-800 font-medium italic">
                              &ldquo;{featuredInsight.fullContent.keyTakeaway}&rdquo;
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

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

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setFeaturedExpanded((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0056b3] hover:text-[#003d80] transition-colors cursor-pointer py-1"
                >
                  <span>{featuredExpanded ? "READ LESS" : "READ BRIEFING"}</span>
                  {featuredExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>

                <ArrowLink href="#contact" variant="muted" size="sm">
                  Security Inquiries
                </ArrowLink>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Articles */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6">
            {secondaryInsights.map((art: InsightArticle) => {
              const isExpanded = Boolean(expandedIds[art.id]);

              return (
                <article
                  key={art.id}
                  id={`insight-card-${art.id}`}
                  className={clsx(
                    "border rounded-xs p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group",
                    isExpanded
                      ? "bg-white border-[#0056b3]/50 shadow-md ring-1 ring-[#0056b3]/20"
                      : "bg-[#fbfbfa] border-[#e7e5dc] hover:border-stone-400"
                  )}
                >
                  <div className="space-y-3">
                    {/* Card Header: Category & Read Time */}
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-[#0056b3] uppercase tracking-wider">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {isExpanded && (
                          <span className="text-[10px] font-semibold text-[#0056b3] bg-blue-50 px-2 py-0.5 rounded-xs border border-blue-200">
                            Full Article
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-stone-400" />
                          {art.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      onClick={() => toggleExpand(art.id)}
                      className={clsx(
                        "text-base sm:text-lg font-bold transition-colors leading-snug cursor-pointer",
                        isExpanded
                          ? "text-[#0056b3]"
                          : "text-[#0b1524] group-hover:text-[#0056b3]"
                      )}
                    >
                      {art.title}
                    </h4>

                    {/* Excerpt / Summary */}
                    <p
                      className={clsx(
                        "text-xs sm:text-sm text-stone-600 leading-relaxed",
                        !isExpanded && "line-clamp-2"
                      )}
                    >
                      {art.excerpt}
                    </p>

                    {/* Full Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && art.fullContent && (
                        <motion.div
                          id={`insight-content-${art.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden space-y-4 pt-2 border-t border-stone-200/70"
                        >
                          {/* Overview paragraph */}
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                            {art.fullContent.overview}
                          </p>

                          {/* Detailed capability breakdown */}
                          <div className="space-y-2.5">
                            {art.fullContent.sections.map((sec, idx) => (
                              <div
                                key={idx}
                                className="p-3.5 bg-stone-50 border border-stone-200/90 rounded-xs space-y-1 hover:border-stone-300 transition-colors"
                              >
                                <h5 className="text-xs font-bold text-[#0b1524] flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] inline-block" />
                                  {sec.heading}
                                </h5>
                                <p className="text-[12px] text-stone-600 leading-relaxed">
                                  {sec.body}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Key Highlights box */}
                          {art.fullContent.bullets && (
                            <div className="p-3.5 bg-[#f0f7ff] border border-[#bcd7f5] rounded-xs space-y-2">
                              <div className="text-[11px] font-bold text-[#0056b3] uppercase tracking-wider flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#0056b3]" />
                                Key Practice Highlights
                              </div>
                              <ul className="space-y-1.5 text-[11px] text-stone-700">
                                {art.fullContent.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                              {art.fullContent.keyTakeaway && (
                                <div className="pt-2 border-t border-[#bcd7f5]/60 text-[11px] text-stone-800 font-medium italic">
                                  &ldquo;{art.fullContent.keyTakeaway}&rdquo;
                                </div>
                              )}
                            </div>
                          )}

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {art.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Footer: Author & Action Button */}
                  <div className="pt-4 mt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-stone-500 font-medium">
                      By {art.author.name}
                      {isExpanded && art.author.role ? ` • ${art.author.role}` : ""}{" "}
                      ({art.author.office})
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleExpand(art.id)}
                      className={clsx(
                        "inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded-xs px-2 py-1",
                        isExpanded
                          ? "bg-[#0056b3] text-white hover:bg-[#003d80] shadow-xs"
                          : "text-[#0b1524] group-hover:text-[#0056b3] hover:bg-stone-100"
                      )}
                      aria-expanded={isExpanded}
                      aria-controls={`insight-content-${art.id}`}
                    >
                      <span>{isExpanded ? "READ LESS" : "READ"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 flex-shrink-0" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 ease-out group-hover:translate-x-1 flex-shrink-0" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
