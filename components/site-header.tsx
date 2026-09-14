"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL, navLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative sticky top-0 z-50 border-b border-slate-900/10 bg-[#f6f3ea]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="shrink-0 overflow-hidden rounded-xl border border-slate-900/8 bg-white shadow-[0_12px_30px_rgba(22,61,42,0.12)] sm:rounded-2xl">
            <Image
              src="/logo.png"
              alt="Flinck logo"
              width={44}
              height={44}
              className="h-10 w-10 object-cover sm:h-11 sm:w-11"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-tight sm:text-lg">
              Flinck
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 sm:block">
              Agricultural social marketplace
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/sponsors"
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-4 text-sm font-medium text-slate-900 transition hover:bg-white"
          >
            Sponsors
          </Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#163d2a] px-4 text-sm font-medium text-white transition hover:bg-[#10281d]"
          >
            Download
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close site menu" : "Open site menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-900/8 bg-white text-slate-900 shadow-sm lg:hidden"
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />
          <div className="absolute inset-x-0 top-full z-[70] px-3 pb-4 pt-3 sm:px-6 lg:hidden">
            <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-slate-900/8 bg-white p-4 shadow-2xl">
              <div className="flex items-center justify-between gap-3 border-b border-slate-900/8 pb-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Menu
                  </p>
                  <p className="mt-1 truncate text-xl font-semibold text-slate-950">
                    Explore Flinck
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close site menu"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-900/8 bg-[#f7f2e8] text-slate-900"
                >
                  <span className="relative h-5 w-5" aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                    <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                  </span>
                </button>
              </div>
              <div className="mt-5 grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 font-medium text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-2xl bg-[#163d2a] px-5 py-4 text-center font-medium text-white"
                >
                  Download app
                </a>
                <Link
                  href="/sponsors"
                  onClick={closeMenu}
                  className="rounded-2xl border border-slate-900/8 px-5 py-4 text-center font-medium"
                >
                  Sponsor Flinck
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
