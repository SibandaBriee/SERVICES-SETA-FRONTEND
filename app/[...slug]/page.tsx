import { notFound } from "next/navigation";
import ContentPage from "../../components/ContentPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResourcesPage from "../../components/ResourcesPage";
import { pages } from "../../data/pages";

type DynamicPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  const availableRoutes = [...Object.keys(pages), "resources"];

  return Array.from(new Set(availableRoutes)).map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default async function DynamicPage({
  params,
}: DynamicPageProps) {
  const { slug: segments } = await params;
  const slug = segments.join("/");

  if (slug === "resources") {
    return (
      <main>
        <Header />
        <ResourcesPage />
        <Footer />
      </main>
    );
  }

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