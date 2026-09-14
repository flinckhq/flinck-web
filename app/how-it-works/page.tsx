import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import {
  flows,
  platformModules,
  pillars,
  PLAY_STORE_URL,
  SITE_URL,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Flinck connects the agricultural value chain—from social discovery and listings to negotiation, trust, and ecosystem sponsorships.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    title: "How it works | Flinck",
    description:
      "How Flinck connects the agricultural value chain—from social discovery and listings to negotiation, trust, and ecosystem sponsorships.",
    url: `${SITE_URL}/how-it-works`,
    images: [{ url: "/flinck-og-image.png", alt: "Flinck platform workflow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How it works | Flinck",
    description:
      "How Flinck connects the agricultural value chain—from social discovery and listings to negotiation, trust, and ecosystem sponsorships.",
    images: ["/flinck-og-image.png"],
  },
};

const flowDetails = [
  "Join the network with a profile suited to how you grow, buy, finance, or govern.",
  "Create listings or discover inventory with search, trust cues, and regional context.",
  "Negotiate terms and coordinate logistics in a secure in-app environment.",
  "Complete trades, grow reputation, and unlock sponsorship lanes when you scale.",
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#1f7a45] sm:text-sm sm:tracking-[0.28em]">
                How Flinck works
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:tracking-[-0.04em] lg:text-7xl">
                From connection to trusted trade.
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                Flinck is a social marketplace: community and discovery, unified
                commerce, field intelligence, and institutional sponsorship
                lanes—built for everyone in agriculture.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-[3.25rem] w-full rounded-full bg-[#163d2a] px-8 text-white sm:h-14 sm:w-auto"
              >
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Get the app
                </a>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-slate-900/10 shadow-xl sm:rounded-[2.5rem]">
              <Image
                src="/platform-dashboard.png"
                alt="Flinck platform overview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white shadow-xl sm:mt-20 sm:rounded-[3rem]">
            <Image
              src="/workflow-visual.png"
              alt="Flinck workflow"
              fill
              className="object-contain p-4"
            />
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-6">
            {flows.map((flow, index) => (
              <div
                key={flow}
                className="rounded-[1.5rem] border border-slate-900/8 bg-white/90 p-5 sm:rounded-[2rem] sm:p-8"
              >
                <span className="text-sm font-bold text-[#1f7a45]">
                  Step {index + 1}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  {flow}
                </h2>
                <p className="mt-3 text-slate-600 leading-7">
                  {flowDetails[index]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 sm:mt-20">
            <h2 className="text-3xl font-semibold text-slate-950">
              Platform pillars
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-[2rem] border border-slate-900/8 bg-white/90 p-6"
                  >
                    <Icon className="h-6 w-6 text-[#163d2a]" />
                    <h3 className="mt-4 text-lg font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <h2 className="text-3xl font-semibold text-slate-950">
              Deeper capabilities
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {platformModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.title}
                    className="rounded-[1.5rem] border border-slate-900/8 bg-white/90 p-5 sm:rounded-[2rem] sm:p-8"
                  >
                    <Icon className="h-6 w-6 text-[#163d2a]" />
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
                      {mod.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{mod.title}</h3>
                    <p className="mt-3 text-slate-600">{mod.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/sponsors"
              className="text-sm font-semibold text-[#163d2a] hover:underline"
            >
              Interested in sponsorship? Talk to us →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
