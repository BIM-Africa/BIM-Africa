"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import quote from "../../Assests/quoteimg.jpeg";
import { usePathname } from "next/navigation"; 
import {
  Instagram,
  Facebook,
  Linkedin as LinkedinIcon,
  X,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  ShieldCheck,
  Shield,
  Zap,
  Globe,
  Clock,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  Target,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Assets */
import logoBg from "../../Assests/srv.svg";
import logo2 from "../../Assests/newlogo.png";
import mobileBg from "../../Assests/new.jpeg";
import selected from "../../Assests/selected.png";
import nonselected from "../../Assests/nonselected.png";
import header from "../../Assests/HEADER.png";
import Footer from "../Components/Footer";
interface Service {
  icon: React.ReactNode;
  title: string;
  copy: string;
  tags: string[];
  more: string;
}

/* -------------------------------------------------------------------------- */
/*                              Page Component                                */
/* -------------------------------------------------------------------------- */

export default function WebsiteStrategy() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openService, setOpenService] = useState<{ [key: string]: boolean }>({});

  /* WhatsApp helpers (SAME message everywhere) */
  const WA_LU = "352661784276"; // change to "23054514176" if you want MU instead
  const WA_MSG = "Hi, I want to join your referal program";
  const waLink = (phone: string) => `https://wa.me/${phone}?text=${encodeURIComponent(WA_MSG)}`;

  /* copy */
