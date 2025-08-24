const heroImage = "/lovable-uploads/b9290f0e-731e-4ea9-90a7-7a30212cb439.png";

const WeddingHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-serif text-primary mb-6 tracking-wider">
            Stacey & Richie
          </h1>
          <div className="w-32 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide uppercase mb-4">
            Join us on our big day
          </p>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">
            15th November 2025
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Gospel Outreach church Chaka
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;