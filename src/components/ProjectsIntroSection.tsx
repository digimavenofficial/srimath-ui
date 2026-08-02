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

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Every project we undertake is a testament to our unwavering
              commitment to excellence, precision, and customer satisfaction. We
              don't just build structures; we create landmarks that define
              communities and enrich lives.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F69F11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Premium Quality Materials
                  </h3>
                  <p className="text-gray-300">
                    Sourced from industry-leading suppliers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F69F11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Timely Delivery</h3>
                  <p className="text-gray-300">
                    We respect your timeline and deliver on schedule
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F69F11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Modern Design</h3>
                  <p className="text-gray-300">
                    Blending aesthetics with functionality
                  </p>
                </div>
              </div>
            </div>

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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-12">
          <div className="text-center">
            <h3 className="text-[#F69F11] text-4xl font-bold mb-2">20+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#F69F11] text-4xl font-bold mb-2">500+</h3>
            <p className="text-gray-300">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#F69F11] text-4xl font-bold mb-2">100%</h3>
            <p className="text-gray-300">Commitment to Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
