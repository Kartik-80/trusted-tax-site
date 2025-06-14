
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Tax Planning",
    "GST Services", 
    "Business Registration",
    "Audit Services",
    "Ongoing Support",
    "Coming Soon",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-white">KARTIK TAX LAB & CO.</h3>
            <div className="flex space-x-4 mb-6">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-200 hover:scale-105">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-200 hover:scale-105">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-200 hover:scale-105">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-all duration-200 text-left hover:translate-x-2 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 dark:text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-105 transition-transform duration-200" />
                <span className="text-gray-300 dark:text-gray-400">+91 6397474575</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-105 transition-transform duration-200" />
                <span className="text-gray-300 dark:text-gray-400">adv.kartik7@gmail.com</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-white">Newsletter</h5>
              <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
                Subscribe for tax tips and updates
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-600 text-white"
                />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-gray-300 dark:text-gray-400">
            © 2024 Kartik Tax Lab & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
