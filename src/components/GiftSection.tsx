import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PaystackButton } from "react-paystack";
import { Gift, Heart, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GiftSection = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // You'll need to replace this with your actual Paystack public key
  const publicKey = "pk_test_your_paystack_public_key_here";

  const handlePaystackSuccess = (reference: any) => {
    toast({
      title: "Payment Successful!",
      description: "Thank you for your generous gift! We truly appreciate it.",
    });
    
    // Reset form
    setAmount("");
    setEmail("");
    setName("");
    setMessage("");
  };

  const handlePaystackClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "Your payment was not completed.",
      variant: "destructive",
    });
  };

  const componentProps = {
    email,
    amount: parseInt(amount) * 100, // Paystack expects amount in kobo
    metadata: {
      name,
      message,
      custom_fields: [
        {
          display_name: "Sender Name",
          variable_name: "sender_name",
          value: name,
        },
        {
          display_name: "Message",
          variable_name: "message",
          value: message,
        },
      ],
    },
    publicKey,
    text: `Send ₦${amount ? parseInt(amount).toLocaleString() : '0'} Gift`,
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
  };

  const quickAmounts = [5000, 10000, 25000, 50000, 100000];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Wedding Gifts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish 
            to honor us with a gift, a contribution towards our future together would be 
            deeply appreciated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Heart className="w-6 h-6 text-rose-500" />
                Send a Gift
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
                <Label htmlFor="amount">Gift Amount (₦)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      variant="outline"
                      size="sm"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="text-xs"
                    >
                      ₦{quickAmount.toLocaleString()}
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
                  placeholder="Share your wishes for the couple..."
                  rows={3}
                />
              </div>

              <div className="pt-4">
                {amount && email && name ? (
                  <PaystackButton
                    {...componentProps}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <DollarSign className="w-5 h-5" />
                    Send ₦{parseInt(amount).toLocaleString()} Gift
                  </PaystackButton>
                ) : (
                  <Button disabled className="w-full" size="lg">
                    Please fill all required fields
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Gift Registry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We're building our new life together and would be grateful for contributions towards:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Our dream honeymoon to Santorini</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Setting up our new home</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Starting our photography business</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Emergency fund for our future</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Alternative Options:</strong> If you prefer, you can also 
                  send gifts via bank transfer or bring physical gifts on our wedding day.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;