
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Provide Best
              <span className="text-blue-600"> Tax Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Kartik Tax Lab & Co., we are committed to providing exceptional tax and accounting services 
              that help our clients achieve financial success. With over 2 years of experience, we understand 
              the complexities of tax regulations and provide personalized solutions for every client.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection('services')}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Professional Tax Services</h3>
              <p className="text-gray-600">
                Comprehensive tax planning, GST filing, business registration, and consulting 
                services for individuals, startups, and small businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
