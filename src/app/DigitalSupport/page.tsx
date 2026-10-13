import type { Metadata } from "next";
import Link from "next/link";
import {
  Headset,
  MessagesSquare,
  FileText,
  Database,
  BookOpen,
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Users,
  Workflow,
  LifeBuoy,
  ClipboardCheck,
  MonitorCheck,
  ChevronDown,
  Globe,
  Building2,
  Laptop,
  MessageCircle,
  Mail,
  Phone,
  FileCheck,
  Settings,
} from "lucide-react";

import logoBg from "../../Assests/srv.svg";
import Navbar from "../Components/Navbar";
import WorkTogether from "../Components/WorkTogether";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Digital Support Outsourcing in Mauritius | BIM Africa",
  description:
    "BIM Africa provides digital support outsourcing, IT help desk services, customer support, data entry, application administration, policy documentation and knowledge base management.",
  keywords: [
    "digital support outsourcing Mauritius",
    "IT help desk outsourcing",
    "technical support services Mauritius",
    "customer support outsourcing",
    "data entry services Mauritius",
    "application administration",
    "knowledge base management",
    "IT policies and procedures",
    "application data migration",
    "business process outsourcing Mauritius",
    "BIM Africa",
  ],
  alternates: {
    canonical: "https://www.bim.africa/DigitalSupportOutsourcing",
  },
  openGraph: {
    title: "Digital Support Outsourcing | BIM Africa",
    description:
      "Outsource technical support, customer enquiries, digital administration and documentation to BIM Africa.",
    url: "https://www.bim.africa/DigitalSupportOutsourcing",
    siteName: "BIM Africa",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    icon: Headset,
    title: "IT Help Desk & Ticket Management",
    description:
      "Give your team access to organised technical assistance without managing every support request internally. We help handle routine issues, document resolutions and keep support requests moving.",
    features: [
      "Help desk ticket handling",
      "Issue categorisation and tracking",
      "Routine software troubleshooting",
      "User assistance and escalation",
      "Support records and reporting",
    ],
    outcome:
      "A more organised support process, clearer issue tracking and better visibility over outstanding requests.",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "Omnichannel Customer Support",
    description:
      "Keep customer enquiries organised across the communication channels your business uses. Our team can follow your approved procedures, respond to routine questions and direct complex requests to the right people.",
    features: [
      "Email support",
      "Live chat assistance",
      "Phone-based customer support",
      "WhatsApp and messaging support",
      "Enquiry routing and escalation",
    ],
    outcome:
      "More consistent customer communication, with agreed response procedures and clearer follow-up.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Policies & Procedures Documentation",
    description:
      "Turn your internal processes into clear, structured documents that employees can follow. We help prepare and maintain documentation based on your requirements, existing procedures and approved templates.",
    features: [
      "Standard operating procedures",
      "IT and acceptable-use policies",
      "Internal process documentation",
      "Backup and incident procedures",
      "Document updates and version control",
    ],
    outcome:
      "Clearer internal instructions and documentation that is easier to maintain as your business evolves.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data Entry & Application Administration",
    description:
      "Delegate repetitive data entry and record maintenance to a team working within your approved systems and procedures. We help process information accurately, maintain records and check completed work.",
    features: [
      "Data entry into business applications",
      "Bulk record uploads and updates",
      "CRM and database administration",
      "Product and catalogue data entry",
      "Duplicate checks and data validation",
    ],
    outcome:
      "Less time spent on repetitive administrative work and more consistent records across your digital systems.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Knowledge Base & Help Centre Management",
    description:
      "Make useful information easier for your employees and customers to find. We help organise, write and maintain support articles using your approved answers, processes and product information.",
    features: [
      "Frequently asked questions",
      "Help centre article preparation",
      "Troubleshooting guides",
      "Internal knowledge base maintenance",
      "Content reviews and updates",
    ],
    outcome:
      "Better-organised support information and less repeated effort answering the same routine questions.",
  },
  {
    number: "06",
    icon: ArrowLeftRight,
    title: "Application Data Migration & Verification",
    description:
      "Move approved data between business applications with a structured approach to preparation, transfer and checking. We help identify missing records, mismatched fields and inconsistencies before the work is signed off.",
    features: [
      "Data preparation and formatting",
      "Field mapping and record matching",
      "Application import assistance",
      "Post-migration verification",
      "Discrepancy reporting",
    ],
    outcome:
      "Better visibility over migration results, with documented checks and issues identified for resolution.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:
      "We discuss the tasks, systems, workload, expected outcomes and existing procedures that your business needs support with.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Define the Scope",
    description:
      "We agree on responsibilities, access requirements, turnaround times, quality standards and how work will be reported.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Set Up the Workflow",
    description:
      "We establish the instructions, templates, communication channels and review procedures needed to deliver the work consistently.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Deliver & Review",
    description:
      "Tasks are completed according to the agreed process, with appropriate quality checks and escalation of exceptions.",
    icon: MonitorCheck,
  },
  {
    number: "05",
    title: "Report & Improve",
    description:
      "We review completed work, report relevant issues and refine the process as your requirements evolve.",
    icon: CheckCircle2,
  },
];

