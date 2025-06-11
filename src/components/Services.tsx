
import { Calculator, FileText, Users, Shield, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Preparation",
      description: "Comprehensive tax planning and preparation services for individuals and businesses to maximize savings.",
    },
    {
      icon: FileText,
      title: "GST Registration & Filing",
      description: "Complete GST registration, return filing, and compliance management for all business types.",
    },
    {
      icon: Users,
      title: "Business Registration",
      description: "Company incorporation, partnership registration, and all legal business setup requirements.",
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services and assurance to ensure compliance and financial accuracy.",
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description: "Continuous support and maintenance for all your tax and accounting needs throughout the year.",
    },
    {
      icon: TrendingUp,
      title: "Coming Soon",
      description: "We're expanding our services to bring you even more comprehensive business solutions.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            We provide comprehensive tax and accounting solutions tailored to meet your specific business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 transform transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
