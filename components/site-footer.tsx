import Link from "next/link";
import {
  PLAY_STORE_URL,
  SPONSOR_EMAIL,
  navLinks,
  audiences,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-slate-950">Flinck</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Agricultural social marketplace connecting farmers, buyers,
              businesses, banks, government, and sponsors across Africa.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-slate-950"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Who it&apos;s for
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {audiences.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/for/${a.slug}`}
                    className="text-slate-600 hover:text-slate-950"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-900/8 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flinck. All rights reserved.</p>
          <a href={`mailto:${SPONSOR_EMAIL}`} className="hover:text-slate-950">
            {SPONSOR_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
