
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-30 w-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-200 glass-panel ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-display font-medium tracking-tight">
          Explainx
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-sm text-muted-foreground">Online</span>
      </div>
    </header>
  );
};
