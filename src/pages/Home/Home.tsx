import Feature from "@/components/modules/home/Feature";
import HeroSection from "@/components/modules/home/HeroSection";
import HomeAbout from "@/components/modules/home/HomeAbout";
import HomeCTA from "@/components/modules/home/HomeCTA";
import HomeFaq from "@/components/modules/home/HomeFaq";
import HomeTestimonials from "@/components/modules/home/HomeTestimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Feature />
      <HomeAbout />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCTA />
    </>
  );
};

export default Home;
