
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import WaitlistForm from "@/components/WaitlistForm";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Our <span className="text-aingel">Research</span>
              </h1>
              <p className="text-xl text-gray-600">
                Exploring the intersection of voice technology, artificial intelligence, and healthcare for better patient outcomes.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Research Areas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchAreas.map((area, index) => (
                  <Card key={index} className="bg-white shadow-md border-aingel-light/20 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-3">{area.title}</h3>
                      <p className="text-gray-600 mb-4">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-aingel/10 text-aingel-dark text-sm py-1 px-3 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Recent Publications
              </h2>
              
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium mb-2">{pub.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {pub.authors} • {pub.date} • {pub.journal}
                    </p>
                    <p className="text-gray-600 mb-4">{pub.abstract}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href="#" 
                        className="text-aingel hover:text-aingel-dark underline underline-offset-4"
                      >
                        Read paper
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Research Partnerships
              </h2>
              
              <p className="text-gray-600 mb-8">
                We collaborate with leading research institutions, healthcare providers, and technology companies to advance the field of AI healthcare companions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["University Health", "Tech Institute", "Global Health", "Research Center"].map((partner, index) => (
                  <div 
                    key={index} 
                    className="bg-white border rounded-lg p-6 text-center flex items-center justify-center h-24"
                  >
                    <span className="text-lg font-medium text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-aingel/5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Join Our Research Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We're looking for participants for our upcoming research studies on voice-first healthcare companions. Join our waitlist to stay informed.
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
const researchAreas = [
  {
    title: "Voice Pattern Analysis for Health Monitoring",
    description: "Investigating how changes in voice patterns can serve as biomarkers for various health conditions, enabling early detection and intervention.",
    tags: ["Voice Analysis", "Biomarkers", "Preventative Care"]
  },
  {
    title: "Natural Language Processing for Healthcare",
    description: "Developing advanced NLP models specifically tailored for healthcare conversations to improve understanding and response accuracy.",
    tags: ["NLP", "Healthcare AI", "Conversation"]
  },
  {
    title: "User Experience in Voice-First Healthcare",
    description: "Researching how to create intuitive, accessible voice interfaces for diverse populations, including elderly and disabled users.",
    tags: ["UX Design", "Accessibility", "Voice UI"]
  },
  {
    title: "AI Ethics and Healthcare Privacy",
    description: "Exploring the ethical implications of AI in healthcare and developing frameworks for privacy-preserving voice technology.",
    tags: ["Ethics", "Privacy", "Regulation"]
  }
];

const publications = [
  {
    title: "Voice-First Healthcare Companions: A Systematic Review",
    authors: "Johnson A., Smith B., Williams C.",
    date: "2023",
    journal: "Journal of AI in Healthcare",
    abstract: "This systematic review examines the current landscape of voice-first healthcare companions, their efficacy in various use cases, and opportunities for future development.",
    tags: ["Systematic Review", "Voice Technology", "Healthcare"]
  },
  {
    title: "Detecting Cognitive Decline Through Voice Analysis: A Longitudinal Study",
    authors: "Chen D., Patel E., Rodriguez F.",
    date: "2022",
    journal: "AI Medicine Research",
    abstract: "Our longitudinal study of 500 participants demonstrates the potential of voice pattern analysis to detect early signs of cognitive decline with 85% accuracy.",
    tags: ["Cognitive Health", "Longitudinal Study", "Voice Biomarkers"]
  },
  {
    title: "Accessibility Considerations for Voice-First Healthcare Interfaces",
    authors: "Kim G., Brown H., Thompson J.",
    date: "2022",
    journal: "Digital Health Technologies",
    abstract: "This paper outlines key design considerations and best practices for creating accessible voice-first healthcare interfaces for diverse user populations.",
    tags: ["Accessibility", "Inclusive Design", "Voice UI"]
  }
];

export default Research;
