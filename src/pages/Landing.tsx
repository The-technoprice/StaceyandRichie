import WeddingHero from "@/components/WeddingHero";
import AboutCouple from "@/components/AboutCouple";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingFooter from "@/components/WeddingFooter";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <AboutCouple />
      <WeddingDetails />
      <WeddingFooter />
    </div>
  );
};

export default Landing;