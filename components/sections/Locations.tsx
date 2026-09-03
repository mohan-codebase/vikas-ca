"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, User, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { locationsData } from "@/data/locationsData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Locations() {
  const [activeLocationId, setActiveLocationId] = useState<string>(locationsData[0].id);

  const activeLocation =
    locationsData.find((l) => l.id === activeLocationId) || locationsData[0];

  return (
    <section id="locations" className="bg-[#f7f6f2] py-20 lg:py-32 border-b border-[#e6e4dc]">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="India Delivery, Australian Governance"
          title="NICS Delivery & Practice Offices"
          description="An India-based core delivery capability paired with client-facing leadership in Australia and the USA."
          align="split"
          action={
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                India · Australia · USA
              </span>
            </div>
          }
        />

        {/* Interactive Explorer Container */}
        <div className="bg-white border border-[#e7e5dc] rounded-xs shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: List of 10 Locations */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#e7e5dc] p-4 sm:p-6 lg:p-8 bg-[#fbfbfa]">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400 mb-4 px-3 flex items-center justify-between">
                <span>Select an office</span>
                <span className="font-mono text-stone-500">{locationsData.length} OFFICES</span>
              </div>

              <div className="space-y-1">
                {locationsData.map((loc, idx) => {
                  const isActive = loc.id === activeLocationId;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocationId(loc.id)}
                      onMouseEnter={() => setActiveLocationId(loc.id)}
                      className={clsx(
                        "w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 rounded-lg cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]",
                        isActive
                          ? "bg-[#0056b3] text-white shadow-sm font-bold"
                          : "text-stone-700 hover:bg-stone-200/60 font-medium"
                      )}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            "text-xs font-mono w-5",
                            isActive ? "text-blue-100 font-bold" : "text-stone-400"
                          )}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm sm:text-base">{loc.name}</span>
                        <span
                          className={clsx(
                            "text-[10px] px-1.5 py-0.5 rounded font-normal",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-stone-200 text-stone-600"
                          )}
                        >
                          {loc.state}
                        </span>
                      </div>
                      <ArrowRight
                        className={clsx(
                          "w-4 h-4 transition-transform duration-200",
                          isActive
                            ? "text-white translate-x-1"
                            : "text-stone-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Location Showcase */}
            <div key={activeLocation.id} className="lg:col-span-8 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-8 animate-fade-in-fast">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Text Details */}
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="blue" size="md">
                      {activeLocation.country}
                    </Badge>
                    <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                      {activeLocation.partnersCount} Advisory Partners
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1524]">
                    NICS {activeLocation.name}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                    {activeLocation.description}
                  </p>

                  {/* Practice Leadership Spotlight */}
                  <div className="p-4 bg-stone-50 border border-stone-200/80 rounded-xs space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0056b3]" />
                      Office Leadership
                    </div>
                    <div className="text-sm font-bold text-[#0b1524]">
                      {activeLocation.leadPartner}
                    </div>
                    <div className="text-xs text-stone-500">
                      {activeLocation.leadPartnerTitle}
                    </div>
                  </div>

                  {/* Specialties List */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Specialist Sector Focus
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLocation.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-xs border border-stone-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Info */}
                  <div className="pt-4 border-t border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                      <span>{activeLocation.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                      <a
                        href={`tel:${activeLocation.phone.replace(/[^0-9+]/g, "")}`}
                        className="hover:text-[#0056b3] font-semibold underline"
                      >
                        {activeLocation.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                      <a
                        href={`mailto:${activeLocation.email}`}
                        className="hover:text-[#0056b3]"
                      >
                        {activeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* City Landmark Imagery */}
                <div className="md:col-span-5 relative">
                  <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden border border-stone-200 shadow-md group">
                    <Image
                      src={activeLocation.image}
                      alt={`NICS ${activeLocation.name} office location and skyline`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#00a3e0]">
                        Location Spotlight
                      </span>
                      <div className="text-lg font-bold">{activeLocation.name}, {activeLocation.state}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button
                  href={`#contact`}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Contact {activeLocation.name} team
                </Button>
                <ArrowLink href="#contact" variant="muted" size="sm">
                  View partner directory for {activeLocation.name}
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
