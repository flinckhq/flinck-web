import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CloudRainWind,
  Landmark,
  MapPinned,
  MessageSquareMore,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Store,
  TrendingUp,
  Users,
  Wallet,
  Wheat,
  BellRing,
} from "lucide-react";

export const SITE_URL = "https://getflinck.pro";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.k09dtechnologies.flink";
export const SUPPORT_EMAIL = "hello@flinck.app";
export const SPONSOR_EMAIL = "hello@flinck.app";

export type Highlight = {
  value: string;
  label: string;
  note: string;
};

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description?: string;
  copy?: string;
  eyebrow?: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  tone: string;
};

export type ProofStats = {
  value: string;
  label: string;
  note: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Audience = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const platformModules = [
  {
    icon: Users,
    eyebrow: "Social",
    title: "Community & discovery",
    description:
      "Follow updates, exchange advice, and verify operators inside a vertical platform.",
    copy: "No algorithmic distractions, just agriculture.",
    href: "/how-it-works",
  },
  {
    icon: ShoppingBasket,
    eyebrow: "Commerce",
    title: "Open marketplace",
    description:
      "List and discover ag products with direct buyer–seller negotiation.",
    copy: "Reduce middlemen where the network supports direct trade.",
    href: "/how-it-works",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Trust",
    title: "Identity & verification",
    description: "Profiles and trust cues that strengthen every transaction.",
    copy: "Build credibility that buyers, sponsors, and programs recognize.",
    href: "/how-it-works",
  },
  {
    icon: Building2,
    eyebrow: "Ecosystem",
    title: "Sponsorship & enablement",
    description:
      "Sponsorship lanes for banks, government, and global foundations.",
    copy: "Public infrastructure built for the entire agricultural value chain.",
    href: "/sponsors",
  },
];

export const heroCopy = {
  eyebrow: "Agricultural social marketplace for everyone in the chain",
  title: "Where agriculture connects, trades, and grows.",
  subtitle:
    "Flinck brings farmers, consumers, businesses, manufacturers, banks, government, and ag investors into one trusted network—social discovery, marketplace execution, and verified trade in a single platform.",
  primaryCta: "Get the Flinck app",
  secondaryCta: "Explore how it works",
};

export const audiences: Audience[] = [
  {
    slug: "farmers",
    title: "Farmers & producers",
    tagline: "Sell, learn, and build reputation",
    description:
      "List harvests, follow market signals, get weather guidance, and grow a verified profile buyers trust.",
    icon: Wheat,
    bullets: [
      "Direct listings with in-app negotiation",
      "Hyper-local weather and crop guidance",
      "Reputation that travels with every trade",
    ],
    ctaLabel: "Download for Android",
    ctaHref: PLAY_STORE_URL,
  },
  {
    slug: "buyers",
    title: "Buyers & consumers",
    tagline: "Discover and purchase with confidence",
    description:
      "Find produce and ag products from verified sellers, compare offers, and coordinate fulfillment in one place.",
    icon: ShoppingBasket,
    bullets: [
      "Search by crop, region, and seller trust",
      "Secure messaging before you commit",
      "Transparent pricing and order history",
    ],
    ctaLabel: "Start buying on Flinck",
    ctaHref: PLAY_STORE_URL,
  },
  {
    slug: "businesses",
    title: "Businesses & manufacturers",
    tagline: "Procure at scale with clarity",
    description:
      "Source from a network of verified suppliers, manage recurring procurement, and reduce middleman friction.",
    icon: Building2,
    bullets: [
      "Bulk and contract-friendly listings",
      "Supplier verification and trade history",
      "Logistics coordination in-app",
    ],
    ctaLabel: "Sponsor our supply chain",
    ctaHref: "/sponsors",
  },
  {
    slug: "banks",
    title: "Banks & fintech",
    tagline: "Trade-backed financial signals",
    description:
      "Explore wallet flows, identity-aligned profiles, and marketplace activity that supports smarter ag finance.",
    icon: Landmark,
    bullets: [
      "Verified user and business profiles",
      "Transaction and wallet activity context",
      "Sponsorship-aligned development lanes",
    ],
    ctaLabel: "Sponsor Flinck Ecosystem",
    ctaHref: "/sponsors",
  },
  {
    slug: "government",
    title: "Government & programs",
    tagline: "Reach and visibility at scale",
    description:
      "Support subsidies, traceability, and regional supply programs with data grounded in real marketplace activity.",
    icon: ShieldCheck,
    bullets: [
      "Regional supply and demand visibility",
      "Program outreach through the network",
      "Audit-friendly trade records",
    ],
    ctaLabel: "Become an institutional sponsor",
    ctaHref: "/sponsors",
  },
  {
    slug: "investors",
    title: "Ag agribusiness sponsors",
    tagline: "Ecosystem enablement with ground truth",
    description:
      "See operator quality, regional momentum, and trade patterns that inform agribusiness and impact investing.",
    icon: TrendingUp,
    bullets: [
      "Marketplace-derived activity signals",
      "Operator and cooperative visibility",
      "Sponsorship and ecosystem grants",
    ],
    ctaLabel: "Explore sponsorship tiers",
    ctaHref: "/sponsors",
  },
];

export const proofStats: ProofStats[] = [
  {
    value: "Actionable Weather",
    label:
      "Precision forecasting that provides specific planting and harvesting windows.",
    note: "Reduce crop loss and optimize field timing.",
  },
  {
    value: "Boosted Sales",
    label:
      "Marketplace listings with priority visibility for high-demand agricultural products.",
    note: "Connect with buyers 3x faster than traditional methods.",
  },
  {
    value: "Verified Trust",
    label:
      "Secure profiles and transaction history that build long-term trade credibility.",
    note: "Eliminate buyer hesitation and secure better deals.",
  },
  {
    value: "Smart Advisory",
    label:
      "Contextual AI assistance for pest control, soil management, and market pricing.",
    note: "Advice should feel built into the workflow.",
  },
];

export const highlights: Highlight[] = [
  {
    value: "Social network",
    label:
      "Follow updates, exchange advice, and verify operators inside a vertical platform.",
    note: "No algorithmic distractions, just agriculture.",
  },
  {
    value: "Open commerce",
    label:
      "List and discover ag products with direct buyer–seller negotiation.",
    note: "Reduce middlemen where the network supports direct trade.",
  },
  {
    value: "Verified identity",
    label: "Profiles and trust cues that strengthen every transaction.",
    note: "Build credibility that buyers, sponsors, and programs recognize.",
  },
  {
    value: "Ecosystem sponsored",
    label: "Sponsorship lanes for banks, government, and global foundations.",
    note: "Ecosystem-supported infrastructure built for public good, just like Vercel.",
  },
];

export const pillars: FeatureCard[] = [
  {
    icon: Users,
    eyebrow: "Social",
    title: "Community & discovery",
    description:
      "Follow operators, share updates, and learn from a network built for agriculture—not generic social noise.",
  },
  {
    icon: Store,
    eyebrow: "Commerce",
    title: "Unified marketplace",
    description:
      "List, promote, and sell with tools for individuals, cooperatives, and institutional procurement.",
  },
  {
    icon: CloudRainWind,
    eyebrow: "Intelligence",
    title: "Precision for the field",
    description:
      "Location-aware weather and crop guidance so decisions on the farm match conditions in the market.",
  },
  {
    icon: Wallet,
    eyebrow: "Finance",
    title: "Payments & growth",
    description:
      "Wallet flows, performance visibility, and sponsored integration lanes for ag finance.",
  },
];

export const capabilities: FeatureCard[] = [
  {
    icon: MapPinned,
    title: "Location-specific alerts",
    copy: "Weather and market signals relevant to your farm or operating region.",
  },
  {
    icon: Sprout,
    title: "Crop management",
    copy: "Guidance for planting, protection, and harvest across diverse operations.",
  },
  {
    icon: ShoppingBasket,
    title: "Clear product listing",
    copy: "Display crops, terms, and photos to buyers with standardized trust cues.",
  },
  {
    icon: MessageSquareMore,
    title: "Direct chat & negotiation",
    copy: "Communicate directly to arrange pricing, transport, and delivery.",
  },
  {
    icon: BellRing,
    title: "Action loops",
    copy: "Weather alerts, message notices, and payment updates that keep users engaged.",
  },
  {
    icon: TrendingUp,
    title: "Reach & growth options",
    copy: "Standard, premium, and boosted placement templates to capture demand.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Vegetable farmer, Kaduna",
    quote:
      "I used to rely on multiple middlemen who took most of the profit. Now I list directly and find verified buyers within hours.",
  },
  {
    name: "Daniel Kofi",
    role: "Produce buyer, Accra",
    quote:
      "The identity layer makes a huge difference. Seeing verified farmers and their past trading history gives me confidence.",
  },
  {
    name: "Esther Njeri",
    role: "Cooperative lead, Nakuru",
    quote:
      "Having weather intelligence, crop tracking, and marketplace access in one phone interface saves us hours of manual planning every week.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Who is Flinck for?",
    answer:
      "Flinck is for farmers, food buyers, input sellers, cooperative leads, and agribusiness operators who need clean discovery and secure transaction layers on mobile.",
  },
  {
    question: "How does Flinck verify users?",
    answer:
      "We use progressive verification—identity checks, trade history, and reputation signals—so trust grows with real activity on the platform.",
  },
  {
    question: "Is Flinck only a marketplace?",
    answer:
      "No. It is a social marketplace: community and discovery plus listings, negotiation, payments, and sponsorship paths for institutions.",
  },
  {
    question: "How do banks or government sponsor?",
    answer:
      "Visit our Sponsors page or email sponsors@flinck.ag. We scope data sharing, compliance, and rollout geography before any integration.",
  },
  {
    question: "Is the app available on iOS?",
    answer:
      "Flinck is available on Android today via Google Play. iOS availability will be announced on this site when ready.",
  },
  {
    question: "What does it cost to list produce?",
    answer:
      "Basic listings are free. Premium visibility and analytics are available for operators who want to accelerate reach.",
  },
];

export const screenshots: Screenshot[] = [
  {
    src: "/hero-mockup.png",
    alt: "Flinck app mockup with weather and crop health",
    tone: "from-[#2756db]/12 via-[#1f7a45]/10 to-[#ffffff]",
  },
  {
    src: "/farmer-lifestyle.png",
    alt: "Farmer using Flinck in the field",
    tone: "from-[#f4fbe7] via-[#eef4ff] to-white",
  },
];

export const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/download", label: "Download" },
  { href: "/policy", label: "Privacy" },
];

export const flows: string[] = [
  "Connect in the network",
  "List and discover inventory",
  "Negotiate and secure deals",
  "Settle, grow reputation, and scale",
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((a) => a.slug);
}
