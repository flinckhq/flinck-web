"use client";

import { motion } from "framer-motion";
import {
  Play,
  CloudSun,
  Droplets,
  Wind,
  CloudRain,
  Heart,
  Eye,
} from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site-content";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1E4A38] py-20 sm:py-28 text-white">
      {/* Subtle brand curves */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C300 100 600 500 1300 200"
            stroke="#F2EAE0"
            strokeWidth="80"
          />
          <path
            d="M-100 500 C400 300 700 700 1300 400"
            stroke="#F2EAE0"
            strokeWidth="60"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Copy & Buttons */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl text-white"
            >
              Start farming.
              <br />
              <span className="text-[#F2EAE0]">For free.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-[#F2EAE0]/85 font-medium"
            >
              Join the network of modern farmers, buyers, and agribusinesses
              transforming agriculture across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3.5 sm:max-w-xs"
            >
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-center rounded-full bg-[#F2EAE0] px-8 text-sm font-black text-[#1E4A38] shadow-lg transition hover:bg-white active:scale-[0.98]"
              >
                Download App
              </a>

              <a
                href="#how-it-works"
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#F2EAE0]/35 bg-transparent px-8 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                See Demo
                <Play className="h-3 w-3 fill-current text-[#F2EAE0]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Overlapping Phone Mockups */}
          <div className="relative flex justify-center items-center h-[460px] sm:h-[500px]">
            {/* Background Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-[8%] sm:left-[14%] top-4 w-[240px] sm:w-[270px] rounded-[2.5rem] bg-slate-900 p-2.5 shadow-2xl ring-1 ring-white/10"
            >
              <div className="overflow-hidden rounded-[2rem] bg-white p-3.5 text-gray-900">
                {/* Weather card with Royal Blue #062C76 */}
                <div className="rounded-2xl bg-gradient-to-br from-[#062C76] to-[#12429E] p-3.5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black">28°</span>
                      <p className="text-[10px] text-white/90 font-medium">
                        Partly cloudy
                      </p>
                      <p className="text-[9px] text-white/70">Feels like 31°</p>
                    </div>
                    <CloudSun className="h-9 w-9 text-amber-300" />
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-1 border-t border-white/20 pt-2 text-center text-[9px]">
                    <div>
                      <Droplets className="mx-auto h-2.5 w-2.5" />
                      <span className="font-bold">65%</span>
                    </div>
                    <div>
                      <Wind className="mx-auto h-2.5 w-2.5" />
                      <span className="font-bold">12km/h</span>
                    </div>
                    <div>
                      <CloudRain className="mx-auto h-2.5 w-2.5" />
                      <span className="font-bold">20%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[10px] font-bold text-[#1E4A38] uppercase">
                    Quick Actions
                  </p>
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="rounded bg-[#F2EAE0] px-2 py-1 text-[9px] font-bold text-[#1E4A38]">
                      🌾 My farm
                    </span>
                    <span className="rounded bg-[#F2EAE0] px-2 py-1 text-[9px] font-bold text-[#1E4A38]">
                      🤖 AI Helper
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Foreground Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="absolute right-[4%] sm:right-[10%] bottom-4 w-[250px] sm:w-[280px] rounded-[2.5rem] bg-slate-950 p-2.5 shadow-2xl ring-1 ring-white/15 z-10"
            >
              <div className="overflow-hidden rounded-[2rem] bg-white p-3.5 text-gray-900">
                <div className="flex items-center gap-2 pb-2.5">
                  <div className="h-6 w-6 rounded-full bg-[#1E4A38] text-[9px] font-bold text-white flex items-center justify-center">
                    H
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400">Hello,</p>
                    <p className="text-[11px] font-bold text-[#1E4A38]">
                      Haleemah
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-[#062C76] to-[#12429E] p-2.5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black">28°</span>
                      <span className="ml-1 text-[9px] text-white/90">
                        Partly cloudy
                      </span>
                    </div>
                    <CloudSun className="h-5 w-5 text-amber-300" />
                  </div>
                </div>

                <div className="mt-2.5 rounded-xl bg-[#F2EAE0]/50 p-2 text-[10px] ring-1 ring-[#1E4A38]/10">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-950">
                      Nuage Laboratoire
                    </span>
                    <span className="text-[8px] text-gray-400">Author</span>
                  </div>
                  <p className="mt-1 font-semibold text-gray-800 line-clamp-1">
                    Cassava processing: Garri prices holding
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[8px] text-gray-400 border-t border-gray-200 pt-1">
                    <span className="font-bold text-[#1E4A38]">Update</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5">
                        <Heart className="h-2 w-2 text-red-500 fill-red-500" />{" "}
                        12
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Eye className="h-2 w-2" /> 6k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
