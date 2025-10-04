import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const CTASection = () => {
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
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Be Part of the Future of Automation
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Spaces are limited. Join the exclusive beta.
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
              {isLoading ? "Requesting..." : "Request Your Invite"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-8">
            🔒 Your email is safe with us. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
