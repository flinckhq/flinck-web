"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Vegetable farmer, Kaduna",
    avatarInitial: "AY",
    avatarBg: "bg-[#1E4A38]",
    quote:
      "I used to rely on multiple middlemen who took most of the profit. Now I list directly and find verified buyers within hours.",
    rating: 5,
  },
  {
    name: "Daniel Kofi",
    role: "Produce buyer, Accra",
    avatarInitial: "DK",
    avatarBg: "bg-[#062C76]",
    quote:
      "The identity layer makes a huge difference. Seeing verified farmers and their past trading history gives me complete confidence in bulk orders.",
    rating: 5,
  },
  {
    name: "Esther Njeri",
    role: "Cooperative lead, Nakuru",
    avatarInitial: "EN",
    avatarBg: "bg-[#1E4A38]",
    quote:
      "Having weather intelligence, crop tracking, and marketplace access in one phone interface saves us hours of manual planning every week.",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="bg-[#F2EAE0] py-20 sm:py-28 overflow-hidden"
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
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-[#405249] max-w-2xl mx-auto font-medium"
          >
            See how Flinck is helping farmers sell better, buyers source with
            confidence, and logistics partners grow their businesses.
          </motion.p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative mx-auto mt-16 max-w-4xl px-4 sm:px-12">
          {/* Top-Left Big Green Quote Mark */}
          <span className="absolute -top-10 left-0 sm:left-4 text-7xl sm:text-8xl font-serif text-[#1E4A38] select-none pointer-events-none">
            “
          </span>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-[2.2rem] bg-white/90 p-8 sm:p-12 shadow-md ring-1 ring-[#1E4A38]/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-start"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${current.avatarBg} text-xs font-bold text-white shadow-sm`}
                  >
                    {current.avatarInitial}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-950">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#405249] font-medium">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-900 max-w-2xl font-medium">
                  {current.quote}
                </p>

                {/* Star Rating */}
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom-Right Big Green Quote Mark */}
            <span className="absolute bottom-2 right-6 sm:right-10 text-7xl sm:text-8xl font-serif text-[#1E4A38] select-none pointer-events-none">
              ”
            </span>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#2E6B52] text-white shadow-md transition hover:bg-[#1E4A38]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#1E4A38] text-white shadow-md transition hover:bg-[#16372A]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? "h-2 w-7 rounded-full bg-[#1E4A38]"
                    : "h-2 w-2 rounded-full bg-[#1E4A38]/20 hover:bg-[#1E4A38]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
