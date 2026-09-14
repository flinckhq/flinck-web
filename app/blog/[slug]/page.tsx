import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { getAllBlogSlugs, getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post not found" };

  const imageUrl = "/flinck-og-image.png";

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: imageUrl, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <PageShell>
      <article className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>{post.author}</span>
            <span>{post.readMinutes} min read</span>
          </div>

          {post.coverImage ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] border border-slate-900/10">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="prose-flinck mt-10 space-y-5">
            {post.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-8 text-slate-700 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {related.length > 0 ? (
            <div className="mt-16 border-t border-slate-900/8 pt-10">
              <h2 className="text-xl font-semibold text-slate-950">
                More from the blog
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="font-medium text-[#163d2a] hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>
    </PageShell>
  );
}
