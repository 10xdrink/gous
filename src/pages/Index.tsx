
import Hero from "@/components/Hero";
import BookPromotion from "@/components/BookPromotion";
import AboutMe from "@/components/AboutMe";
import SocialSection from "@/components/SocialSection";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookPromotion />
      <AboutMe />
      <SocialSection />
      <Newsletter />
    </div>
  );
};

export default Index;
