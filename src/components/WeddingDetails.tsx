import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Camera, Music, Utensils } from "lucide-react";

const WeddingDetails = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-16">
          Wedding Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                Ceremony
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                <span>3:00 PM</span>
              </div>
              <div>
                <p className="font-semibold">Garden View Resort</p>
                <p className="text-muted-foreground">123 Love Lane, Victoria Island</p>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Outdoor ceremony in the beautiful garden pavilion
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary flex items-center justify-center gap-3">
                <Music className="w-6 h-6" />
                Reception
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                <span>6:00 PM</span>
              </div>
              <div>
                <p className="font-semibold">Garden View Resort</p>
                <p className="text-muted-foreground">Grand Ballroom</p>
                <p className="text-muted-foreground">Same Location</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Dinner, dancing, and celebration until midnight
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Utensils className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dinner</h3>
              <p className="text-muted-foreground text-sm">
                Three-course plated dinner with vegetarian options available
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Music className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Music</h3>
              <p className="text-muted-foreground text-sm">
                Live band and DJ for ceremony and reception
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Camera className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-muted-foreground text-sm">
                Professional photography and videography included
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-serif text-primary mb-4">Dress Code</h3>
              <p className="text-muted-foreground">
                Semi-formal attire requested. Ladies, please avoid white. 
                Gentlemen, jacket preferred but not required.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;