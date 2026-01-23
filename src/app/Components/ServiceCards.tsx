import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import webStrategy from "../../Assests/WebsiteStrategy.png"; // ✅ replace with your actual image path
import cyb from "../../Assests/cyb.png"; // ✅ replace with your actual image path
import digitalMarketing from "../../Assests/DigitalSupport.png"; // ✅ replace with your actual image path

export default function ServiceCards() {
  return (
    <div>
      {/* service cards */}
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14 mt-8 sm:mt-16 lg:mt-20 relative z-10">
        {/* Website Strategy & Development */}
        <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-4 hover:bg-black/60 transition-all">
          <div className="flex items-center text-[#ff1f00] space-x-2">
            <Image
              src={webStrategy}
              alt="Website Strategy"
              width={100}
              height={100}
              className="w-16 sm:w-20 lg:w-[100px] h-auto"
            />
            <Link
              href="/WebsiteStrategy"
              className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] inline-flex items-center gap-1 group"
            >
              Know more
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-[26px] mt-4">
            Website Strategy & Development
          </h3>
          <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
            We craft bespoke websites that combine design excellence with
            technical precision. Every platform is built for speed, scalability,
            and measurable impact. From design to upgrades, your digital
            presence stays modern and growth-driven.
          </p>
        </div>

        {/* Cybersecurity & Threat Management */}
        <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-4 hover:bg-black/60 transition-all">
          <div className="flex items-center space-x-2 text-[#ff1f00]">
            <Image
              src={cyb}
              alt="Cybersecurity"
              width={100}
              height={100}
              className="w-16 sm:w-20 lg:w-[100px] h-auto"
            />
            <Link
              href="/CyberSecurity"
              className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] inline-flex items-center gap-1 group"
            >
              {"Coming Soon"}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-[26px] mt-4">
            Cybersecurity & Threat Management
          </h3>
          <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
            Your business deserves uncompromising protection. We secure websites
            with proactive audits, advanced threat detection, and rapid malware
            removal. Around-the-clock monitoring ensures compliance, trust, and
            peace of mind.
          </p>
        </div>

        {/* Digital Support Outsourcing */}
        <div className="bg-black/40 border border-red-500 rounded-3xl p-4 hover:bg-black/60 transition-all md:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 text-[#ff1f00]">
            <Image
              src={digitalMarketing}
              alt="Digital Support"
              width={100}
              height={100}
              className="w-16 sm:w-20 lg:w-[100px] h-auto"
            />
            <Link
              href="/DigitalSupport"
              className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] inline-flex items-center gap-1 group"
            >
              {"Coming Soon"}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-[26px] mt-4">
            Digital Support Outsourcing
          </h3>
          <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
            Scale your business with our dedicated digital experts. From web
            designers and developers to managed chat and technical support, we
            provide flexible solutions tailored to your needs. Premium talent,
            without the overhead.
          </p>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 relative z-10 px-4">
        <p className="text-white text-sm sm:text-base">
          Your vision, our expertise — let&apos;s make it happen.{" "}
          <a
            href="https://wa.me/352661784276"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff1f00] hover:text-red-400"
          >
            Whatsapp Us
          </a>
        </p>
      </div>
    </div>
  );
}
