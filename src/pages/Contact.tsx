
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call
      console.log("Contact form submission:", { name, email, subject, message });

      // Simulate the submission process
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Get in <span className="text-aingel">Touch</span>
              </h1>
              <p className="text-xl text-gray-600">
                Have questions about AiNGEL? We'd love to hear from you.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="mr-3 h-5 w-5 text-aingel mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@aingel.com" className="text-aingel hover:underline">
                            info@aingel.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Office Location
                    </h2>
                    <p className="text-gray-600">
                      123 AI Boulevard<br />
                      Tech District<br />
                      Innovation City, 98765
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Follow Us
                    </h2>
                    <div className="flex space-x-4">
                      {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
                        <a 
                          key={platform} 
                          href="#" 
                          className="text-aingel hover:text-aingel-dark"
                        >
                          {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                      Send us a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Your Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-aingel hover:bg-aingel-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
