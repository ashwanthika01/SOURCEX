"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function TermsAndConditions() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = sectionRefs.current;
    const links = document.querySelectorAll(".sidebar-nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
              );
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const setRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    "acceptance", "use-of-site", "accounts", "intellectual-property",
    "user-content", "prohibited-conduct", "privacy", "disclaimers",
    "limitation-liability", "indemnification", "termination",
    "governing-law", "changes", "contact",
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">SourceX</Link>
            <span>/ Terms &amp; Conditions</span>
          </div>
          
          <h1>Terms &amp; Conditions</h1>
          
          <p className="hero-lead">
            Please read these Terms of Use carefully before using our website and services.
          </p>

          <div className="hero-meta">
            <div>Last updated: May 03, 2026</div>
            <div>Applies to all SourceX websites and services</div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="page-body">
        {/* Mobile Toggle Button */}
        <div className="mobile-toggle">
          <button 
            onClick={toggleMobileMenu}
            className="mobile-toggle-btn"
            aria-label="Toggle Table of Contents"
          >
            <Menu size={20} />
            <span>Table of Contents</span>
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <p className="sidebar-label">ON THIS PAGE</p>
            <button 
              onClick={closeMobileMenu}
              className="close-btn md:hidden"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          
          <ul className="sidebar-nav">
            {navItems.map((id, i) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  className={i === 0 ? "active" : ""}
                  onClick={closeMobileMenu}
                >
                  {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <section id="acceptance" className="section" ref={(el) => setRef(el, 0)}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using SourceX Technologies websites, platforms, or services 
              (collectively the "Site"), you agree to be bound by these Terms and Conditions 
              ("Terms"). If you do not agree to all of these Terms, you must not use the Site.
            </p>
          </section>

          <section id="use-of-site" className="section" ref={(el) => setRef(el, 1)}>
            <h2>2. Use of the Site</h2>
            <p>
              You are authorized to access and use the Site for your personal or legitimate 
              business purposes only. You may not copy, modify, distribute, transmit, display, 
              reproduce, publish, license, create derivative works from, transfer, or sell any 
              content, software, products, or services obtained from the Site without our prior 
              written permission.
            </p>
          </section>

          <section id="accounts" className="section" ref={(el) => setRef(el, 2)}>
            <h2>3. User Accounts</h2>
            <p>
              Certain features of the Site may require you to create an account. You are responsible 
              for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account. You agree to notify us immediately of any unauthorized 
              use of your account.
            </p>
          </section>

          <section id="intellectual-property" className="section" ref={(el) => setRef(el, 3)}>
            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, service marks, and intellectual property on the Site 
              are the property of SourceX Technologies or its licensors. Nothing on this Site shall 
              be construed as granting any license or right to use any intellectual property without 
              our express written permission.
            </p>
          </section>

          <section id="user-content" className="section" ref={(el) => setRef(el, 4)}>
            <h2>5. User Content</h2>
            <p>
              You are solely responsible for any content, data, or materials you submit or upload 
              to the Site ("User Content"). By submitting User Content, you grant SourceX a 
              worldwide, non-exclusive, royalty-free license to use, host, reproduce, modify, and 
              distribute such content for the purpose of operating and improving our services.
            </p>
            <p>You represent and warrant that your User Content does not violate any third-party rights.</p>
          </section>

          <section id="prohibited-conduct" className="section" ref={(el) => setRef(el, 5)}>
            <h2>6. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Use any robot, spider, or automated means to access the Site</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Interfere with the proper working of the Site</li>
              <li>Post defamatory, obscene, or infringing content</li>
            </ul>
          </section>

          <section id="privacy" className="section" ref={(el) => setRef(el, 6)}>
            <h2>7. Privacy</h2>
            <p>
              Your use of the Site is also governed by our <Link href="/privacy-center" className="text-blue-600 hover:underline">Privacy Policy</Link>. 
              Please review it to understand how we collect and use your information.
            </p>
          </section>

          <section id="disclaimers" className="section" ref={(el) => setRef(el, 7)}>
            <h2>8. Disclaimers</h2>
            <p>
              The Site and all content are provided "AS IS" without any warranties of any kind. 
              SourceX disclaims all warranties, express or implied, including warranties of 
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section id="limitation-liability" className="section" ref={(el) => setRef(el, 8)}>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SourceX shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising out of your use of the Site.
            </p>
          </section>

          <section id="indemnification" className="section" ref={(el) => setRef(el, 9)}>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold SourceX, its officers, directors, employees, and agents 
              harmless from any claims, losses, damages, liabilities, and expenses arising from your 
              use of the Site or violation of these Terms.
            </p>
          </section>

          <section id="termination" className="section" ref={(el) => setRef(el, 10)}>
            <h2>11. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Site at any time, 
              without notice, for conduct that we believe violates these Terms or is harmful to 
              other users or to us.
            </p>
          </section>

          <section id="governing-law" className="section" ref={(el) => setRef(el, 11)}>
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts located in Hosur, Tamil Nadu.
            </p>
          </section>

          <section id="changes" className="section" ref={(el) => setRef(el, 12)}>
            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes 
              by posting the updated Terms on this page. Your continued use of the Site after such 
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section id="contact" className="section" ref={(el) => setRef(el, 13)}>
            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><strong>Email:</strong> sourcex25@gmail.com</p>
            <p><strong>Address:</strong> Hosur, Tamil Nadu, India</p>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#080d18]">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
            <div className="sm:col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white font-semibold text-xl">SourceX</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Trusted partner for electronic component sourcing, PCB assembly, and supply chain solutions across India.
              </p>
            </div>

            <div className="hidden md:block md:col-span-1" />

            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Company</p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/nabout" className="hover:text-gray-300">About Us</Link></li>
                <li><Link href="/nservices" className="hover:text-gray-300">Services</Link></li>
                <li><Link href="/nproducts" className="hover:text-gray-300">Products</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Legal</p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/privacy-center" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-300">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Contact</p>
              <p className="text-gray-500 text-sm">Hosur, Tamil Nadu, India</p>
              <p className="text-gray-500 text-sm">sourcex25@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/[0.05]" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} SourceX Technologies Private Limited. All rights reserved.
        </div>
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        * { box-sizing: border-box; }

        html, body {
          background: #f8f9fa;
          color: #1e2937;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero { 
          background: #0f172a; 
          color: white; 
          padding: 5rem 1.25rem; 
          text-align: center; 
        }
        .hero-inner { max-width: 800px; margin: 0 auto; }
        .breadcrumb { font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; }
        .breadcrumb a { color: inherit; text-decoration: none; }
        .hero h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1.25rem; }
        .hero-lead { font-size: 1.15rem; line-height: 1.7; color: #cbd5e1; max-width: 680px; margin: 0 auto 2rem; }
        .hero-meta { 
          font-size: 0.95rem; 
          color: #94a3b8; 
          display: flex; 
          gap: 1.5rem; 
          justify-content: center; 
          flex-wrap: wrap; 
        }

        .page-body {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1.25rem;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 4rem;
        }

        .mobile-toggle { display: none; margin-bottom: 1.5rem; }
        .mobile-toggle-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid #e2e8f0;
          padding: 12px 18px;
          border-radius: 8px;
          font-weight: 500;
          color: #1e40af;
        }

        .sidebar {
          position: sticky;
          top: 2rem;
          align-self: start;
          height: fit-content;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .sidebar-label { 
          font-size: 0.8rem; 
          font-weight: 600; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          color: #64748b; 
        }

        .sidebar-nav a {
          display: block;
          padding: 10px 0;
          color: #475569;
          text-decoration: none;
          font-size: 1.05rem;
          border-left: 3px solid transparent;
          padding-left: 1rem;
          transition: all 0.2s;
        }

        .sidebar-nav a:hover,
        .sidebar-nav a.active {
          color: #1e40af;
          border-left-color: #1e40af;
          font-weight: 500;
        }

        .content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          margin: 3rem 0 1.25rem;
          color: #0f172a;
        }
        .content p { 
          line-height: 1.85; 
          color: #334155; 
          margin-bottom: 1.25rem; 
        }
        .content ul { 
          padding-left: 1.4rem; 
          margin-bottom: 1.5rem; 
        }
        .content li { 
          margin-bottom: 0.85rem; 
          line-height: 1.7; 
        }

        /* Mobile */
        @media (max-width: 900px) {
          .page-body { 
            grid-template-columns: 1fr; 
            gap: 1.5rem; 
          }
          .hero { padding: 4rem 1rem; }
          .hero h1 { font-size: 2.2rem; }

          .mobile-toggle { display: block; }

          .sidebar {
            position: fixed;
            top: 0;
            left: -100%;
            width: 280px;
            height: 100vh;
            background: white;
            z-index: 1000;
            padding: 1.5rem;
            box-shadow: 4px 0 15px rgba(0,0,0,0.1);
            transition: left 0.3s ease;
            overflow-y: auto;
          }
          .sidebar.open { left: 0; }
        }
      `}</style>
    </div>
  );
}