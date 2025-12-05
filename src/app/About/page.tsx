"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Shield,
  Globe,
  Target,
  Rocket,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../../app/Components/Footer";
import Map from "../../app/Components/Map";
import WorkTogether from "../Components/WorkTogether";

/* Assets */
import logo from "../../Assests/srv.svg";
import webStrategy from "../../Assests/WebsiteStrategy.png";
import hasan from "../../Assests/hassan2.png";
import rahul from "../../Assests/rahul2.png";
import ronit from "../../Assests/ronit.png"
import man from "../../Assests/about.jpeg"

/* ✅ Visionaries Data */
const visionaries = [
  {
    src: rahul,
    name: "Rahul Mohabir",
    roleTitle: "Chief Executive Officer",
    role: "Leading BIM Africa’s innovation, growth, and excellence through strategic vision and leadership.",
  },
  {
    src: hasan,
    name: "Hassan Omar",
    roleTitle: "Lead Developer",
    role: "MERN Stack Engineer driving technical excellence and delivering cutting-edge digital solutions.",
  },
  {
    src: ronit,
    name: "Ronit Roy",
    roleTitle: "Lead Designer",
    role: "Crafting seamless user experiences and elegant design systems that define digital creativity.",
  },
];

/* ✅ Reusable Card Components */
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

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
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section className="relative overflow-hidden py-8">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left copy */}
          <div className="text-center lg:text-left mx-auto">
            <div className="text-[#ff1f00] text-xs tracking-[0.15em] font-medium uppercase mb-4">
              Our Philosophy
            </div>

           <h1 className="text-white sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1]">
  <span className="whitespace-nowrap font-bold sm:font-normal">
    Excellence <span className="font-normal">isn&apos;t an</span>
  </span>{" "}
  option <span className="text-[#ff1f00]">it&apos;s a standard</span>
</h1>


            <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-[560px] mx-auto lg:mx-0 hidden md:block">
              Real brands. Lasting impact. Proven stories.
            </p>
          </div>

         <div className="relative mx-auto mt-2 lg:mx-0">
  <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black/40 shadow-xl">
    
    {/* ✅ Image Section */}
    <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] min-h-[250px]">
  <Image
    src={man}
    alt="BMS Operator at work"
    fill
    className="object-cover"
    priority
    loading="eager"
    fetchPriority="high"
  />
</div>

  </div>
