import { Calendar, MapPin } from "lucide-react";

const WeddingHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-950">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-serif text-primary mb-4">
            Sarah & John
          </h1>
          <div className="w-24 h-0.5 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-muted-foreground italic">
            Together with our families, we invite you to celebrate our love
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-rose-500" />
            <span>June 15, 2024</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-rose-500" />
            <span>Garden View Resort, Lagos</span>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="text-3xl md:text-4xl font-light text-primary mb-2">
            Save the Date
          </div>
          <p className="text-muted-foreground">
            Formal invitation to follow
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;