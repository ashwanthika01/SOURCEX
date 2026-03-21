import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import MotionSection from "./components/MotionSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-24">
          <Hero />
          <Services />
          <Products />
          <About />
          <MotionSection />
          <CTA />
        </section>
      </div>
      <Footer />
    </main>
  );
}
