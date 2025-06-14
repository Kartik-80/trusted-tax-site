
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
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Smooth Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgb(249 250 251)"
            className="dark:fill-gray-900 animate-endless-wave"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="rgb(249 250 251)"
            className="dark:fill-gray-900 animate-endless-wave-reverse opacity-50"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 mt-8">
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
