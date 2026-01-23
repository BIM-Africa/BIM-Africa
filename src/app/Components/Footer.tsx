"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin as Linked } from "lucide-react";
import newlogo from "../../Assests/newlogo.png"; // ✅ adjust path if needed

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ---------- Mobile Footer ---------- */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-8 mb-8 text-center">
            <div>
              <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-4">QUICK LINKS</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-white text-sm">Home</Link>
                <Link href="/About" className="block text-white text-sm">About Us</Link>
                <Link href="/service" className="block text-white text-sm">Services</Link>
                <Link href="/blog" className="block text-white text-sm">Blog</Link>
              </div>
            </div>

            <div>
              <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-4">Support</h3>
              <div className="space-y-2">
                <Link href="/contactus" className="block text-white text-sm">Contact Us</Link>
                <a href="/PrivacyPolicy" className="block text-white text-sm">Privacy Policy</a>
                <a href="/TermsofService" className="block text-white text-sm">Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Referral + Socials */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1 pr-4">
                <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-3">Referral Program</h3>
                <p className="text-white text-xs leading-relaxed">
                  Know someone who needs elite digital solutions? Refer them — and earn through our tiered incentive program. Simple to join. Profitable to share.
                </p>
              </div>

              <div className="flex flex-col items-end space-y-4">
                <a
                  href="https://wa.me/352661784276?text=Hi%2C%20I%20want%20to%20join%20your%20referral%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join referral program on WhatsApp (Luxembourg)"
                >
                  <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                    JOIN NOW
                  </button>
                </a>

                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/bimafrica?igsh=dnpmYXQzNTV2eHE4" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                      <Instagram size={20} className="text-white" />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/share/17Kr1c4mkp/" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                      <Facebook size={20} className="text-white" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/bimafrica/" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
                      <Linked size={20} className="text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom (Mobile) */}
          <div className="text-center mb-8">
            <Image src={newlogo} className="w-48 mx-auto mb-4 h-auto" alt="BIM Logo" width={192} height={64} />
            <p className="text-white text-sm mb-1">Copyright © 2025 BIM. All Rights Reserved.</p>
            <p className="text-white text-sm">Mauritius & Luxembourg</p>
          </div>

          <div className="text-center text-white text-xs border-t border-gray-800 pt-6">
            <a href="/PrivacyPolicy" className="hover:text-[#ff1f00]">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/TermsofService" className="hover:text-[#ff1f00]">Terms</a>
          </div>
        </div>

        {/* ---------- Desktop Footer ---------- */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + Info */}
          <div className="text-left">
            <div className="text-[#ff1f00] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <Image src={newlogo} className="w-64 sm:w-80 lg:w-[500px] h-auto" alt="BIM Logo" width={500} height={120} />
            </div>
            <p className="text-white text-sm mt-4">Copyright © 2025 BIM. All Rights Reserved.</p>
            <p className="text-white text-sm">Mauritius & Luxembourg</p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">QUICK LINKS</h3>
            <div className="space-y-2 sm:space-y-3 mt-4">
              <Link href="/" className="block text-white text-sm sm:text-base">Home</Link>
              <Link href="/About" className="block text-white text-sm sm:text-base">About Us</Link>
              <Link href="/service" className="block text-white text-sm sm:text-base">Services</Link>
              <Link href="/blog" className="block text-white text-sm sm:text-base">Blog</Link>
            </div>
          </div>

          {/* Support */}
          <div className="text-left">
            <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">SUPPORT</h3>
            <div className="space-y-2 sm:space-y-3 mt-4">
              <Link href="/contactus" className="block text-white text-sm sm:text-base">Contact Us</Link>
              <a href="/PrivacyPolicy" className="block text-white text-sm sm:text-base">Privacy Policy</a>
              <a href="/TermsofService" className="block text-white text-sm sm:text-base">Terms of Service</a>
            </div>
          </div>

          {/* Referral Program */}
          <div className="text-left">
            <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">Referral Program</h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Know someone who needs elite digital solutions? Refer them — and earn through our tiered incentive program. Simple to join. Profitable to share.
            </p>
            <div className="flex items-start gap-3 sm:gap-4 mt-6">
              <a href="https://wa.me/352661784276?text=Hi%2C%20I%20want%20to%20join%20your%20referral%20program" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-medium whitespace-nowrap text-xs sm:text-sm lg:text-base">
                  JOIN NOW
                </button>
              </a>

              <div className="flex space-x-2 mt-2">
                <a href="https://www.instagram.com/bimafrica?igsh=dnpmYXQzNTV2eHE4" target="_blank" rel="noopener noreferrer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                    <Instagram size={16} className="text-white sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </div>
                </a>
                <a href="https://www.facebook.com/share/17Kr1c4mkp/" target="_blank" rel="noopener noreferrer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                    <Facebook size={16} className="text-white sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/bimafrica/" target="_blank" rel="noopener noreferrer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                    <Linked size={16} className="text-white sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Desktop Bottom ---------- */}
        <div className="hidden sm:block border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white text-xs sm:text-sm">
          <a href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</a> | <a href="/TermsofService" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
