
export const Team = () => {
  const teamMembers = [
    {
      name: "Kartik Sharma",
      position: "Founder & Tax Consultant",
      description: "8+ years of experience in tax planning and business consulting",
      image: "👨‍💼",
    },
    {
      name: "Priya Agarwal",
      position: "Senior Accountant",
      description: "Expert in GST compliance and financial management",
      image: "👩‍💼",
    },
    {
      name: "Rohit Gupta",
      position: "Business Advisor",
      description: "Specializes in startup registration and legal compliance",
      image: "👨‍💻",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's Meet Our
            <span className="text-blue-600"> Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of tax professionals and consultants are dedicated 
            to providing you with the best financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
