
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User, X } from "lucide-react";
import { SignInDialog } from "@/components/SignInDialog";
import { SignUpDialog } from "@/components/SignUpDialog";
import logo from "@/assets/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "All About Aingel", path: "/about" },
    { name: "Knowledge", path: "/knowledge" },
    { name: "Research", path: "/research" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-sm border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="AiNGEL Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className="text-xl font-semibold text-aingel">AiNGEL</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-aingel font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-aingel text-aingel hover:bg-aingel hover:text-white"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </Button>
          <Button
            className="bg-aingel hover:bg-aingel-dark"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[57px] bg-white z-40 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto py-5 flex flex-col h-full">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-aingel font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-10 flex flex-col space-y-3">
            <Button
              variant="outline"
              className="border-aingel text-aingel hover:bg-aingel hover:text-white w-full"
              onClick={() => {
                setShowSignIn(true);
                setIsMenuOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button
              className="bg-aingel hover:bg-aingel-dark w-full"
              onClick={() => {
                setShowSignUp(true);
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Sign In/Up Dialogs */}
      <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} />
      <SignUpDialog open={showSignUp} onOpenChange={setShowSignUp} />
    </header>
  );
};

export default Header;
