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
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center glow-border animate-glow-pulse"
                      style={{ animationDelay: `${index * 0.3}s` }}>
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
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
