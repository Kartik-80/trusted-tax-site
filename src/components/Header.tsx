
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-black shadow-sm sticky top-0 z-50 transition-all duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/2ce5036f-5075-456b-bc82-3806a283d0ea.png" 
              alt="Kartik Tax Lab" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 animate-fade-in relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle and Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500 transition-all duration-200" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 transition-all duration-200" />
              )}
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+91 6397474575</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>adv.kartik7@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
