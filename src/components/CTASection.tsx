"use client";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24 lg:py-32 overflow-hidden relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Find Your
            <br />
            Dream Home?
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Let's build your future together. Explore our premium projects and
            take the first step toward your perfect home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F69F11] text-white font-bold rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105"
            >
              EXPLORE PROJECTS
              <span>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#F69F11] font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              CONTACT US
              <span>→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-600 pt-12">
            <div>
              <p className="text-3xl font-bold text-[#F69F11]">100+</p>
              <p className="text-gray-300 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#F69F11]">600+</p>
              <p className="text-gray-300 text-sm">Happy Families</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#F69F11]">20+</p>
              <p className="text-gray-300 text-sm">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#F69F11]">100%</p>
              <p className="text-gray-300 text-sm">Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
