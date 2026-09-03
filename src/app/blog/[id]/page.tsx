import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getBlogById, getAllBlogIds } from "@/data/blogs";
import JsonLd from "@/components/JsonLd";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllBlogIds();
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return { title: "Article Not Found | GameVault APK" };

  const title = blog.title;
  const url = `https://gamevaultinfo.com/blog/${blog.id}`;

  return {
    title,
    description: blog.excerpt,
    alternates: { canonical: url },
    openGraph: { title, description: blog.excerpt, url, type: "article" },
    twitter: { card: "summary_large_image", title, description: blog.excerpt },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    dateModified: blog.date,
    image: "https://gamevaultinfo.com/images/og-image.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gamevaultinfo.com/blog/${blog.id}`,
    },
    author: {
      "@type": "Organization",
      name: "GameVault Team",
    },
    publisher: {
      "@type": "Organization",
      name: "GameVault APK",
      logo: {
        "@type": "ImageObject",
        url: "https://gamevaultinfo.com/images/logo.png",
      },
    },
  };

  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 840 }}>
      <JsonLd data={articleSchema} />

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/blog">Blog</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>{blog.title}</span>
      </nav>

      <article style={{ marginTop: "2rem" }} lang="en">
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{blog.icon}</div>
        <span className="game-card-category" style={{ position: "static", marginBottom: "1rem", display: "inline-block" }}>
          {blog.category}
        </span>
        <h1 style={{ fontSize: "2.2rem", margin: "0.5rem 0 1rem" }}>{blog.title}</h1>
        <p style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
          Published on {blog.date} • {blog.readTime}
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          style={{ lineHeight: 1.8, fontSize: "1.05rem", color: "var(--text-secondary)" }}
        />
      </article>
    </div>
  );
}
