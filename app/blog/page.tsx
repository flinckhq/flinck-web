import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News and insights from Flinck on agricultural marketplaces, trust, sponsorships, and the future of ag trade in Africa.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Flinck",
    description:
      "News and insights from Flinck on agricultural marketplaces, trust, sponsorships, and the future of ag trade in Africa.",
    url: `${SITE_URL}/blog`,
    images: [{ url: "/flinck-og-image.png", alt: "Flinck Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Flinck",
    description:
      "News and insights from Flinck on agricultural marketplaces, trust, sponsorships, and the future of ag trade in Africa.",
    images: ["/flinck-og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Flinck Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Ideas for a connected agricultural economy.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Product updates, trust in ag trade, and sponsorship perspectives
              for farmers, buyers, and institutions.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="reveal-card flex flex-col overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                {post.coverImage ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#163d2a]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#163d2a]"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
