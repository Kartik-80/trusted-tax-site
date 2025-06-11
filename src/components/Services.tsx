
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: "📊",
      title: "Tax Planning & Preparation",
      description: "Comprehensive tax planning and preparation services for individuals and businesses to maximize savings.",
    },
    {
      icon: "📋",
      title: "GST Registration & Filing",
      description: "Complete GST registration, return filing, and compliance management for all business types.",
    },
    {
      icon: "🏢",
      title: "Business Registration",
      description: "Company incorporation, partnership registration, and all legal business setup requirements.",
    },
    {
      icon: "🔍",
      title: "Audit & Assurance",
      description: "Professional audit services and assurance to ensure compliance and financial accuracy.",
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Continuous support and maintenance for all your tax and accounting needs throughout the year.",
    },
    {
      icon: "🚀",
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-purple-400 to-blue-500 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            We provide comprehensive tax and accounting solutions tailored to meet your specific business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 animate-scale-in group bg-white dark:bg-gray-700 border-0 shadow-lg"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center animate-bounce group-hover:animate-pulse">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-blue-600 text-white border-2 border-blue-600 hover:bg-white hover:text-blue-600 transform transition-all duration-300 hover:scale-105 animate-pulse"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
