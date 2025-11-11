import sample1 from "@/assets/sample-1.jpg";
import sample2 from "@/assets/sample-2.jpg";
import sample3 from "@/assets/sample-3.jpg";
import sample4 from "@/assets/sample-4.jpg";

const samples = [
  { image: sample1, title: "Elegant Blush" },
  { image: sample2, title: "Modern Bohemian" },
  { image: sample3, title: "Romantic Classic" },
  { image: sample4, title: "Contemporary Minimal" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Design Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful templates crafted for your perfect day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {samples.map((sample, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in aspect-[4/5]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={sample.image} 
                alt={sample.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-background mb-2">
                    {sample.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
