"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f8fafc] text-[#0b1524]">
      <div className="absolute inset-0 hero-mesh pointer-events-none opacity-70" />

      <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <Image
          src="/images/svg-hero.svg"
          alt=""
          fill
          priority
          sizes="54vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-[#f8fafc]/30" />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-[1360px] items-center px-5 pb-16 pt-32 sm:px-8 md:px-12 lg:min-h-[720px] lg:px-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0056b3]">
            Offshore delivery, made flexible
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Scale your business without building every function in-house.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Add experienced accounting, finance, and operational capacity when you need it—without the cost and complexity of expanding in-house.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0056b3]/20 transition-colors hover:bg-[#004494] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
            >
              Explore our services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1524] transition-colors hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
            >
              <MapPin className="size-4 text-stone-500 group-hover:text-[#0056b3]" />
              Discuss your needs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
