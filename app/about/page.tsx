import type { Metadata } from "next";

import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "About Services SETA",
  description:
    "Learn about Services SETA's role, vision, mission, values, legislative framework and executive management.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <About />
      <Footer />
    </main>
  );
}