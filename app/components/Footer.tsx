export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-200 bg-gradient-to-b from-white to-blue-50">
      
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* 🏢 Brand */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">
            SourceX Technologies
          </h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Global electronic component sourcing partner helping hardware teams
            scale from prototype to production.
          </p>
        </div>

        {/* 🔗 Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-900">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <a href="#top" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>

        {/* 📞 Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-900">Contact</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>info@sourcex-tech.com</p>
            <p>+91-00000-00000</p>
            <p className="text-xs text-gray-400 pt-2">
              Chennai, India · Global operations
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          
          <div>
            © {new Date().getFullYear()} SourceX Technologies. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Terms
            </a>
            <a href="#top" className="hover:text-blue-600 transition">
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}