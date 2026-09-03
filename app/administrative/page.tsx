import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Headset,
  Keyboard,
  Layers,
  Mic,
  Briefcase,
  Building2,
  TrendingUp,
  Users,
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
  title: "Administrative Services We Provide | NICS",
  description:
    "Find out the administrative services we provide and the outsourcing models of NICS. Virtual Assistant, Data Entry, Back Office Admin, SOA Preparation, Transcription, and Mortgage Broking.",
};

const service = servicesData.find((item) => item.id === "business-operations")!;

const administrativeServices = [
  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    tag: "Productivity & ROI",
    icon: Headset,
    description:
      "Eliminate mundane, repetitive and fatigue-causing tasks from your working week. Grow your business, focus on your ROI while we clear the clutter and streamline disorganized and uncategorized tasks.",
    points: [
      "Inbox management and email triaging",
      "Calendar scheduling and diary coordination",
      "Task prioritization and routine administrative tracking",
      "Workflow decluttering to focus on high-value business growth",
    ],
  },
  {
    id: "data-entry-services",
    name: "Data Entry Services",
    tag: "High Precision & Tech",
    icon: Keyboard,
    description:
      "Accurate and high-quality data entry services for manual digitization of records by incorporating best-in-class technology.",
    points: [
      "Manual and automated record digitization",
      "Structured data cleansing and formatting",
      "Database maintenance and system updates",
      "Multi-point quality checks ensuring maximum accuracy",
    ],
  },
  {
    id: "back-office-administration",
    name: "Back Office Administration",
    tag: "Operational Backbone",
    icon: FileSpreadsheet,
    description:
      "Suite of back office administrative services like data management, billing and invoicing, transaction processing, management services and all kinds of back office administration services.",
    points: [
      "Billing, invoicing, and debtor reconciliation",
      "Transaction processing and ledger updates",
      "Document indexing and central repository management",
      "Recurring administrative reports and audit logs",
    ],
  },
  {
    id: "soa-preparation",
    name: "Statement of Advice Preparation",
    tag: "Financial Planning Support",
    icon: FileText,
    description:
      "Backend support services for paraplanners or independent financial advisors. It encompasses, Pre-SOA, Statement of Advice and Post SOA.",
    points: [
      "Pre-SOA client fact-finding and file collation",
      "Research compilation and draft SOA document preparation",
      "Product comparison data and compliance file setup",
      "Post-SOA administrative execution and platform paperwork",
    ],
  },
  {
    id: "virtual-assistant-support",
    name: "Virtual Assistant Support",
    tag: "Executive & Daily Admin",
    icon: Briefcase,
    description:
      "Manage your routine administrative tasks including booking flights and meetings, taking notes and documenting follow up actions and sending business correspondence.",
    points: [
      "Flight, hotel, and itinerary coordination",
      "Meeting setup, agenda preparation, and client coordination",
      "Detailed meeting minutes and follow-up action tracking",
      "Drafting and sending professional business correspondence",
    ],
  },
  {
    id: "transcription-services",
    name: "Transcription Services",
    tag: "Secure & Scheduled",
    icon: Mic,
    description:
      "Rely on a secure, streamlined workflow and a team of highly trained experts, who create a client-specific delivery plan, vet and review the data and follow through until satisfied delivery. Be it any project specifications, including specialized formatting and recurring delivery schedules (daily, weekly, monthly, or even yearly), you can be confident on the accuracy and timeliness of delivery.",
    points: [
      "Secure audio, video, and dictation transcription",
      "Client-specific delivery plans with specialized formatting",
      "Multi-tiered review process for accuracy and completeness",
      "Flexible turnaround schedules (daily, weekly, monthly, or yearly)",
    ],
  },
  {
    id: "mortgage-broking",
    name: "Mortgage Broking",
    tag: "Lending & Loan Processing",
    icon: Layers,
    description:
      "Loan Processing Service includes fact checks, and preparation of serviceability calculators, discharge forms and processing, compliance documents, lender’s application online or on lender’s software, etc.",
    points: [
      "Fact checks and borrower documentation verification",
      "Serviceability calculators and lender policy reviews",
      "Discharge forms preparation and tracking",
      "Data entry into aggregator CRM and lender portal submissions",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    icon: Building2,
    description:
      "Empower your accounting practice by offloading client document chasing, workpaper digitisation, CRM updates, and admin tasks so your team can focus on client advisory.",
    benefits: [
      "Client onboarding pack coordination",
      "Permanent audit file indexing and maintenance",
      "Practice management software data reconciliation",
    ],
  },
  {
    title: "Business Enterprises",
    icon: TrendingUp,
    description:
      "Optimize enterprise back-office workflows, transaction entries, vendor billing, and executive scheduling with seamless virtual assistant support.",
    benefits: [
      "End-to-end billing and invoicing cycles",
      "Executive calendar and travel logistics",
      "Cross-departmental database cleansing and indexing",
    ],
  },
  {
    title: "Financial Advisors",
    icon: Users,
    description:
      "Provide paraplanners and independent financial advisers with dedicated pre-SOA data gathering, compliant draft preparation, and post-advice implementation.",
    benefits: [
      "Comprehensive pre-SOA fact-find collation",
      "Draft Statement of Advice preparation",
      "Post-SOA portfolio platform paperwork processing",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time resources working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
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
      "Dedicated team members backed by experienced operational managers and team leads who ensure quality control, SLA adherence, and ongoing performance coaching.",
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
      "A flexible, pay-as-you-go delivery model where work is submitted on a per-task or per-file basis, ideal for handling seasonal spikes and overflow work.",
    highlights: [
      "Pay only for work completed",
      "Ideal for overflow and peak seasons",
      "No long-term staffing commitments",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We recruit, train, and build your dedicated offshore administrative unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function AdministrativePage() {
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
                  Administrative Services
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Administrative Services We Provide
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  Your team at NICS can enable you to seize new trends and opportunities by partnering with experts for superior process automation and optimizing all your routine administrative business processes.
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
                    <div className="text-2xl font-bold text-[#0056b3]">7+</div>
                    <div className="text-xs text-stone-500 font-medium">Core Admin Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">4</div>
                    <div className="text-xs text-stone-500 font-medium">Outsourcing Models</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">100%</div>
                    <div className="text-xs text-stone-500 font-medium">Process Automation</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Administrative and operations support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-[#0b1524]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      NICS Operations
                    </div>
                    <div className="mt-2 text-xl font-bold">Superior Process Automation & Admin Optimization</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Eliminate routine operational friction with dedicated, trained offshore specialists.
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
                Administrative Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                From virtual assistance and precision data entry to specialized paraplanning and loan processing, our team handles routine administration so your onshore talent can focus on high-impact work.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {administrativeServices.map((item, index) => {
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
                Discover how our administrative expertise is configured to address the specific challenges of your sector.
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
                Choose the model that fits your operational needs, internal management preferences, and scaling roadmap.
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
              Partner with experienced administrative professionals to clear operational bottlenecks, automate recurring workflows, and elevate overall team productivity.
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
                Review All 7 Services
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

