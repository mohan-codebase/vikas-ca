import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FileSpreadsheet,
  FileEdit,
  SearchCheck,
  FolderOpen,
  BookOpen,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Sparkles,
  Scale,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Legal Process Outsourcing (LPO) | NICS",
  description:
    "Explore Legal Process Outsourcing (LPO) services and delivery models at NICS. Contract Management, Contract Abstract & Summary, Contract Drafting, Due Diligence, General Legal Administration, and Legal Research.",
};

const service = servicesData.find((item) => item.id === "business-operations")!;

const legalServices = [
  {
    id: "contract-management",
    name: "Contract Management & Administration",
    tag: "Lifecycle Governance",
    icon: FileText,
    description:
      "These encompass Creation and Management of Contract including, Contract Review, Contract Support and Assistance. Contract Administration tasks such as Contract Uploading and Downloading, Contract Workflow Management.",
    points: [
      "Contract repository uploading, tagging & indexing",
      "Contract lifecycle workflow and milestone tracking",
      "Key date, renewal, and termination notice alerts",
      "Version control and contract repository maintenance",
    ],
  },
  {
    id: "contract-abstract-summary",
    name: "Preparation of Contract Abstract & Summary",
    tag: "Structured Extraction",
    icon: FileSpreadsheet,
    description:
      "Contract Analysis, Preparation of Contract Abstract, drafting Real Estate Leases and Contracts, Employment Agreements, Intellectual Property Agreements/IP Agreements, MSA and SOWs, Mergers and Acquisition/M&A, Class Action, Deposition summaries, Purchase & Sale Agreement.",
    points: [
      "Key obligation matrices and covenant abstracting",
      "Commercial real estate lease abstracts & schedules",
      "M&A data room document review & executive summaries",
      "Deposition summaries, class action review & SOW abstracts",
    ],
  },
  {
    id: "contract-drafting",
    name: "Contract Drafting",
    tag: "Template & Clause Assembly",
    icon: FileEdit,
    description:
      "Drafting contracts for Employment, Master Service Agreements, Affidavits, Shareholder, Wills, Notices, Legal Briefs and Motions, Memorandum of Law.",
    points: [
      "Master Service Agreements (MSAs) & Statements of Work",
      "Employment, confidentiality & non-disclosure agreements",
      "Shareholder agreements, resolutions, notices & affidavits",
      "Drafting legal briefs, motions & memoranda of law",
    ],
  },
  {
    id: "due-diligence",
    name: "Due Diligence Support",
    tag: "Risk & Document Review",
    icon: SearchCheck,
    description:
      "Reasonable investigation of Facts, Circumstances and statements for further process.",
    points: [
      "Virtual data room (VDR) organisation & indexing",
      "Corporate records & statutory register verification",
      "Asset, liability, and material contract cross-checking",
      "Red-flag summary reports for onshore counsel review",
    ],
  },
  {
    id: "general-legal-admin",
    name: "General Legal Administration",
    tag: "Practice & Court Admin",
    icon: FolderOpen,
    description:
      "Administrative support in Transcribing and proofreading legal documents, Filing, organising, and processing legal documents, Scheduling court depositions hearings, scheduling client meetings, organising solicitor schedules such as travel arrangements or meetings, Processing invoices",
    points: [
      "Transcription and proofreading of legal correspondence",
      "Court filing preparation, document collation & indexing",
      "Solicitor calendar, deposition & court hearing scheduling",
      "Client matter billing and disbursement invoice processing",
    ],
  },
  {
    id: "legal-research",
    name: "Legal Research",
    tag: "Statutory & Precedent Analysis",
    icon: BookOpen,
    description:
      "Your team at NICS can handle the research in relation to, Case Law Research, Legal Articles, Legal Briefs, Drafting Legal documents as directed by your business.",
    points: [
      "Comprehensive case law and precedent research",
      "Statutory and regulatory interpretation reviews",
      "Legal articles, journal summaries & cite-checking",
      "Jurisdictional comparative research & memorandum drafting",
    ],
  },
];

