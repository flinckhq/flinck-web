import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Flinck privacy policy covering account information, permissions, payments, notifications, security, retention and user rights.",
  openGraph: {
    title: "Privacy Policy | Flinck",
    description:
      "Read the Flinck privacy policy covering account information, permissions, payments, notifications, security, retention and user rights.",
    url: `${SITE_URL}/policy`,
    images: [{ url: "/flinck-og-image.png", alt: "Flinck Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Flinck",
    description:
      "Read the Flinck privacy policy covering account information, permissions, payments, notifications, security, retention and user rights.",
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
    title: "1. Introduction",
    body: [
      `Welcome to Flinck ("Flinck," "we," "our," or "us"). This Privacy Policy explains how we collect, use, store, share, and protect information when you use the Flinck mobile application, website, related communications, and any connected services.`,
      `This policy is intended to help users, app stores, and regulators understand what data we process, why we process it, and the choices available to you.`,
    ],
  },
  {
    title: "2. Scope of This Policy",
    body: [
      `This Privacy Policy applies to information collected through the Flinck app, the Flinck website, customer support interactions, marketplace activity, and any services that link to or reference this policy.`,
      `If a third-party service, payment processor, or external website is integrated into the Flinck experience, that provider may also process data under its own privacy policy.`,
    ],
  },
  {
    title: "3. Information We Collect",
    body: [
      `We collect information you provide directly, information generated through your use of the platform, and limited technical information that helps us keep the platform secure and functional.`,
    ],
    items: [
      "Account information: name, username, email address, phone number, password or authentication credentials, and profile details.",
      "Farmer and business profile information: biography, location details, farm details, product listings, profile images, and marketplace identity information.",
      "Transaction and marketplace data: order details, cart activity, pricing, product inventory, sales activity, wallet balance visibility, and other commerce-related records.",
      "Communications: support requests, in-app submissions, content you publish, article interactions, and messages you send through platform features.",
      "Device and technical data: device type, operating system, app version, crash diagnostics, IP address, time zone, browser type on the web, and general usage patterns.",
      "Notification and token data: push notification tokens, delivery preferences, and related notification metadata.",
      "Location-related data: state, city, or other location information you provide or choose to share.",
      "Content and media: profile photos, product photos, article cover images, uploaded documents or media, and related metadata needed to store and display them.",
    ],
  },
  {
    title: "4. Information We Do Not Intentionally Collect",
    body: [
      `We do not intentionally collect highly sensitive personal information unless it is necessary for a feature you choose to use and is clearly disclosed to you in context.`,
      `We do not sell your personal data to third parties. We also do not intentionally collect personal information from children in a way that conflicts with applicable law.`,
    ],
  },
  {
    title: "5. Permissions We May Request",
    body: [
      `Depending on the features you use, Flinck may request device permissions. These permissions are requested only to enable product features and are not used for unrelated purposes.`,
    ],
    items: [
      "Camera: to take profile photos, product photos, or other images you choose to upload.",
      "Photos or media library: to select existing profile, article, or marketplace images from your device.",
      "Location: to improve relevance for weather, location-aware recommendations, and nearby marketplace visibility where supported.",
      "Notifications: to send order updates, market activity alerts, product events, wallet-related activity, weather notices, and important service messages.",
      "Network access and device diagnostics: to operate the service, secure sessions, detect errors, and improve performance.",
    ],
  },
  {
    title: "6. How We Use Your Information",
    body: [
      `We use collected data only for legitimate platform operations, service improvement, security, and compliance purposes.`,
    ],
    items: [
      "To create and manage user accounts and profiles.",
      "To authenticate users and maintain secure sessions.",
      "To enable product listings, farmer discovery, marketplace transactions, and direct user interactions.",
      "To personalize content, crop recommendations, weather-related information, and product visibility based on the information you provide.",
      "To process orders, update carts, support wallet and payment-related workflows, and maintain transaction records.",
      "To send service notifications, support responses, security notices, and transactional communications.",
      "To detect abuse, fraud, unauthorized access, policy violations, or suspicious marketplace behavior.",
      "To monitor platform performance, debug technical issues, and improve usability and product quality.",
      "To comply with legal obligations, enforce our terms, and protect our users, business, and infrastructure.",
    ],
  },
  {
    title: "7. Legal Bases for Processing",
    body: [
      `Where applicable under law, we process personal information based on one or more of the following legal grounds: your consent, performance of a contract with you, our legitimate interests in operating and improving the platform, and compliance with legal obligations.`,
    ],
  },
  {
    title: "8. Marketplace Visibility and Public Information",
    body: [
      `Some information on Flinck is intended to be visible to other users so the marketplace can function properly.`,
    ],
    items: [
      "Your public profile may include your name, username, profile image, bio, farm information, general location, and seller-related details.",
      "Product listings, product images, descriptions, pricing, and seller-facing information may be visible to buyers and other users.",
      "Articles, educational content, and community-facing submissions may be visible to users of the platform depending on the feature.",
    ],
  },
  {
    title: "9. Payments, Wallets, and Financial Processing",
    body: [
      `Flinck may support wallet or payment-related functionality. We maintain only the information reasonably necessary to display balances, track activity, support withdrawals or funding flows, and keep records associated with those features.`,
      `Where a third-party payment provider is used, that provider may collect and process financial information under its own privacy and security policies. Flinck does not intentionally store full card numbers or equivalent payment credentials unless explicitly stated and legally permitted.`,
    ],
  },
  {
    title: "10. Notifications and Communications",
    body: [
      `If you enable notifications, we may send push notifications, emails, or in-app notices related to account security, order activity, weather updates, market movements, article updates, or service announcements.`,
      `You may control certain notification preferences from within your device settings or your Flinck account settings where available. Some service or security notifications may still be sent when necessary.`,
    ],
  },
  {
    title: "11. Sharing of Information",
    body: [
      `We share personal information only where necessary to operate the service, comply with law, or protect legitimate interests.`,
    ],
    items: [
      "With other users, where disclosure is necessary for marketplace participation, user profiles, or public content features.",
      "With infrastructure and service providers such as hosting, analytics, image storage, authentication, email, notifications, or payment-support providers acting on our behalf.",
      "With regulators, law enforcement, courts, or public authorities where required by law, legal process, or to protect rights and safety.",
      "With professional advisers or in connection with a merger, acquisition, financing, reorganization, or sale of assets, subject to appropriate confidentiality and legal safeguards.",
    ],
  },
  {
    title: "12. Third-Party Services",
    body: [
      `Flinck may rely on third-party tools and service providers to deliver portions of the platform. These may include cloud hosting, database providers, image storage services, analytics tools, notification infrastructure, authentication systems, and payment facilitators.`,
      `Examples may include services such as Cloudinary for media storage and other infrastructure providers required to operate the app and website. These providers may process data on our behalf under their own contractual and legal obligations.`,
    ],
  },
  {
    title: "13. Data Retention",
    body: [
      `We retain personal information only for as long as reasonably necessary to provide the service, maintain marketplace integrity, resolve disputes, enforce agreements, comply with law, and preserve legitimate business records.`,
      `Retention periods may vary based on the type of information, whether an account remains active, and whether legal or operational obligations require continued storage.`,
    ],
  },
  {
    title: "14. Account Deletion and User Requests",
    body: [
      `You may update certain profile information from within the app. Where account deletion is available, you may request deletion of your account and associated data through the app or by contacting us.`,
      `Some records may be retained after deletion where necessary for fraud prevention, security, dispute resolution, financial reconciliation, backup integrity, or legal compliance.`,
    ],
  },
  {
    title: "15. Data Security",
    body: [
      `We use administrative, technical, and organizational safeguards designed to protect information against unauthorized access, misuse, loss, destruction, or disclosure.`,
      `These measures may include authentication controls, restricted access, encrypted transport, monitoring, and provider-level infrastructure protections. However, no system is completely secure, and we cannot guarantee absolute security.`,
    ],
  },
  {
    title: "16. International Transfers",
    body: [
      `Depending on where our providers or infrastructure are located, personal information may be processed in countries outside your place of residence. Where required, we take reasonable steps to ensure appropriate safeguards are in place for such transfers.`,
    ],
  },
  {
    title: "17. Children’s Privacy",
    body: [
      `Flinck is not directed to children, and we do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided personal information to us improperly, please contact us so that we can investigate and take appropriate action.`,
    ],
  },
  {
    title: "18. Your Rights and Choices",
    body: [
      `Depending on your location and applicable law, you may have rights relating to access, correction, deletion, objection, restriction, portability, or withdrawal of consent.`,
      `To exercise a privacy-related request, you may contact us using the details below. We may need to verify your identity before fulfilling certain requests.`,
    ],
  },
  {
    title: "19. Data Safety and App Store Disclosures",
    body: [
      `The information in this Privacy Policy should be read together with any data safety or privacy disclosures we provide in app store listings and developer consoles. Flinck’s disclosures are intended to reflect the data categories actually processed by the app and the purposes described in this policy.`,
      `App review decisions are made by the relevant platform, and approval may also depend on factors beyond this policy, including app behavior, permissions usage, data safety declarations, screenshots, listing quality, and compliance with current review guidelines.`,
    ],
  },
  {
    title: "20. Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time to reflect changes in the service, applicable law, or business operations. When we do, we will update the effective date on this page and, where appropriate, provide additional notice inside the app or website.`,
    ],
  },
  {
    title: "21. Contact Us",
    body: [
      `If you have questions, concerns, or requests related to this Privacy Policy or our handling of personal information, please contact us at compliance@Flinck.ag.`,
      `You may also use any support or contact channels provided in the Flinck app or website for privacy-related issues.`,
    ],
  },
];

export default function PolicyPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
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
                  Privacy Policy
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  This Privacy Policy explains how Flinck collects, uses,
                  protects, shares, and retains user information across the app,
                  website, and related services. It is written to support user
                  clarity and app-store compliance, but it should also match the
                  real behavior of the product and your store data-safety
                  disclosures.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Last updated
                </p>
                <p className="mt-2 font-medium text-slate-950">
                  March 19, 2026
                </p>
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
    </main>
  );
}
