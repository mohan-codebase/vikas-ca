import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessagesSquare,
  Settings2,
  ClipboardList,
  RefreshCcw,
  Layers,
  Rocket,
  BadgeCheck,
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
  title: "How It Works | NICS",
  description:
    "How outsourcing with NICS works — communicate your requirements, set up the process and onboarding, manage the team with daily reporting, and run a continuous feedback mechanism.",
};

const service = servicesData.find((item) => item.id === "accounting-practices")!;

const steps = [
  {
    id: "communicate",
    number: "01",
    icon: MessagesSquare,
    navLabel: "Communicate your requirement",
    title: "Communicate your requirements",
    paragraphs: [
      "Before we get into the tasks, we ensure that we sit and talk with you to understand the objectives and goals of your business, along with your expectations. We mutually select the best outsourcing model for you — one that suits the skill set your business requires.",
      "We then take up the responsibility of sourcing the potential candidate, and we get your approval before anyone joins your team.",
    ],
    points: [
      "Discovery session on your objectives, goals, and expectations",
      "Outsourcing model selected mutually, not prescribed",
      "Skill set mapped to the work you actually need done",
      "Candidates sourced by us and approved by you",
    ],
  },
  {
    id: "onboarding",
    number: "02",
    icon: Settings2,
    navLabel: "Process setup & onboarding",
    title: "Setting up the process and the onboarding activities",
    paragraphs: [
      "This step involves all the things you’d do if you were recruiting an internal employee — creating the important onboarding activities such as establishing email accounts, remote server access, and application access.",
      "A brief induction is conducted, followed by a process overview, to get the entire team on the same page before live work begins.",
    ],
    points: [
      "Email accounts, remote server, and application access set up",
      "Systems configured exactly as for an internal hire",
      "Induction covering your business and ways of working",
      "Process overview aligning the whole team before go-live",
    ],
  },
  {
    id: "managing-team",
    number: "03",
    icon: ClipboardList,
    navLabel: "Managing team",
    title: "Managing the team",
    paragraphs: [
      "This step involves job planning, scheduling, execution, and reporting. Your NICS team members start working on their respective jobs within the project, and reports are shared every day.",
      "You have full control and visibility on the progress of the work at every stage.",
    ],
    points: [
      "Job planning and scheduling against your priorities",
      "Daily reports shared on work completed and in progress",
      "Full visibility of throughput and turnaround",
      "Control of the queue stays with your team",
    ],
  },
  {
    id: "feedback",
    number: "04",
    icon: RefreshCcw,
    navLabel: "Feedback mechanism",
    title: "Feedback mechanism",
    paragraphs: [
      "If you wish to make outsourcing work for your business, you certainly need to provide constructive feedback continuously. We set up a process that helps you provide feedback at regular intervals. This helps the team learn and adapt quickly, and improves the quality of the deliverables.",
      "Regular training aligned to your business needs also helps hit the target and bring the best from your outsourcing partner.",
    ],
    points: [
      "Structured feedback intervals built into the engagement",
      "Rapid learning and adaptation by the delivery team",
      "Deliverable quality improving over the life of the process",
      "Ongoing training tailored to your business needs",
    ],
  },
];

const howItWorks = [
  {
    title: "How It Works",
    icon: Layers,
    blurb: "The four steps from first conversation to a team delivering under your direction.",
    href: "/how-it-works",
  },
  {
    title: "Know Your Models",
    icon: BadgeCheck,
    blurb: "Insourcing, Insourcing with Manager Support, Job-by-Job, and the BOT model compared.",
    href: null,
  },
  {
    title: "How to Get Started",
    icon: Rocket,
    blurb: "What to prepare, who to involve, and how quickly a first team can be live.",
    href: null,
  },
  {
    title: "Best Practices",
    icon: Sparkles,
    blurb: "What the firms who get the most from outsourcing do differently.",
    href: null,
  },
];

export default function HowItWorksPage() {
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
                  Four Steps, Start to Steady State
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                  How Does It Work
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                  From the first conversation about your objectives through to a team reporting to you every day — here is exactly what happens, who does what, and where your control sits at each stage.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
                  >
                    Start the Conversation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#steps"
                    className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1524] shadow-sm transition-all hover:border-stone-400 hover:bg-stone-50"
                  >
                    See the Four Steps
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-stone-200 pt-6">
                  {steps.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:border-[#0056b3]/40 hover:text-[#0056b3]"
                    >
                      <span className="mr-1.5 font-bold text-[#0056b3]">{s.number}</span>
                      {s.navLabel}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={service.image}
                    alt="Onboarding and managing an offshore delivery team"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/80 via-[#0b1524]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block rounded-md bg-[#0056b3]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc7ff]">
                      Engagement Process
                    </div>
                    <div className="mt-2 text-xl font-bold">Reports Every Day, Control Every Step</div>
                    <p className="mt-1 text-xs text-slate-200">
                      You approve the hire, set the priorities, and see progress daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* STEPS TIMELINE */}
        <section id="steps" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">The Process</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                From First Conversation to Daily Delivery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Four steps, each with a clear owner. You define and approve; we recruit, set up, run, and report.
              </p>
            </div>

            <div className="relative mt-16">
              {/* connecting rail */}
              <div className="pointer-events-none absolute left-[27px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-[#0056b3]/40 via-[#0056b3]/20 to-transparent lg:block" />

              <div className="space-y-8">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.id} id={step.id} className="relative scroll-mt-24 lg:pl-20">
                      {/* rail node */}
                      <div className="absolute left-0 top-8 hidden size-14 items-center justify-center rounded-full border border-[#0056b3]/20 bg-white text-[#0056b3] shadow-sm lg:flex">
                        <StepIcon className="size-6" />
                      </div>

                      <div className="grid gap-8 rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-[#0056b3]/30 hover:shadow-lg lg:grid-cols-12 lg:gap-12 lg:p-10">
                        <div className="lg:col-span-7">
                          <div className="flex items-center gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0056b3]/10 text-[#0056b3] lg:hidden">
                              <StepIcon className="size-6" />
                            </div>
                            <span className="text-2xl font-black text-[#0056b3]/30">{step.number}</span>
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                              Step {step.number}
                            </span>
                          </div>

                          <h3 className="mt-5 text-2xl font-bold leading-snug text-[#0b1524]">
                            {step.title}
                          </h3>

                          <div className="mt-4 space-y-4">
                            {step.paragraphs.map((para, i) => (
                              <p key={i} className="text-sm leading-relaxed text-stone-600">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-5">
                          <div className="rounded-xl border border-stone-200 bg-[#fbfbfa] p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                              What Happens In This Step
                            </p>
                            <ul className="mt-4 space-y-3">
                              {step.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                                  <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>

                            {index === steps.length - 1 && (
                              <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                              >
                                Start at step one
                                <ArrowRight className="size-3.5" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS CLUSTER */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <Layers className="size-3.5" />
                Explore Further
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                How It Works
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                The process is one part. Here is the rest of what you need before deciding how to structure your team.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = item.href === "/how-it-works";
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
              Step one is a conversation about your objectives, your goals, and the skill set your business actually needs. Everything after that follows the process above.
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
                href="#steps"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-[#0b1524] shadow-sm transition-all hover:border-[#0056b3]/40 hover:text-[#0056b3] hover:shadow-md"
              >
                Revisit the Four Steps
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
