import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AboutSection from "../sections/AboutSection";
import TechnologySection from "../sections/TechnologySection";
import PortfolioSection from "../sections/PortfolioSection";
import CTASection from "../sections/CTASection";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutSection />
      <TechnologySection />
      <PortfolioSection />
      <CTASection />
    </main>
  );
}

export default Home;