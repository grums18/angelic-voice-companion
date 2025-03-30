
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { saveSignUpEntry } from "@/utils/authStorage";

interface SignUpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignUpDialog({ open, onOpenChange }: SignUpDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Save the sign up data to local storage
    saveSignUpEntry({
      name,
      email,
      timestamp: new Date().toISOString()
    });

    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to AiNGEL!",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Sign Up</DialogTitle>
          <DialogDescription className="text-center">
            Join AiNGEL today and experience your voice-first virtual carer companion.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignUp} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-aingel hover:bg-aingel-dark"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-aingel"
              onClick={() => {
                onOpenChange(false);
                // In a real app you would use a context or a store to manage this.
              }}
            >
              Sign In
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
