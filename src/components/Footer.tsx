
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
    "Coming Soon",
    "Audit Services",
    "Ongoing Support",
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">KARTIK TAX LAB & CO.</h3>
            <p className="text-gray-300 mb-6">
              Professional tax and accounting solutions for businesses and individuals. 
              Trusted by clients across Meerut and beyond.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-gray-900">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-gray-900">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-gray-900">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+91 6397474575</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">adv.kartik7@gmail.com</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe for tax tips and updates
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Kartik Tax Lab & Co. All rights reserved. | 
            <span className="text-blue-400"> Trusted Tax & Accounting Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