const clientTypes = [
  {
    icon: Building2,
    title: "Growing Businesses",
    description:
      "Businesses that need additional operational capacity without building a larger internal team for every recurring task.",
  },
  {
    icon: Laptop,
    title: "Technology Companies",
    description:
      "Companies that need help with routine technical support, application administration, documentation and data-related tasks.",
  },
  {
    icon: Users,
    title: "Agencies & Service Providers",
    description:
      "Teams that need dependable assistance with support requests, documentation and administrative work alongside their core services.",
  },
  {
    icon: Globe,
    title: "International Businesses",
    description:
      "Businesses looking for a remote support partner for clearly defined digital and operational workloads.",
  },
];

const faqs = [
  {
    question: "What is digital support outsourcing?",
    answer:
      "Digital support outsourcing allows a business to delegate defined technical, customer support, administrative and documentation tasks to an external service provider. BIM Africa works according to an agreed scope, workflow and set of responsibilities.",
  },
  {
    question: "Can we outsource only specific tasks?",
    answer:
      "Yes. You can outsource a defined project, a particular category of tasks or an ongoing workload. The scope and pricing depend on the work involved, the required turnaround and the level of support needed.",
  },
  {
    question: "Can BIM Africa provide ongoing monthly support?",
    answer:
      "We can discuss recurring service arrangements based on your requirements, expected workload and operational needs. Any agreed coverage hours, response times, capacity limits and deliverables should be documented before work begins.",
  },
  {
    question: "Which systems and applications can you support?",
    answer:
      "The available scope depends on the application, access requirements and the expertise needed. We assess the systems involved before confirming a service and agree on appropriate access permissions and working procedures.",
  },
  {
    question: "How do you maintain quality and accuracy?",
    answer:
      "We establish task instructions, agreed quality criteria and appropriate review procedures. Depending on the service, these may include record checks, ticket reviews, test cases, discrepancy reports and documented approvals.",
  },
  {
    question: "How is confidential business information handled?",
    answer:
      "Access and information-handling arrangements should be agreed before work begins. We can define authorised access, confidentiality requirements, data-handling procedures and responsibilities appropriate to the engagement. Specific safeguards depend on the systems and information involved.",
  },
  {
    question: "Can you assist with data protection policies and documentation?",
    answer:
      "Yes. BIM Africa helps businesses prepare and maintain data protection policies, privacy documentation, internal procedures, data-handling guidelines and supporting records. We help organise documentation and establish practical processes for managing personal information and maintaining consistent data protection practices.",
  },
  {
    question: "How do we get started?",
    answer:
      "Contact our team with a description of the work, the systems involved and the type of support you need. We can then discuss the scope, delivery approach, responsibilities and suitable commercial arrangement.",
  },
];

