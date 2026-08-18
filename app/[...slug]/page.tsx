import ContentPage from "../../components/ContentPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { pages } from "../../data/pages";

type DynamicPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug: segments } = await params;
  const slug = segments.join("/");
  const pageData = pages[slug] ?? pages["i-want-to"];

  return (
    <main>
      <Header />
      <ContentPage data={pageData} />
      <Footer />
    </main>
  );
}
