import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCategoryById, CATEGORIES } from "@/data/categories";
import { getGamesByCategory } from "@/data/games";
import GameCard from "@/components/GameCard";
import JsonLd from "@/components/JsonLd";

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const category = getCategoryById(id);
  if (!category) {
    return { title: "Category Not Found | GameVault APK" };
  }

  const title = `Top ${category.name} Games APK Download for Android (100% Verified 2026) — GameVault`;
  const description = `Explore and download the top ${category.name} games APK for Android. ${category.description}. Verified virus-free, direct high-speed download links.`;
  const url = `https://gamevaultinfo.com/category/${category.id}`;
  const keywords = [
    `${category.name} games APK`,
    `best ${category.name} android games`,
    `download ${category.name} APK free`,
    `top ${category.name} games 2026`,
    category.name,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = getCategoryById(id);

  if (!category) {
    notFound();
  }

  const games = getGamesByCategory(category.id);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Games for Android`,
    description: category.description,
    url: `https://gamevaultinfo.com/category/${category.id}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: games.length,
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.name,
        url: `https://gamevaultinfo.com/game/${game.id}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gamevaultinfo.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${category.name} Games`,
        item: `https://gamevaultinfo.com/category/${category.id}`,
      },
    ],
  };

  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem" }}>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span>Categories</span>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>{category.name}</span>
      </nav>

      <div style={{ margin: "2rem 0 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ fontSize: "3rem" }}>{category.icon}</div>
          <div>
            <h1>Best {category.name} Games APK for Android</h1>
            <p style={{ marginTop: "0.25rem" }}>{category.description}</p>
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p style={{ color: "var(--text-tertiary)" }}>No games found in this category.</p>
        )}
      </div>
    </div>
  );
}
