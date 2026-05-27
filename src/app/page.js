import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <HeroSection />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}