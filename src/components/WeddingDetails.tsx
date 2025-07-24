import { Button } from "@/components/ui/button";

const WeddingDetails = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-8 tracking-wide">
          Wedding Venue
        </h2>
        <div className="w-24 h-0.5 bg-accent mx-auto mb-16"></div>
        
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our stunning wedding venue is located at the heart of the countryside, just minutes of the 
            beautiful resort of Coastal Gardens.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-primary mb-4 uppercase tracking-wide">Location</h3>
            <p className="text-lg text-muted-foreground">Coastal Gardens Resort, Mombasa</p>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-6">
              We're so pleased to invite you to spend the weekend with us in the most beautiful surroundings, 
              so whether you decide to book just a great meal or a full weekend.
            </p>
            <p className="text-muted-foreground mb-6">
              Our venue is easily accessible by car and public transport.
            </p>
            <p className="text-muted-foreground mb-8">
              We also provide a shuttle service. Our guests can enjoy everything of all 
              with an overnight stay.
            </p>
            <p className="text-muted-foreground mb-8">
              We look forward to welcoming you this summer!
            </p>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-primary font-medium mb-4">Wedding starts at 4 pm</p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 uppercase tracking-wide">
              Visit Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;