const industrySolutions = [
  {
    title: "Law Firms & Solictors",
    icon: Scale,
    description:
      "Empower solicitors and partners to maximize billable advisory hours by delegating brief collation, transcription, due diligence indexing, and legal research.",
    benefits: [
      "Court bundle preparation and document indexing",
      "Paralegal research and citation verification",
      "Practice management and billing administration",
    ],
  },
  {
    title: "Corporate Legal Departments",
    icon: Building2,
    description:
      "Scale in-house corporate legal capacity with structured contract registers, vendor agreement abstracting, compliance tracking, and M&A data room reviews.",
    benefits: [
      "Master Service Agreement and NDA drafting support",
      "Contract repository maintenance and renewal tracking",
      "Merger & acquisition due diligence document abstracts",
    ],
  },
  {
    title: "Multi-Disciplinary Practices",
    icon: TrendingUp,
    description:
      "Bridge the gap between accounting, wealth, and commercial services with structured legal administration, corporate secretarial filing, and trust deed compliance.",
    benefits: [
      "Corporate structure documentation collation",
      "Entity registration and ASIC record cross-checks",
      "Client onboarding legal compliance verification",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Paralegal",
    description:
      "Dedicated full-time legal support specialists and paralegals embedded directly in your practice systems, working under your direct instructions.",
    highlights: [
      "100% dedicated to your firm",
      "Operates in your timezone & software",
      "Direct daily file coordination",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    description:
      "Dedicated paralegal staff backed by an experienced legal operations team lead who ensures strict quality control, formatting standards, and SLA compliance.",
    highlights: [
      "Dedicated paralegals + Team Lead oversight",
      "Built-in formatting & QA verification",
      "Reduced supervisory overhead for solicitors",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand Project",
    description:
      "A flexible delivery model where specific projects—such as M&A due diligence batches, lease abstract runs, or court bundle collations—are billed per matter.",
    highlights: [
      "Pay only for completed files or projects",
      "Ideal for litigation overflow & transactions",
      "No ongoing headcount overhead",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We recruit, train, and build your dedicated offshore legal operations unit under strict ISO 27001 data governance, and transfer full management when scaled.",
    highlights: [
      "Custom legal talent recruitment & security setup",
      "Operational maturity under proven SLAs",
      "Seamless handover of full operational ownership",
    ],
  },
];

export default function LegalPage() {
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
                  Legal Process Outsourcing (LPO)
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Legal Process Outsourcing (LPO)
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  Managing the back-office work required for a legal firm can be challenging. You can build capacity to help your legal team with a trained offshore legal support unit, without having to spend a whole lot of time in hiring, training and retaining staff. If hiring legals has been taxing on your margins when your clients expect more value and a smaller bill, here&apos;s where you can find a solution with your trained legal support team at NICS.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600">
                  Your trained legal team at NICS is prepared to aid lawyers and corporate legal departments in several aspects including legal research, document review, and case management. Your legal team at NICS can be customised to suit your business requirements including assisting your legal teams in organizing documentation, case summaries, and preparing evidence for legal proceedings.
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
                    Explore 6 LPO Services
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">6</div>
                    <div className="text-xs text-stone-500 font-medium">Core LPO Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">4</div>
                    <div className="text-xs text-stone-500 font-medium">Outsourcing Models</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">ISO 27001</div>
                    <div className="text-xs text-stone-500 font-medium">Confidentiality Aligned</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src="/images/operational-principle.avif"
                    alt="Legal process outsourcing and contract support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/85 via-[#0b1524]/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      NICS Legal Ops
                    </div>
                    <div className="mt-2 text-xl font-bold">High-Precision Legal Back-Office Support</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Trained paralegals and legal documentation experts working under strict NDA & APPs governance.
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
                Legal Support Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Comprehensive back-office capabilities designed to accelerate document turnaround, reduce overheads, and streamline legal administration.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {legalServices.map((item, index) => {
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
                Discover how our legal process outsourcing capabilities are tailored for law firms, corporate counsel, and commercial practices.
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
                Choose the engagement structure that best fits your practice requirements and confidentiality standards.
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
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#002e5b] py-20 text-white lg:py-24">
          <Container size="narrow" className="text-center">
            <ShieldCheck className="mx-auto size-12 text-[#8bc7ff]" />
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Let’s set up a truly customisable model to help you structure and run your process efficiently.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100">
              Partner with experienced legal process outsourcing specialists to accelerate contract workflows, optimize document review, and improve firm margins.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#002e5b] shadow-xl transition-all hover:bg-stone-100 hover:shadow-2xl"
              >
                Make an Enquiry
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Review All 6 LPO Services
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