const t = {
  

  buttons: { 
    instantQuotation: "Instant Quotation", 
    getQuote: "Get Your Quote in 2 Minutes" 
  },

  hero: {
    badge: "Premium Digital Solutions",
    subtitle:
      "Crafting digital experiences that transcend expectations. We partner with visionary businesses to create websites that don't just exist—they excel, engage, and elevate your brand to new heights.",
    stats: {
      uptime: { value: "99.9%", label: "Uptime Guarantee" },
      load: { value: "2.5s", label: "Load Time" },
      security: { value: "A+", label: "Security Rating" },
      support: { value: "24/7", label: "Support" },
      powered: "Powered by Industry Leaders",
    },
  },

  services: {
    title: "Our Services",
    tagline:
      "Choose the specific service that matches your needs, or combine multiple services for a comprehensive solution.",

    designing: {
      title: "Website Designing",
      copy:
        "Crafting visually stunning and user-centered designs that captivate your audience and reflect your brand identity.",
      tags: ["UI/UX Design", "Brand Integration", "Visual Identity"],
    },

    development: {
      title: "Website Development",
      copy:
        "Building robust, scalable, and high-performance websites using cutting-edge technologies and best practices.",
      tags: ["Custom Development", "CMS Integration", "API Development"],
    },

    maintenance: {
      title: "Website Maintenance & Support",
      copy:
        "Ensuring your website remains secure, updated, and performing optimally with ongoing maintenance and support.",
      tags: ["Security Updates", "Performance Monitoring", "24/7 Support"],
    },

    upgrade: {
      title: "Website Upgrade",
      copy:
        "Modernizing and enhancing existing websites with new features, improved performance, and contemporary design.",
      tags: ["Technology Migration", "Feature Enhancement", "Performance Optimization"],
    },
  },

  process: {
    badge: "Proven Methodology",
    title: "Our Process",
    steps: [
      { n: "01", title: "Discovery", copy: "Strategic analysis of your business goals and competitive landscape.", time: "1–2 weeks" },
      { n: "02", title: "Strategy", copy: "Comprehensive digital roadmap aligned with your objectives.", time: "1 week" },
      { n: "03", title: "Design", copy: "Sophisticated user experience and visual design system.", time: "2–3 weeks" },
      { n: "04", title: "Development", copy: "Building with cutting-edge technology for maximum performance.", time: "4–6 weeks" },
      { n: "05", title: "Launch", copy: "Testing, optimization, and strategic go-live with ongoing support.", time: "1 week" },
    ],
  },

  quote: {
    badge: "Instant Quote Available",
    steps: ["Basic Information", "Website Specifications", "Final Quote"],
  },

  included: {
    title: "What's Included",
    premium: "Premium Package",
    sub: "Comprehensive premium services meticulously designed to maximize your digital success and accelerate business growth.",
    items: [
      "Strategic Business Analysis",
      "Custom Design System",
      "Responsive Development",
      "Advanced SEO Setup",
      "Performance Optimization",
      "Premium Support Package",
    ],
    guarantee: "100% Satisfaction Guarantee",
  },
};

  /* mobile panel anims */
  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 0.55 }, exit: { opacity: 0 } };
  const panelVariants = {
    hidden: { opacity: 0, y: -30, rotateX: 14, transformOrigin: "top center", scale: 0.995 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] } },
    exit: { opacity: 0, y: -28, rotateX: 12, scale: 0.995, transition: { duration: 0.22, ease: "easeInOut" } },
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${logoBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ====================== Mobile Panel ====================== */}
<AnimatePresence>
  {mobileOpen && (
    <>
      {/* Backdrop animation */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-[95] md:hidden bg-black"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.6, transition: { duration: 0.3, ease: "easeInOut" } },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      />

      {/* Panel animation */}
      <motion.aside
        key="panel"
        className="fixed inset-0 z-[100] md:hidden"
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
            rotateX: 90,
            transformOrigin: "top",
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: "easeInOut", // ✅ Type-safe easing
            },
          },
          exit: {
            opacity: 0,
            y: 50,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Background container */}
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${mobileBg.src})`,
            minHeight: "100svh",
            height: "100vh",
          }}
        >
          <div className="flex flex-col min-h-full pt-1 pb-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between pl-4 pr-4">
              <Image
                src={logo2}
                alt="Logo"
                className="object-contain"
                width={80}
                height={40}
                priority
              />
              <motion.button
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-red-500 p-2"
                aria-label="Close menu"
                whileTap={{ scale: 0.92, rotate: 6 }}
              >
                <X size={32} />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-start px-8 gap-y-3 mt-6 overflow-auto">
              {navigationItems.map((item, idx) => (
                <div key={idx} className="flex items-center w-full max-w-full py-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-left text-lg font-medium text-white hover:text-red-300"
                  >
                    {item.name}
                  </Link>
                  <div className="w-6 h-6 ml-4 relative">
                    <Image
                      src={item.href === "/WebsiteStrategy" ? selected : nonselected}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </nav>

            {/* Bottom Button */}
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
                  {t.buttons.instantQuotation}
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>


      {/* ======================== Header ========================= */}
      <header className="bg-black backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <Link href="/">
            <Image src={logo2} alt="BIM" width={110} height={44} priority className="w-20 sm:w-24 md:w-28 lg:w-[110px] h-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-16 relative">
            {navigationItems.map((link) => (
              <Link key={link.name} href={link.href} className={`wave-link relative font-medium ${link.href === "/contactus" ? "text-red-500" : "text-white"}`}>
                {link.name}
                <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                  <path
                    d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46
                       c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
                    fill="none"
                    stroke={link.href === "/contactus" ? "#FF1F00" : "#FFF"}
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="https://quotation.bim.africa/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="text-red-500 border border-red-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap hover:bg-red-500 hover:text-white">
                {t.buttons.instantQuotation}
              </button>
            </a>
            <button
              type="button"
              aria-disabled="true"
              className="bg-white rounded-full p-1 sm:p-2 flex items-center space-x-1 cursor-default select-none"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <span className="text-black text-xs sm:text-sm font-medium px-1 sm:px-2">FR</span>
            </button>

            <button onClick={() => setMobileOpen((o) => !o)} className="md:hidden text-white" aria-label="Toggle menu">
              {mobileOpen ? <X size={28} /> : <Image src={header} alt="menu" className="w-10 h-auto" priority />}
            </button>
          </div>
        </div>

        <style>{`
          a.wave-link{position:relative;padding:6px 0;background:transparent;border:0;white-space:nowrap;overflow:hidden}
          .link__graphic{position:absolute;top:0;left:0;pointer-events:none;fill:none;stroke-width:1px}
          .link__graphic--slide{top:-3px;stroke-width:2px;transition:transform .7s cubic-bezier(0,.25,.5,1)}
          a.wave-link:hover .link__graphic--slide{transform:translate3d(-66.6%,0,0)}
        `}</style>
      </header>

      {/* ========================== HERO ========================== */}
      <section className="relative px-4 sm:px-8 py-10 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <style>{`
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  .float-y {
    animation: floatY 2s ease-in-out infinite;
  }

  @keyframes glowBlink {
    0%, 100% {
      opacity: 1;
      box-shadow: 0 0 16px rgba(255, 31, 0, 0.10),
                  0 0 50px rgba(255, 31, 0, 0.35);
    }
    50% {
      opacity: 1; /* ✅ no more opacity flicker */
      box-shadow: 0 0 16px rgba(255, 31, 0, 0.10),
                  0 0 50px rgba(255, 31, 0, 0.35);
    }
  }
  .glow-blink {
    animation: glowBlink 1.2s ease-in-out infinite;
  }
