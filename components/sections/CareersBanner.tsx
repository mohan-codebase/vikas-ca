"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Award, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Graduate Development",
    description: "Direct client contact and partner mentoring from week one.",
  },
  {
    icon: Compass,
    title: "Global Secondments",
    description: "Mobility across 157 Vikas CA International member countries.",
  },
  {
    icon: Award,
    title: "Fast-Track Pathways",
    description: "Merit-based advancement from manager to equity partner.",
  },
];

export function CareersBanner() {
  return (
    <section
      id="careers-banner"
      className="relative bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] text-[#0b1524] py-24 lg:py-36 overflow-hidden border-y border-stone-200"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0b1524 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0056b3]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left: narrative */}
          <div className="lg:col-span-7 space-y-7 reveal-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[#0056b3]">
              <Briefcase className="w-4 h-4" />
              Careers at Vikas CA
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight-title text-[#0b1524] leading-[1.07]">
              What makes us{" "}
              <span className="relative">
                unique?
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#0056b3]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #0056b3 0%, #0099db 50%, #c89d5c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                You do.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              It is our differences and shared purpose that bring strength, empathy, and innovation. At Vikas CA, you are never just a number — you contribute to our clients&apos; outcomes from day one.
            </p>

            {/* Highlights */}
            <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-stone-200">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="space-y-2 group">
                    <div className="p-2.5 bg-white text-[#0056b3] rounded-xl w-fit border border-stone-200 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-[#0b1524]">{h.title}</div>
                    <div className="text-xs text-stone-600 leading-relaxed">{h.description}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                href="#careers"
                variant="primary-blue"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Explore open positions
              </Button>
              <Button href="#careers-graduates" variant="secondary" size="md">
                Graduate programs
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5 reveal-right">
            <motion.div
              className="relative"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[1/1] rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Vikas CA young professionals graduate cohort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="px-3.5 py-2.5 bg-white/95 backdrop-blur-md border border-stone-200 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#916524]" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#0056b3]">Recognition</div>
                        <div className="text-xs font-bold text-[#0b1524]">Top 100 Graduate Employer 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
