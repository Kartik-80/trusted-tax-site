
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Startup Founder",
      comment: "Kartik Tax Lab helped us with complete business registration and tax planning. Excellent service!",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      position: "Small Business Owner", 
      comment: "Very professional team. They handled our GST filing efficiently and provided great consultation.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      position: "Freelancer",
      comment: "Best tax consultancy in Meerut. Affordable pricing and timely service delivery.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hear From Our
            <span className="text-blue-600"> Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-blue-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