export default function DigitalSupportOutsourcing() {
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
        {/* ========================== HERO ========================== */}
        <section className="relative px-4 sm:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/40 border border-[#ff1f00] px-4 py-2 mb-6">
                <Headset
                  className="w-4 h-4 text-[#ff1f00]"
                  strokeWidth={2}
                />
                <span className="text-sm text-white/90">
                  Digital Support Outsourcing
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-medium">
                Your Extended{" "}
                <span className="text-[#ff1f00]">Digital Support</span> Team.
              </h1>

              <p className="text-white/90 leading-relaxed mt-6 max-w-2xl">
                Delegate routine technical support, customer enquiries, data
                administration and documentation to a team that works around
                your processes. BIM Africa helps businesses manage recurring
                digital tasks, improve operational consistency and free up
                internal time for higher-priority work.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 bg-[#333333] border border-white/10 hover:border-[#ff1f00] text-white px-7 sm:px-8 py-3.5 rounded-full transition-all text-sm sm:text-base"
                >
                  Discuss Your Requirements
                  
                </Link>

                <a
                  href="https://wa.me/message/VLID27EWBIPND1"
                  className="inline-flex items-center justify-center gap-2 bg-[#333333] border border-white/10 hover:border-[#ff1f00] text-white px-7 sm:px-8 py-3.5 rounded-full transition-all text-sm sm:text-base"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "Flexible Workloads",
                  "Defined Processes",
                  "Quality Checks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#ff1f00]" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero information card */}
            <div className="relative">
              <div className="rounded-[28px] bg-gradient-to-b from-black/90 to-black/50 backdrop-blur-md border border-white/10 p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <p className="text-sm text-white/60">
                      Your business. Your workflow.
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-medium mt-2">
                      Support that fits.
                    </h2>
                  </div>

                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-red-900/30 border border-[#ff1f00]/40 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#ff1f00]" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Headset,
                      title: "Technical & Customer Support",
                      copy: "Manage requests, resolve routine issues and escalate when needed.",
                    },
                    {
                      icon: Database,
                      title: "Digital Administration",
                      copy: "Keep records, applications and digital information organised.",
                    },
                    {
                      icon: BookOpen,
                      title: "Documentation & Knowledge",
                      copy: "Maintain clear procedures, support articles and internal guidance.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl bg-black/40 border border-white/10 p-4"
                      >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-red-900/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#ff1f00]" />
                        </div>

                        <div>
                          <h3 className="font-medium text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white/70 mt-1 leading-relaxed">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ff1f00]/15 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-[#ff1f00]" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Scope, responsibilities and delivery arrangements are
                    agreed around your requirements.
                  </p>
                </div>
              </div>

              <span className="hidden md:block absolute -right-3 -top-3 w-7 h-7 rounded-full bg-[#ff1f00] shadow-[0_0_35px_rgba(255,31,0,0.4)] pointer-events-none" />
              <span className="hidden md:block absolute -left-3 -bottom-3 w-5 h-5 rounded-full bg-[#ff1f00] shadow-[0_0_30px_rgba(255,31,0,0.35)] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ======================== INTRO ======================== */}
        <section className="px-4 sm:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/40 border border-white/10 p-6 sm:p-10 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-black/40 border border-white/15 px-4 py-2 mb-5">
                  <Workflow className="w-4 h-4 text-[#ff1f00]" />
                  <span className="text-sm text-white/80">
                    A Practical Approach
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
                  More Capacity.
                  <br />
                  <span className="text-[#ff1f00]">
                    Less Operational Pressure.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-white/85 leading-relaxed">
                  Routine digital work can consume valuable time, even when it
                  does not require a full-time internal role. Outsourcing
                  selected tasks gives your business additional capacity while
                  keeping responsibilities, access and expected outcomes
                  clearly defined.
                </p>

                <p className="text-white/70 leading-relaxed mt-4">
                  From handling support requests to maintaining business
                  records and preparing documentation, we focus on structured
                  work that can be delivered against agreed instructions and
                  quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== SERVICES ======================== */}
        <section
          id="outsourcing-services"
          className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto scroll-mt-24"
        >
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2 mb-5">
              <LifeBuoy className="w-4 h-4 text-[#ff1f00]" />
              <span className="text-sm text-white/90">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium">
              Digital <span className="text-[#ff1f00]">Support</span> Outsourcing
            </h2>

            <p className="text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
              Practical support for the technical, administrative and
              documentation tasks that keep your business moving. Choose the
              services that match your workload and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-7 transition-all duration-300 hover:border-[#ff1f00]/70 hover:bg-black/55"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-900/30 border border-[#ff1f00]/20 flex items-center justify-center transition-colors group-hover:border-[#ff1f00]/60">
                      <Icon className="w-6 h-6 text-[#ff1f00]" />
                    </div>

                    <span className="text-sm font-medium text-white/30">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium leading-snug group-hover:text-[#ff1f00] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed mt-4">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-medium text-white mb-3">
                      What we can support
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-white/75"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#ff1f00] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-sm text-white/65 leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href="/contactus"
                      className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-[#ff1f00] transition-colors"
                    >
                      Discuss This Service
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ======================== DELIVERY MODEL ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium">
              Flexible Ways to <span className="text-[#ff1f00]">Work Together</span>
            </h2>

            <p className="text-white/80 leading-relaxed mt-5 max-w-3xl mx-auto">
              Different workloads need different arrangements. We discuss the
              scope, expected volume and level of support before agreeing on a
              suitable delivery model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardCheck,
                title: "Project-Based Support",
                description:
                  "For defined assignments such as data processing, documentation preparation, application data migration or knowledge base setup.",
                points: [
                  "Agreed deliverables",
                  "Defined project scope",
                  "Completion and review criteria",
                ],
              },
              {
                icon: Clock,
                title: "Ongoing Monthly Support",
                description:
                  "For recurring workloads that need regular attention, such as ticket handling, customer enquiries, data administration or documentation maintenance.",
                points: [
                  "Agreed workload",
                  "Defined service coverage",
                  "Regular reporting",
                ],
              },
              {
                icon: Users,
                title: "Dedicated Support Capacity",
                description:
                  "For businesses that need a more consistent allocation of support resources, subject to workload, staffing availability and agreed responsibilities.",
                points: [
                  "Defined responsibilities",
                  "Established workflows",
                  "Planned capacity and oversight",
                ],
              },
            ].map((model) => {
              const Icon = model.icon;

              return (
                <div
                  key={model.title}
                  className="rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-7 hover:border-[#ff1f00]/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-900/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#ff1f00]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium">
                    {model.title}
                  </h3>

                  <p className="text-white/75 leading-relaxed mt-3">
                    {model.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-white/75"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#ff1f00]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-white/55 mt-6">
            Availability, coverage hours, service levels and deliverables are
            confirmed for each engagement.
          </p>
        </section>

        {/* ======================== PROCESS ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-[#ff1f00] px-4 py-2 mb-5">
              <Workflow className="w-4 h-4 text-[#ff1f00]" />
              <span className="text-sm text-white/90">
                Our Approach
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium">
              How <span className="text-[#ff1f00]">We Work</span>
            </h2>

            <p className="text-white/80 leading-relaxed mt-5 max-w-3xl mx-auto">
              A structured approach helps us understand your requirements,
              establish clear responsibilities and deliver work consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl bg-black/35 border border-white/10 p-5 sm:p-6 text-center hover:border-[#ff1f00]/50 transition-colors"
                >
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-red-900/25 border border-[#ff1f00]/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#ff1f00]" />
                    </div>
                  </div>

                  <p className="text-xs tracking-widest text-[#ff1f00] font-semibold mb-3">
                    STEP {step.number}
                  </p>

                  <h3 className="text-lg font-medium leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================== WHO WE HELP ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium">
              Who <span className="text-[#ff1f00]">We Support</span>
            </h2>

            <p className="text-white/80 leading-relaxed mt-5 max-w-3xl mx-auto">
              Our services can be adapted to businesses with recurring digital
              workloads, established systems or teams that need additional
              operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client) => {
              const Icon = client.icon;

              return (
                <div
                  key={client.title}
                  className="rounded-2xl bg-black/40 border border-white/10 p-6 hover:border-[#ff1f00]/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-900/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#ff1f00]" />
                  </div>

                  <h3 className="text-xl font-medium">
                    {client.title}
                  </h3>

                  <p className="text-white/75 text-sm leading-relaxed mt-3">
                    {client.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================== RESPONSIBLE SUPPORT ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl bg-black/45 border border-white/10 p-6 sm:p-9">
              <div className="w-12 h-12 rounded-2xl bg-red-900/30 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-[#ff1f00]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium">
                Structured & Responsible Delivery
              </h2>

              <p className="text-white/80 leading-relaxed mt-4">
                Outsourced work often involves access to business applications,
                customer enquiries and internal information. Clear procedures
                help establish what our team can access, what it can change and
                when client approval is required.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Defined responsibilities and task instructions",
                  "Appropriate account access and permissions",
                  "Quality checks and documented exceptions",
                  "Clear escalation and approval procedures",
                  "Agreed confidentiality and information-handling requirements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#ff1f00] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#180805] via-black/80 to-black/40 border border-[#ff1f00]/25 p-6 sm:p-9 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#ff1f00]/15 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-[#ff1f00]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium">
                Support Built Around Your Business
              </h2>

              <p className="text-white/80 leading-relaxed mt-4">
                You do not need to outsource everything. Start with a defined
                workload, establish a reliable process and expand the scope as
                your requirements grow.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    icon: CheckCircle2,
                    text: "Start with a specific task or project",
                  },
                  {
                    icon: Settings,
                    text: "Establish a repeatable workflow",
                  },
                  {
                    icon: Workflow,
                    text: "Expand into ongoing support where appropriate",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5 shrink-0 text-[#ff1f00]" />
                      <span className="text-sm text-white/80">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 w-fit mt-8 bg-[#333333] border border-white/10 hover:border-[#ff1f00] text-white px-6 py-3 rounded-full transition-all"
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ======================== FAQ ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-5xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-white/15 px-4 py-2 mb-5">
              <MessageCircle className="w-4 h-4 text-[#ff1f00]" />
              <span className="text-sm text-white/90">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium">
              Common Questions
            </h2>

            <p className="text-white/75 leading-relaxed mt-5 max-w-2xl mx-auto">
              Learn more about our outsourcing services, delivery arrangements
              and how we approach ongoing support.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-black/40 border border-white/10 open:border-[#ff1f00]/50 transition-colors"
              >
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 p-5 sm:p-6">
                  <span className="font-medium text-white">
                    {faq.question}
                  </span>

                  <ChevronDown className="w-5 h-5 shrink-0 text-[#ff1f00] transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-white/75 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ======================== FINAL CTA ======================== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto w-full">
          <div className="relative overflow-hidden rounded-3xl bg-black/50 border border-white/10 px-6 py-10 sm:px-10 sm:py-14 md:px-14 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#ff1f00]" />

            <div className="relative max-w-3xl mx-auto">

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
                Need an Extra Pair of{" "}
                <span className="text-[#ff1f00]">Hands?</span>
              </h2>

              <p className="text-white/80 leading-relaxed mt-6 max-w-2xl mx-auto">
                Tell us which tasks are taking up your team's time. We'll
                discuss your requirements and explore a practical support
                arrangement that fits your workload.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff1f00] hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all hover:scale-[1.02] font-medium"
                >
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="mailto:info@bim.africa?subject=Digital%20Support%20Outsourcing%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-[#333333] border border-white/10 hover:border-[#ff1f00] text-white px-8 py-4 rounded-full transition-all font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm text-white/65">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Defined Scope
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Flexible Arrangements
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f00]" />
                  Practical Support
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Keep the footer immediately after the final CTA */}
      <WorkTogether />
      <Footer />
    </div>
  );
}
