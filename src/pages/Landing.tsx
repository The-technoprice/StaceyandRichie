import WeddingHero from "@/components/WeddingHero";
import AboutCouple from "@/components/AboutCouple";
import WeddingDetails from "@/components/WeddingDetails";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <AboutCouple />
      <WeddingDetails />
      
      {/* Navigation Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
            What's Next?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/meet-couple">
              <Button size="lg" className="w-full h-20 text-lg">
                <Users className="w-6 h-6 mr-2" />
                Meet Stacey & Richard
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" variant="outline" className="w-full h-20 text-lg">
                <Heart className="w-6 h-6 mr-2" />
                Support Our Wedding
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;