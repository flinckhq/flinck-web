"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CloudSun, Bot, Truck, Wallet, Users } from "lucide-react";

const ecosystemModules = [
  {
    icon: ShoppingBag,
    title: "Market place",
    description:
      "Connect farmers with trusted buyers and make it easier to discover, list, and trade fresh produce at fair prices.",
  },
  {
    icon: CloudSun,
    title: "Weather",
    description:
      "Get timely, location-based weather information to help you plan farm activities and make better decisions.",
  },
  {
    icon: Bot,
    title: "Intelligent farm assistant",
    description:
      "Get quick, practical answers and personalized guidance to help you solve farming challenges.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Connect with logistics to move produce efficiently from the farm to the buyer while keeping every delivery on track.",
  },
  {
    icon: Wallet,
    title: "Finance",
    description:
      "Make and receive payments securely while gaining access to financial tools designed to support your agricultural business.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a growing network of farmers, buyers, and agricultural professionals to share knowledge and grow together.",
  },
];

export function EcosystemSection() {
  return (
    <section className="bg-[#F2EAE0] py-20 sm:py-28">
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
            The Flinck Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-[#405249] max-w-2xl mx-auto font-medium"
          >
            Tools that make it easier to sell produce, source with confidence,
            and move goods from farm to buyer.
          </motion.p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemModules.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-start rounded-3xl border border-[#1E4A38]/10 bg-white/90 p-7 sm:p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EAE0] text-[#1E4A38] transition-colors group-hover:bg-[#1E4A38] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#405249] font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
