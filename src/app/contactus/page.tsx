// eslint-disable-next-line @typescript-eslint/no-explicit-any
"use client";


declare global {
  interface Window {
    grecaptcha: any;
  }
}
import React, { useState } from "react";
import Image from "next/image";
import {
  Send,
  Zap,
  Users,
  CheckSquare,
  Mail,
  Phone,
  Clock,
  Building,
  MessageCircle 
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WorkTogether from "../Components/WorkTogether";

import logoBg from "../../Assests/srv.svg";
async function getCaptchaToken() {
  if (!window.grecaptcha) return "";
  return await window.grecaptcha.execute(
    "6LcPmRgsAAAAAK2lz2Pf-iR5l-yV7x98mKR3GMFj",
    { action: "contact_form" }
  );
}


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [language, setLanguage] = useState<"EN" | "FR">("EN");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showWA, setShowWA] = useState(false);

  // Handle inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 15);
      setFormData((p) => ({ ...p, phone: digitsOnly }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setShowQuote(false);

  try {
    const captchaToken = await getCaptchaToken();

    if (!captchaToken) {
      alert("Captcha failed. Try again.");
      setIsSubmitting(false);
      return;
    }

    const res = await fetch("https://bim-africa-backend-six.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Submission failed.");
      setIsSubmitting(false);
      return;
    }

    // SUCCESS
    setShowQuote(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setShowQuote(false), 5000);
  } catch (error) {
    alert("Network error.");
  }

  setIsSubmitting(false);
};

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logoBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

     {/* ✅ Hero Section */}
<section className="px-4 sm:px-6 pt-8 sm:pt-12 pb-2 max-w-6xl mx-auto text-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl  mb-2 leading-tight">
    Let&apos;s Build Something{" "}
    <span className="text-[#ff1f00]">Exceptional</span>
  </h1>
</section>

{/* ✅ Contact Info Section */}
<section className="px-4 sm:px-6 pt-6 pb-8 max-w-6xl mx-auto bg-black/80 rounded-2xl mb-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Email */}
    <button
      onClick={() =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=sales@bim.africa",
          "_blank"
        )
      }
      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:shadow-md transition"
    >
      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
        <Mail className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-sm mb-1 text-white">Email</h3>
        <p className="text-gray-300 text-xs">info@bim.africa</p>
        <p className="text-gray-300 text-xs">sales@bim.africa</p>
      </div>
    </button>

    {/* Phone with WhatsApp chooser */}
    <div className="relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:shadow-md transition">
      <button
        type="button"
        onClick={() => setShowWA((s) => !s)}
        className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center"
      >
        <Phone className="w-5 h-5 text-white" />
      </button>
      <div>
        <h3 className="font-medium text-sm mb-1 text-white">Phone</h3>
        <p className="text-gray-300 text-xs">MU: +230 5451 4176</p>
        <p className="text-gray-300 text-xs">LU: +352 661 784 276</p>
      </div>

      {showWA && (
        <div className="absolute left-0 top-full mt-1 w-64 z-50 rounded-lg border border-white/10 bg-black/90 shadow-lg overflow-hidden text-sm">
          <div className="px-3 py-2 font-medium border-b border-white/10 text-white/90">
            Open WhatsApp
          </div>

          {[
            { c: "MU (Mauritius)", n: "+230 5451 4176", link: "23054514176" },
            { c: "LU (Luxembourg)", n: "+352 661 784 276", link: "352661784276" },
          ].map((x) => (
            <button
              key={x.link}
              onClick={() => {
                window.open(`https://wa.me/${x.link}`, "_blank");
                setShowWA(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-white/90 hover:bg-white/10"
            >
              <Phone className="w-4 h-4 text-[#ff1f00]" />
              <span className="font-medium">{x.c}</span>
              <span className="ml-auto text-gray-400 text-xs">{x.n}</span>
            </button>
          ))}

          <button
            onClick={() => setShowWA(false)}
            className="block w-full text-right px-3 py-1 text-xs text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
      )}
    </div>

    {/* Offices */}
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:shadow-md transition">
      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
        <Building className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-sm mb-1 text-white">Offices</h3>
        <p className="text-gray-300 text-xs">Mauritius & Luxembourg</p>
      </div>
    </div>

    {/* Hours */}
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:shadow-md transition">
      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
        <Clock className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-sm mb-1 text-white">Business Hours</h3>
        <p className="text-gray-300 text-xs">
          Weekdays: 9 AM – 5 PM<br />Weekends: Closed
        </p>
      </div>
    </div>
  </div>

  {showWA && (
    <div
      className="fixed inset-0 z-[60]"
      onClick={() => setShowWA(false)}
      aria-hidden="true"
    />
  )}
</section>


      {/* ✅ Contact Form & Emergency Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Message Form */}
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-8 border border-[#ff1f00]">
          <div className="w-14 h-14 bg-[#ff1f00] rounded-full flex items-center justify-center mb-6 mx-auto">
            <Send className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-center">
            Send Us a Message
          </h2>
          <p className="text-gray-300 mb-6 text-center text-sm sm:text-base">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-500"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-500"
            />
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 placeholder-gray-500 resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff1f00] py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {showQuote && (
              <p className="text-green-400 text-sm mt-2 text-center">
                {language === "EN"
                  ? "Thanks! Your message has been sent."
                  : "Merci ! Votre message a été envoyé."}
              </p>
            )}
          </form>
        </div>

        {/* Emergency Section */}
        <div className="space-y-8 text-center">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8">
            <div className="w-14 h-14 bg-red-800/50 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-7 h-7 text-yellow-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-white mb-6 text-sm sm:text-base">
              For critical issues like downtime, security breaches, or payment
              errors, reach us instantly.
            </p>

          <a
  href="tel:+23054514176"
  className="block w-full bg-white text-[#ff1f00] font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition"
>
  <div className="flex items-center justify-center gap-2">
    <Phone className="w-5 h-5 text-[#ff1f00]" />
    <span>Call Now – Emergency Line</span>
  </div>
</a>
           <a
  href="https://wa.me/352661784276"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full mt-4 bg-white text-[#ff1f00] font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition"
>
  <div className="flex items-center justify-center gap-2">
    {/* ✅ Lucide WhatsApp-like icon */}
    <MessageCircle className="w-5 h-5 text-[#ff1f00]" />
    <span>WhatsApp Us – Priority Chat</span>
  </div>
</a>

          </div>

          {/* Excellence Section */}
          <div className="bg-black/40 rounded-2xl p-8 border border-gray-700 text-left">
            <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-center">
              Excellence You Can Rely On
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff1f00] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Expert Team</h3>
                  <p className="text-gray-300 text-sm">
                    International professionals with 10+ years of combined
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff1f00] rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">24/7 Support</h3>
                  <p className="text-gray-300 text-sm">
                    Always available when you need us most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff1f00] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Proven Results</h3>
                  <p className="text-gray-300 text-sm">
                    Trusted by businesses in Mauritius & Luxembourg & beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkTogether />
      <Footer />
    </div>
  );
}
