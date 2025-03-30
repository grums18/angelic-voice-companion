
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WaitlistForm from "@/components/WaitlistForm";

const Knowledge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-aingel">Knowledge</span> Hub
              </h1>
              <p className="text-xl text-gray-600">
                Explore resources, articles, and insights about AI healthcare companions and voice technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Featured Articles
                  </h2>
                  
                  <div className="grid gap-6">
                    {articles.map((article, index) => (
                      <div 
                        key={index} 
                        className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                          <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                          <p className="text-gray-600 mb-4">{article.excerpt}</p>
                          <Button variant="link" className="text-aingel p-0 h-auto">
                            Read more
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-aingel/5 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Newsletter
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for the latest updates on AiNGEL and AI healthcare innovations.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-aingel"
                    />
                    <Button className="w-full bg-aingel hover:bg-aingel-dark">
                      Subscribe
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-aingel/10 to-aingel-light/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Ready to Experience the Future of Healthcare?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our waitlist today and be among the first to try AiNGEL when we launch.
              </p>
              <div className="flex justify-center">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Sample data
const articles = [
  {
    title: "The Rise of Voice-First Healthcare Companions",
    date: "August 15, 2023",
    excerpt: "Explore how voice technology is revolutionizing healthcare and making it more accessible to everyone, regardless of technical ability."
  },
  {
    title: "How AI Is Personalizing Healthcare Experiences",
    date: "July 28, 2023",
    excerpt: "Discover the ways artificial intelligence is creating more personalized healthcare experiences and improving patient outcomes."
  },
  {
    title: "Voice Analysis: The Future of Health Monitoring",
    date: "July 10, 2023",
    excerpt: "Learn how subtle changes in voice patterns can indicate health changes and how AI is leveraging this for preventative care."
  },
  {
    title: "Breaking Down Barriers: Technology for Elderly Care",
    date: "June 22, 2023",
    excerpt: "How voice-first technology is making healthcare more accessible for elderly populations and improving quality of life."
  }
];

const faqs = [
  {
    question: "What is AiNGEL?",
    answer: "AiNGEL is a voice-first virtual carer companion that helps you manage your health through natural conversations."
  },
  {
    question: "How does AiNGEL work?",
    answer: "AiNGEL uses advanced AI and voice recognition technology to understand your health needs, provide information, and offer personalized support through natural voice interactions."
  },
  {
    question: "Is AiNGEL secure and private?",
    answer: "Yes, AiNGEL takes privacy very seriously. All health data is encrypted and stored securely, and we comply with all relevant healthcare data regulations."
  },
  {
    question: "When will AiNGEL be available?",
    answer: "AiNGEL is currently in development. Join our waitlist to be notified when we launch and get early access to the platform."
  },
  {
    question: "Can AiNGEL replace my doctor?",
    answer: "No, AiNGEL is designed to complement, not replace, professional medical care. It can help you manage your health day-to-day, but always consult healthcare professionals for medical advice."
  }
];

export default Knowledge;
