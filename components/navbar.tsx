"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site-content";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#community", label: "Community" },
  { href: "#ai", label: "AI" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7f2e8]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/logo.png"
              alt="Flinck"
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Flinck
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-[#163d2a] px-5 text-sm font-medium text-white transition-all hover:bg-[#10281d] active:scale-[0.97]"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute inset-x-0 top-full border-t border-gray-100 bg-[#f7f2e8]/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-white/70"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex h-12 items-center justify-center rounded-full bg-[#163d2a] text-base font-medium text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
