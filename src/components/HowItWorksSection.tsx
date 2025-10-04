import { Mail, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Request Invite Code",
    description: "Secure your spot in the private beta with your email.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Describe Your Task",
    description: "Use natural language, like you're chatting with a friend.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Watch Agents Execute",
    description: "Sit back as AI handles the internet on your behalf.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 bg-card/30 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to unlock your AI workforce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                {/* Step number */}
                <div className="inline-block mb-6">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse-ring"
                        style={{ animationDelay: `${index * 0.3}s` }} />
                      <div className="w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse-ring"
                        style={{ animationDelay: `${index * 0.3 + 0.5}s` }} />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center glow-border animate-agent-bounce relative"
                      style={{ animationDelay: `${index * 0.3}s` }}>
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                      {/* Floating particles */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-particle-float"
                          style={{
                            top: '50%',
                            left: '50%',
                            '--tx': `${Math.cos(i * 1.57) * 50}px`,
                            '--ty': `${Math.sin(i * 1.57) * 50}px`,
                            animationDelay: `${i * 0.2}s`,
                          } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-card rounded-lg border border-border relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-scan" />
                    <step.icon className="w-8 h-8 text-primary animate-agent-bounce" 
                      style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationDuration: '3s' }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Animated arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <div className="relative">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent animate-glow-pulse" />
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 w-1 h-1 bg-primary rounded-full animate-particle-float"
                        style={{
                          top: '0',
                          animationDelay: `${i * 0.3}s`,
                          '--tx': '0px',
                          '--ty': '48px',
                        } as React.CSSProperties}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
