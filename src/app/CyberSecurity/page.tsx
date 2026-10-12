import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  Bug,
  LockKeyhole,
  Activity,
  ServerCog,
  ArrowRight,
  AlertTriangle,
  Eye,
  RefreshCw,
  FileCheck,
  CheckCircle2,
  Target,
  Globe,
  ChevronRight,
} from "lucide-react";

import logoBg from "../../Assests/srv.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Cybersecurity & Website Security in Mauritius | BIM Africa",
  description:
    "Protect your business website with cybersecurity services in Mauritius. BIM Africa provides website security audits, vulnerability checks, malware removal, website hardening and ongoing security support.",
  keywords: [
    "cybersecurity Mauritius",
    "website security Mauritius",
    "website security audit",
    "malware removal Mauritius",
    "website vulnerability assessment",
    "cybersecurity services for businesses",
    "website threat management",
    "website protection",
  ],
  alternates: {
    canonical: "https://bim.africa/CyberSecurity",
  },
  openGraph: {
    title: "Cybersecurity & Threat Management | BIM Africa",
    description:
      "Identify vulnerabilities, address website security issues and strengthen your website protection with practical cybersecurity services from BIM Africa.",
    url: "https://bim.africa/CyberSecurity",
    siteName: "BIM Africa",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Website Security Audits",
    copy:
      "Understand how well your website is protected. We review relevant security configurations, software components and potential weaknesses to identify areas that may require attention.",
    tags: ["Security Review", "Risk Assessment", "Practical Recommendations"],
  },
  {
    icon: Bug,
    title: "Malware Detection & Removal",
    copy:
      "When a website shows signs of malicious activity, we help investigate the issue, identify suspicious files or behaviour and work towards removing threats and restoring normal operation.",
    tags: ["Malware Checks", "Threat Investigation", "Website Recovery"],
  },
  {
    icon: LockKeyhole,
    title: "Website Hardening",
    copy:
      "Strengthen your website's security through appropriate configuration improvements, access-control measures, software updates and other safeguards suited to your platform.",
    tags: ["Access Controls", "Secure Configuration", "Updates"],
  },
  {
    icon: Activity,
    title: "Threat Response & Recovery",
    copy:
      "If your website has been compromised or is behaving unexpectedly, we help assess the situation, prioritise the issues and identify practical steps towards recovery and improved security.",
    tags: ["Incident Assessment", "Recovery Support", "Risk Reduction"],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Security Maintenance",
    copy:
      "Security requires continued attention. Depending on your website and agreed scope, maintenance can include software updates, security checks, backup reviews and follow-up on identified issues.",
    tags: ["Security Checks", "Software Updates", "Maintenance"],
  },
  {
    icon: FileCheck,
    title: "Security Review & Guidance",
    copy:
      "Receive clear recommendations on the security improvements that matter to your business. We help you understand identified risks and decide which corrective actions should be prioritised.",
    tags: ["Clear Reporting", "Prioritised Actions", "Technical Guidance"],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reduce Security Risks",
    copy:
      "Identify weaknesses and address avoidable security issues before they become more serious business problems.",
  },
  {
    icon: Eye,
    title: "Improve Visibility",
    copy:
      "Gain a clearer understanding of your website's security condition, potential risks and areas that need attention.",
  },
  {
    icon: CheckCircle2,
    title: "Support Business Continuity",
    copy:
      "Reduce the risk of preventable disruption and help keep your website available and useful to your customers.",
  },
  {
    icon: ServerCog,
    title: "Maintain Better Control",
    copy:
      "Improve how your website, software, user access and security-related maintenance are managed over time.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    copy:
      "We discuss your website, its purpose, your concerns and the areas you want us to review.",
  },
  {
    number: "02",
    title: "Assess",
    copy:
      "We examine the agreed areas of your website to identify relevant security concerns and weaknesses.",
  },
  {
    number: "03",
    title: "Prioritise",
    copy:
      "We explain our findings and identify the issues that require attention, starting with the most important risks.",
  },
  {
    number: "04",
    title: "Improve",
    copy:
      "We carry out or recommend appropriate corrective actions based on the agreed scope of work.",
  },
  {
    number: "05",
    title: "Maintain",
    copy:
      "Where ongoing support is required, we help keep security checks and maintenance part of your website routine.",
  },
];

