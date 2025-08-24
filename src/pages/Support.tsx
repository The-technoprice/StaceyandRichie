import GiftSection from "@/components/GiftSection";
import SupportOfferForm from "@/components/SupportOfferForm";
import { Gift, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Support = () => {
  const [isGiftDialogOpen, setIsGiftDialogOpen] = useState(false);
  const [isSupportDialogOpen, setIsSupportDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/20">
      
      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Support Our Wedding
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your love and support mean the world to us. Choose how you'd like to contribute to making our special day unforgettable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gift Contribution Card */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif text-primary">
                  Gift Contribution
                </CardTitle>
                <CardDescription className="text-base">
                  Help us start our journey together with a monetary gift
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Dialog open={isGiftDialogOpen} onOpenChange={setIsGiftDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full">
                      Contribute
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-primary">
                        Gift Contribution
                      </DialogTitle>
                    </DialogHeader>
                    <GiftSection />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Offer Support Card */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <HandHeart className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif text-primary">
                  Offer Support
                </CardTitle>
                <CardDescription className="text-base">
                  Help with services, items, or skills for our wedding
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Dialog open={isSupportDialogOpen} onOpenChange={setIsSupportDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full">
                      Offer Support
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-primary">
                        Offer Support
                      </DialogTitle>
                    </DialogHeader>
                    <SupportOfferForm />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">
            Thank You for Your Love & Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Every gesture of love and support brings us closer to the wedding of our dreams. 
            We are grateful for each of you and the role you play in our journey together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Support;