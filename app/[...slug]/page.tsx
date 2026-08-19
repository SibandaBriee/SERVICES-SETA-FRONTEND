import { notFound } from "next/navigation";
import ContentPage from "../../components/ContentPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { pages } from "../../data/pages";

type DynamicPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug: segments } = await params;
  const slug = segments.join("/");
  const pageData = pages[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ContentPage data={pageData} />
      <Footer />
    </main>
  );
}
