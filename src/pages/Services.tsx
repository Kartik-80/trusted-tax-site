
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Tax Planning & Preparation",
      description: "Comprehensive tax planning and preparation services for individuals and businesses.",
      features: ["Individual Tax Returns", "Business Tax Returns", "Tax Planning Strategies", "Quarterly Tax Estimates"]
    },
    {
      title: "Business Consulting",
      description: "Expert business consulting services to help your business grow and succeed.",
      features: ["Business Formation", "Financial Analysis", "Strategic Planning", "Compliance Advisory"]
    },
    {
      title: "Accounting Services",
      description: "Professional accounting services to maintain accurate financial records.",
      features: ["Bookkeeping", "Financial Statements", "Payroll Services", "QuickBooks Setup"]
    },
    {
      title: "Audit & Assurance",
      description: "Reliable audit and assurance services for businesses of all sizes.",
      features: ["Financial Audits", "Internal Controls Review", "Compliance Audits", "Risk Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
            Comprehensive tax and financial solutions tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
