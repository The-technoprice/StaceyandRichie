import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PaystackButton } from "react-paystack";
import { Heart, DollarSign, Camera, Music, Cake, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FundraisingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Replace this with your actual Paystack public key
  const publicKey = "pk_test_your_paystack_public_key_here";

  const categories = [
    {
      id: "pastry",
      name: "Pastry Services",
      icon: Cake,
      description: "Help us create beautiful wedding cakes and desserts",
      suggestedAmounts: [2000, 5000, 10000, 15000],
      target: 30000
    },
    {
      id: "photo_video",
      name: "Photo & Video",
      icon: Camera,
      description: "Capture our special moments with professional photography",
      suggestedAmounts: [3000, 8000, 15000, 25000],
      target: 50000
    },
    {
      id: "entertainment",
      name: "MC/DJ/Band",
      icon: Music,
      description: "Keep the celebration alive with great music and entertainment",
      suggestedAmounts: [1500, 4000, 8000, 12000],
      target: 25000
    },
    {
      id: "styling",
      name: "Makeup Stylist/Decor",
      icon: Sparkles,
      description: "Make everything beautiful with professional styling and decor",
      suggestedAmounts: [2500, 5000, 10000, 18000],
      target: 35000
    }
  ];

  const handlePaystackSuccess = (reference: any) => {
    toast({
      title: "Donation Successful!",
      description: `Thank you for contributing to our ${categories.find(c => c.id === selectedCategory)?.name}! We truly appreciate your support.`,
    });
    
    // Reset form
    setAmount("");
    setEmail("");
    setName("");
    setMessage("");
    setSelectedCategory("");
  };

  const handlePaystackClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "Your donation was not completed.",
      variant: "destructive",
    });
  };

  const componentProps = {
    email,
    amount: parseInt(amount) * 100, // Paystack expects amount in cents
    currency: "KES", // Kenyan Shillings
    metadata: {
      name,
      message,
      category: selectedCategory,
      custom_fields: [
        {
          display_name: "Donor Name",
          variable_name: "donor_name",
          value: name,
        },
        {
          display_name: "Category",
          variable_name: "category",
          value: categories.find(c => c.id === selectedCategory)?.name || "",
        },
        {
          display_name: "Message",
          variable_name: "message",
          value: message,
        },
      ],
    },
    publicKey,
    text: `Donate KSh ${amount ? parseInt(amount).toLocaleString() : '0'}`,
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Help Us Make Our Dream Wedding Come True
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your support means the world to us! Choose a category below to help fund our special day. 
            Every contribution, no matter the size, brings us closer to the wedding of our dreams.
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                   <div className="text-xs text-primary font-medium">
                     Target: KSh {category.target.toLocaleString()}
                   </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Donation Form */}
        {selectedCategory && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Heart className="w-6 h-6 text-primary" />
                Contribute to {selectedCategoryData?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

               <div>
                 <Label htmlFor="amount">Donation Amount (KSh)</Label>
                 <Input
                   id="amount"
                   type="number"
                   value={amount}
                   onChange={(e) => setAmount(e.target.value)}
                   placeholder="Enter amount"
                 />
                 <div className="flex flex-wrap gap-2 mt-3">
                   {selectedCategoryData?.suggestedAmounts.map((quickAmount) => (
                     <Button
                       key={quickAmount}
                       variant="outline"
                       size="sm"
                       onClick={() => setAmount(quickAmount.toString())}
                       className="text-xs"
                     >
                       KSh {quickAmount.toLocaleString()}
                     </Button>
                   ))}
                 </div>
               </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your wishes for Stacey & Richie..."
                  rows={3}
                />
              </div>

              <div className="pt-4">
                {amount && email && name ? (
                  <PaystackButton
                    {...componentProps}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <DollarSign className="w-5 h-5" />
                    Donate KSh {parseInt(amount).toLocaleString()}
                  </PaystackButton>
                ) : (
                  <Button disabled className="w-full" size="lg">
                    Please fill all required fields
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default FundraisingSection;