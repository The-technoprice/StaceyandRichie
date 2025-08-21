import CoupleSection from "@/components/CoupleSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const MeetCouple = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="py-6 px-4 bg-white/50 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wedding Details
            </Button>
          </Link>
          <Link to="/support">
            <Button size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Support Us
            </Button>
          </Link>
        </div>
      </nav>

      <CoupleSection />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Ready to Support Our Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your love and support mean everything to us as we begin this new chapter together.
          </p>
          <Link to="/support">
            <Button size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Support Our Wedding
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MeetCouple;