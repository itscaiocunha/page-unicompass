import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        <Hero />
        <WhyChooseUs />
        <Benefits />
        <About />
        <Team />
        <Portfolio />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