`}</style>


        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* left copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2 mb-6 ">
              <Sparkles className="w-4 h-4 text-[#ff1f00] blink" strokeWidth={2} />
              <span className="text-sm text-white/90 blink"> {t.hero.badge} </span>
            </div>

            <h1 className="text-[40px] sm:text-6xl md:text-7xl  leading-[1.05] tracking-tight">
              Website Strategy & <br />
              <span className="text-[#ff1f00]">Development</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mt-6 text-gray-300 max-w-3xl">{t.hero.subtitle}</p>

          {/* CTA buttons: exact mobile stacking like Contact page */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 sm:gap-4 justify-center lg:justify-start">
              <a 
  href="https://quotation.bim.africa/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block w-full sm:w-auto"
>
  <button
    className="
      w-full sm:w-auto 
      bg-[#333333] 
      border border-transparent 
      hover:border-[#ff1f00] 
      text-white 
      px-8 sm:px-10 lg:px-12 
      py-3 sm:py-4 
      rounded-full 
      transition-all hover:scale-105 
      text-sm sm:text-base 
      whitespace-nowrap
    "
  >
    Get Instant Quote
  </button>
</a>

              <a href="https://wa.me/352661784276" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  WHATSAPP US
                </button>
              </a>
            </div>



            {/* ratings row */}
            <div className="mt-6 flex flex-wrap items-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 text-[#ff1f00]" />
                <span>5.0 Client Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-5 h-5 text-[#ff1f00]" />
                <span>Recognized for Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <ShieldCheck className="w-5 h-5 text-[#ff1f00]" />
                <span>Industry-Leading Standards</span>
              </div>
            </div>
          </div>

          {/* right stat card */}
          <div className="relative">
            <div className="relative rounded-[28px] bg-gradient-to-b from-black/98 backdrop-blur-md to-black/20 border border-white/10 p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <span className="hidden md:block absolute -right-3 -top-3 w-8 h-8 rounded-full bg-[#ff1f00] shadow-[0_0_50px_rgba(255,31,0,0.35)] pointer-events-none float-y" />
              <span className="hidden md:block absolute -left-3 -bottom-3 w-6 h-6 rounded-full bg-[#ff1f00] shadow-[0_0_50px_rgba(255,31,0,0.35)] pointer-events-none glow-blink" />

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-black/30 border border-white/10 px-6 py-8 text-center">
                  <div className="text-4xl  text-[#ff1f00]">{t.hero.stats.uptime.value}</div>
                  <div className="text-sm text-white/80 mt-2">{t.hero.stats.uptime.label}</div>
                </div>
                <div className="rounded-2xl bg-black/30 border border-white/10 px-6 py-8 text-center">
                  <div className="text-4xl  text-[#ff1f00]">{t.hero.stats.load.value}</div>
                  <div className="text-sm text-white/80 mt-2">{t.hero.stats.load.label}</div>
                </div>
                <div className="rounded-2xl bg-black/30 border border-white/10 px-6 py-8 text-center">
                  <div className="text-4xl  text-[#ff1f00]">{t.hero.stats.security.value}</div>
                  <div className="text-sm text-white/80 mt-2">{t.hero.stats.security.label}</div>
                </div>
                <div className="rounded-2xl bg-black/30 border border-white/10 px-6 py-8 text-center">
                  <div className="text-4xl  text-[#ff1f00]">{t.hero.stats.support.value}</div>
                  <div className="text-sm text-white/80 mt-2">{t.hero.stats.support.label}</div>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 my-6" />

              <div className="text-center text-sm text-white/70 mb-4">{t.hero.stats.powered}</div>

              <div className="flex justify-center gap-4">
                {[ArrowRight, Shield, Zap, Globe].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center hover:bg-white/5 transition"
                  >
                    <Icon className="w-5 h-5 text-white/80" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== OUR SERVICES ====================== */}
      <section className="px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-6xl [font-weight:400]">{t.services.title}</h2>
          <p className="text-white mt-3 max-w-3xl mx-auto">{t.services.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
  {
    icon: <LayoutDashboard className="w-6 h-6 text-[#ff1f00]" />,
    more:
      "We deliver wireframes, moodboards, high-fidelity UI, and clickable prototypes. Accessibility, consistency, and brand voice are baked in from day one.",
    ...t.services.designing,
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#ff1f00]" />,
    more:
      "Modern stacks, clean architecture, rigorous code review, and CI/CD. We ship fast without sacrificing stability or performance.",
    ...t.services.development,
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ff1f00]" />,
    more:
      "Updates, backups, uptime monitoring, incident response, and continuous hardening—so your site stays fast, healthy, and secure.",
    ...t.services.maintenance,
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#ff1f00]" />,
    more:
      "Refactors, re-platforms, and redesigns. We modernize UX, improve Core Web Vitals, and add features that move the needle.",
    ...t.services.upgrade,
  },
].map((svc: Service) => {
  const isOpen = !!openService[svc.title];
  const isWhatsAppOnly =
    svc.title === "Website Maintenance & Support" || svc.title === "Website Upgrade";

  return (
    <div
      key={svc.title}
      className="group rounded-2xl bg-black/40 border border-white/10 p-6 transition-colors hover:border-[#ff1f00]"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center">
          {svc.icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-[#ff1f00]">
          {svc.title}
        </h3>
      </div>

      <p className="mt-4 text-white/90">{svc.copy}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs row */}
      <div className="mt-6 flex items-center justify-between">
        {isWhatsAppOnly ? (
          <a href={waLink(WA_LU)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us">
            <div className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-4 py-2 rounded-full text-sm transition-all">
              Whatsapp Us
            </div>
          </a>
        ) : (
          <a href="https://quotation.bim.africa/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-4 py-2 rounded-full text-sm transition-colors">
              Instant Quote
            </button>
          </a>
        )}

        <button
          type="button"
          onClick={() =>
            setOpenService((s: Record<string, boolean>) => ({
              ...s,
              [svc.title]: !s[svc.title],
            }))
          }
          className="text-white/90 hover:text-red-400 inline-flex items-center gap-2 text-sm"
          aria-expanded={isOpen}
          aria-controls={`${svc.title.replace(/\s+/g, "-")}-details`}
        >
          {isOpen ? "Hide details" : "Learn more"}
          <ArrowRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      <div
        id={`${svc.title.replace(/\s+/g, "-")}-details`}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl bg-black/30 border border-white/10 p-4">
          {/* ✅ FIXED: Removed (svc as any) */}
          <p className="text-white/90 text-sm leading-relaxed">{svc.more}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {svc.tags.slice(0, 3).map((tag) => (
              <li
                key={`${svc.title}-${tag}-more`}
                className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
})}
        </div>
      </section>

      {/* ========================= PROCESS ======================== */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2">
            <Target className="w-4 h-4 text-[#ff1f00] " />
            <span className="font-semibold">Proven Methodology</span>
          </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mt-4">{t.process.title}</h2>

          <p className="text-white max-w-4xl mx-auto mt-4">
            Five strategic phases that transform your vision into digital excellence, backed by years of expertise and cutting-edge methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {t.process.steps.map((step) => (
            <div key={step.n} className="relative group flex flex-col items-center text-center px-4 py-2">
              <div className="relative mb-6 w-full flex justify-center">
                <span className="relative z-10 inline-flex w-20 h-16 items-center justify-center rounded-3xl border border-[#ff1f00] bg-red-900/10 text-[#ff1f00] text-2xl font-medium transition-transform duration-300 group-hover:scale-110">
                  {step.n}
                </span>
                <span className="hidden lg:block absolute top-1/2 left-0 right-0 -z-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
              </div>

              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#ff1f00]">
                {step.title}
              </h3>

              <p className="text-white mt-2 max-w-xs">{step.copy}</p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-sm text-white">
                <Clock className="w-4 h-4" />
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </section>

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


      {/* ==================== WHAT'S INCLUDED ===================== */}
      <section className="px-4 sm:px-8 pb-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#ff1f00] " strokeWidth={2} />
            <span className="text-sm text-white/90 ">{t.included.premium}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium">{t.included.title}</h2>
          <p className="text-white/80 max-w-3xl mx-auto mt-4">{t.included.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.included.items.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-black/40 to-black/10 px-6 py-6 hover:border-red-600/40 transition"
            >
              <span className="relative inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,31,0,0.95),rgba(255,31,0,0.85)_60%,rgba(255,31,0,0.70)_100%)] shadow-[0_0_22px_rgba(255,31,0,0.45),0_10px_18px_-8px_rgba(0,0,0,0.6)]">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="pointer-events-none absolute -bottom-1 -left-1 w-10 h-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,31,0,0.35),transparent_60%)] blur-md" />
              </span>
              <span className="text-white font-semibold tracking-tight">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-black/30 border border-[#ff1f00] px-6 py-3">
            <ShieldCheck className="w-5 h-5 text-[#ff1f00]" />
            <span className="text-white/90">{t.included.guarantee}</span>
          </div>
        </div>
      </section>

   <Footer/>
    </div>
  );
}
