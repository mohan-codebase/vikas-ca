import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  PiggyBank,
  Scale,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Compliance Services We Provide | NICS",
  description:
    "Statutory filings and compliance support from NICS — SMSF compliance, financial statement preparation, GST and VAT returns, individual and company tax returns, and audit back office support.",
};

const service = servicesData.find((item) => item.id === "smsf-audit")!;

const complianceServices = [
  {
    id: "smsf-compliance",
    name: "SMSF Compliance",
    tag: "Bundled Accounts & Audit",
    icon: PiggyBank,
    description:
      "Comprehensive back-office support for SMSF compliance (year-end financial statements and tax returns) and administration. Our industry-leading SMSF bundled service (accounts and audit) offers a one-stop solution for all your SMSF needs and is a great value addition for your business.",
    points: [
      "Year-end SMSF financial statements and member statements",
      "SMSF annual return preparation and supporting schedules",
      "Fund administration, data feeds, and bank reconciliations",
      "Bundled accounts and audit delivery as a single workflow",
    ],
  },
  {
    id: "compliance-processes",
    name: "Compliance Processes",
    tag: "Statutory Filings",
    icon: FileCheck2,
    description:
      "Statutory filings and compliances encompassing financial statements preparation, GST and VAT returns, individual tax returns, and company tax returns.",
    points: [
      "Financial statement preparation to applicable standards",
      "GST and VAT return preparation and reconciliation",
      "Individual tax return preparation and workpapers",
      "Company tax returns with supporting compliance schedules",
    ],
  },
  {
    id: "audit-back-office-support",
    name: "Audit Back Office Support",
    tag: "Assurance & Risk",
    icon: ClipboardCheck,
    description:
      "Have an expert team of industry experts, accountants and finance professionals undertake your audit support requirements. Be it audit, tax or advisory work, execute any-and-all audit related work from sophisticated accountants who harness newer technologies and industry best practices to ensure a comprehensive support service.",
    points: [
      "Examining financial records and categorizing key focus areas",
      "Lead schedules, reconciliations, and evidence organisation",
      "Internal control documentation and testing sampling support",
      "Closely controlled processes that lift effectiveness and profitability",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    icon: Building2,
    description:
      "Give your practice consistent compliance capacity through peak season — workpapers, financial statements, and returns prepared to your templates and review standards.",
    benefits: [
      "Standardised workpapers and lead schedules",
      "Financial statements and tax return drafts ready for review",
      "Consistent turnaround across compliance season peaks",
    ],
  },
  {
    title: "Business Enterprises",
    icon: TrendingUp,
    description:
      "Keep statutory obligations on schedule with dedicated support for indirect tax returns, year-end reporting packs, and audit readiness across entities.",
    benefits: [
      "GST and VAT return cycles with reconciliation trails",
      "Year-end reporting packs and group consolidation support",
      "Audit-ready documentation maintained through the year",
    ],
  },
  {
    title: "SMSF Specialists",
    icon: Scale,
    description:
      "A one-stop bundled service for SMSF administrators and specialist firms, covering fund accounting through to audit documentation under one delivery workflow.",
    benefits: [
      "End-to-end SMSF accounts and annual return preparation",
      "Bundled accounts and audit as a single engagement",
      "Fund file administration and permanent document upkeep",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time compliance resources working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
    highlights: [
      "100% dedicated to your firm",
      "Works in your software & timezone",
      "Direct daily task communication",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    description:
      "Dedicated preparers backed by experienced compliance managers and team leads who ensure quality control, SLA adherence, and ongoing technical coaching.",
    highlights: [
      "Dedicated resources + Team Lead oversight",
      "Built-in quality assurance & SOP governance",
      "Minimal management overhead for your team",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand & Scalable",
    description:
      "A flexible, pay-as-you-go delivery model where compliance work is submitted per job or per file, ideal for handling lodgement deadlines and overflow work.",
    highlights: [
      "Pay only for work completed",
      "Ideal for lodgement peaks and overflow",
      "No long-term staffing commitments",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We recruit, train, and build your dedicated offshore compliance unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white pt-32 sm:pt-40">
          <div className="absolute inset-0 hero-mesh opacity-60 pointer-events-none" />
          <Container size="default" className="relative pb-20 lg:pb-28">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                  <Sparkles className="size-3.5" />
                  Compliance Services
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Compliance Services We Provide
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  The team at NICS can help with your compliance requirements including statutory filings and compliances encompassing financial statements preparation, GST and VAT returns, individual tax returns, and company tax returns.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
                  >
                    Make an Enquiry
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1524] shadow-sm transition-all hover:border-stone-400 hover:bg-stone-50"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">3</div>
                    <div className="text-xs text-stone-500 font-medium">Core Compliance Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">4</div>
                    <div className="text-xs text-stone-500 font-medium">Outsourcing Models</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">100%</div>
                    <div className="text-xs text-stone-500 font-medium">Review-Ready Files</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Compliance and audit back office support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-[#0b1524]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      NICS Compliance
                    </div>
                    <div className="mt-2 text-xl font-bold">Statutory Filings, SMSF & Audit Support</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Disciplined documentation behind every lodgement — your team retains review and sign-off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">What We Provide</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                Compliance Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                From SMSF compliance and statutory filings to full audit back office support, our accountants prepare the workpapers, statements, and returns your team reviews and signs off.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {complianceServices.map((item, index) => {
                const IconComponent = item.icon;
                const isFeatured = index === 0;
                return (
                  <div
                    key={item.id}
                    className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isFeatured
                        ? "border-[#0056b3]/40 shadow-md ring-1 ring-[#0056b3]/20 md:col-span-2 lg:col-span-1"
                        : "border-stone-200 hover:border-[#0056b3]/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#0056b3]/10 text-[#0056b3] transition-colors group-hover:bg-[#0056b3] group-hover:text-white">
                          <IconComponent className="size-6" />
                        </div>
                        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        {item.description}
                      </p>

                      <div className="mt-6 border-t border-stone-100 pt-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Key Capabilities</p>
                        <ul className="mt-3 space-y-2.5">
                          {item.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-stone-600">
                              <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                      >
                        Enquire about {item.name}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SOLUTIONS BY INDUSTRY */}
        <section className="border-t border-stone-200 bg-white py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Industry Focus</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                View Solutions by Industry
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Discover how our compliance expertise is configured to address the specific obligations of your sector.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {industrySolutions.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-[#fbfbfa] p-8 transition-all hover:border-[#0056b3]/30 hover:bg-white hover:shadow-lg"
                  >
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#0056b3]/10 text-[#0056b3]">
                        <IndIcon className="size-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-[#0b1524]">{ind.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{ind.description}</p>

                      <div className="mt-6 border-t border-stone-200 pt-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Key Support Areas</p>
                        <ul className="mt-3 space-y-2">
                          {ind.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-stone-600">
                              <span className="size-1.5 rounded-full bg-[#0056b3] mt-1.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-stone-100 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:underline"
                      >
                        Explore industry workflows <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* OUTSOURCING MODELS */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <Zap className="size-3.5" />
                Delivery Flexibility
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Outsourcing Models
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Choose the model that fits your compliance calendar, internal review preferences, and scaling roadmap.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {outsourcingModels.map((model) => (
                <div
                  key={model.title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8bc7ff]/40 hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#8bc7ff]">{model.number}</span>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                        {model.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white">{model.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">{model.description}</p>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <ul className="space-y-2">
                        {model.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-[12px] text-slate-300">
                            <CheckCircle2 className="size-3.5 shrink-0 text-[#8bc7ff] mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#8bc7ff] transition-colors hover:text-white"
                    >
                      Discuss this model <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative isolate overflow-hidden border-t border-stone-200 bg-gradient-to-br from-[#eef5ff] via-[#f6f9fd] to-[#fbfbfa] py-20 lg:py-24">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #bcd9ff 0%, transparent 70%)" }}
          />
          <Container size="narrow" className="text-center">
            <ShieldCheck className="mx-auto size-12 text-[#0056b3]" />
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
              Let’s set up a truly customisable model to help you structure and run your process efficiently.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600">
              Partner with experienced compliance professionals to keep statutory obligations on schedule, standardise workpapers, and free your senior team for review and advisory work.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0056b3] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
              >
                Make an Enquiry
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-[#0b1524] shadow-sm transition-all hover:border-[#0056b3]/40 hover:text-[#0056b3] hover:shadow-md"
              >
                Review All 3 Services
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <PremiumCursor />
    </div>
  );
}
