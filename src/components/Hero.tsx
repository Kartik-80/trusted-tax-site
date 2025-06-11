
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
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-blue-200">YEARS EXPERIENCE</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 transform transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white transform transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get Consultation
              </Button>
            </div>

            <div className="cursor-pointer animate-fade-in" style={{animationDelay: '0.6s'}} onClick={() => scrollToSection('services')}>
              <ArrowDown className="w-6 h-6 mx-auto lg:mx-0 animate-bounce" />
            </div>
          </div>

          <div className="lg:block animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Professional working on laptop" 
                className="rounded-2xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