const faqs = [
  {
    question: "What is a website security audit?",
    answer:
      "A website security audit is a review of relevant security settings, software components and potential weaknesses. Its purpose is to identify areas of risk and provide practical recommendations for improving your website's protection.",
  },
  {
    question: "Can you help if my website has been hacked?",
    answer:
      "We can help assess the situation, investigate suspicious activity and identify appropriate remediation and recovery steps. The work required depends on the type of compromise, the platform involved and the condition of the website.",
  },
  {
    question: "Do you provide ongoing website security maintenance?",
    answer:
      "Yes. Ongoing support can be discussed based on your website, its technology and your requirements. Depending on the agreed scope, this may include security checks, software updates, backup reviews and follow-up on identified issues.",
  },
  {
    question: "Is website security only important for e-commerce businesses?",
    answer:
      "No. Company websites, service websites, blogs and online stores can all face security risks. Any website that represents your business, collects information or connects to other systems deserves appropriate protection.",
  },
  {
    question: "Can you guarantee that my website will never be hacked?",
    answer:
      "No responsible provider can guarantee complete protection against every possible attack. Security work helps identify weaknesses, reduce risks and improve resilience, but threats evolve and ongoing attention remains important.",
  },
  {
    question: "Do you work with businesses outside Mauritius?",
    answer:
      "BIM Africa serves businesses in Mauritius and international markets. We can discuss your website, technical environment and requirements to determine the appropriate scope of support.",
  },
];

