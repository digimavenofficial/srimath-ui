"use client";

export default function PartnershipSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-5xl lg:text-4xl font-bold leading-tight mb-4">
            MORE THAN CONSTRUCTION,
            <br />
            <span className="text-white bg-[#F69F11] px-4 py-2 rounded-full inline-block mt-4">
              IT IS A PARTNERSHIP.
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We believe that building isn't just about bricks and mortar. It's
          about understanding your dreams, honoring your trust, and creating
          spaces where memories are made. Every project is a collaboration where
          your vision becomes our mission. We're not just builders—we're your
          partners in creating a better tomorrow.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F69F11] text-white font-bold rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105"
          >
            ABOUT US
            <span>→</span>
          </a>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-600">
              Delivering excellence through quality craftsmanship, transparent
              processes, and unwavering dedication to customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3">
              Your Trust
            </h3>
            <p className="text-gray-600">
              Built on a foundation of integrity, reliability, and proven track
              record spanning over a decade in the real estate industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
