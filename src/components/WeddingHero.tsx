import heroImage from "@/assets/hero-couple.jpg";

const WeddingHero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 28, 85, 0.3), rgba(5, 28, 85, 0.3)), url(${heroImage})`
      }}
    >
      <div className="text-center px-4 max-w-4xl mx-auto text-white relative z-10">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 tracking-wider">
            Stacey & Richie
          </h1>
          <div className="w-32 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide uppercase">
            Wedding Invitation
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;