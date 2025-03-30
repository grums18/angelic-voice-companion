
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import VoiceInput from "@/components/VoiceInput";
import WaitlistForm from "@/components/WaitlistForm";
import caregiverImage from "@/assets/caregiver.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 md:py-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left side - Image with audio */}
              <div className="w-full md:w-1/2 relative">
                <img
                  src={caregiverImage}
                  alt="AiNGEL Virtual Carer"
                  className="w-full rounded-xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4">
                  <AudioPlayer />
                </div>
              </div>
              
              {/* Right side - Text content and interaction */}
              <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  AiNGEL: Your Voice First Virtual Carer Companion
                  <span className="text-aingel"> for a Healthier Life</span>
                </h1>
                
                <p className="text-lg text-gray-600">
                  Experience the future of healthcare with AiNGEL, your personal AI 
                  companion that listens, understands, and helps you maintain your health 
                  and wellbeing through natural voice interactions.
                </p>
                
                <div className="py-4">
                  <VoiceInput />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <WaitlistForm />
                  <Link 
                    to="/about" 
                    className="text-aingel underline underline-offset-4 hover:text-aingel-dark"
                  >
                    Learn more about AiNGEL
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
