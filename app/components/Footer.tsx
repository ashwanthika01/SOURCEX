export default function Footer() {
  return (
    <footer className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      
      {/*  SAME GRADIENT AS CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6]" />

      {/* SUBTLE TEXTURE */}
      <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]" 
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3 text-white">
        
        {/* 🏢 Brand */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            SourceX Technologies
          </h3>
          <p className="text-sm text-blue-100 max-w-xs">
            Global electronic component sourcing partner helping hardware teams
            scale from prototype to production.
          </p>
        </div>

        {/* 🔗 Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-blue-100">
            <a href="#top" className="hover:text-white transition">
              Home
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        {/* 📞 Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white">Contact</h4>
          <div className="text-sm text-blue-100 space-y-1">
            <p>sourcex25@gmail.com</p>
            <p className="text-xs text-blue-200 pt-2">
              Plot No. 6, Ground floor, Kamaraj Nagar, Sipcot 1, Zuzuvadi post
              Hosur - 635126, Tamil Nadu
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-blue-100 gap-2">
          
          <div>
            © {new Date().getFullYear()} SourceX Technologies. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#top" className="hover:text-white transition">
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}