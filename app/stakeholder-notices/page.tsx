import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsroomPage from "../../components/NewsroomPage";

export const metadata: Metadata = {
  title: "Newsroom | Services SETA",
  description:
    "Read the latest Services SETA news, announcements, publications and stakeholder updates.",
};

type NewsroomRouteProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    archive?: string;
    tag?: string;
  }>;
};

export default async function NewsroomRoute({
  searchParams,
}: NewsroomRouteProps) {
  const filters = await searchParams;

  return (
    <>
      <Header />
      <main>
        <NewsroomPage
          query={filters.q}
          category={filters.category}
          archive={filters.archive}
          tag={filters.tag}
        />
      </main>
      <Footer />
    </>
  );
}
