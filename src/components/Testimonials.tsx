
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Startup Founder",
      comment: "Kartik Tax Lab helped us with complete business registration and tax planning. Excellent service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sunita Sharma",
      position: "Small Business Owner", 
      comment: "Very professional team. They handled our GST filing efficiently and provided great consultation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      position: "Freelancer",
      comment: "Best tax consultancy in Meerut. Affordable pricing and timely service delivery.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Hear From Our
            <span className="text-blue-600"> Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
