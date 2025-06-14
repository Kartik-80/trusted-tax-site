
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
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-200/20 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
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
              <div className="text-center animate-scale-in">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-blue-200">YEARS EXPERIENCE</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-blue-600 text-white border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-500 hover:shadow-lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 text-white border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-500 hover:shadow-lg"
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
              <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center animate-float">
                <div className="text-center animate-scale-in">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-2xl font-bold">Tax Solutions</div>
                  <div className="text-lg">Professional Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
