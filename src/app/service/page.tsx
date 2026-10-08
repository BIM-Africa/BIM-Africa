"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

/* Assets */
import logo from "../../Assests/srv.svg";
import Footer from "../Components/Footer";
import ServiceCards from "../Components/ServiceCards";
import WorkTogether from "../Components/WorkTogether";
import Navbar from "../Components/Navbar";

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const premiumCards = [
    {
      title: "Premium Value",
      description:
        "We don't compete on being cheap — we compete on delivering excellence. Every solution is crafted to provide lasting value and measurable growth.",
    },
    {
      title: "Shared Success",
      description:
        "Your wins are our wins. We approach every project as a partnership, where your growth defines our success.",
    },
    {
      title: "Dedicated Support",
      description:
        "Exceptional service, whenever you need it. Our team is available to assist, advise, and ensure your digital journey is seamless and stress-free.",
    },
    {
      title: "Innovation at Core",
      description:
        "Creativity meets strategy. We bring forward-looking ideas and innovative solutions that set your brand apart from the competition.",
    },
  ];

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

      {/* ================== Hero ================== */}
      <section className="min-h-screen relative overflow-hidden py-4 sm:py-15 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight">
              <span className="text-[#ff1f00]">Build</span>. <span className="text-[#ff1f00]">Protect</span>. <span className="text-[#ff1f00]">Support</span>.
              <br />
              One Partner for the Work That Matters.
            </h1>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-full lg:w-[460px] text-center lg:text-left">
              BIM Africa works with businesses to build what they need, protect what they have and keep things running. From websites and cybersecurity to flexible support, we focus on practical work that helps your business move forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contactus" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  Contact Us
                </button>
              </Link>

              <a
                href="https://wa.me/message/VLID27EWBIPND1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <ServiceCards />
      </section>

      {/* ================== Premium Section ================== */}
      <section className="py-10 sm:py-4 lg:py-[2px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            We Like
            <br />
            <span className="text-[#ff1f00]">Simple</span>. <span className="text-[#ff1f00]">Clear</span>. 
            <br />
            <span className="text-[#ff1f00]">Practical</span>. <span className="text-[#ff1f00]">Responsive</span>. 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[460px] mx-auto mt-6 sm:mt-8">
            <Link href="/contactus" className="w-full">
              <button className="w-full bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base">
                Contact Us
              </button>
            </Link>

            <a
              href="https://wa.me/message/VLID27EWBIPND1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base">
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>

        {/* mobile slides */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 block sm:hidden">
          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-8 min-h-[350px] flex flex-col justify-center">
            <h3 className="text-[#ff1f00] text-2xl text-center font-bold mb-8">
              {premiumCards[activeSlide].title}
            </h3>
            <p className="text-white text-sm text-center leading-relaxed">
              {premiumCards[activeSlide].description}
            </p>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {premiumCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-4 h-4 rounded-full transition-all ${
                  activeSlide === i ? "bg-[#ff1f00]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* desktop grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 hidden sm:grid">
          {premiumCards.map((card, i) => (
            <div
              key={i}
              className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8"
            >
              <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">
                {card.title}
              </h3>
              <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== Expertise Section ================== */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 border-t-[12px] border-t-[#ff1f00] rounded-t-[2rem] p-6 sm:p-8 lg:p-12 backdrop-blur-sm relative z-10"
          style={{
            borderLeft: "12px solid #ff1f00",
            borderRight: "12px solid #ff1f00",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        >
          <div className="relative z-10">
            
            {/* mobile layout */}
            <div className="block lg:hidden">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-white mb-6 sm:mb-8 text-center">
                Expertise That Works for Your Business
              </h2>

              <div className="flex gap-6 sm:gap-8 justify-center mb-8 sm:mb-12">
                <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
                  <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">
                    22+
                  </div>
                  <p className="text-white text-xs sm:text-sm mt-2">
                    <br /> Years of Combined Experience. 
                  </p>
                </div>

                <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
                  <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">
                    100%
                  </div>
                  <p className="text-white text-xs sm:text-sm mt-2">
                   <br /> Client Focused
                  </p>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-12">
                {/* FIXED BLOCK 1 */}
                <div className="text-center">
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl">
                    Modern Technology. Built for Business.
                  </h3>
                  <p className="text-white text-xs sm:text-sm mt-2">
                  We use modern technologies such as Next.js, React, Tailwind CSS, Node.js, MongoDB and Cloudflare to build fast, reliable and maintainable websites. Our technology choices are based on your business needs, ensuring the right balance of performance, flexibility and long-term reliability.                  
                  </p>
                </div>

                {/* FIXED BLOCK 2 */}
                <div className="text-center">
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl">
                    Security Built Into the Work
                  </h3>
                  <p className="text-white text-xs sm:text-sm mt-2">
                  Security is considered throughout the development and deployment process, using SSL, Cloudflare protection, secure configurations and access controls. We also provide ongoing maintenance, security monitoring and threat response to help keep your website protected as your business grows.
                  </p>
                </div>
              </div>
            </div>

            {/* desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white mb-6 sm:mb-8 text-center lg:text-left">
                  Expertise That Works for Your Business
                </h2>

                <div className="flex gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start">
                  <div className="text-center lg:text-left">
                    <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">
                      22+
                    </div>
                    <p className="text-white text-xs sm:text-sm">
                      <br /> Years of Combined Experience.
                    </p>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">
                      100%
                    </div>
                    <p className="text-white text-xs sm:text-sm">
                      <br /> Client Focused
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
                    Modern Technology. Built for Business.
                  </h3>
                  <p className="text-white text-sm sm:text-base text-center lg:text-left">
                  We use modern technologies such as Next.js, React, Tailwind CSS, Node.js, MongoDB and Cloudflare to build fast, reliable and maintainable websites. Our technology choices are based on your business needs, ensuring the right balance of performance, flexibility and long-term reliability.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
                    Security Built Into the Work
                  </h3>
                  <p className="text-white text-sm sm:text-base text-center lg:text-left">
Security is considered throughout the development and deployment process, using SSL, Cloudflare protection, secure configurations and access controls. We also provide ongoing maintenance, security monitoring and threat response to help keep your website protected as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Final CTA ================== */}
      <WorkTogether />
      <Footer />
    </div>
  );
}
