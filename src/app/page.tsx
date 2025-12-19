import Hero from "@/components/Landing/Hero";
import About from "@/components/Landing/About";
import Services from "@/components/Landing/Services";
import WhyChooseUs from "@/components/Landing/WhyChooseUs";
import Gallery from "@/components/Landing/Gallery";
import Contact from "@/components/Landing/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Contact />
    </>
  );
}
