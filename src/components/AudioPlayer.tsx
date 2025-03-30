
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Audio sample path should be placed in your public folder
const AUDIO_PATH = "/welcome.mp3";

interface AudioPlayerProps {
  className?: string;
}

const AudioPlayer = ({ className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_PATH);
    
    audioRef.current.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });
    
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", () => {});
        audioRef.current.removeEventListener("ended", () => {});
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        onClick={togglePlayPause}
        disabled={!isLoaded}
        variant="outline"
        size="icon"
        className="rounded-full border-aingel"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-aingel" />
        ) : (
          <Play className="h-5 w-5 text-aingel" />
        )}
      </Button>
      
      {isPlaying && (
        <div className="audio-wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
