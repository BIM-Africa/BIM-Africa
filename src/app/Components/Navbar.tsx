"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

/* Assets */
import logo from "../../Assests/srv.svg";
import logo2 from "../../Assests/newlogo.png";
import header from "../../Assests/HEADER.png";
import mobile from "../../Assests/new.jpeg";
import selected from "../../Assests/selected.png";
import nonselected from "../../Assests/nonselected.png";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FR">("EN");
  const pathname = usePathname();

  // ✅ Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = showMobileNav ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileNav]);

  // ✅ WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "352661784276"; // Luxembourg number (without +)
    const message = encodeURIComponent("Hi I want to join your referral program ok?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // ✅ Navigation items
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" },
  ];

  // ✅ Animation configs
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.55 },
    exit: { opacity: 0 },
  };

  const panelVariants: Variants = {
    hidden: { opacity: 0, y: -30, rotateX: 14, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -28,
      rotateX: 12,
      scale: 0.995,
      transition: { duration: 0.22, ease: "easeInOut" },
    },
  };

  const listContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
  };

  const listItem: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${logo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Mobile Navigation */}
      <AnimatePresence>
        {showMobileNav && (
          <>
            <motion.div
              className="fixed inset-0 z-[95] md:hidden bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <motion.aside
              className="fixed inset-0 z-[100] md:hidden"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${mobile.src})`,
                  minHeight: "100vh",
                }}
              >
                <div className="flex flex-col min-h-full pt-1 pb-6 relative">
                  {/* Top bar */}
                  <div className="flex items-center justify-between pl-4 pr-4">
                    <Image
                      src={logo2}
                      alt="Logo"
                      className="object-contain"
                      width={80}
                      height={40}
                    />
                    <motion.button
                      onClick={() => setShowMobileNav(false)}
                      className="text-white hover:text-[#ff1f00] p-2"
                      aria-label="Close menu"
                      whileTap={{ scale: 0.92, rotate: 6 }}
                    >
                      <X size={32} />
                    </motion.button>
                  </div>

                  {/* Menu links */}
                  <motion.nav
                    className="flex-1 flex flex-col justify-start px-8 gap-y-3 mt-6 overflow-auto"
                    variants={listContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {navigationItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center w-full max-w-full py-3"
                        variants={listItem}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setShowMobileNav(false)}
                          className={`flex-1 text-left text-lg font-medium ${
                            pathname === item.href
                              ? "text-[#ff1f00]"
                              : "text-white hover:text-[#ff1f00]"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <div className="w-6 h-6 ml-4 relative">
                          <Image
                            src={
                              pathname === item.href ? selected : nonselected
                            }
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.nav>

                  {/* Mobile CTA Button */}
                  <div
                    className="fixed left-0 right-0 bottom-8 px-6"
                    style={{
                      paddingBottom:
                        "calc(env(safe-area-inset-bottom, 1rem) + 0.75rem)",
                    }}
                  >
                    <a
                      href="https://quotation.bim.africa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#ff1f00] hover:bg-red-600 text-white py-4 rounded-full text-lg font-medium"
                      >
                        Instant Quotation
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ✅ Desktop Header */}
      <header className="bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo2}
              alt="BIM"
              width={110}
              height={44}
              className="w-20 sm:w-24 md:w-28 lg:w-[110px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-16 relative">
            {navigationItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`wave-link relative font-medium text-base ${
                  pathname === item.href ? "text-[#ff1f00]" : "text-white"
                }`}
              >
                {item.name}
                <svg
                  className="link__graphic link__graphic--slide"
                  width="300%"
                  height="100%"
                  viewBox="0 0 1200 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46
                       c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
                    fill="none"
                    stroke={pathname === item.href ? "#FF1F00" : "#FFF"}
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          {/* CTA + Language + Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="https://quotation.bim.africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="text-[#ff1f00] border border-red-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap hover:bg-red-500 hover:text-white">
                Instant Quotation
              </button>
            </a>

            {/* ✅ Language toggle */}
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
              className="bg-white rounded-full p-1 sm:p-2 flex items-center space-x-1"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff1f00] flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <span className="text-black text-xs sm:text-sm font-medium px-1 sm:px-2">
                {language === "EN" ? "FR" : "ENG"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileNav(true)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              <Image src={header} alt="menu" className="w-10 h-auto" />
            </button>
          </div>
        </div>

        {/* Wave underline style */}
        <style>{`
          a.wave-link{position:relative;padding:6px 0;background:transparent;border:0;white-space:nowrap;overflow:hidden}
          .link__graphic{position:absolute;top:0;left:0;pointer-events:none;fill:none;stroke-width:1px}
          .link__graphic--slide{top:-3px;stroke-width:2px;transition:transform .7s cubic-bezier(0,.25,.5,1)}
          a.wave-link:hover .link__graphic--slide{transform:translate3d(-66.6%,0,0)}
        `}</style>
      </header>

      {/* ✅ Floating WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-10 right-4 md:right-6 z-[9999] bg-[#ff1f00] hover:bg-[#e1291c] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl pointer-events-auto"
        title="Chat on WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
        </svg>
      </button>
    </div>
  );
}
