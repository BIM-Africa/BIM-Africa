"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import mauritiushealthtravel from "../../Assests/mauritiushealthtravel.png"
import {
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  MessageSquare,
} from "lucide-react";

/* Assets */
import logo from "../../Assests/srv.svg";
import noumarmite from "../../Assests/noumarmite.png";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      {/* Mobile background fix */}
      <style>{`
        @media (max-width: 640px) {
          .bg-hero { 
            background-repeat: repeat-y !important; 
            background-size: 100% auto !important; 
            background-position: top center !important; 
          }
        }
      `}</style>

      {/* ================== MAIN CONTENT ================== */}
      <main className="py-10">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================== LEFT CASE STUDY ================== */}
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12 lg:col-span-2">

            {/* === Image + Title Row === */}
            <div className="flex items-center gap-4 mb-6">
              <Image
  src={mauritiushealthtravel}
  alt="Mauritius Health Travel"
  className="w-12 h-12 rounded-xl object-contain"
/>

              <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                A case study of:{" "}
                <span className="text-[#ff1f00] font-semibold">
                  Mauritius Health Travel
                </span>
              </h2>
            </div>

            {/* === Chips Section === */}
            <div className="flex flex-wrap gap-3 mb-6">

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Industry: Travel & Hospitality
  </span>

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Service: Website Development
  </span>
  <a
  href="https://mauritiushealthtravel.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full"
>
  Visit Website
</a>


</div>

            {/* === MAIN TITLE === */}
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Mauritius Health Travel: Connecting Patients to World-Class Treatments
            </h1>

            {/* === CONTENT === */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              Mauritius Health Travel connects patients in Mauritius with leading medical providers in India,
              offering seamless access to world-class treatments, consultations, and post-treatment support.
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Establish credibility with international healthcare providers</li>
              <li>Gain trust from patients seeking specialized treatments abroad</li>
              <li>Streamline inquiries and patient onboarding</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              The healthcare and medical tourism industry is highly sensitive — trust, security, and professionalism are critical.
            </p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Showcase medical services and treatment options clearly</li>
              <li>Provide a user-friendly interface for patients to submit inquiries</li>
              <li>Establish authority and credibility with international providers</li>
              <li>Ensure compliance with privacy & data protection standards</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">Our Approach</h2>

            <h3 className="text-white font-semibold mb-2">Step 1 — Discovery & Strategy</h3>
            <p className="text-white/90 mb-4">
              We worked closely with Mauritius Health Travel to understand patient journeys, common questions,
              and the core value proposition of medical travel.
            </p>

            <h3 className="text-white font-semibold mb-2">Step 2 — Premium Design</h3>
            <p className="text-white/90 mb-4">
              The design is clean, minimal, and professional — conveying trust and expertise.
            </p>

            <h3 className="text-white font-semibold mb-2">Step 3 — High-Performance Development</h3>
            <p className="text-white/90 mb-4">Built for speed, security, and reliability.</p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>SSL encryption for secure inquiries</li>
              <li>Optimized for global performance (Mauritius + India)</li>
              <li>SEO-ready architecture</li>
              <li>Scalable infrastructure for future services</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Outcome</h2>
            <p className="text-white/90 mb-4">
              Mauritius Health Travel now operates a professional, trustworthy digital platform,
              giving patients confidence to make informed medical decisions.
            </p>

            <ul className="text-white/90 list-none space-y-2 mb-6">
              <li>● Increased patient inquiries</li>
              <li>● Stronger trust signals & secure forms</li>
              <li>● Optimized for global audiences</li>
              <li>● Scalable for growth</li>
            </ul>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Reflection</h3>
            <p className="text-white/90">
              This project highlights BIM Africa’s ability to deliver high-performance platforms for sensitive industries.
            </p>
          </article>

          {/* ================== RIGHT SIDEBAR ================== */}
          <aside className="space-y-6">

            {/* 🔥 Consultation Box */}
            <div className="rounded-3xl bg-[#ff1f00] p-6">
              <div className="mx-auto w-16 h-16 rounded-full border border-[#ff1f00] flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h4 className="text-xl font-semibold text-center">Your Business Could Be Our Next Success Story.</h4>
              <p className="text-gray-200 text-center mt-2">
                Let's build a website that strengthens your brand, earns customer trust, and supports your business growth.
              </p>

              <a
                href="https://quotation.bim.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <button className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                  <Globe className="w-4 h-4" /> Start Your Project
                </button>
              </a>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" /> Tailored to Your Business
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" /> Built for Performance
                </div>
              </div>
            </div>

            {/* 🔥 Services List */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                <Star className="w-5 h-5 text-[#ff1f00]" /> Our Services
              </div>

              <div className="space-y-4">
                {[
                  { title: "Website Strategy & Development", desc: "High-performance websites built around your business objectives." },
                  { title: "Cybersecurity & Threat Management", desc: "Practical protection to help safeguard your business and its digital assets." },
                  { title: "Digital Support Outsourcing", desc: "Reliable digital support to help your business operate and grow." },
                ].map((srv, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4">
                    <div className="font-semibold">{srv.title}</div>
                    <p className="text-sm text-gray-300">{srv.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/service" className="mt-5 block">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-[#ff1f00] px-5 py-3 rounded-xl font-semibold">
                  View All Services
                </button>
              </Link>
            </div>

            {/* 🔥 Expert Advice */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#ff1f00] flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-semibold text-center">Let's Talk About Your Business Needs</h4>
              <p className="text-gray-300 text-center mt-1">
                Get practical advice on building, protecting, and improving the digital systems your business relies on.
              </p>

              <Link href="/contactus" className="block mt-4">
                <button className="w-full bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                  Talk to Our Team
                </button>
              </Link>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
