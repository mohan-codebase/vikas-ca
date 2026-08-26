"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Sparkles, HeartHandshake, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Dedicated Teams",
    description: "Your own dedicated offshore professionals fully integrated into your daily workflows and culture.",
  },
  {
    icon: Compass,
    title: "Domain Expertise",
    description: "Highly qualified accountants, mortgage brokers, and administrators trained in international standards.",
  },
  {
    icon: Sparkles,
    title: "ISO 27001 Security",
    description: "Bank-level data security and strict compliance protocols to ensure your sensitive information is always protected.",
  },
];

export function CultureStatement() {
  return (
    <section
      id="culture"
      className="relative bg-[#f7f6f2] py-24 lg:py-36 overflow-hidden border-b border-[#e6e4dc]"
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* Large decorative arc */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#0056b3]/8 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-[#0056b3]/5 pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 reveal-left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/svg-team.svg"
                  alt="NICS team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1524]/20 via-transparent to-transparent" />
              </div>

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: 16 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-4 sm:right-6 p-4 bg-white text-[#0b1524] rounded-2xl max-w-xs shadow-2xl border border-stone-200 hidden sm:block"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="text-[10px] font-bold text-[#0056b3] uppercase tracking-wider mb-1">
                  Our Philosophy
                </div>
                <p className="text-[11px] text-stone-600 italic leading-relaxed">
                  &ldquo;Expertise is most powerful when paired with a trusted human advisor.&rdquo;
                </p>
              </motion.div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -left-4 p-3 bg-[#0056b3] rounded-xl shadow-lg"
              >
                <div className="text-xl font-black text-white font-mono">40+</div>
                <div className="text-[9px] text-blue-200 uppercase tracking-wider">Years</div>
              </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="reveal-right">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#0056b3] mb-4">
                <Users className="w-4 h-4" />
                People & Culture
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight-title text-[#0b1524] leading-[1.08] mb-6">
                When our people work together,{" "}
                <span
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, #0056b3 0%, #0099db 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  great things
                </span>{" "}
                happen.
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-10">
                Our specialists seamlessly integrate with your local operations — pairing technical rigor with genuine personal investment to deliver exceptional BPO services across accounting and administration.
              </p>

              {/* Pillars */}
              <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 pt-6 border-t border-[#e6e4dc]">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="space-y-2 group">
                      <div className="p-2.5 bg-white rounded-xl w-fit text-[#0056b3] border border-[#e6e4dc] group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0b1524]">{p.title}</h3>
                      <p className="text-xs text-stone-500 leading-relaxed">{p.description}</p>
                    </div>
                  );
                })}
              </div>

              <ArrowLink href="#people" variant="navy" size="md">
                Meet our partners & specialists
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
