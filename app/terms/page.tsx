import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Flinck terms and conditions of use. Learn about user accounts, marketplace transactions, fees, wallet guidelines, and liability policies.",
  openGraph: {
    title: "Terms and Conditions | Flinck",
    description:
      "Read the Flinck terms and conditions of use. Learn about user accounts, marketplace transactions, fees, wallet guidelines, and liability policies.",
    url: `${SITE_URL}/terms`,
    images: [
      { url: "/flinck-og-image.png", alt: "Flinck Terms and Conditions" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Flinck",
    description:
      "Read the Flinck terms and conditions of use. Learn about user accounts, marketplace transactions, fees, wallet guidelines, and liability policies.",
    images: ["/flinck-og-image.png"],
  },
};

type Section = {
  title: string;
  body: string[];
  items?: string[];
};

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    body: [
      `Welcome to Flinck ("Flinck," "we," "our," or "us"). By downloading, accessing, or using the Flinck mobile application, website, related communications, and any connected services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms").`,
      `If you do not agree to these Terms, you must not access, download, or use our Services. We may modify these Terms at any time, and your continued use of our Services constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    title: "2. Eligibility and Account Registration",
    body: [
      `To use the Services, you must register for an account. By registering, you agree to provide accurate, current, and complete information and maintain the security of your account credentials.`,
    ],
    items: [
      "You must be at least 18 years old or the age of legal majority in your jurisdiction to create an account or use our marketplace features.",
      "You are responsible for all activity that occurs under your account. You must notify us immediately of any unauthorized access or breach of security.",
      "We reserve the right to suspend, terminate, or refuse registration of any account at our sole discretion, without liability.",
    ],
  },
  {
    title: "3. Agricultural Marketplace Guidelines",
    body: [
      `Flinck operates a digital marketplace linking independent farmers, produce sellers, and buyers. Flinck is a platform facilitator and is not a party to any contract, trade, or transaction between marketplace participants.`,
    ],
    items: [
      "Sellers are solely responsible for the accuracy of their product listings, including description, pricing, inventory availability, and crop quality.",
      "Buyers are responsible for verifying listing details, negotiating pricing, and inspecting produce upon receipt.",
      "We do not guarantee the quality, safety, legality, or delivery of any agricultural produce listed in our marketplace.",
    ],
  },
  {
    title: "4. Wallet, Payments, and Withdrawals",
    body: [
      `Flinck may provide digital wallet services to facilitate secure financial transactions within the marketplace.`,
    ],
    items: [
      "Wallet Balances: Users may maintain a wallet balance within the app to pay for marketplace products, premium promotions, or boosted visibility.",
      "Withdrawal and Funding: All fund additions and withdrawals must comply with our standard processing timelines, security verification procedures, and applicable anti-money laundering (AML) laws.",
      "Processing Fees: Flinck reserves the right to charge transaction fees or processing fees on transactions or withdrawals. Any such fees will be disclosed to you prior to the transaction.",
      "Third-Party Processors: We utilize licensed third-party payment processors to execute funding and payouts. We are not responsible for delays or errors caused by third-party processors.",
    ],
  },
  {
    title: "5. User Conduct and Prohibited Activities",
    body: [
      `To maintain a safe and credible trade network, you agree not to engage in any of the following prohibited behaviors:`,
    ],
    items: [
      "Providing false, misleading, or fraudulent information in profiles, listings, comments, or conversations.",
      "Engaging in collusive pricing, market manipulation, or unfair trade practices.",
      "Using the Services to distribute spam, malware, or unsolicited marketing material.",
      "Interfering with, disrupting, or hacking our network infrastructure or security systems.",
      "Harassing, threatening, or defrauding any other user or representative of Flinck.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      `All intellectual property rights in the Services, including text, graphics, logos, software, designs, and content (excluding User Content), are owned by or licensed to Flinck.`,
      `By uploading product photos, descriptions, profile images, or articles ("User Content"), you grant Flinck a worldwide, royalty-free, perpetual, non-exclusive license to use, display, reproduce, and distribute your User Content to operate and promote the Services.`,
    ],
  },
  {
    title: "7. Hyper-local Weather and Crop Signals Disclaimer",
    body: [
      `Flinck provides hyper-local weather alerts, farming calendars, and crop recommendations based on environmental and meteorological models.`,
      `This information is provided for educational and planning guidance only. Agricultural outcomes are subject to complex variables including soil health, regional microclimates, and management practices. Flinck does not guarantee crop yield or financial performance based on platform signals.`,
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      `To the maximum extent permitted by applicable law, Flinck, its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, crop yield, or data.`,
      `Our aggregate liability for all claims arising out of or relating to the use of the Services shall not exceed the amount paid by you to Flinck in the twelve (12) months preceding the claim.`,
    ],
  },
  {
    title: "9. Dispute Resolution and Governing Law",
    body: [
      `Any disputes arising out of or in connection with these Terms shall first be resolved through good-faith negotiation.`,
      `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Flinck is legally registered, without giving effect to conflicts of law principles.`,
    ],
  },
  {
    title: "10. Termination",
    body: [
      `We reserve the right, without notice and at our sole discretion, to terminate or suspend your account and access to the Services for violation of these Terms, fraud, or operational integrity reasons.`,
      `Upon termination, all licenses granted to you under these Terms immediately cease, and you must cease all use of the Services.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#1f7a45]/14 blur-3xl" />
        <div className="absolute right-[-10%] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-[#d9a441]/14 blur-3xl" />
      </div>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-6 rounded-[2rem] border border-slate-900/8 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 border-b border-slate-900/8 pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#dff2dd] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
                  <ShieldCheck className="h-4 w-4" />
                  Legal and Compliance
                </div>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                  Terms and Conditions
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  These Terms and Conditions govern your access to and use of
                  the Flinck mobile application, website, and digital services.
                  Please read them carefully before using our platform.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Last updated
                </p>
                <p className="mt-2 font-medium text-slate-950">May 22, 2026</p>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[1.5rem] bg-[#fcfbf7] p-6 ring-1 ring-slate-900/6"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {section.title}
                  </h2>

                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-slate-600 sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.items ? (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-[15px]"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a45]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-900/8 pt-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Flinck Legal Framework v1.1.0
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