export default function CyberSecurity() {
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
      <Navbar />

      <main>
        {/* ========================== HERO ========================== */}

        <section className="relative px-4 sm:px-8 py-10 sm:py-16 md:py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2 mb-6">
                <ShieldCheck
                  className="w-4 h-4 text-[#ff1f00]"
                  strokeWidth={2}
                />
                <span className="text-sm text-white/90">
                  Cybersecurity & Threat Management
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                Protect Your{" "}
                <span className="text-[#ff1f00]">Website</span> & Your{" "}
                <span className="text-[#ff1f00]">Business.</span>
              </h1>

              <p className="text-white mt-6 max-w-3xl">
                Your website is an important part of your business. Security
                weaknesses, malicious software and outdated components can put
                your website, information and business operations at risk.
                BIM Africa helps businesses identify vulnerabilities, address
                website security issues and improve protection through
                practical cybersecurity services.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  Request a Security Review
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Practical Security Reviews
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Clear Recommendations
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Ongoing Support Options
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[28px] bg-gradient-to-b from-black/90 backdrop-blur-md to-black/30 border border-white/10 p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-900/30 border border-[#ff1f00]/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-[#ff1f00]" />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">
                      Your Website Security
                    </p>
                    <h2 className="text-xl sm:text-2xl font-medium">
                      Identify. Protect. Improve.
                    </h2>
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed">
                  Effective website security starts with understanding your
                  risks and taking the right actions. We focus on practical
                  improvements that fit your website and business requirements.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: Search,
                      title: "Identify Weaknesses",
                      copy:
                        "Review potential vulnerabilities and security concerns.",
                    },
                    {
                      icon: LockKeyhole,
                      title: "Strengthen Protection",
                      copy:
                        "Improve relevant security settings and controls.",
                    },
                    {
                      icon: RefreshCw,
                      title: "Maintain Security",
                      copy:
                        "Keep important checks and updates on your radar.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-xl bg-black/30 border border-white/10 p-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#ff1f00]" />
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-medium">
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-sm mt-1 leading-relaxed">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#ff1f00] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed">
                    No website can be guaranteed completely secure. Regular
                    reviews and appropriate maintenance help reduce risk and
                    improve resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== WHY SECURITY MATTERS ====================== */}

        <section className="px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-6xl [font-weight:400]">
              Why Website Security Matters
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              A website security issue can affect more than your website
              itself. It can interrupt business activities, damage customer
              confidence and create additional recovery costs. Taking
              appropriate precautions helps you manage these risks before
              they become more difficult to address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Bug,
                title: "Malware & Unauthorised Access",
                copy:
                  "Compromised accounts, malicious files and vulnerable software can give attackers opportunities to interfere with your website.",
              },
              {
                icon: AlertTriangle,
                title: "Website Disruption",
                copy:
                  "Security incidents can make your website unavailable, affect important functions or prevent customers from accessing information.",
              },
              {
                icon: Eye,
                title: "Customer Confidence",
                copy:
                  "Unexpected redirects, browser warnings and suspicious website behaviour can undermine trust in your business.",
              },
              {
                icon: LockKeyhole,
                title: "Information Exposure",
                copy:
                  "Weak access controls and security flaws can increase the risk of unauthorised access to information or administrative functions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-black/40 border border-white/10 p-6 transition-colors hover:border-[#ff1f00]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#ff1f00]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-[#ff1f00]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-white/90 leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================== OUR SERVICES ========================== */}

        <section className="px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-6xl [font-weight:400]">
              Our Cybersecurity Services
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              From website security audits to malware removal and ongoing
              maintenance, we help businesses understand their security
              requirements and take practical steps to protect their websites.
              Choose the service that fits your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl bg-black/40 border border-white/10 p-6 transition-colors hover:border-[#ff1f00]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#ff1f00]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-[#ff1f00]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-white/90 leading-relaxed">
                    {service.copy}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contactus"
                      className="inline-flex items-center gap-2 bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-4 py-2 rounded-full text-sm transition-all"
                    >
                      Discuss This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================== BUSINESS BENEFITS ========================== */}

        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-6xl [font-weight:400]">
              Security That Supports Your Business
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              Cybersecurity is not only a technical concern. It is part of
              keeping your website dependable, protecting customer confidence
              and supporting the services your business provides online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl bg-black/40 border border-white/10 p-6 transition-colors hover:border-[#ff1f00]"
                >
                  <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#ff1f00]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-[#ff1f00]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-white/90 leading-relaxed">
                    {benefit.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================== OUR PROCESS ========================== */}

        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2">
              <Target className="w-4 h-4 text-[#ff1f00]" />
              <span className="text-sm text-white/90">
                A Practical Approach
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mt-4">
              How We Approach Website Security
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              Every website has different requirements. Our approach starts
              with understanding your situation, reviewing the agreed areas,
              and identifying realistic improvements based on the findings
              and the scope of work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative group flex flex-col items-center text-center px-4 py-2"
              >
                <div className="relative mb-6 w-full flex justify-center">
                  <span className="relative z-10 inline-flex w-20 h-16 items-center justify-center rounded-3xl border border-[#ff1f00] bg-red-900/10 text-[#ff1f00] text-2xl font-medium transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>

                  <span className="hidden lg:block absolute top-1/2 left-0 right-0 -z-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white transition-colors duration-300 group-hover:text-[#ff1f00]">
                  {step.title}
                </h3>

                <p className="text-white/90 mt-2 max-w-xs leading-relaxed">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================== WHO WE HELP ========================== */}

        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-6xl [font-weight:400]">
              Who We Help
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              We support businesses that rely on their websites to present
              their services, communicate with customers and carry out
              important online activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Small & Medium Businesses",
                copy:
                  "Improve the security of your business website and take a more structured approach to managing technical risks.",
              },
              {
                icon: ServerCog,
                title: "E-commerce Websites",
                copy:
                  "Review the security considerations affecting online stores, including software, administrative access and important website functions.",
              },
              {
                icon: ShieldCheck,
                title: "Established Organisations",
                copy:
                  "Address website security concerns with practical reviews, clear recommendations and support aligned with your requirements.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-black/40 border border-white/10 p-6 transition-colors hover:border-[#ff1f00]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#ff1f00]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-[#ff1f00]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-white/90 leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================== FAQ ========================== */}

        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-6xl [font-weight:400]">
              Frequently Asked Questions
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              Here are answers to common questions about website security,
              cybersecurity reviews and ongoing protection.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-black/40 border border-white/10 p-5 sm:p-6 transition-colors hover:border-[#ff1f00]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg sm:text-xl font-medium">
                  <span>{faq.question}</span>

                  <ChevronRight className="w-5 h-5 shrink-0 text-[#ff1f00] transition-transform duration-300 group-open:rotate-90" />
                </summary>

                <p className="mt-4 text-white/90 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ========================== WORK TOGETHER ========================== */}

        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto w-full">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10 md:p-14 text-center">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Let's Work Together
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto">
              Whether you need a website security audit, assistance with
              malware removal or ongoing website protection, BIM Africa can
              help you understand your requirements and identify practical
              next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 sm:gap-4 justify-center">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Keep the footer immediately after Work Together */}
      <Footer />
    </div>
  );
}
