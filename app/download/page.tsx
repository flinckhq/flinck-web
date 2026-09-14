import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { PLAY_STORE_URL, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
  alternates: { canonical: `${SITE_URL}/download` },
  openGraph: {
    title: "Download | Flinck",
    description:
      "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
    url: `${SITE_URL}/download`,
    images: [{ url: "/flinck-og-image.png", alt: "Download Flinck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download | Flinck",
    description:
      "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
    images: ["/flinck-og-image.png"],
  },
};

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-[#dff2dd] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#1f7a45] sm:text-xs sm:tracking-[0.24em]">
                <Download className="h-4 w-4 shrink-0" />
                Android · Google Play
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:tracking-[-0.04em] lg:text-6xl">
                Ready to join the Flinck network?
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                Connect, list, negotiate, and trade on the agricultural social
                marketplace built for farmers, buyers, and the institutions that
                support them.
              </p>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-[3.25rem] w-full rounded-full bg-[#163d2a] px-6 text-base text-white shadow-xl hover:bg-[#0f2a1d] sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
                >
                  <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                    Download for Android
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-900/10 bg-white p-3 shadow-2xl sm:rounded-[3rem] sm:p-4">
              <ScreenshotGrid />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
