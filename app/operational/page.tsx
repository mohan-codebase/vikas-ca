import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Users,
  MessageSquareText,
  ShieldAlert,
  UserCheck,
  Database,
  LifeBuoy,
  Receipt,
  Fingerprint,
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
  title: "Operational Services We Provide | NICS",
  description:
    "Explore the operational services we provide and our flexible outsourcing models at NICS. Inbound Call Centre, CRM Management, 24/7 Live Chat, Complaints Resolution, Client Onboarding, Data Validation, Technical Support, Claim Services, and KYC Verification.",
};

const service = servicesData.find((item) => item.id === "business-operations")!;

const operationalServices = [
  {
    id: "inbound-call-centre",
    name: "Inbound Call Centre",
    tag: "First Touchpoint Excellence",
    icon: PhoneCall,
    description:
      "An inbound call center is your businesses’ first and most important touchpoint. Our team of expert and skilled service executives are trained to offer the highest quality of customer care, sales and revenue management services.",
    points: [
      "Professional first-contact query handling & triage",
      "Trained customer care and support representatives",
      "Sales enquiry intake & lead qualification",
      "Strict call quality monitoring & SLA adherence",
    ],
  },
  {
    id: "crm-management",
    name: "CRM Management",
    tag: "Customer-Centric Growth",
    icon: Users,
    description:
      "Leverage cutting-edge techniques that put your customers at the center of everything and help you accelerate your CRM initiatives to increase sales and enhance productivity.",
    points: [
      "Pipeline data hygiene and record updating",
      "Customer contact enrichment & segmentation",
      "Activity tracking, task logging & automated alerts",
      "Cross-platform CRM synchronization and reporting",
    ],
  },
  {
    id: "live-chat-support",
    name: "Live Chat Support Services",
    tag: "24/7 Real-Time Support",
    icon: MessageSquareText,
    description:
      "Profit from specialized support staff who have strong work ethics, proven customer service abilities and superb communication skills. Provide your clients uninterrupted customer service through prompt and professional chat & email support made available 24/7. Live chat is a resourceful and smart way to address customer concerns quickly, resolve any queries or grievances.",
    points: [
      "24/7 web and app live chat responsiveness",
      "Rapid first-response and resolution SLAs",
      "Multi-channel email & ticket management",
      "Customer satisfaction (CSAT) measurement & logs",
    ],
  },
  {
    id: "complaints-resolution",
    name: "Complaints Resolution",
    tag: "Empathetic Advocacy",
    icon: ShieldAlert,
    description:
      "Employ specialists who think from the customer’s perspective and resolve their complaints within the ambit of your business principles. This leads to better complaints resolution and happy customers.",
    points: [
      "Empathetic dispute evaluation and case logging",
      "Root-cause investigation aligned with your guidelines",
      "Structured escalation pathways for sensitive issues",
      "Actionable feedback loops to prevent recurring complaints",
    ],
  },
  {
    id: "client-onboarding",
    name: "Client Onboarding",
    tag: "Frictionless Setup",
    icon: UserCheck,
    description:
      "Customer onboarding is a holistic approach different from the nominal and current customer service structure. Recognizing this variance, your new customers will be equipped with all the information they need to start a mutually beneficial relationship with you.",
    points: [
      "Structured welcome packs and engagement letters",
      "Account provisioning, profile verification & setup",
      "Documentation follow-up and checklist tracking",
      "Smooth handoff to internal relationship managers",
    ],
  },
  {
    id: "data-validation",
    name: "Data Validation",
    tag: "Dataset Hygiene",
    icon: Database,
    description:
      "Data verification/ validation services to enhance your existing dataset, including database verification, review, data cleansing and normalizing your database while ensuring that it is accurate and updated.",
    points: [
      "Cross-database validation and deduplication",
      "Standardized data normalization and cleansing",
      "Systematic health checks and missing field audits",
      "Continuous compliance and accuracy reports",
    ],
  },
  {
    id: "technical-support",
    name: "Technical Support for Products & Services",
    tag: "Tier 1 & 2 Troubleshooting",
    icon: LifeBuoy,
    description:
      "Technical Support services becomes your customer touchpoint for all questions and queries related to troubleshooting and product navigation. Dedicated and knowledgeable team will answer your customers’ questions, solve their problems and give them a world-class customer experience that reflects your brand philosophy and its core values.",
    points: [
      "Product navigation guidance and user walkthroughs",
      "Tier 1 & Tier 2 technical issue diagnosis",
      "Knowledge base & FAQ documentation maintenance",
      "Ticket lifecycle management & escalation pathways",
    ],
  },
  {
    id: "claim-services",
    name: "Claim Services",
    tag: "Settlement & Verification",
    icon: Receipt,
    description:
      "Comprehensive claim services and all related finance and accounting services. Receiving requests from customers for claims processing deals to settling outstanding amounts.",
    points: [
      "Customer claim intake and document indexing",
      "Eligibility criteria verification & policy checks",
      "Finance coordination for settlement processing",
      "Transparent audit logs and claims reporting",
    ],
  },
  {
    id: "kyc-verification",
    name: "KYC Verification",
    tag: "Regulatory & AML",
    icon: Fingerprint,
    description:
      "KYC services (one-time and on recurring basis) that includes a broad set of capabilities to meet your specific needs – tax profile validation, regulatory protocols and self-declarations, client outreach, KYC health checks, etc.",
    points: [
      "Customer identification and AML screening protocols",
      "Tax profile validation and self-declaration review",
      "Direct client outreach for missing verification data",
      "Periodic recurring KYC health checks and refresh audits",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    icon: Building2,
    description:
      "Equip your accounting firm with dedicated client onboarding, identity verification, data validation, and practice communication support to maintain seamless client relations.",
    benefits: [
      "Client onboarding pack tracking and review",
      "KYC and AML compliance verification for new clients",
      "Practice management CRM updating and database cleansing",
    ],
  },
  {
    title: "Business Enterprises",
    icon: TrendingUp,
    description:
      "Empower growing commercial enterprises with 24/7 live chat support, technical troubleshooting, dispute resolution, and claims processing under strict SLAs.",
    benefits: [
      "Round-the-clock omnichannel customer service",
      "Helpdesk ticket resolution and product support",
      "Claims settlement administration and ledger reporting",
    ],
  },
  {
    title: "Financial Advisors",
    icon: Users,
    description:
      "Support paraplanning and advisory practices with robust client onboarding protocols, annual KYC health checks, CRM pipeline administration, and client outreach.",
    benefits: [
      "Pre-advice client data collection and fact checks",
      "Ongoing annual KYC validation and AML reviews",
      "Platform documentation and customer inquiry support",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time operational specialists embedded directly into your customer support and back-office tools, operating seamlessly as part of your team.",
    highlights: [
      "100% dedicated to your brand and tone",
      "Operates in your timezone & software",
      "Direct daily supervision and task allocation",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    description:
      "Dedicated agents backed by experienced operational managers and team leads who ensure quality control, call calibration, and SLA governance.",
    highlights: [
      "Dedicated specialists + Team Lead oversight",
      "Built-in quality assurance & SOP governance",
      "Minimal operational management overhead",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand & Scalable",
    description:
      "A flexible, batch-based delivery model where tasks such as dataset cleansing, KYC refresh runs, or seasonal campaign surges are billed per project.",
    highlights: [
      "Pay only for processed files or campaigns",
      "Ideal for overflow, audits, and seasonal spikes",
      "No long-term staffing overheads",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We build your dedicated offshore customer operations center, operate and mature the processes under strict performance metrics, and transfer full ownership when ready.",
    highlights: [
      "Custom recruitment, facility & IT infrastructure",
      "Operational maturity with proven SLAs",
      "Smooth transition of full operational ownership",
    ],
  },
];

export default function OperationalPage() {
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
                  Operational Services
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Operational Services We Provide
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  Your team at NICS can be an upgrade to your set of problem-solvers with an eye for detail and outstanding time and resource management capabilities. Coupled with the finest technology to ensure accuracy, you can bank on high performance from the very first time. From preparing, compiling and sorting files to scanning images and documents for swift documentation, tech support to everyday clerical work, you are covered.
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
                    Explore 9 Services
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">9</div>
                    <div className="text-xs text-stone-500 font-medium">Operational Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">24/7</div>
                    <div className="text-xs text-stone-500 font-medium">Support Capabilities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0056b3]">ISO 27001</div>
                    <div className="text-xs text-stone-500 font-medium">Security Discipline</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Operational and business support"
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
                    <div className="mt-2 text-xl font-bold">Disciplined Execution & Reliable Performance</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Expert problem-solvers equipped with modern tools and multi-tiered QA.
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
                Operational Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Comprehensive operational capabilities designed to elevate customer satisfaction, ensure regulatory compliance, and maintain flawless data hygiene.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {operationalServices.map((item, index) => {
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
                Discover how our operational expertise is configured to address the unique requirements of your industry.
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
              Partner with experienced operational specialists to optimize customer touchpoints, automate workflows, and maintain pristine dataset accuracy.
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
                Review All 9 Services
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
