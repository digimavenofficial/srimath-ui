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
        <div className="mt-16 grid grid-cols-1 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3 uppercase">Our Vision</h3>
            <p className="text-gray-600">
              To build quality spaces with trust, responsibility and craftsmanship—creating homes, communities and developments that deliver lasting value for generations.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3 uppercase">Our Mission</h3>
            <p className="text-gray-600">
              To combine our strong construction experience, skilled manpower and proven building practices with modern technology and thoughtful design to deliver high-quality spaces on time and with complete transparency. We are committed to creating lasting value for our customers, landowners and investors through responsible construction, quality workmanship and a customer-first approach.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3 uppercase">
              Our Core Values
            </h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">QUALITY WITHOUT COMPROMISE</p>
                <p>We believe quality is built into every stage of construction—from the materials we select to the workmanship and finishing we deliver.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">TRUST & TRANSPARENCY</p>
                <p>We believe strong relationships are built on honesty, clear communication and transparent commitments.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">TIME IS VALUE</p>
                <p>We respect our customers' time, money and plans. We strive to execute our projects efficiently and deliver within the committed timeline.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">RESPONSIBILITY</p>
                <p>We take responsibility for every project and every asset entrusted to us—whether it belongs to a customer, landowner or investor.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">CUSTOMER FIRST</p>
                <p>We understand our customers' needs and make decisions with their long-term comfort, satisfaction and value in mind.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">CRAFTSMANSHIP</p>
                <p>We take pride in the skill, precision and attention to detail that go into every space we build.</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-[#F69F11] mb-3 uppercase">Our Strengths</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">STRONG CONSTRUCTION EXPERIENCE</p>
                <p>Our foundation is built on extensive practical experience in the construction industry, giving us a strong understanding of construction from planning to final handover.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">OUR PEOPLE, OUR STRENGTH</p>
                <p>Our skilled and dedicated manpower is one of Srimath Builder's greatest strengths. We believe quality construction begins with the people who build it.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">TRADITIONAL QUALITY</p>
                <p>We continue to value proven construction practices, including red-brick construction and river-sand plastering, where they contribute to durability and quality.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">MODERN THINKING</p>
                <p>We combine traditional construction knowledge with modern design, technology, engineering and smart-living solutions to meet today's expectations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">SUPERIOR WORKMANSHIP & FINISHING</p>
                <p>We give special attention to workmanship, detailing and finishing because we believe the quality of a building is visible in the details.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">TRANSPARENT EXECUTION</p>
                <p>We maintain clear and transparent communication on project progress, payment schedules, commitments and important decisions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">ON-TIME EXECUTION</p>
                <p>We understand that construction delays affect people's finances and plans. Strong planning, coordination and execution help us stay focused on timely delivery.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">BUILT FOR LONG-TERM VALUE</p>
                <p>We don't build only for today. We create spaces that are designed to provide comfort, durability and value for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
