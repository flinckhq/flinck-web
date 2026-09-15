"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site-content";

function GooglePlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.34-.61-.83-.61-1.406V3.22c0-.576.24-1.066.609-1.406z"
        fill="#00E676"
      />
      <path
        d="M17.18 8.613L4.85 1.5c-.43-.25-.86-.25-1.241-.036L13.793 12l3.387-3.387z"
        fill="#FFD600"
      />
      <path
        d="M3.609 22.536c.38.214.81.214 1.24-.036l12.33-7.113L13.793 12 3.61 22.186v.35z"
        fill="#F44336"
      />
      <path
        d="M20.938 10.75l-3.758-2.137L13.793 12l3.387 3.387 3.758-2.137c1.062-.603 1.062-1.897 0-2.5z"
        fill="#00B0FF"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 bg-[#F2EAE0]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main Headings */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.2rem] font-black leading-[1.03] tracking-tight text-gray-950 sm:text-7xl lg:text-[5.5rem]"
          >
            Sell Farm Products.
            <br />
            <span className="text-[#1E4A38]">In Minutes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#405249] sm:text-lg sm:leading-8 font-medium"
          >
            The first social marketplace connecting farmers, buyers, and
            agribusinesses into one trusted ecosystem.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
          >
            {/* Google Play Store Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1E4A38] px-7 text-sm font-bold text-white shadow-sm transition hover:bg-[#16372A]"
            >
              Download App
              <GooglePlayIcon className="h-5 w-5 shrink-0" />
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Image Container with Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-12 max-w-6xl"
        >
          {/* Floating Pill: Join 200+ users */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute -top-5 lg:-right-8 -right-4 z-20 flex items-center gap-2.5 rounded-full border border-[#1E4A38]/10 bg-white/95 px-4 py-3.5 shadow-xl backdrop-blur-md sm:right-8"
          >
            <div className="flex -space-x-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1E4A38] text-[10px] font-bold text-white ring-2 ring-white">
                AU
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#062C76] text-[10px] font-bold text-white ring-2 ring-white">
                DK
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1E4A38] text-[10px] font-bold text-white ring-2 ring-white">
                EN
              </span>
            </div>
            <span className="text-xs font-bold text-[#1E4A38] pr-1">
              Join 200+ users
            </span>
          </motion.div>

          {/* Hero Banner Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/8.5] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.8rem] bg-stone-200 shadow-2xl ring-1 ring-[#1E4A38]/10">
            <Image
              src="/hero-img.jpg"
              alt="Flinck - African Farmer smiling with harvest and mobile phone"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
