import { Bot, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Each agent specializes in specific online tasks: sign-ups, data gathering, comparisons, scheduling, and more.",
  },
  {
    icon: Zap,
    title: "Unlimited Prompts",
    description: "One command can spark a chain of actions across the web. No browser juggling, no manual clicks, no wasted time.",
  },
  {
    icon: Lock,
    title: "Invite-Only Access",
    description: "Early adopters get first entry into the closed beta. Secure your spot in the private beta.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Imagine Having a Digital Workforce at Your Fingertips
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Give them a single prompt—"Sign me up for 200 newsletters," "Find every eyelash extension 
            supplier in Mexico," "Compare iPhone 16 prices across Germany"—and watch the agents take over.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="absolute w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse-ring"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
                <div 
                  className="absolute w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse-ring"
                  style={{ animationDelay: `${index * 0.3 + 1}s` }}
                />
              </div>

              <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 h-full hover:glow-border relative overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-scan" />
                </div>

                <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg glow-border animate-agent-bounce relative" 
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  <feature.icon className="w-8 h-8 text-primary" />
                  {/* Mini particles around icon */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float"
                      style={{
                        top: '50%',
                        left: '50%',
                        '--tx': `${Math.cos(i * 2.1) * 30}px`,
                        '--ty': `${Math.sin(i * 2.1) * 30}px`,
                        animationDelay: `${i * 0.3}s`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
