import { AlertCircle, Sparkles } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-destructive mb-4">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-xl font-semibold">The Problem</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Traditional Invitations Are Outdated
            </h2>
            <div className="space-y-3 text-muted-foreground text-lg">
              <p>💸 Expensive printing and shipping costs</p>
              <p>📮 Slow delivery and lost mail</p>
              <p>🌳 Wasteful and not eco-friendly</p>
              <p>😓 Difficult to manage RSVPs and updates</p>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Our Solution</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Beautiful Digital Invitations
            </h2>
            <div className="space-y-3 text-muted-foreground text-lg">
              <p>✨ Stunning designs at a fraction of the cost</p>
              <p>⚡ Instant delivery to all guests</p>
              <p>🌱 100% eco-friendly digital format</p>
              <p>📱 Real-time updates and easy RSVP tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
