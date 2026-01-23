import React from 'react'

export default function WorkTogether() {
  return (
    <div>
        <section className="py-10 sm:py-10 lg:py-10 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8">
            Strategic. <span className="text-[#ff1f00]">Secure.</span> Scalable.
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl text-white tracking-tight">  LET&apos;S WORK</h2>

          {/* round quote button */}
          <div className="flex justify-center relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-3 xl:-mt-10 mb-[-1rem] sm:mb-[-1.5rem] md:mb-[-1.75rem] lg:mb-[-2rem] xl:mb-[-2rem] z-10">
            <a href="https://quotation.bim.africa/" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-[#ff1f00] text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32
                flex flex-col items-center justify-center font-bold text-xs sm:text-sm
                transition-all shadow-lg border-2 border-[#ff1f00]
                hover:bg-black/100 hover:text-white hover:border-[#ff1f00] hover:scale-105"
              >
               GET <br />
INSTANT <br />
QUOTE
              </button>
            </a>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl text-white tracking-tight">TOGETHER</h2>
        </div>
      </section>
    </div>
  )
}