import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import IndustryDetailPage from "../../../components/IndustryDetailPage";
import {
  getIndustryBySlug,
  industrySectors,
} from "../../../data/industries";

type IndustryRouteProps = {
  params: Promise<{
    industry: string;
  }>;
};

export function generateStaticParams() {
  return industrySectors.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryRouteProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.title} | Services SETA Industries`,
    description: industry.intro,
  };
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <Header />
      <IndustryDetailPage industry={industry} />
      <Footer />
    </main>
  );
}
