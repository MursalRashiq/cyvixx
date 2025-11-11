import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for intimate gatherings",
    features: [
      "Up to 50 guests",
      "5 design templates",
      "Basic RSVP tracking",
      "Email support",
      "Mobile responsive"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "$59",
    description: "Most popular for weddings",
    features: [
      "Up to 200 guests",
      "20+ premium templates",
      "Advanced RSVP & guest management",
      "Custom domain",
      "Priority support",
      "Photo gallery",
      "Meal preferences"
    ],
    popular: true
  },
  {
    name: "Luxury",
    price: "$99",
    description: "For unforgettable celebrations",
    features: [
      "Unlimited guests",
      "All premium templates",
      "Full customization",
      "Dedicated designer support",
      "Custom illustrations",
      "Guest messaging",
      "Registry integration",
      "Analytics dashboard"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your special day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative animate-scale-in ${
                plan.popular 
                  ? 'border-primary border-2 shadow-elegant' 
                  : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
