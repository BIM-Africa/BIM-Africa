"use client";


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
  CheckCircle2,
  AlertTriangle,
  Eye,
  RefreshCw,
  FileCheck,
  ChevronDown,
} from "lucide-react";

import logoBg from "../../Assests/srv.svg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const metadata: Metadata = {
  title: "Cybersecurity & Website Security in Mauritius | BIM Africa",
  description:
    "Protect your business with cybersecurity services in Mauritius. BIM Africa provides website security audits, vulnerability checks, malware removal, threat response and ongoing website protection.",
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
      "Identify vulnerabilities, remove threats and strengthen your website security with practical cybersecurity services from BIM Africa.",
    url: "https://bim.africa/CyberSecurity",
    siteName: "BIM Africa",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Website Security Audits",
    description:
      "Understand how well your website is protected. We assess relevant security weaknesses, review potential exposure and identify areas that need attention.",
    points: [
      "Review of website security configuration",
      "Identification of potential vulnerabilities",
      "Practical recommendations based on findings",
    ],
  },
  {
    icon: Bug,
    title: "Malware Detection & Removal",
    description:
      "Malicious code and unauthorised changes can affect your website's reliability and reputation. We help investigate suspected infections and address identified malware.",
    points: [
      "Investigation of suspected infections",
      "Malware identification and removal",
      "Follow-up checks and recovery guidance",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Website Hardening",
    description:
      "Reduce avoidable security risks by strengthening your website's configuration, access controls and software environment.",
    points: [
      "Security configuration improvements",
      "Access and permission reviews",
      "Recommendations for safer administration",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Threat Response & Recovery",
    description:
      "When a website is compromised or starts behaving suspiciously, the priority is to understand what happened, contain the issue and work towards a secure recovery.",
    points: [
      "Investigation of reported security incidents",
      "Assistance with threat containment",
      "Recovery and remediation recommendations",
    ],
  },
  {
    icon: RefreshCw,
    title: "Security Maintenance",
    description:
      "Website security is not a one-time task. Ongoing maintenance helps address known weaknesses as software, plugins and website requirements change.",
    points: [
      "Review of updates and known vulnerabilities",
      "Security maintenance recommendations",
      "Continued attention to emerging risks",
    ],
  },
  {
    icon: Eye,
    title: "Security Review & Guidance",
    description:
      "Not sure where your website stands? Get a clearer understanding of its security priorities and the practical steps that may help reduce exposure.",
    points: [
      "Review of current security concerns",
      "Prioritisation of identified risks",
      "Clear next steps for your business",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reduce Avoidable Risk",
    description:
      "Identify security weaknesses before they become more serious problems, where possible.",
  },
  {
    icon: Activity,
    title: "Protect Business Continuity",
    description:
      "Address issues that could interrupt website access, customer interactions or normal operations.",
  },
  {
    icon: FileCheck,
    title: "Make Informed Decisions",
    description:
      "Understand the issues identified and receive practical recommendations for addressing them.",
  },
  {
    icon: ServerCog,
    title: "Maintain Your Website",
    description:
      "Keep security considerations part of your website's ongoing maintenance rather than an afterthought.",
  },
];

const faqs = [
  {
    question: "What is website cybersecurity?",
    answer:
      "Website cybersecurity involves identifying and reducing risks that could compromise a website, its data, its users or its normal operation. This can include security reviews, vulnerability checks, malware removal, access controls, software maintenance and other appropriate protective measures.",
  },
  {
    question: "What is included in a website security audit?",
    answer:
      "The scope depends on your website and requirements. An assessment may include a review of security configuration, software and plugin exposure, access controls and potential vulnerabilities. Findings can be used to prioritise improvements. The precise scope should be agreed before work begins.",
  },
  {
    question: "Can BIM Africa help if my website has malware?",
    answer:
      "BIM Africa can help investigate suspected website malware, identify malicious code where possible, and work on removal and remediation. The appropriate approach depends on the infection, the hosting environment and the condition of the website.",
  },
  {
    question: "How often should website security be reviewed?",
    answer:
      "Security should be considered throughout the life of a website. The appropriate review frequency depends on factors such as the website's complexity, software, integrations, sensitivity of its data and exposure to threats. Updates and security concerns should also be addressed when they arise.",
  },
  {
    question: "Can any website be made completely secure?",
    answer:
      "No website can be guaranteed completely secure. Good security practices help reduce risk, identify weaknesses and improve resilience, but threats and vulnerabilities can change over time. Protection should be proportionate to the website and the business it supports.",
  },
  {
    question: "How much do cybersecurity services cost in Mauritius?",
    answer:
      "Pricing depends on the type of service, website complexity, scope of the assessment and work required. A security review, malware remediation and ongoing maintenance involve different levels of effort. Contact BIM Africa to discuss your requirements and establish an appropriate scope.",
  },
];

export default function CyberSecurity() {
  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden bg-[#080808] text-white"
      style={{
        backgroundImage: `url(${logoBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-5 sm:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff1f00]/40 bg-[#ff1f00]/10 px-4 py-2 text-sm text-white mb-7">
                <ShieldCheck className="w-4 h-4 text-[#ff1f00]" />
                <span>PROTECT YOUR BUSINESS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Cybersecurity &amp;{" "}
                <span className="text-[#ff1f00]">
                  Threat Management
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Protect your website, reduce security risks and respond
                when something goes wrong. BIM Africa helps businesses
                identify vulnerabilities, remove threats and strengthen
                the security of the websites they rely on.
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
                From website security audits and malware removal to
                practical security improvements and ongoing maintenance,
                our approach focuses on identifying problems and helping
                you take the right steps to address them.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff1f00] px-7 py-4 font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Discuss Your Security Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#cybersecurity-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-colors hover:border-[#ff1f00]"
                >
                  Explore Our Services
                  <ChevronDown className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Practical Security Measures
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Clear Recommendations
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#ff1f00]/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-9 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-sm text-gray-400">
                      WEBSITE SECURITY
                    </p>
                    <h2 className="text-2xl font-semibold mt-2">
                      Protection starts with visibility.
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff1f00]/15">
                    <ShieldCheck className="h-8 w-8 text-[#ff1f00]" />
                  </div>
                </div>

                <div className="space-y-5 pt-6">
                  {[
                    {
                      title: "Identify weaknesses",
                      description:
                        "Understand where your website may be exposed.",
                      icon: Search,
                    },
                    {
                      title: "Address security issues",
                      description:
                        "Prioritise vulnerabilities and known threats.",
                      icon: LockKeyhole,
                    },
                    {
                      title: "Maintain protection",
                      description:
                        "Keep security on the agenda as your website evolves.",
                      icon: RefreshCw,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-[#ff1f00]" />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-[#ff1f00]/20 bg-[#ff1f00]/5 p-4">
                  <p className="text-sm leading-relaxed text-gray-300">
                    Effective security starts with understanding your
                    website, identifying relevant risks and taking
                    appropriate action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-white/10 bg-black/40 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
              Why Website Security Matters
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Protect the Digital Side of Your Business
            </h2>

            <p className="mx-auto mt-6 max-w-4xl leading-relaxed text-gray-300">
              Your website may be responsible for attracting customers,
              presenting your services, collecting enquiries or supporting
              everyday business operations. If it is compromised, the
              consequences can extend beyond the website itself. Security
              incidents may interrupt operations, expose information,
              damage customer confidence or require costly recovery work.
            </p>

            <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-gray-300">
              Cybersecurity is not simply about reacting to an attack.
              It also involves understanding how a website is configured,
              keeping its software maintained, managing access appropriately
              and addressing known weaknesses. BIM Africa helps businesses
              take a more considered approach to website security, with
              practical recommendations based on their needs and the risks
              identified.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="cybersecurity-services"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Cybersecurity Services for Businesses
              </h2>

              <p className="mt-5 leading-relaxed text-gray-300">
                Every website has different requirements. Our cybersecurity
                and threat management services focus on identifying relevant
                risks, addressing security issues and helping businesses
                maintain more secure websites.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff1f00]/50 hover:bg-black/60 sm:p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff1f00]/10 transition-colors group-hover:bg-[#ff1f00]/20">
                      <Icon className="h-6 w-6 text-[#ff1f00]" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-relaxed text-gray-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff1f00]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <Link
                        href="/contactus"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#ff1f00]"
                      >
                        Discuss This Service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-white/10 bg-black/40 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
                The Business Value
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Security That Supports Business Continuity
              </h2>

              <p className="mt-5 leading-relaxed text-gray-300">
                The purpose of website security is not to add complexity.
                It is to help you understand the risks, make informed
                decisions and reduce avoidable disruption to your business.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="text-center sm:text-left">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff1f00]/10 sm:mx-0">
                      <Icon className="h-6 w-6 text-[#ff1f00]" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                A Clear, Practical Approach to Cybersecurity
              </h2>

              <p className="mt-5 leading-relaxed text-gray-300">
                You should understand what needs attention, why it matters
                and what can be done about it. Our approach centres on clear
                communication and appropriate action rather than unnecessary
                technical complexity.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "We discuss your website, concerns and business requirements to establish an appropriate scope of work.",
                },
                {
                  number: "02",
                  title: "Assess & Address",
                  description:
                    "We review the relevant security concerns, identify findings and carry out agreed work within the defined scope.",
                },
                {
                  number: "03",
                  title: "Maintain & Improve",
                  description:
                    "We provide findings and practical next steps to help you maintain security and address future requirements.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8"
                >
                  <span className="text-3xl font-bold text-[#ff1f00]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="border-y border-white/10 bg-black/40 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
                Who We Help
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Website Security for Growing Businesses
              </h2>

              <p className="mt-5 leading-relaxed text-gray-300">
                BIM Africa works with businesses that depend on their
                websites to communicate with customers, generate enquiries
                and support their operations. Whether you manage a company
                website, an online catalogue or an e-commerce platform,
                understanding your security requirements is an important
                part of maintaining that investment.
              </p>

              <p className="mt-4 leading-relaxed text-gray-300">
                We help businesses in Mauritius understand website security
                concerns and identify practical next steps. The right
                approach depends on the platform, its configuration,
                integrations and the nature of the risks involved.
              </p>

              <Link
                href="/contactus"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-white hover:text-[#ff1f00]"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                "Business and corporate websites",
                "E-commerce and online stores",
                "WordPress and content-managed websites",
                "Websites experiencing suspicious activity",
                "Businesses seeking security reviews",
                "Organisations requiring ongoing website maintenance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/30 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff1f00]" />
                  <span className="text-sm leading-relaxed text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1f00]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Cybersecurity Questions Answered
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
                Learn more about website protection, security assessments
                and the steps involved in addressing common security concerns.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-white/10 bg-black/30 p-5 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold leading-relaxed marker:hidden">
                    <span>{faq.question}</span>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#ff1f00] transition-transform group-open:rotate-180" />
                  </summary>

                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-gray-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#ff1f00]/30 bg-black/60 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff1f00]/15 via-transparent to-transparent" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff1f00]/15">
                <ShieldCheck className="h-7 w-7 text-[#ff1f00]" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                Protect the Digital Side of Your Business
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
                Whether you need a website security review, help addressing
                malware or guidance on protecting your website, start with
                a conversation about your requirements.
              </p>

              <Link
                href="/contactus"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff1f00] px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-5 text-sm text-gray-400">
                Build. Protect. Support.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
