"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram, Facebook, Linkedin as Linked, X, ArrowRight, Play,

  ChevronRight,
  ShieldCheck,
  Shield,
  Globe,
  Clock,
 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import quote from "../../Assests/quoteimg.jpeg";

/* Assets */
import logo from "../../Assests/srv.svg";
import webStrategy from "../../Assests/WebsiteStrategy.png";
import man from "../../Assests/man.png"
import noumarmite from "../../Assests/noumarmite.png";
import mauritiushealthtravel from "../../Assests/mauritiushealthtravel.png";
import mauritiustraveltour from "../../Assests/mauritiustraveltour.png"
import Footer from "./Footer";
import ServiceCards from "./ServiceCards";
import Map from "./Map"
import WorkTogether from "./WorkTogether";
import Navbar from "./Navbar";

/* Optional: thumbnail for the hero “video” panel; fallback to webStrategy if you don't have one */
const heroPoster = webStrategy;

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
 


  
  /* animation helpers */
  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 0.55 }, exit: { opacity: 0 } };
  const panelVariants = {
    hidden: { opacity: 0, y: -30, rotateX: 14, transformOrigin: "top center", scale: 0.995 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] } },
    exit: { opacity: 0, y: -28, rotateX: 12, scale: 0.995, transition: { duration: 0.22, ease: "easeInOut" } },
  };
  const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } } };
  const listItem = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } } };

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
      <Navbar/>
      
      <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
        `}</style>

      
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
  <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    {/* Left copy */}
    <div className="text-center lg:text-left mx-auto">
      <div className="text-[#ff1f00] text-xs tracking-[0.15em] font-medium uppercase mb-4">
        Customer Stories
      </div>

     <h1 className="text-white sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1]">
  <span className="whitespace-nowrap font-bold sm:font-normal">
    Trusted by <span className="text-[#ff1f00] font-normal">Ambitious</span>
  </span>{" "}
  Businesses — Inspired by <span className="text-[#ff1f00]">Results</span>
</h1>


      <p className="text-gray-300 mt-6 text-base sm:text-lg  max-w-[560px] mx-auto lg:mx-0">
        Real brands. Lasting impact. Proven stories.
      </p>
    </div>
    <div className="relative">
  <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black/40 shadow-xl">
    <div className="relative aspect-[16/12] sm:aspect-[16/10]">
      <Image
        src={man} // 👈 Your static image
        alt="BMS Operator at work"
        fill
        className="object-cover"
        priority // ✅ Ensures it's fetched early (improves LCP)
        loading="eager" // ✅ Prevents lazy loading for LCP image
        fetchPriority="high" // ✅ Gives browser hint for faster fetching
      />
    </div>
  </div>
</div>

          {/* Right “video” card with play button */}
          {/* <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black/40 shadow-xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image src={heroPoster} alt="Case study preview" fill className="object-cover" />
                <button
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff1f00] flex items-center justify-center hover:scale-105 transition"
                >
                  <Play className="text-white" />
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Customer Story Cards */}
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {/* Card 1 */}
          <article className="bg-black/40 border border-[#ff1f00] rounded-[24px] p-6 hover:bg-black/60 transition">
            <div className="text-[#ff1f00] text-xl sm:text-2xl lg:text[26px]  mb-4">Food & Beverages</div>
            <div className="text-white text-xl sm:text-2xl lg:text-sm  mb-4">NouMarmite</div>
            <div className="w-14 h-14 mb-4">
              <Image src={noumarmite} alt="" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-white text-xs sm:text-xl lg:text-sm leading-snug">
              Mauritius first Creole website,boosting cultural identity and brand trust.
            </h3>
            <Link href="CaseStudy1" className="inline-flex items-center gap-2 mt-6 underline underline-offset-4 decoration-white/60 text-white text-sm sm:text-base hover:text-[#ff1f00]">
              Read the Story <ArrowRight size={16} />
            </Link>
          </article>

          {/* Card 2 */}
          <article className="bg-black/40 border border-[#ff1f00] rounded-[24px] p-6 hover:bg-black/60 transition">
            <div className="text-[#ff1f00] text-xl sm:text-2xl lg:text[26px] mb-4">Travel & Hospitality</div>
            <div className="text-white text-xl sm:text-2xl lg:text-sm  mb-4">Mauritius Health Travel</div>
            <div className="w-14 h-14 mb-4">
              <Image src={mauritiushealthtravel} alt=""  className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-white text-xs sm:text-xl lg:text-sm leading-snug">
              High-Performance platform connecting patitents to world-class medical treatments
            </h3>
            <Link href="CaseStudy2" className="inline-flex items-center gap-2 text-white mt-6 underline underline-offset-4 decoration-white/60  text-sm sm:text-base hover:text-[#ff1f00]">
              Read the Story <ArrowRight size={16} />
            </Link>
          </article>

          {/* Card 3 */}
          <article className="bg-black/40 border border-[#ff1f00] rounded-[24px] p-6 hover:bg-black/60 transition">
            <div className="text-[#ff1f00] text-xl sm:text-2xl lg:text[26px] mb-4">Travel & Tourism</div>
            <div className="text-white text-xl sm:text-2xl lg:text-sm  mb-4">Mauritius Travel & Tour</div>
            <div className="w-14 h-14 mb-4">
              <Image src={mauritiustraveltour} alt="" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-white text-xs sm:text-xl lg:text-sm leading-snug">
              Boosting global reach with a fast, trusted and scalable website, tripling conversation
            </h3>
            <Link href="CaseStudy3" className="inline-flex items-center gap-2  mt-6 underline underline-offset-4 decoration-white/60 text-white text-sm sm:text-base hover:text-[#ff1f00]">
              Read the Story <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      {/* ================== SERVICES BAND ================== */}
      <section className="pt-4 sm:pt-8 lg:pt-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex items-end justify-between md:px-10 px-6 gap-4 mb-6 sm:mb-8">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Services We Provide to
              <br />
              <span className="text-[#ff1f00]">Elevate Your Business</span>
            </h2>
            <Link href="/service" className="hidden sm:inline-block">
              <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                View All Services
              </button>
            </Link>
          </div>

         <ServiceCards/>

          {/* Mobile “View All Service” */}
          <div className="sm:hidden flex justify-center mt-6">
            <Link href="/service">
              <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>


     <Map/>
      {/* =================== INSTANT QUOTE TOOL (XS-proof) =================== */}
    <section className="relative px-4 sm:px-8 py-10 sm:py-16 max-w-7xl mx-auto">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-red-700 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
    <Clock className="w-4 h-4 text-[#ff1f00]" />
    <span className="text-xs sm:text-sm text-white">Premium Digital Solutions</span>
  </div>

  <style>{`
    @keyframes fastBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }
    @keyframes slowBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }
    .fast-blink{animation:fastBlink 1.5s infinite;}
    .slow-blink{animation:slowBlink 5s infinite;}
  `}</style>

  {/* ✅ Grid for responsive layout */}
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* ✍️ Text section — FIRST on mobile, LEFT on desktop */}
    <div className="order-1">
      <h2 className="qs-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
        <span className="text-[#ff1f00]">Instant</span> Website <br /> Quotation Tool
      </h2>

      <p className="qs-sub text-white/90 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
        Revolutionary pricing transparency. Know your website cost in under 2 minutes — accurate, automatic, and completely secure.
      </p>

      {/* Features */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
        {[
          { Icon: ShieldCheck, label: "SSL Encrypted" },
          { Icon: Shield, label: "GDPR Compliant" },
          { Icon: Globe, label: "Trusted Worldwide" },
        ].map(({ Icon, label }) => (
          <div key={label} className="qs-chip rounded-2xl bg-black/40 border border-white/10 px-4 py-4 sm:px-6 sm:py-5 flex items-center gap-3">
            <Icon className="w-5 h-5 text-red-500" />
            <span className="text-white/90 text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-white/90">
        {["Basic Information", "Website Specifications", "Final Quote"].map((s, i, arr) => (
          <div key={s} className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs sm:text-sm">
              {i + 1}
            </div>
            <span className="text-xs sm:text-sm">{s}</span>
            {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-white/40" />}
          </div>
        ))}
      </div>

      {/* 🖼️ Quote image (after all text + steps) */}
      <div className="relative mt-10 lg:mt-0 lg:hidden">
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[28px]
          bg-gradient-to-b from-black/40 to-black/10 border border-white/10
          p-2.5 sm:p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={quote}
              alt="Instant Website Quotation Tool"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      {/* 🚀 Button (AFTER image) */}
     <a
  href="https://quotation.bim.africa/"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-6 sm:mt-8 text-center lg:text-left"
>
  <button className="qs-btn inline-flex items-center gap-3 bg-[#ff1f00] hover:bg-red-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full transition-all hover:scale-105">
    Get Your Quote in 2 Minutes
  </button>
</a>
    </div>

    {/* 🖼️ Image for desktop view only */}
    <div className="relative hidden lg:block order-2">
      <div
        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px]
        bg-gradient-to-b from-black/40 to-black/10 border border-white/10
        p-2.5 sm:p-3 md:p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={quote}
            alt="Instant Website Quotation Tool"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Glow dots */}
      <span className="hidden md:block absolute z-20 -top-3 -right-3 w-8 h-8 rounded-full bg-red-600 shadow-[0_0_40px_rgba(255,31,0,0.55)] fast-blink pointer-events-none" />
      <span className="hidden md:block absolute z-20 -bottom-3 -left-1 w-6 h-6 rounded-full bg-red-600 shadow-[0_0_40px_rgba(255,31,0,0.55)] slow-blink pointer-events-none" />
    </div>
  </div>
</section>


      {/* ================== Final CTA + Footer ================== */}
   <WorkTogether/>
     <Footer/>
    </div>
  );
}

