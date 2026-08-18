import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Pathways from "../components/Pathways";
import QuickTasks from "../components/QuickTasks";
import Updates from "../components/Updates";

export default function HomePage() {
  return (
    <main>
      <Header supportHref="#support" />
      <Hero />
      <Pathways />
      <QuickTasks />
      <Updates />
      <Journey />
      <Footer homePage />
    </main>
  );
}
