
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
import { saveSignInEntry } from "@/utils/authStorage";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInDialog({ open, onOpenChange }: SignInDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Save the sign in data to local storage
    saveSignInEntry({
      email,
      timestamp: new Date().toISOString()
    });

    // Simulate sign in
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      toast({
        title: "Signed in successfully",
        description: "Welcome back to AiNGEL!",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center">
            Welcome back to AiNGEL, your voice-first virtual carer companion.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignIn} className="space-y-4 pt-4">
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
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Button
                variant="link"
                className="text-xs text-aingel p-0 h-auto"
                type="button"
              >
                Forgot password?
              </Button>
            </div>
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
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-aingel"
              onClick={() => {
                onOpenChange(false);
                // Since we can't directly call the parent component's state setter for sign-up,
                // in a real app you would use a context or a store to manage this.
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
