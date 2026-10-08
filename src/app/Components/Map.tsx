import React from "react";
import map from "../../Assests/map.png";

export default function Map() {

  // ✅ FIXED: Added TypeScript type to parameter
  const openWhatsApp = (number: string) => {
    const url = number === "23058010730"
      ? "https://wa.me/message/VLID27EWBIPND1"
      : `https://wa.me/${number}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <section className="relative z-20 mx-auto w-full max-w-[1200px] mt-12 sm:mt-16 py-10 sm:py-16 lg:py-20 overflow-hidden">

        {/* Background Map */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${map})`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Where We <span className="text-[#ff1f00]">Work</span> Offices
          </h2>

          <div className="relative mb-10 max-w-3xl">
            <span className="absolute left-0 top-2 bottom-2 w-[5px] bg-[#ff1f00] rounded-full" />
            <p className="text-white/80 pl-6">
              BIM Africa is rooted in Mauritius, with growing relationships across Africa, Luxembourg and international markets. We work with businesses that value clear thinking, practical solutions and reliable support, helping them build what they need, protect what they have and keep things running as their needs evolve.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid lg:grid-cols-2 gap-6 pt-6">

            {/* 🇱🇺 Luxembourg */}
            <div className="bg-black border border-[#2a2a2a] rounded-3xl p-6 lg:p-8 shadow">
              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-black/70 border border-[#ff1f00] text-[#ff1f00]
                flex items-center justify-center font-bold text-2xl">
                  LU
                </div>

                <h3 className="text-white text-2xl">Luxembourg</h3>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp("352661784276");
                  }}
                  className="ml-auto text-[#ff1f00] cursor-pointer"
                >
                  WhatsApp Luxembourg
                </a>
              </div>

              <p className="text-[#ff1f00] font-medium mb-2">
                Beyond Mauritius.
              </p>
              <p className="text-white/85 text-sm">
                BIM Africa is building a stronger presence in Luxembourg, supported by our local contact while our core team operates from Mauritius. We also work with businesses and partners across Africa and other international markets.
              </p>
            </div>

            {/* 🇲🇺 Mauritius */}
            <div className="bg-black border border-[#2a2a2a] rounded-3xl p-6 lg:p-8 shadow">
              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-black/70 border border-[#ff1f00] text-[#ff1f00]
                flex items-center justify-center font-bold text-2xl">
                  MU
                </div>

                <h3 className="text-white text-2xl">Mauritius</h3>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp("23058010730");
                  }}
                  className="ml-auto text-[#ff1f00] cursor-pointer"
                >
                  WhatsApp Mauritius
                </a>

              </div>

              <p className="text-[#ff1f00] font-medium mb-2">
                Our Home Base.
              </p>
              <p className="text-white/85 text-sm">
                BIM Africa was founded and incorporated in Mauritius, where we work closely with businesses across the country to deliver websites, cybersecurity and digital support.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
