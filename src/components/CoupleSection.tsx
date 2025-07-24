import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Heart } from "lucide-react";

const CoupleSection = () => {
  const [brideImage, setBrideImage] = useState("");
  const [groomImage, setGroomImage] = useState("");
  const [brideNotes, setBrideNotes] = useState("Stacey is a passionate teacher who loves helping children learn and grow. In her free time, she enjoys reading, painting, and planning beautiful events.");
  const [groomNotes, setGroomNotes] = useState("Richie is a dedicated software engineer with a love for technology and innovation. He enjoys cooking, playing guitar, and building amazing digital experiences.");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'bride' | 'groom') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'bride') {
          setBrideImage(result);
        } else {
          setGroomImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Meet Stacey & Richie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know the beautiful couple whose special day you're helping to make perfect
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bride Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                {brideImage ? (
                  <img 
                    src={brideImage} 
                    alt="Stacey" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Upload Bride Photo</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'bride')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4 text-center">Stacey</h3>
                <Label htmlFor="bride-notes" className="text-sm font-medium mb-2 block">
                  About Stacey
                </Label>
                <Textarea
                  id="bride-notes"
                  value={brideNotes}
                  onChange={(e) => setBrideNotes(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Groom Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                {groomImage ? (
                  <img 
                    src={groomImage} 
                    alt="Richie" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Upload Groom Photo</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'groom')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4 text-center">Richie</h3>
                <Label htmlFor="groom-notes" className="text-sm font-medium mb-2 block">
                  About Richie
                </Label>
                <Textarea
                  id="groom-notes"
                  value={groomNotes}
                  onChange={(e) => setGroomNotes(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;