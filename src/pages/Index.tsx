
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
