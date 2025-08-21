import CoupleSection from "@/components/CoupleSection";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const MeetCouple = () => {
  return (
    <div className="min-h-screen">
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