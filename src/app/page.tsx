import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ambassadors from "@/components/sections/Ambassadors";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import ThreeSteps from "@/components/sections/ThreeSteps";
import WhyBeAmbassador from "@/components/sections/WhyBeAmbassador";
import YouCan from "@/components/sections/YouCan";

export default function Home() {
  return (
    <>
    <Banner />
    <Navbar />
    <Hero />
    <LogoCloud />
    <Stats />
    <YouCan />
    <Features />
    <Ambassadors />
    <WhyBeAmbassador />
    <ThreeSteps />
    <Testimonials />
    <Footer />
    </>
  );
}