</div>
            
        </div>
      </section>

      {/* ✅ MEET THE VISIONARIES SECTION */}
      <section className="pt-12 pb-8">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 text-center">
          <h2 className="text-white text-5xl sm:text-6xl md:text-[72px] leading-tight tracking-tight">
            Meet the <span className="text-[#ff1f00]">Visionaries</span>
          </h2>

          <p className="text-white/80 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            The creative architects and technical innovators behind our premium
            digital solutions, each bringing unique expertise and artistic
            vision to transform your ideas into reality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 items-stretch">
            {visionaries.map((person, idx) => (
              <div
                key={idx}
                className="vision-card rounded-2xl overflow-hidden border border-[#ff1f00]/20 bg-black/30 
                hover:scale-[1.04] hover:shadow-[0_0_20px_#ff1f00aa] hover:border-[#ff1f00]/50 
                transition-all duration-500 ease-out group h-full flex flex-col"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <Image
                    src={person.src}
                    alt={person.name}
                    className="object-cover object-center w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                    placeholder="blur"
                  />

                 
                </div>

                {/* Content Section */}
                <div className="p-6 text-left flex flex-col flex-1">
                  {/* ✅ Dynamic Role Title */}
                  <div className="inline-block bg-black/70 px-4 py-2 rounded-md border border-[#ff1f00]/30 group-hover:border-[#ff1f00]/50 transition-all duration-300">
                    <span className="text-white font-semibold tracking-wide text-sm uppercase">
                      {person.roleTitle}
                    </span>
                  </div>

                  <h4 className="text-white text-2xl mt-5 font-bold group-hover:text-[#ff1f00] transition-colors duration-300">
                    {person.name}
                  </h4>

                  <p className="text-white/70 mt-4 text-[15px] leading-relaxed group-hover:text-white/90 transition-all duration-300 flex-grow">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Map />
      </section>

      {/* ✅ OUR CORE VALUES */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 text-center">
          <h2 className="text-white text-5xl sm:text-6xl md:text-[72px] leading-tight">
            Our <span className="text-[#ff1f00]">Core Values</span>
          </h2>

          <p className="text-white mt-6 max-w-3xl mx-auto">
            The fundamental principles that guide every decision, every project,
            and every client relationship. These values define who we are and
            how we deliver exceptional results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Excellence */}
            <div className="rounded-2xl border border-[#ff1f00] p-8 bg-black/40 text-left">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#ff1f00] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6 text-[#ff1f00]" />
              </div>
              <h4 className="text-white text-xl mt-6 text-center">Excellence</h4>
              <p className="text-white text-center mt-4 text-sm">
                Every project reflects world-class quality, precision, and the
                best technologies available.
              </p>
            </div>

            {/* Integrity */}
            <div className="rounded-2xl border border-[#ff1f00] p-8 bg-black/40 text-left">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#ff1f00] flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-[#ff1f00]" />
              </div>
              <h4 className="text-white text-xl mt-6 text-center">Integrity</h4>
              <p className="text-white text-center mt-4 text-sm">
                We deliver what we promise, with honesty, transparency, and
                accountability.
              </p>
            </div>

            {/* Client-Centricity */}
            <div className="rounded-2xl border border-[#ff1f00] p-8 bg-black/40 text-left">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#ff1f00] flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-[#ff1f00]" />
              </div>
              <h4 className="text-white text-xl mt-6 text-center">
                Client-Centricity
              </h4>
              <p className="text-white text-center mt-4 text-sm">
                Every decision we make begins with our client&apos;s growth and
                long-term success in mind.
              </p>
            </div>

            {/* Security & Trust */}
            <div className="rounded-2xl border border-[#ff1f00] p-8 bg-black/40 text-left">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#ff1f00] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6 text-[#ff1f00]" />
              </div>
              <h4 className="text-white text-xl mt-6 text-center">
                Security & Trust
              </h4>
              <p className="text-white text-center mt-4 text-sm">
                We safeguard our clients&apos; digital assets using cutting-edge
                security and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-12 mb-20 sm:mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl sm:text-6xl md:text-[72px] leading-tight">
              Our <span className="text-[#ff1f00]">Purpose</span>
            </h2>
            <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
              Driven by vision, powered by innovation, executed with precision
              and unwavering commitment to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-80 bg-red-700 rounded-full hidden lg:block shadow-xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 lg:gap-40 items-center">
              {/* Mission */}
              <div className="relative flex justify-center">
  <Card className="bg-black backdrop-blur-xl border border-[#ff1f00] shadow-2xl rounded-3xl sm:rounded-[4rem] overflow-hidden relative group w-full max-w-[450px]">
    <CardContent className="p-6 sm:p-10 lg:p-8 relative z-10">
      <div className="text-center mb-8 sm:mb-12">
        <div className="w-20 h-20 sm:w-20 sm:h-20 bg-gradient-to-br from-red-700 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-10 border-4 border-[#ff1f00] group-hover:scale-110 group-hover:rotate-12 shadow-2xl transition-transform">
          <Target className="w-10 h-10 sm:w-10 sm:h-10 text-red-300" />
        </div>
        <h3 className="text-3xl sm:text-4xl text-white mb-6 sm:mb-8 group-hover:text-[#ff1f00] transition-colors">
          Our Mission
        </h3>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <div className="h-1 sm:h-2 bg-red-700 rounded-full shadow-lg"></div>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          To empower businesses with premium website design,
          cybersecurity, and digital support services — delivering
          trust, performance, and excellence in every project.
        </p>
      </div>
    </CardContent>
  </Card>
</div>

              {/* Vision */}
              <div className="relative lg:mt-32 flex justify-center">
  <Card className="bg-black backdrop-blur-xl border border-[#ff1f00] shadow-2xl rounded-3xl sm:rounded-[4rem] overflow-hidden relative group w-full max-w-[450px]">
    <CardContent className="p-6 sm:p-10 lg:p-6 relative z-10">
      <div className="text-center mb-8 sm:mb-12">
        <div className="w-20 h-20 sm:w-20 sm:h-20 bg-gradient-to-br from-red-700 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-10 border-4 border-[#ff1f00] group-hover:scale-110 group-hover:rotate-12 shadow-2xl transition-transform">
          <Rocket className="w-10 h-10 sm:w-10 sm:h-10 text-red-300" />
        </div>
        <h3 className="text-3xl sm:text-4xl text-white mb-6 sm:mb-8 group-hover:text-[#ff1f00] transition-colors">
          Our Vision
        </h3>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <div className="h-1 sm:h-2 bg-red-700 rounded-full shadow-lg"></div>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          To build a world-class digital institution from Mauritius — one that unites Africa and Europe through innovation, technology, and trust, shaping the future of how businesses go digital.
        </p>
      </div>
    </CardContent>
  </Card>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* ✅ Work Together + Footer */}
      <WorkTogether />
      <Footer />
    </div>
  );
}
