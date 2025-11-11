import { Calendar, MapPin, Users, Share2, Smartphone, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Smartphone,
    title: "Online Invitations",
    description: "Beautiful, responsive designs that look perfect on any device"
  },
  {
    icon: Zap,
    title: "Live Updates",
    description: "Make changes anytime and guests see updates instantly"
  },
  {
    icon: MapPin,
    title: "Location Maps",
    description: "Interactive maps with directions to your venue"
  },
  {
    icon: Users,
    title: "Guest Management",
    description: "Track RSVPs, meal preferences, and guest information"
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share via email, text, or social media with one click"
  },
  {
    icon: Calendar,
    title: "Save the Date",
    description: "Add events directly to guests' calendars automatically"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced technology for seamless wedding invitations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in border-border/50 bg-gradient-to-br from-card to-muted/20 hover:border-accent/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
