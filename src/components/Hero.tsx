import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyvixx.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <div className="h-1 w-64 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-ribbon)' }} />
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight">
            CYVIXX
          </h1>
          <div className="h-1 w-64 mx-auto rounded-full" style={{ background: 'var(--gradient-ribbon)' }} />
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-light">
          The Future of Wedding Invitations
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Create stunning digital wedding invitations that captivate your guests. 
          Premium technology meets timeless elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-glow transition-all"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-2 border-accent text-accent hover:bg-accent/10 transition-all"
            onClick={() => scrollToSection('features')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
