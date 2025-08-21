import WeddingHero from "@/components/WeddingHero";
import AboutCouple from "@/components/AboutCouple";
import WeddingDetails from "@/components/WeddingDetails";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <AboutCouple />
      <WeddingDetails />
      
    </div>
  );
};

export default Landing;