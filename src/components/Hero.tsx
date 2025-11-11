import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
          Your Love Story,
          <br />
          <span className="text-primary">Beautifully Digital</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create stunning digital wedding invitations that your guests will love. 
          Share your special day with elegance and ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 shadow-elegant hover:shadow-xl transition-all"
            onClick={() => scrollToSection('pricing')}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-2 hover:bg-muted/50 transition-all"
            onClick={() => scrollToSection('gallery')}
          >
            View Designs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
