
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceInputProps {
  className?: string;
}

const VoiceInput = ({ className }: VoiceInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Speech recognition setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.error("Speech recognition not supported in this browser");
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    
    recognition.onresult = (event) => {
      let currentTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    if (isListening) {
      recognition.start();
    }
    
    return () => {
      recognition.stop();
    };
  }, [isListening]);
  
  const toggleListening = () => {
    setIsListening(!isListening);
  };
  
  const speakText = () => {
    if (!transcript) return;
    
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    // Use a female voice if available
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.name.includes('female'));
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative">
        <Textarea
          placeholder="Speak or type your message here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          className="min-h-[100px] pr-20"
        />
        <div className="absolute right-2 bottom-2 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full h-8 w-8",
              isListening ? "bg-red-100 border-red-500 text-red-500" : "border-aingel text-aingel"
            )}
            onClick={toggleListening}
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8 border-aingel text-aingel"
            onClick={speakText}
            disabled={!transcript || isSpeaking}
          >
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isListening && (
        <p className="text-sm text-aingel animate-pulse-light">
          Listening... Speak now
        </p>
      )}
      {isSpeaking && (
        <p className="text-sm text-aingel animate-pulse-light">
          Speaking...
        </p>
      )}
    </div>
  );
};

export default VoiceInput;
