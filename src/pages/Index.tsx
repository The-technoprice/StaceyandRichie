import WeddingHero from "@/components/WeddingHero";
import AboutCouple from "@/components/AboutCouple";
import WeddingDetails from "@/components/WeddingDetails";
import CoupleSection from "@/components/CoupleSection";
import FundraisingSection from "@/components/GiftSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <AboutCouple />
      <WeddingDetails />
      <CoupleSection />
      <FundraisingSection />
    </div>
  );
};

export default Index;
