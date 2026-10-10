"use client";

export default function ProjectsIntroSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              OUR COMMITMENT,
              <br />
              <span className="text-[#F69F11]">REFLECTED IN EVERY PROJECT</span>
            </h2>

          

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F69F11] text-white font-bold rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105 mt-8"
            >
              VIEW ALL PROJECTS
              <span>→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="h-96 lg:h-full rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop"
              alt="Premium Project"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Additional Text */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 border-t border-gray-700 pt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-[#F69F11] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Core Experience</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">25+</h3>
            <p className="mt-2 text-sm text-gray-300">Years</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-[#F69F11] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Constructed Homes</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">369+</h3>
            <p className="mt-2 text-sm text-gray-300">Homes</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-[#F69F11] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Sq.Ft</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">3.6L</h3>
            <p className="mt-2 text-sm text-gray-300">Sq.Ft</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-[#F69F11] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Labours Strength</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">450+</h3>
            <p className="mt-2 text-sm text-gray-300">Labours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
