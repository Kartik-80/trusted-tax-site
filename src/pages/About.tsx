
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Kartik Tax Lab
          </h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to Kartik Tax Lab, your trusted partner in comprehensive tax and financial services. 
              With years of experience in the industry, we are committed to providing expert guidance and 
              personalized solutions to meet all your tax and financial needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Our team of qualified professionals brings extensive knowledge in tax planning, compliance, 
              and financial consulting. We understand that every client's situation is unique, which is 
              why we take a personalized approach to deliver tailored solutions that maximize your 
              financial potential.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide exceptional tax and financial services that empower our clients to achieve 
                  their financial goals with confidence and peace of mind.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading tax and financial consultancy firm, recognized for our expertise, 
                  integrity, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
