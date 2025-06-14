
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  const features = [
    "Expert Tax Consultants",
    "Personalized Solutions",
    "Timely Service Delivery",
    "Affordable Pricing",
    "24/7 Customer Support",
    "100% Confidential",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              We Provide Best
              <span className="text-blue-600 dark:text-blue-400"> Tax Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
              At Kartik Tax Lab & Co., we are committed to providing exceptional tax and accounting services 
              that help our clients achieve financial success. With over 2 years of experience, we understand 
              the complexities of tax regulations and provide personalized solutions for every client.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-200" />
                  <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection('services')}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="transform transition-all duration-200 hover:scale-105 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Professional workspace" 
                className="rounded-2xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-200 hover:scale-105 border dark:border-gray-700">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  Professional Tax Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  Comprehensive tax planning, GST filing, business registration, and consulting 
                  services for individuals, startups, and small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
