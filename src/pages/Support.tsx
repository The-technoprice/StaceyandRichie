import { useState } from "react";
import GiftSection from "@/components/GiftSection";
import RSVPSection from "@/components/RSVPSection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Gift, Users, Heart, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import SupportOfferForm from "@/components/SupportOfferForm";

const Support = () => {
  const [isGiftDialogOpen, setIsGiftDialogOpen] = useState(false);
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);
  const [isSupportDialogOpen, setIsSupportDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/20">
      {/* Navigation Header */}
      <nav className="py-6 px-4 bg-white/50 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wedding Details
            </Button>
          </Link>
          <Link to="/meet-couple">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Meet the Couple
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 text-primary mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
            Support Our Wedding
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your love, presence, and support are the greatest gifts we could ask for. 
            Choose how you'd like to be part of our special day.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gift Contribution */}
            <Dialog open={isGiftDialogOpen} onOpenChange={setIsGiftDialogOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl font-serif">Gift Contribution</CardTitle>
                    <CardDescription className="text-base">
                      Help us start our journey together with a monetary gift
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="lg">
                      Contribute Now
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-center">Gift Contribution</DialogTitle>
                </DialogHeader>
                <GiftSection />
              </DialogContent>
            </Dialog>

            {/* RSVP */}
            <Dialog open={isRSVPDialogOpen} onOpenChange={setIsRSVPDialogOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl font-serif">RSVP</CardTitle>
                    <CardDescription className="text-base">
                      Let us know if you'll be joining us on our special day
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="lg" variant="outline">
                      RSVP Now
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-center">RSVP for Our Wedding</DialogTitle>
                </DialogHeader>
                <RSVPSection />
              </DialogContent>
            </Dialog>

            {/* Offer Support */}
            <Dialog open={isSupportDialogOpen} onOpenChange={setIsSupportDialogOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <HandHeart className="w-16 h-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl font-serif">Offer Support</CardTitle>
                    <CardDescription className="text-base">
                      Help with services, items, or skills for our wedding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="lg" variant="secondary">
                      Offer Help
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-center">Offer Your Support</DialogTitle>
                </DialogHeader>
                <SupportOfferForm />
              </DialogContent>
            </Dialog>
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