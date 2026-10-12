"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Facebook,
  Linkedin as Linked,
  X,
  ArrowRight,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  MessageSquare,
} from "lucide-react";

import logo from "../../Assests/srv.svg";
import logo2 from "../../Assests/newlogo.png";
import header from "../../Assests/HEADER.png";
import mobile from "../../Assests/new.jpeg";
import selected from "../../Assests/selected.png";
import nonselected from "../../Assests/nonselected.png";
import noumarmite from "../../Assests/noumarmite.png";   // <-- ADDED

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
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
      `}</style>

      {/* ================== MAIN CONTENT ================== */}
      <main className="py-10">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================== LEFT: CASE STUDY ARTICLE ================== */}
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12 lg:col-span-2">

  {/* === Image + Title Row === */}
  <div className="flex items-center gap-4 mb-6">
    <Image
      src={noumarmite}
      alt="Mauritius Health Travel"
  className="w-12 h-12 rounded-xl object-contain"
    />

    <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide">
      A case study of:{" "}
      <span className="text-[#ff1f00] font-semibold">NouMarmite</span>
    </h2>
  </div>
            {/* === Chips Section === */}
           <div className="flex flex-wrap gap-3 mb-6">

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Industry: Food & Beverages
  </span>

  <span className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full">
    Service: Marketing & Branding
  </span>
  
  <a
  href="https://noumarmite.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center whitespace-nowrap px-4 py-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-[#ff1f00] text-xs rounded-full"
>
  Visit Website
</a>


</div>


            {/* === MAIN TITLE (now below the chips) === */}
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              The First Ever Creole Website in Mauritius
            </h1>

            {/* === ORIGINAL CONTENT BELOW (unchanged) === */}

            <h2 className="text-[#ff1f00] font-semibold mb-2">Client Overview</h2>
            <p className="text-white/90 mb-6">
              NouMarmite is a small, family-run restaurant in Mauritius, known for its authentic Creole dishes prepared with love and simplicity. The brand embodies the Mauritian spirit — humble, flavorful, and deeply rooted in tradition.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Challenge</h2>
            <p className="text-white/90 mb-4">
              Back in 2019, when websites were still uncommon among small businesses in Mauritius, Nou Marmite wanted to do something truly different.
            </p>

            <p className="text-white/90 mb-6">
              The vision was clear: a website entirely in Mauritian Creole — the first ever in the country.
            </p>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Solution</h2>
            <p className="text-white/90 mb-4">
              BIM Africa took on the challenge and crafted the first ever Mauritian Creole website, proudly setting a milestone for local digital innovation.
            </p>

            <p className="text-white/90 mb-4">Our approach focused on three main pillars:</p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li><strong>Language & Culture:</strong> Written natively in Creole.</li>
              <li><strong>Design & Emotion:</strong> Visual identity rooted in Mauritian culture.</li>
              <li><strong>Accessibility:</strong> Optimized for mobile-first audiences.</li>
            </ul>

            <h2 className="text-[#ff1f00] font-semibold mb-2">The Outcome</h2>
            <p className="text-white/90 mb-6">
              NouMarmite.com became a cultural milestone — the first Mauritian Creole business website.
            </p>

            <h3 className="text-[#ff1f00] font-semibold mb-3">Key Results</h3>
            <ul className="text-white/90 list-none space-y-2 mb-6">
              <li>● First ever Mauritian Creole website (2019)</li>
              <li>● National precedent in digital language usage</li>
              <li>● Strong cultural identity</li>
              <li>● Increased trust and visibility</li>
            </ul>

            <h3 className="text-[#ff1f00] font-semibold mb-2">Reflection</h3>
            <p className="text-white/90">
              For BIM Africa, Nou Marmite represents more than a project — it’s a symbol of creative courage.
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
