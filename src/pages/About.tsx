
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import WaitlistForm from "@/components/WaitlistForm";
import { BookAudio, User, Mic } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                All About <span className="text-aingel">AiNGEL</span>
              </h1>
              <p className="text-xl text-gray-600">
                Transforming healthcare with voice-first AI technology designed to support your daily wellbeing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  At AiNGEL, we believe that healthcare should be accessible, personalized, and empowering. Our mission is to create a virtual care companion that understands your unique needs and provides support through natural conversation.
                </p>
                <p className="text-gray-600">
                  We're leveraging the latest advancements in artificial intelligence and voice technology to make healthcare more human, more intuitive, and more effective.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  How AiNGEL Works
                </h2>
                <p className="text-gray-600">
                  Our AI-powered voice companion learns about your health patterns, preferences, and needs through natural conversations. AiNGEL can remind you about medications, motivate you to stay active, provide health information, and even detect early signs of health issues through voice pattern analysis.
                </p>
                <p className="text-gray-600">
                  With AiNGEL, managing your health is as simple as having a conversation.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Key Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-md border-aingel-light/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-aingel/10 p-4 rounded-full mb-4">
                        <BookAudio className="h-8 w-8 text-aingel" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Voice-First Interaction</h3>
                      <p className="text-gray-600">
                        Communicate naturally with AiNGEL through voice commands and receive audio responses, making technology accessible to everyone.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md border-aingel-light/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-aingel/10 p-4 rounded-full mb-4">
                        <User className="h-8 w-8 text-aingel" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Personalized Care</h3>
                      <p className="text-gray-600">
                        AiNGEL adapts to your unique health profile, preferences, and needs to provide truly personalized care recommendations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md border-aingel-light/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-aingel/10 p-4 rounded-full mb-4">
                        <Mic className="h-8 w-8 text-aingel" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Health Monitoring</h3>
                      <p className="text-gray-600">
                        Subtle changes in your voice can indicate health changes. AiNGEL uses advanced voice analysis to monitor your wellbeing.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-aingel/5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Be Part of the AiNGEL Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We're currently in development and looking for early adopters to help shape the future of voice-first healthcare. Join our waitlist to be among the first to experience AiNGEL.
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

export default About;
