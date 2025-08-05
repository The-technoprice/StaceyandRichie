import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Users, UserCheck } from "lucide-react";

const GuestDataSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    dietary_restrictions: "",
    accessibility_needs: "",
    plus_one_name: "",
    plus_one_dietary: "",
    special_requests: "",
    accommodation_needed: false,
    transport_needed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('guest_information')
        .insert(formData);

      if (error) throw error;

      toast({
        title: "Information submitted successfully!",
        description: "Thank you for providing your details. We'll use this to make your experience perfect."
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        dietary_restrictions: "",
        accessibility_needs: "",
        plus_one_name: "",
        plus_one_dietary: "",
        special_requests: "",
        accommodation_needed: false,
        transport_needed: false
      });
    } catch (error) {
      toast({
        title: "Error submitting information",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Guest Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us make your wedding experience perfect by sharing some important details. 
            This information will help us accommodate your needs and preferences.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <UserCheck className="h-6 w-6 text-primary" />
              Please Share Your Details
            </CardTitle>
            <CardDescription>
              All information is confidential and will only be used to enhance your wedding experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Include country code if international"
                  />
                </div>
              </div>

              {/* Dietary & Accessibility */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Dietary & Accessibility Needs</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="dietary_restrictions">Dietary Restrictions or Allergies</Label>
                  <Textarea
                    id="dietary_restrictions"
                    value={formData.dietary_restrictions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dietary_restrictions: e.target.value }))}
                    placeholder="Please list any dietary restrictions, allergies, or special meal requirements"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accessibility_needs">Accessibility Requirements</Label>
                  <Textarea
                    id="accessibility_needs"
                    value={formData.accessibility_needs}
                    onChange={(e) => setFormData(prev => ({ ...prev, accessibility_needs: e.target.value }))}
                    placeholder="Please let us know if you have any mobility, hearing, vision, or other accessibility needs"
                    rows={3}
                  />
                </div>
              </div>

              {/* Plus One Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Plus One Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="plus_one_name">Plus One Name</Label>
                    <Input
                      id="plus_one_name"
                      value={formData.plus_one_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, plus_one_name: e.target.value }))}
                      placeholder="Name of your guest (if applicable)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plus_one_dietary">Plus One Dietary Restrictions</Label>
                    <Input
                      id="plus_one_dietary"
                      value={formData.plus_one_dietary}
                      onChange={(e) => setFormData(prev => ({ ...prev, plus_one_dietary: e.target.value }))}
                      placeholder="Any dietary restrictions for your guest"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Additional Requirements</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accommodation_needed"
                      checked={formData.accommodation_needed}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, accommodation_needed: checked as boolean }))
                      }
                    />
                    <Label htmlFor="accommodation_needed">
                      I need help with accommodation recommendations
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="transport_needed"
                      checked={formData.transport_needed}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, transport_needed: checked as boolean }))
                      }
                    />
                    <Label htmlFor="transport_needed">
                      I need help with transportation to the venue
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special_requests">Special Requests or Comments</Label>
                  <Textarea
                    id="special_requests"
                    value={formData.special_requests}
                    onChange={(e) => setFormData(prev => ({ ...prev, special_requests: e.target.value }))}
                    placeholder="Any other special requests, comments, or things we should know"
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Information"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuestDataSection;