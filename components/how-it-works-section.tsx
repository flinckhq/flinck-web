"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  Wallet,
  ShoppingBag,
  ShoppingCart,
  Truck,
  MapPin,
  CheckCircle2,
} from "lucide-react";

type TabKey = "farmers" | "buyers" | "logistics";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: typeof Camera;
}

interface TabData {
  title: string;
  subtitle: string;
  steps: Step[];
}

const tabData: Record<TabKey, TabData> = {
  farmers: {
    title: "For farmers",
    subtitle: "Sell your produce with confidence",
    steps: [
      {
        num: "1",
        title: "Post your produce",
        desc: "Add what you have available, including quantity, price, location, and availability.",
        icon: Camera,
      },
      {
        num: "2",
        title: "Connect with buyers",
        desc: "Receive orders from verified buyers looking for your produce.",
        icon: Users,
      },
      {
        num: "3",
        title: "Prepare & get paid",
        desc: "Confirm the order, hand it over for delivery, and receive your payment.",
        icon: Wallet,
      },
    ],
  },
  buyers: {
    title: "For Buyers",
    subtitle: "Source fresh products with ease",
    steps: [
      {
        num: "1",
        title: "Find what you need",
        desc: "Browse available produce from farmers and filter by crops, location and price.",
        icon: ShoppingBag,
      },
      {
        num: "2",
        title: "Place your order",
        desc: "Choose your produce, confirm the quantity and place your order.",
        icon: ShoppingCart,
      },
      {
        num: "3",
        title: "Track your delivery",
        desc: "A logistics partner picks up the produce and delivers it directly to you.",
        icon: Truck,
      },
    ],
  },
  logistics: {
    title: "For Logistics",
    subtitle: "Deliver & Earn on your schedule",
    steps: [
      {
        num: "1",
        title: "Find delivery jobs",
        desc: "Discover available pickup and delivery requests near you.",
        icon: MapPin,
      },
      {
        num: "2",
        title: "Accept & pick up",
        desc: "Accept a job, collect the produce from the farmer and start your delivery.",
        icon: CheckCircle2,
      },
      {
        num: "3",
        title: "Deliver & Earn",
        desc: "Complete the delivery, confirm it and receive your earnings.",
        icon: Wallet,
      },
    ],
  },
};

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("farmers");
  const current = tabData[activeTab];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#F2EAE0] py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
          >
            How Flinck works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-[#405249] max-w-2xl mx-auto font-medium"
          >
            From listing your produce to getting it delivered, Flinck connects
            farmers, buyers, and logistics partners every step of the way.
          </motion.p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full bg-[#E5DDD2] p-1.5 shadow-inner">
            {(["farmers", "buyers", "logistics"] as TabKey[]).map((tab) => {
              const isActive = activeTab === tab;
              const label =
                tab === "farmers"
                  ? "Farmers"
                  : tab === "buyers"
                    ? "Buyers"
                    : "Logistics";
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#1E4A38]/70 hover:text-[#1E4A38]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#1E4A38] shadow-md"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="mt-14"
          >
            {/* Left Header for Current Tab */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                {current.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#405249]">
                {current.subtitle}
              </p>
            </div>

            {/* Desktop Curve Layout */}
            <div className="relative hidden lg:block h-[420px] w-full">
              {/* Smooth S-Curve SVG */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 1000 360"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 20 280 Q 200 320 360 210 T 720 120 T 980 110"
                  stroke="#1E4A38"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              {/* Step 1 (Lower Left) */}
              <div className="absolute left-[8%] bottom-[4%] max-w-[260px]">
                <span className="absolute -top-14 right-4 -z-10 text-[7.5rem] font-black text-[#1E4A38]/8 select-none">
                  1
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1E4A38] bg-white text-[#1E4A38] shadow-md mb-4">
                  {(() => {
                    const Icon = current.steps[0].icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>
                <h4 className="text-base font-bold text-gray-950">
                  {current.steps[0].title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#405249] font-medium">
                  {current.steps[0].desc}
                </p>
              </div>

              {/* Step 2 (Center) */}
              <div className="absolute left-[44%] top-[28%] max-w-[260px]">
                <span className="absolute -top-14 right-4 -z-10 text-[7.5rem] font-black text-[#1E4A38]/8 select-none">
                  2
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1E4A38] bg-white text-[#1E4A38] shadow-md mb-4">
                  {(() => {
                    const Icon = current.steps[1].icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>
                <h4 className="text-base font-bold text-gray-950">
                  {current.steps[1].title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#405249] font-medium">
                  {current.steps[1].desc}
                </p>
              </div>

              {/* Step 3 (Upper Right) */}
              <div className="absolute right-[5%] top-[6%] max-w-[260px]">
                <span className="absolute -top-14 right-4 -z-10 text-[7.5rem] font-black text-[#1E4A38]/8 select-none">
                  3
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1E4A38] bg-white text-[#1E4A38] shadow-md mb-4">
                  {(() => {
                    const Icon = current.steps[2].icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>
                <h4 className="text-base font-bold text-gray-950">
                  {current.steps[2].title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#405249] font-medium">
                  {current.steps[2].desc}
                </p>
              </div>
            </div>

            {/* Mobile / Tablet Vertical Steps Layout */}
            <div className="relative lg:hidden space-y-8 pl-6 border-l-2 border-[#1E4A38]/25 ml-4">
              {current.steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[37px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1E4A38] bg-white text-[#1E4A38] shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-white/80 p-5 ring-1 ring-[#1E4A38]/10 shadow-sm">
                      <span className="absolute right-4 bottom-1 text-6xl font-black text-[#1E4A38]/10 select-none pointer-events-none">
                        {step.num}
                      </span>
                      <h4 className="text-base font-bold text-gray-950">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#405249] leading-relaxed max-w-sm font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
