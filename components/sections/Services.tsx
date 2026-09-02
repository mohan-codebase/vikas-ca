"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import clsx from "clsx";
import { servicesData } from "@/data/servicesData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Services() {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section id="services" className="bg-white py-20 lg:py-32 border-b border-stone-200">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Delivery Capabilities & Solutions"
          title="Our Services"
          description="Disciplined accounting, SMSF, audit, financial services, legal operations, and business administrative capabilities engineered for Australian businesses and practices."
          align="split"
          action={
            <Button
              href="#contact"
              variant="secondary"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Discuss what to move offshore
            </Button>
          }
        />

        {/* Desktop Interactive Tab Selector (01 to 05) */}
        <div className="hidden lg:block border-b border-stone-200 mb-12">
          <div className="grid grid-cols-5 gap-2">
            {servicesData.map((svc) => {
              const isActive = svc.id === activeId;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveId(svc.id)}
                  onMouseEnter={() => setActiveId(svc.id)}
                  className={clsx(
                    "pb-6 pt-4 text-left transition-all duration-300 relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded-xs px-3",
                    isActive
                      ? "border-b-2 border-[#0056b3] bg-stone-50/80"
                      : "hover:bg-stone-50/50"
                  )}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div
                    className={clsx(
                      "text-xs font-mono font-bold tracking-wider mb-1.5 transition-colors",
                      isActive ? "text-[#0056b3]" : "text-stone-400 group-hover:text-stone-600"
                    )}
                  >
                    {svc.number}
                  </div>
                  <div
                    className={clsx(
                      "text-lg xl:text-xl font-bold transition-colors leading-tight",
                      isActive ? "text-[#0b1524]" : "text-stone-600 group-hover:text-[#0b1524]"
                    )}
                  >
                    {svc.title}
                  </div>
                  <div className="text-xs text-stone-400 line-clamp-1 mt-1 font-normal">
                    {svc.subtitle}
                  </div>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0056b3] animate-fade-in-fast" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Active Service Explorer Body */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start bg-[#fbfbfa] border border-[#e7e5dc] p-8 xl:p-12 rounded-xs shadow-xs">
          {/* Left Content Column */}
          <div className="col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-[#0b1524] text-white px-2.5 py-1 rounded-xs">
                SERVICE {activeService.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0056b3]">
                {activeService.subtitle}
              </span>
            </div>

            <h3 className="text-3xl xl:text-4xl font-bold tracking-tight text-[#0b1524]">
              {activeService.title}
            </h3>

            <p className="text-base xl:text-lg text-stone-700 font-medium leading-relaxed">
              {activeService.leadSummary}
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              {activeService.fullDescription}
            </p>

            {/* Key Metric Card */}
            <div className="p-4 bg-white border border-[#e7e5dc] rounded-xs flex items-center gap-4">
              <div className="text-2xl xl:text-3xl font-extrabold text-[#0056b3] font-mono whitespace-nowrap">
                {activeService.keyMetric.value}
              </div>
              <div className="text-xs text-stone-600 font-medium">
                {activeService.keyMetric.label}
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="pt-4 border-t border-[#e7e5dc]">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0056b3]" />
                Key Practice Capabilities
              </div>
              <div className="grid grid-cols-2 gap-3">
                {activeService.subServices.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white hover:bg-stone-100/80 border border-stone-200/80 rounded-xs transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors">
                        {sub.name}
                      </span>
                      {sub.tag && (
                        <Badge variant="blue" size="sm" className="text-[9px] px-1.5 py-0">
                          {sub.tag}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <ArrowLink href="#contact" variant="blue" size="md">
                Discuss your {activeService.title} requirements
              </ArrowLink>
            </div>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* Right Visual & Case Study Column */}
          <div className="col-span-5 space-y-6">
            <div className="relative aspect-[4/3] xl:aspect-[5/4] w-full overflow-hidden rounded-xl border border-stone-300 shadow-md group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 40vw, 35vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold text-[#00a3e0] uppercase tracking-wider">
                  Offshore Delivery Practice
                </div>
                <div className="text-base font-bold">
                  NICS {activeService.title}
                </div>
              </div>
            </div>

            {/* Featured Case study snippet */}
            {activeService.featuredCaseStudy && (
              <div className="p-5 bg-white border border-[#e7e5dc] rounded-xs">
                <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                  Representative Engagement
                </div>
                <div className="text-sm font-bold text-[#0b1524]">
                  {activeService.featuredCaseStudy.client}
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  {activeService.featuredCaseStudy.outcome}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Accordion View (< 1024px) */}
        <div className="lg:hidden space-y-4">
          {servicesData.map((svc) => {
            const isExpanded = activeId === svc.id;
            return (
              <div
                key={svc.id}
                className="border border-[#e7e5dc] bg-[#fbfbfa] rounded-xs overflow-hidden"
              >
                <button
                  onClick={() => setActiveId(isExpanded ? "" : svc.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0056b3]">
                      {svc.number}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0b1524]">
                        {svc.title}
                      </h4>
                      <span className="text-xs text-stone-500">{svc.subtitle}</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={clsx(
                      "w-5 h-5 text-stone-400 transition-transform duration-200",
                      isExpanded && "rotate-90 text-[#0056b3]"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="p-5 pt-2 border-t border-stone-200 space-y-5 animate-fade-in-fast">
                    <div className="relative aspect-video w-full rounded overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="text-sm text-stone-700 leading-relaxed font-medium">
                      {svc.leadSummary}
                    </p>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Capabilities
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {svc.subServices.map((sub, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 bg-white border border-stone-200 rounded text-xs"
                          >
                            <div className="font-bold text-[#0b1524]">{sub.name}</div>
                            <div className="text-stone-500 text-[11px] mt-0.5">{sub.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <ArrowLink href="#contact" variant="blue" size="sm">
                        Speak with {svc.title} team
                      </ArrowLink>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
