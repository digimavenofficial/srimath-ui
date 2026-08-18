"use client";

export default function PartnershipSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-5xl lg:text-4xl font-bold leading-tight mb-4">
            Aesthetic craftsmanship is the fusion of skill and artistry, where
            every creation is a
            <br />
            <span className="text-white bg-[#F69F11] px-4 py-2 rounded-full inline-block mt-4">
              Masterpiece.
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We hold the steadfast belief that each project undertaken by us is a
          pivotal representation of our Name and Craftsmanship. Therefore, we
          invest our unwavering dedication and fullest effort across all facets
          of Construction, encompassing Design, Architecture, Planning,
          Procurement, Marketing, and the meticulous execution of the Project.
          At the core of our commitment is a holistic approach that ensures the
          highest standards from inception to completion, reflecting not only
          our proficiency but also our dedication to delivering excellence in
          every endeavour
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
            <h3 className="text-xl font-bold text-[#F69F11] mb-3">Vision</h3>
            <p className="text-gray-600">
              Constructing new global standards through profit-centred yet
              customer-driven excellence in Construction. Our vision integrates
              profitability seamlessly with unparalleled customer satisfaction,
              leading the way in our industries
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3">Mission</h3>
            <p className="text-gray-600">
              To deliver innovative, sustainable, and high-quality solutions in
              Construction, Real Estate, and Interior Design, tailored to meet
              the diverse needs of our clients. Through collaboration,
              integrity, and a relentless focus on customer satisfaction, we
              strive to create spaces that inspire, enrich, and endure
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3">
              Our Core Values
            </h3>
            <p className="text-gray-600">
              Empowering sustainable living through visionary design and
              uncompromising quality, we aspire to redefine the landscape of our
              nation. Our goal at Srimath Builder, is to pioneer a new era of
              environmentally conscious development, creating vibrant
              communities that thrive in harmony with nature. With
              state-of-the-art design and precision engineering, we endeavor to
              deliver not just buildings, but legacies that endure for
              generations. Committed to enhancing the lives of our people and
              enriching the fabric of our society, we are dedicated to shaping a
              future where sustainability is not just a goal, but a way of life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
