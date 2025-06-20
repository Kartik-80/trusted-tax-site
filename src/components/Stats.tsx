

export const Stats = () => {
  const stats = [
    { number: "2+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 relative overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in transform transition-all duration-500 hover:scale-110"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-200">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base transition-colors duration-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

