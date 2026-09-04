import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Boxes,
  ReceiptText,
  HandCoins,
  BarChart3,
  PieChart,
  Home,
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
  title: "Accounting Services We Provide | NICS",
  description:
    "Find out the accounting services we provide at NICS — Bookkeeping, Inventory Management, Accounts Payable (P2P), Accounts Receivable (O2C), Management Reporting, Financial Planning support, and Mortgage Brokering.",
};

const service = servicesData.find((item) => item.id === "accounting-finance")!;

const accountingServices = [
  {
    id: "bookkeeping",
    name: "Bookkeeping",
    tag: "Reliable & Current",
    icon: BookOpen,
    description:
      "Using industry-leading software and best practices, receive reliable recording of transactions that keeps you one step ahead.",
    points: [
      "Daily and periodic transaction recording",
      "Bank, credit card, and clearing account reconciliations",
      "Chart of accounts setup and ongoing maintenance",
      "Cloud ledger management in your preferred software",
    ],
  },
  {
    id: "inventory-management",
    name: "Inventory Management",
    tag: "Stores & Stock Flow",
    icon: Boxes,
    description:
      "From traditional stores to online portals, maintaining stores ledger, supervising the flow of goods from manufacturers to warehouses and from these facilities to point of sale.",
    points: [
      "Stores ledger maintenance and stock movement tracking",
      "Goods flow oversight from manufacturer to point of sale",
      "Online portal and marketplace inventory reconciliation",
      "Stock valuation, variance analysis, and write-off support",
    ],
  },
  {
    id: "accounts-payable",
    name: "Accounts Payable – Procure to Pay",
    tag: "P2P Cycle",
    icon: ReceiptText,
    description:
      "The P2P service covers the complete cycle from vendor master maintenance through procurement and vendor invoice processing to the resulting payment processing to external vendors and the period closing activities.",
    points: [
      "Vendor master data creation and maintenance",
      "Purchase order matching and invoice processing",
      "Payment run preparation and remittance handling",
      "Vendor statement reconciliation and period close activities",
    ],
  },
  {
    id: "accounts-receivable",
    name: "Accounts Receivable – Order to Cash",
    tag: "O2C Cycle",
    icon: HandCoins,
    description:
      "Streamline the defining aspect of your business – the OTC process – so that you can serve customers faster and more effectively, minimize errors and delays.",
    points: [
      "Customer master setup and sales order processing",
      "Invoice generation, delivery, and dispute tracking",
      "Receipt allocation and cash application",
      "Debtor ageing analysis and collections follow-up",
    ],
  },
  {
    id: "management-reporting",
    name: "Management Reporting",
    tag: "Business Intelligence",
    icon: BarChart3,
    description:
      "Management reporting is vital to take decisions that will affect your business in many ways. Advantage from the expertise of accurate business intelligence that will enable you to make better-informed decisions.",
    points: [
      "Monthly management accounts and reporting packs",
      "Budget versus actual and variance commentary",
      "Cash flow forecasting and KPI dashboards",
      "Custom board and stakeholder reporting formats",
    ],
  },
  {
    id: "financial-planning",
    name: "Financial Planning",
    tag: "Paraplanning & VA Support",
    icon: PieChart,
    description:
      "As an outsourcing solution provider NICS can equip financial planning firms with top-tier operational and administrative capabilities through paraplanners and virtual assistants. Gear your firm up with higher capacity through comprehensive outsourcing solutions, backed by a robust IT and ISO 27001 security framework.",
    points: [
      "Dedicated paraplanning and advice document support",
      "Virtual assistant capacity for client administration",
      "Higher firm capacity without permanent headcount",
      "ISO 27001 aligned security framework for client data",
    ],
  },
  {
    id: "mortgage-brokering",
    name: "Mortgage Brokering",
    tag: "Loan Processing",
    icon: Home,
    description:
      "Loan Processing Service includes fact checks, and preparation of serviceability calculators, discharge forms and processing, compliance documents, lender’s application online or on lender’s software, etc.",
    points: [
      "Fact checks and borrower documentation verification",
      "Serviceability calculator preparation",
      "Discharge forms and compliance document processing",
      "Lender application lodgement online or in lender software",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    icon: Building2,
    description:
      "Keep up with ATO obligations and tight deadlines without stretching margins — dedicated preparers handle the ledger work behind your client service.",
    benefits: [
      "Bookkeeping and reconciliation capacity through peak periods",
      "Standardised workpapers ready for partner review",
      "Practice management and cloud ledger data upkeep",
    ],
  },
  {
    title: "Business Enterprises",
    icon: TrendingUp,
    description:
      "Run complete P2P and O2C cycles, inventory ledgers, and monthly reporting packs with a trained offshore finance team embedded in your systems.",
    benefits: [
      "End-to-end payables and receivables processing",
      "Inventory and stores ledger control",
      "Monthly management reporting and cash flow forecasting",
    ],
  },
  {
    title: "Financial Planning & Mortgage Brokers",
    icon: Users,
    description:
      "Add paraplanning, virtual assistant, and loan processing capacity so advisers and brokers spend their time with clients rather than paperwork.",
    benefits: [
      "Paraplanning and advice document preparation",
      "Loan fact checks and serviceability calculators",
      "Lender application lodgement and compliance documents",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time accountants working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
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
      "Dedicated preparers backed by experienced finance managers and team leads who ensure quality control, SLA adherence, and ongoing technical coaching.",
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
      "We recruit, train, and build your dedicated offshore finance unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function AccountingPage() {
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
                  Accounting Services
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Accounting Services We Provide
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  It could be challenging to keep up with ATO obligations and other regulatory requirements with constant updates and tight deadlines. Hiring, training and retaining qualified staff can be taxing on your margins when your clients expect more value and a smaller bill. That’s where the team at NICS can help.
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
                    <div className="text-xs text-stone-500 font-medium">Core Accounting Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">4</div>
                    <div className="text-xs text-stone-500 font-medium">Outsourcing Models</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">ISO 27001</div>
                    <div className="text-xs text-stone-500 font-medium">Aligned Security Framework</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Offshore accounting and finance support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-[#0b1524]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      NICS Accounting
                    </div>
                    <div className="mt-2 text-xl font-bold">Ledgers, Cycles & Reporting Handled End to End</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Deadline-driven accounting capacity that protects your margins and your client experience.
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
                Accounting Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                From day-to-day bookkeeping and full payables and receivables cycles to management reporting, paraplanning, and loan processing — our accountants keep your obligations on schedule.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {accountingServices.map((item, index) => {
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
                Discover how our accounting expertise is configured to address the specific pressures of your sector.
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
                Choose the model that fits your reporting calendar, internal review preferences, and scaling roadmap.
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
              Partner with experienced accountants to meet regulatory deadlines, protect your margins, and give your senior team room for the advisory work clients actually pay for.
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
