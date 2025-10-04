import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request received!",
        description: "We'll send your invite code soon. Check your email.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text animate-fade-in">
          Your AI Agents, Working While You Sleep.
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-2xl mx-auto">
          One prompt. Infinite actions.
        </p>
        
        <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
          The world's first invite-only platform where AI agents handle your online tasks 
          automatically—fast, accurate, and without limits.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-card/50 backdrop-blur border-primary/30 focus:border-primary glow-border text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            variant="hero" 
            size="lg"
            disabled={isLoading}
            className="sm:w-auto w-full"
          >
            {isLoading ? "Requesting..." : "Request Invite"}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">
          ⚡ Early adopters get first entry into the closed beta
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
