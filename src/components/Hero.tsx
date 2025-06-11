
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            THE
            <br />
            <span className="text-blue-200">TRUSTED</span>
            <br />
            TAX CONSULTANCY
            <br />
            DELIVERING
            <br />
            <span className="text-blue-200">FINEST</span>
            <br />
            SOLUTIONS
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold">2+</div>
              <div className="text-blue-200">YEARS EXPERIENCE</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get Consultation
            </Button>
          </div>

          <div className="cursor-pointer" onClick={() => scrollToSection('services')}>
            <ArrowDown className="w-6 h-6 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
