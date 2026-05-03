"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">SourceX</Link>
            <span>/ Privacy Center</span>
          </div>
          
          <h1>Privacy Center</h1>
          
          <p className="hero-lead">
            We care about your privacy and want to help you understand how we collect, 
            use, and protect your personal information.
          </p>

          <div className="hero-meta">
            <div>Last updated: May 03, 2026</div>
            <div>Applies to SourceX websites, services &amp; applications</div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="page-body">
        <aside className="sidebar">
          <p className="sidebar-label">ON THIS PAGE</p>
          <ul className="sidebar-nav">
            {[
              "overview", "information-we-collect", "how-we-use", "sharing",
              "cookies", "data-retention", "security", "your-rights",
              "international-transfers", "children", "changes", "contact",
            ].map((id, i) => (
              <li key={id}>
                <a href={`#${id}`} className={i === 0 ? "active" : ""}>
                  {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          {/* 1. Overview */}
          <section id="overview" className="section" ref={(el) => setRef(el, 0)}>
            <h2>Overview</h2>
            <p>
              At SourceX Technologies, transparency and trust are core to our values. 
              This Privacy Center explains how we collect, use, disclose, and safeguard 
              your personal information across our websites, platforms, and services.
            </p>
            <p>
              We are committed to processing your data lawfully, fairly, and transparently 
              in accordance with applicable data protection laws, including the Digital Personal 
              Data Protection Act (DPDP) of India.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="information-we-collect" className="section" ref={(el) => setRef(el, 1)}>
            <h2>Information We Collect</h2>
            <p>We collect the following categories of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, GSTIN, and job title.</li>
              <li><strong>Account Information:</strong> Username, password, and profile preferences.</li>
              <li><strong>Transaction Data:</strong> Purchase history, billing and shipping addresses, payment details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and access times.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clickstream data, and interaction with our services.</li>
              <li><strong>Communication Data:</strong> Inquiries, support tickets, chat messages, and feedback submitted to us.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section id="how-we-use" className="section" ref={(el) => setRef(el, 2)}>
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our products and services</li>
              <li>To process orders, transactions, and manage customer relationships</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send important service notices, updates, and promotional communications (where permitted)</li>
              <li>To personalize your experience and deliver relevant content</li>
              <li>To ensure the security of our platforms and prevent fraud</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* 4. Sharing and Disclosure */}
          <section id="sharing" className="section" ref={(el) => setRef(el, 3)}>
            <h2>Sharing and Disclosure</h2>
            <p>We do not sell your personal information to third parties. We may share your data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Hosting, payment gateways, logistics, analytics, and marketing partners under strict confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Professional Advisors:</strong> Auditors, lawyers, and consultants bound by confidentiality.</li>
            </ul>
          </section>

          {/* 5. Cookies and Tracking */}
          <section id="cookies" className="section" ref={(el) => setRef(el, 4)}>
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, pixels, and similar tracking technologies to enhance your experience, 
              analyze website traffic, and deliver personalized content. You can manage your cookie 
              preferences through our Cookie Consent Manager or your browser settings.
            </p>
            <p><strong>Types of cookies we use:</strong></p>
            <ul>
              <li><strong>Essential:</strong> Required for the website to function properly</li>
              <li><strong>Functional:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing:</strong> Deliver relevant advertisements and measure campaign performance</li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section id="data-retention" className="section" ref={(el) => setRef(el, 5)}>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes 
              for which it was collected, or as required by applicable laws and regulations. 
              Once no longer needed, we securely delete or anonymize your data.
            </p>
          </section>

          {/* 7. Security */}
          <section id="security" className="section" ref={(el) => setRef(el, 6)}>
            <h2>Security of Your Information</h2>
            <p>
              We implement industry-standard technical and organizational security measures including 
              encryption, access controls, regular security audits, secure servers, and employee training 
              to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section id="your-rights" className="section" ref={(el) => setRef(el, 7)}>
            <h2>Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to access, correct, or update your information</li>
              <li>Right to request deletion of your data (subject to legal requirements)</li>
              <li>Right to restrict or object to certain processing activities</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided below.</p>
          </section>

          {/* 9. International Transfers */}
          <section id="international-transfers" className="section" ref={(el) => setRef(el, 8)}>
            <h2>International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in India and other countries where our 
              service providers operate. We ensure that appropriate safeguards (such as Standard 
              Contractual Clauses or equivalent measures) are in place to protect your information.
            </p>
          </section>

          {/* 10. Children’s Privacy */}
          <section id="children" className="section" ref={(el) => setRef(el, 9)}>
            <h2>Children’s Privacy</h2>
            <p>
              Our services are not directed at children under the age of 16. We do not knowingly 
              collect personal information from children. If we become aware that we have collected 
              data from a child without parental consent, we will take reasonable steps to delete it.
            </p>
          </section>

          {/* 11. Changes to Policy */}
          <section id="changes" className="section" ref={(el) => setRef(el, 10)}>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of any material changes by posting the updated 
              policy on this page and updating the "Last updated" date. We encourage you to review this 
              page periodically.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section id="contact" className="section" ref={(el) => setRef(el, 11)}>
            <h2>Contact Us</h2>
            <p>For any questions, concerns, or to exercise your privacy rights, please contact us at:</p>
            <p><strong>Email:</strong> sourcex25@gmail.com</p>
            <p><strong>Address:</strong> Hosur, Tamil Nadu, India</p>
            <p>We aim to respond to all requests within 30 days.</p>
          </section>
        </main>
      </div>

      {/* ================= FULL-WIDTH FOOTER ================= */}
      <footer className="bg-[#080d18]">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
            <div className="sm:col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/Logo.png"
                  alt="SourceX Technologies"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
                <span className="text-white font-semibold text-base">SourceX Technologies</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Trusted partner for electronic component sourcing, PCB assembly,
                and supply chain solutions across India.
              </p>

              <div className="mt-6 space-y-2.5">
                <a href="mailto:sourcex25@gmail.com" className="flex items-center gap-2.5 text-gray-500 hover:text-gray-300 text-sm transition-colors group">
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  sourcex25@gmail.com
                </a>
                <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                  Hosur, Tamil Nadu, India
                </div>
              </div>
            </div>

            <div className="hidden md:block md:col-span-1" />

            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Company</p>
              <ul className="space-y-3">
                {["About Us", "Services", "Products", "Contact"].map((l) => (
                  <li key={l}>
                    <Link href={`/${l.toLowerCase().replace(" ", "")}`} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Categories</p>
              <ul className="space-y-3">
                {["Active Components", "Passive Components", "Modules", "Cables & Wires", "Accessories"].map((c) => (
                  <li key={c}>
                    <Link href="/nproducts" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">Top Brands</p>
              <ul className="space-y-3">
                {["Texas Instruments", "STMicroelectronics", "Infineon", "Vishay", "Yageo", "Espressif"].map((b) => (
                  <li key={b}>
                    <Link href="/#product-offerings" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                      {b}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/[0.05]" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} SourceX Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-center" className="text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        body {
          background: #f8f9fa;
          color: #1e2937;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero { background: #0f172a; color: white; padding: 5rem 2rem; text-align: center; }
        .hero-inner { max-width: 800px; margin: 0 auto; }
        .breadcrumb { font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; }
        .breadcrumb a { color: inherit; text-decoration: none; }
        .breadcrumb a:hover { color: #dbeafe; }

        .hero h1 { font-size: 2.8rem; font-weight: 700; margin-bottom: 1.25rem; }
        .hero-lead { font-size: 1.2rem; line-height: 1.7; color: #cbd5e1; max-width: 680px; margin: 0 auto 2rem; }
        .hero-meta { font-size: 0.95rem; color: #94a3b8; display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; }

        .page-body {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 5rem;
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
        }

        .sidebar { position: sticky; top: 2rem; align-self: start; }
        .sidebar-label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-bottom: 1rem; }

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

        .content p { line-height: 1.85; color: #334155; margin-bottom: 1.25rem; }
        .content ul { padding-left: 1.4rem; margin-bottom: 1.5rem; }
        .content li { margin-bottom: 0.85rem; line-height: 1.7; }

        @media (max-width: 900px) {
          .page-body { grid-template-columns: 1fr; gap: 2rem; }
          .hero h1 { font-size: 2.4rem; }
        }
      `}</style>
    </>
  );
}