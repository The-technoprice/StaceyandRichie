const WeddingHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-serif text-primary mb-6 tracking-wider">
            Stacey & Richie
          </h1>
          <div className="w-32 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide uppercase">
            Wedding Fundraiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;