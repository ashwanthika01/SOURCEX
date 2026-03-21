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
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      
      {/* Navbar stays same */}
      <Navbar />

      {/* 🔥 FULL WIDTH HERO */}
      <Hero />

      {/* ✨ Rest of the sections */}
      <div className="relative z-10">
        
        {/* Light background sections */}
        <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          <Services />
          <Products />
          <About />
        </section>

        {/* 💎 Premium separator (like Exportarts feel) */}
        <div className="w-full h-40 bg-gradient-to-b from-white to-blue-50" />

        {/* Motion section (can be more visual) */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <MotionSection />
        </section>

        {/* CTA - make it stand out */}
        <section className="px-6 py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-5xl mx-auto">
            <CTA />
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}