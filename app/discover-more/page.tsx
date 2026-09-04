import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Handshake,
  Lock,
  Gauge,
  Users,
  Boxes,
  Cpu,
  Globe2,
  Clock,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Discover More | NICS FAQs",
  description:
    "Learn more about NICS and find answers to common questions on outsourcing, confidentiality and data security, quality, employees and training, NDAs, and SLAs.",
};

const service = servicesData.find((item) => item.id === "financial-services")!;

const faqCategories = [
  {
    id: "outsourcing",
    name: "Outsourcing",
    icon: Handshake,
    blurb: "What outsourcing actually is, and who it suits.",
    faqs: [
      {
        q: "Outsourcing does not mean outsourcing your problem!",
        a: [
          "Are you confused about what outsourcing actually means? Are you aware of its services and the benefits — the advantages your company will have if you outsource and partner with an outsourcing company? Here are all the answers.",
          "Outsourcing is a straightforward and convenient partnership. It is powered by a business-fit approach and a robust mechanism for effective coordination and successful delivery. Given the evolution of the industry and the marketplace, having an offshore partner is an easy and convenient way to make the best use of the resources for your business.",
        ],
      },
      {
        q: "How big should my organisation be to outsource and work seamlessly?",
        a: [
          "Size hardly matters. Whether you are a small team or an MNC, it entirely depends on your requirement, budget, and needs.",
          "If your requirements are more than our potential can serve, we would either suggest a phased implementation or decline to submit a proposal to you.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    name: "Confidentiality",
    icon: Lock,
    blurb: "Data security, privacy, and where control sits.",
    faqs: [
      {
        q: "Is my company data confidential if I outsource?",
        a: [
          "Data security and protection of your privacy is an integral part of any outsourcing relationship. At NICS we ensure that we maintain various disclosure and statutory agreements between us and our clients to secure the information and maintain confidentiality.",
          "Restricted entry personnel, biometric checks, and password controls are applied while handling any data.",
        ],
      },
      {
        q: "Will I lose control if I outsource?",
        a: [
          "Outsourcing re-establishes your control by allowing you to vet, review, and approve every activity at every level against your benchmarks.",
          "You have full control of all the data you share and can review all the tasks you assign to us.",
        ],
      },
    ],
  },
  {
    id: "quality",
    name: "Quality",
    icon: Gauge,
    blurb: "What it does to the efficiency of your own team.",
    faqs: [
      {
        q: "Will it make my team more efficient if I outsource?",
        a: [
          "Outsourcing does more for you than simply sharing your workload. You can move work offshore to focus on other areas of your business, test an approach, or build a different solution.",
          "A streamlined process for your in-house team alongside your offshore team enables them to take up more responsibility and handle business challenges effectively. This increases both efficiency and productivity.",
        ],
      },
    ],
  },
  {
    id: "employees",
    name: "Employees",
    icon: Users,
    blurb: "Roles, training, language, and your existing staff.",
    faqs: [
      {
        q: "What job roles do your employees hold? Who trains whom?",
        a: [
          "Depending on your expectations and work requirements, we assign qualified employees to handle the operations.",
          "In terms of training, you can choose to train the team yourself, have us train them to meet your needs, or we can jointly do the same.",
        ],
      },
      {
        q: "What about local culture and English language skills?",
        a: [
          "Our people are predominantly English speaking and conversant in the language — it is in fact the most used language for communication across our delivery centres.",
          "Meetings are scheduled over Teams, Zoom, Google Meet, or Skype to suit how your firm already works.",
        ],
      },
      {
        q: "If the job or task of a person is outsourced, what does that employee do?",
        a: [
          "You can either provide a different responsibility internally in your organisation, or you have the option of termination.",
          "It has been proven that employees who are reassigned enrich the productivity at work.",
        ],
      },
    ],
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    icon: Boxes,
    blurb: "Screening, fraud cover, NDAs, and SLAs.",
    faqs: [
      {
        q: "What about exposure to dishonesty and fraud?",
        a: [
          "Before getting any employee on board, all of them go through a strict screening and verification process. They are also asked to sign an agreement with contract clauses particularly addressing dishonesty, disclosure of information, and fraudulence.",
          "Our workplace is monitored 24/7, and NICS is equipped with appropriate insurance cover to indemnify losses.",
        ],
      },
      {
        q: "Do you sign non-disclosure agreements and SLAs?",
        a: [
          "Yes. Given the nature of the processes we handle, appropriate non-disclosure and confidentiality agreements are signed to ensure process efficiency and transparency.",
        ],
      },
    ],
  },
];

const discoverMore = [
  {
    title: "Discover More",
    icon: LifeBuoy,
    blurb: "Answers to the questions firms ask us before they start.",
    href: "/discover-more",
  },
  {
    title: "Information Technology",
    icon: Cpu,
    blurb: "The infrastructure, systems, and security controls behind the delivery centre.",
    href: null,
  },
  {
    title: "India, Geographical Advantage",
    icon: Globe2,
    blurb: "Why the talent pool, cost base, and work culture make India the delivery location.",
    href: null,
  },
  {
    title: "Time Zones",
    icon: Clock,
    blurb: "How the overnight gap turns into completed work on your desk each morning.",
    href: null,
  },
];

const totalFaqs = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

export default function DiscoverMorePage() {
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
                  Frequently Asked Questions
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  Discover More
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  Learn more about us and find answers to the queries you have in mind. Here are the questions firms ask us most often — on control, confidentiality, quality, people, and the agreements that sit behind it all.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
                  >
                    Ask Us Directly
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#faqs"
                    className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1524] shadow-sm transition-all hover:border-stone-400 hover:bg-stone-50"
                  >
                    Read the FAQs
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-stone-200 pt-6">
                  {faqCategories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:border-[#0056b3]/40 hover:text-[#0056b3]"
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Talking through how an outsourcing partnership works"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-[#0b1524]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      {totalFaqs} Questions Answered
                    </div>
                    <div className="mt-2 text-xl font-bold">Outsourcing Does Not Mean Outsourcing Your Problem</div>
                    <p className="mt-1 text-xs text-slate-200">
                      Straightforward answers on control, security, quality, and the people doing the work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ SECTION */}
        <section id="faqs" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Your Questions</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                Answers Before You Commit
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Grouped by what firms usually want to settle first. If something here is not covered, ask us — we would rather answer it up front.
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {faqCategories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <div key={cat.id} id={cat.id} className="scroll-mt-24">
                    <div className="flex items-center gap-4 border-b border-stone-200 pb-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0056b3]/10 text-[#0056b3]">
                        <CatIcon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0b1524]">{cat.name}</h3>
                        <p className="mt-0.5 text-xs text-stone-500">{cat.blurb}</p>
                      </div>
                      <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-500 ring-1 ring-stone-200">
                        {cat.faqs.length} {cat.faqs.length === 1 ? "question" : "questions"}
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {cat.faqs.map((faq, i) => (
                        <details
                          key={i}
                          className="group rounded-2xl border border-stone-200 bg-white transition-all open:border-[#0056b3]/30 open:shadow-md hover:border-[#0056b3]/30"
                        >
                          <summary className="flex cursor-pointer list-none items-start gap-4 p-6 [&::-webkit-details-marker]:hidden">
                            <span className="flex-1 text-base font-semibold leading-snug text-[#0b1524] transition-colors group-open:text-[#0056b3]">
                              {faq.q}
                            </span>
                            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3] transition-transform duration-300 group-open:rotate-45">
                              <Plus className="size-4" />
                            </span>
                          </summary>

                          <div className="space-y-4 border-t border-stone-100 px-6 pb-6 pt-5">
                            {faq.a.map((para, pi) => (
                              <p key={pi} className="text-sm leading-relaxed text-stone-600">
                                {para}
                              </p>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 rounded-2xl border border-[#0056b3]/20 bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-[#0b1524]">Still have a question?</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
                If your question is not answered above, put it to our team directly. We will tell you plainly whether we are the right fit for what you need.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0056b3] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494]"
              >
                Ask Our Team
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Container>
        </section>

        {/* DISCOVER MORE CLUSTER */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <LifeBuoy className="size-3.5" />
                Explore Further
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Discover More
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                The detail behind the answers — our technology, our location, and how the working day lines up with yours.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {discoverMore.map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = item.href === "/discover-more";
                const cardBody = (
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#8bc7ff]">
                        <ItemIcon className="size-5" />
                      </div>
                      {isCurrent && (
                        <span className="rounded bg-[#8bc7ff]/20 px-2 py-0.5 text-[11px] font-semibold text-[#8bc7ff]">
                          On this page
                        </span>
                      )}
                      {!item.href && (
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.blurb}</p>
                  </div>
                );

                return item.href && !isCurrent ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8bc7ff]/40 hover:bg-white/10"
                  >
                    {cardBody}
                  </Link>
                ) : (
                  <div
                    key={item.title}
                    className={`flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-sm ${
                      isCurrent ? "border-[#8bc7ff]/40 bg-white/10" : "border-white/10 bg-white/5"
                    }`}
                  >
                    {cardBody}
                  </div>
                );
              })}
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
              Size hardly matters — whether you are a small team or a large group, it comes down to your requirement, your budget, and your needs. Let’s work out which model fits.
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
                href="#faqs"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-[#0b1524] shadow-sm transition-all hover:border-[#0056b3]/40 hover:text-[#0056b3] hover:shadow-md"
              >
                Back to the FAQs
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
