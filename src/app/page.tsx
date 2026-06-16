import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Capabilities from "@/components/Capabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <Capabilities />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
