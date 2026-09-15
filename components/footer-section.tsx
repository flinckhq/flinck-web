import Link from "next/link";
import { PLAY_STORE_URL, SPONSOR_EMAIL } from "@/lib/site-content";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#1E4A38] pt-16 pb-6 text-white sm:pt-20 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-white">
                FLINCK
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-[#F2EAE0]/75 font-medium">
              Connecting the people who grow, buy and move agriculture
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              PLATFORM
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#F2EAE0]/70 font-medium">
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-white transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-white transition"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition">
                  AI assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* For You Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              FOR YOU
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#F2EAE0]/70 font-medium">
              <li>
                <Link
                  href="/for/farmers"
                  className="hover:text-white transition"
                >
                  Farmers
                </Link>
              </li>
              <li>
                <Link
                  href="/for/buyers"
                  className="hover:text-white transition"
                >
                  Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/for/businesses"
                  className="hover:text-white transition"
                >
                  Logistics partners
                </Link>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              COMPANY
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#F2EAE0]/70 font-medium">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition"
                >
                  About Flinck
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SPONSOR_EMAIL}`}
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              SUPPORT
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#F2EAE0]/70 font-medium">
              <li>
                <a
                  href={`mailto:${SPONSOR_EMAIL}`}
                  className="hover:text-white transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <Link href="/policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-[#F2EAE0]/60">
            © {new Date().getFullYear()} Flinck. All rights reserved.
          </p>
        </div>

        {/* Massive Watermark at the bottom */}
        <div className="relative mt-8 select-none pointer-events-none text-center overflow-hidden">
          <p className="text-[5rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tight text-[#F2EAE0]/[0.08]">
            FLINCK
          </p>
        </div>
      </div>
    </footer>
  );
}
