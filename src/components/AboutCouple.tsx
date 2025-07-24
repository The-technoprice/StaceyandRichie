import { Card, CardContent } from "@/components/ui/card";

const AboutCouple = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-16">
          Our Story
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary">S</span>
                </div>
                <h3 className="text-2xl font-serif text-primary">Sarah</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A passionate photographer who loves capturing life's beautiful moments. 
                When she's not behind the camera, you'll find her exploring new cafes 
                or planning the next adventure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary">J</span>
                </div>
                <h3 className="text-2xl font-serif text-primary">John</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A software engineer with a love for cooking and outdoor adventures. 
                He believes in solving problems with code and creating memorable 
                experiences through food and travel.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif text-primary mb-6">How We Met</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our love story began in 2019 at a local coffee shop where Sarah was photographing 
              the morning light and John was coding his latest project. A spilled latte led to 
              a conversation, which led to a first date, and now here we are, ready to say "I do" 
              surrounded by our favorite people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;