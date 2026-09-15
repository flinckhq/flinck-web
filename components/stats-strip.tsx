"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8000+", label: "Products" },
  { value: "14+", label: "Countries" },
  { value: "1000+", label: "Community" },
];

export function StatsStrip() {
  return (
    <section className="bg-[#1E4A38] py-9 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-3 sm:px-6"
            >
              <p className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#F2EAE0]/75 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
