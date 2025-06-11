
import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "Startup Tax Planning",
      category: "Tax Consultation",
      description: "Complete tax planning solution for a tech startup",
      image: "📈",
    },
    {
      title: "GST Implementation",
      category: "GST Services",
      description: "Seamless GST registration and filing for retail business",
      image: "📊",
    },
    {
      title: "Business Registration",
      category: "Legal Services", 
      description: "End-to-end company incorporation process",
      image: "🏢",
    },
    {
      title: "Financial Audit",
      category: "Audit Services",
      description: "Comprehensive financial audit for manufacturing company",
      image: "🔍",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent successful projects and client solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {project.category}
                </p>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
