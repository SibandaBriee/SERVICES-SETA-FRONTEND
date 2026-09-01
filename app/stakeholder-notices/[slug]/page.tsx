import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import NewsArticlePage from "../../../components/NewsArticlePage";
import {
  getNewsArticle,
  newsArticles,
} from "../../../data/newsData";

type NewsArticleRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Services SETA Newsroom`,
    description: article.excerpt,
  };
}

export default async function NewsArticleRoute({
  params,
}: NewsArticleRouteProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <NewsArticlePage article={article} />
      </main>
      <Footer />
    </>
  );
}
