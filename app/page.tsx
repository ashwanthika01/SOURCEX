import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
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
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}