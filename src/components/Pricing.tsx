
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹5,000",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "GST Filing",
        "Basic Tax Planning",
        "Monthly Support",
        "Email Support"
      ],
      popular: false,
      icon: "💼"
    },
    {
      name: "Professional",
      price: "₹10,000",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Basic",
        "Advanced Tax Planning",
        "Audit Support",
        "24/7 Phone Support",
        "Business Registration"
      ],
      popular: true,
      icon: "🚀"
    },
    {
      name: "Enterprise",
      price: "₹20,000",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Everything in Professional",
        "Custom Solutions",
        "Dedicated Account Manager",
        "Priority Support",
        "Compliance Management"
      ],
      popular: false,
      icon: "👑"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Choose Your
            <span className="text-blue-600 dark:text-blue-400"> Plan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 animate-scale-in ${
                plan.popular ? 'border-blue-500 shadow-xl scale-105' : ''
              }`}
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 animate-bounce">{plan.icon}</div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${0.1 * (index + featureIndex)}s`}}>
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  } transform transition-all duration-300 hover:scale-105`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
