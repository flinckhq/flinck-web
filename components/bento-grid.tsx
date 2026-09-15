"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CloudSun,
  Wind,
  Droplets,
  CloudRain,
  MapPin,
  User,
  Heart,
  Eye,
  Sparkles,
  Bot,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section id="features" className="bg-[#F2EAE0] py-20 sm:py-28">
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
            Everything You Need to Move Agriculture Forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-[#405249] max-w-2xl mx-auto font-medium"
          >
            From selling and sourcing produce to managing deliveries and making
            smarter farming decisions
          </motion.p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="mt-16 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Card 1: Weather Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-white/90 p-7 sm:p-9 ring-1 ring-[#1E4A38]/10 shadow-sm"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E4A38]/60">
                WEATHER INTELLIGENCE
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-gray-950">
                Know before you grow
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#405249] max-w-md font-medium">
                Hyper-local weather forecasts and crop guidance that help you
                plan planting, irrigation, and harvest with confidence.
              </p>
            </div>

            {/* Weather Mockup Card */}
            <div className="relative mt-8 mx-auto w-full max-w-sm rounded-3xl bg-[#F2EAE0]/70 p-4 shadow-xl ring-1 ring-[#1E4A38]/10">
              {/* Top Greeting */}
              <div className="flex items-center gap-2.5 pb-3">
                <div className="h-7 w-7 rounded-full bg-[#1E4A38] text-[10px] font-bold text-white flex items-center justify-center">
                  H
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Hello,
                  </p>
                  <p className="text-xs font-bold text-[#1E4A38]">Haleemah</p>
                </div>
              </div>

              {/* Blue Weather Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#062C76] to-[#14429B] p-4 text-white shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold">28°</span>
                    <p className="text-xs font-semibold text-white/90">
                      Partly cloudy
                    </p>
                    <p className="text-[10px] text-white/70">Feels like 31°</p>
                  </div>
                  <CloudSun className="h-12 w-12 text-amber-300 drop-shadow-md" />
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/20 pt-2.5 text-center text-[10px]">
                  <div>
                    <p className="text-white/70 flex items-center justify-center gap-1">
                      <Droplets className="h-3 w-3" /> Humidity
                    </p>
                    <p className="font-bold">65%</p>
                  </div>
                  <div>
                    <p className="text-white/70 flex items-center justify-center gap-1">
                      <Wind className="h-3 w-3" /> Wind
                    </p>
                    <p className="font-bold">12km/h</p>
                  </div>
                  <div>
                    <p className="text-white/70 flex items-center justify-center gap-1">
                      <CloudRain className="h-3 w-3" /> Rain
                    </p>
                    <p className="font-bold">20%</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-3">
                <p className="text-[10px] font-bold text-[#1E4A38] uppercase tracking-wider">
                  Quick Actions
                </p>
                <div className="mt-1.5 flex gap-2">
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[10px] font-bold text-[#1E4A38] shadow-sm">
                    🌾 Soil moisture
                  </span>
                  <span className="rounded-lg bg-white px-2.5 py-1 text-[10px] font-bold text-[#1E4A38] shadow-sm">
                    🗓️ Spray schedule
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Marketplace - Royal Blue #062C76 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-[#062C76] p-7 sm:p-9 text-white shadow-xl"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2EAE0]/75">
                MARKETPLACE
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
                Buy and sell directly
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#F2EAE0]/85 max-w-md font-medium">
                List your harvest, set your price, and connect with verified
                buyers — no middlemen, no friction.
              </p>
            </div>

            {/* Product Card Mockup */}
            <div className="relative mt-8 mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-white p-3.5 text-gray-900 shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-amber-50">
                <Image
                  src="/marketplace-vibe.png"
                  alt="Irish potatoes produce listing"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-gray-950">
                    Irish potatoes
                  </h4>
                  <span className="text-[10px] text-gray-400 font-medium">
                    15 Days ago
                  </span>
                </div>
                <div className="mt-0.5 inline-block rounded bg-[#062C76]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-[#062C76]">
                  CROP
                </div>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-lg font-black text-gray-950">
                    20,000
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    NGN / bag
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2 text-[10px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-red-500" /> Kwara State
                  </span>
                  <span className="flex items-center gap-1 font-bold text-[#062C76]">
                    <User className="h-3 w-3" /> Nuage Laboratoire
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI Assistant - Botanical Green #1E4A38 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-[#1E4A38] p-7 sm:p-9 text-white shadow-xl"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2EAE0]/75">
                AI ASSISTANT
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
                Farming, supercharged.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#F2EAE0]/85 max-w-md font-medium">
                Get instant answers on pest control, soil health, market prices,
                and best practices powered by AI trained for agriculture.
              </p>
            </div>

            {/* Muna AI Chat Interface */}
            <div className="relative mt-8 mx-auto w-full max-w-sm rounded-3xl bg-white p-4 text-gray-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E4A38] text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-bold text-[#1E4A38]">Muna AI</p>
                </div>
                <Sparkles className="h-3.5 w-3.5 text-[#1E4A38]" />
              </div>

              <div className="mt-3 space-y-2.5 text-xs">
                <div className="flex gap-2">
                  <div className="flex-1 rounded-2xl rounded-tl-sm bg-[#F2EAE0]/60 p-2.5 text-gray-800 font-medium">
                    Hello, Haleemah. How can I help you with your farm today?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#1E4A38] p-2.5 text-white font-medium">
                    Hi Muna, my tomato leaves are turning yellow with brown
                    spots. What could it be?
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 rounded-2xl rounded-tl-sm bg-[#F2EAE0]/60 p-2.5 text-gray-800 font-medium">
                    Yellowing leaves with spots can be caused by early fungal
                    blight, nutrient deficiency, or excess moisture. Let&apos;s
                    inspect your soil.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Community */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-white/90 p-7 sm:p-9 ring-1 ring-[#1E4A38]/10 shadow-sm"
          >
            {/* Top Mockup: Community Feed */}
            <div className="relative mx-auto w-full max-w-sm rounded-3xl bg-[#F2EAE0]/60 p-4 shadow-xl ring-1 ring-[#1E4A38]/10 mb-6">
              <div className="flex justify-between border-b border-[#1E4A38]/10 pb-2.5 text-[10px] font-bold text-[#405249]">
                <span className="text-[#1E4A38]">My farm</span>
                <span>AI Helper</span>
                <span>Market</span>
                <span>Social</span>
              </div>

              <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-black/5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#1E4A38] text-[9px] font-bold text-white flex items-center justify-center">
                    NL
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-950">
                      Nuage Laboratoire
                    </p>
                    <p className="text-[9px] text-gray-400">Author</p>
                  </div>
                </div>

                <p className="mt-2 text-xs font-bold text-gray-950">
                  Cassava processing: Garri prices holding steady
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#405249] font-medium">
                  Garri price remain stable at 1500-2000 NGN per paint rubber
                  (2.5kg). Demand remains high in Southwest hubs.
                </p>

                <div className="mt-2.5 flex items-center justify-between text-[10px] text-gray-400 border-t border-gray-100 pt-2 font-medium">
                  <span className="font-bold text-[#1E4A38]">Update</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Heart className="h-3 w-3 text-red-500 fill-red-500" /> 12
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Eye className="h-3 w-3" /> 6,000
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E4A38]/60">
                COMMUNITY
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-gray-950">
                Where farmers connect.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#405249] max-w-md font-medium">
                Follow, share, and learn from a network of farmers, buyers, and
                agribusinesses built for agriculture, not generic social media.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
