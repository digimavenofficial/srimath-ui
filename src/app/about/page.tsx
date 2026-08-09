import { SiteShell } from "@/components";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                About Srimath Builder
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Srimath Builder stands as an emerging force in the real estate
                sector, guided by the visionary leadership of Mr. R. Saravanan.
                With a resolute commitment to fostering values and enhancing
                lifestyles for its customers, the company aims to translate
                dreams into reality with remarkable efficiency.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Benefitting from Mr. Saravanan’s extensive 25+ years of
                  construction expertise, Srimath Builder has already achieved
                  an impressive milestone, constructing over 400,000+ square
                  feet in both commercial and residential domains. His astute
                  market insights and robust network of realtors and builders
                  in the city have propelled the successful completion of
                  numerous projects, solidifying the company’s reputation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Srimath Builder’s commitment to excellence is underscored by
                  its meticulous attention to every aspect of its projects.
                  From legally hassle-free titles to floor plans aligned with
                  ancient Vaastu science, from structurally sound designs to cost
                  optimization, the company’s dedication to quality is evident.
                  By sourcing high-grade materials and employing scrupulous
                  workmanship, the company ensures maximum value for customers’ investments.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  At the heart of Srimath Builder’s success is its collaborative
                  approach, embodied in a skilled team comprising esteemed
                  architects, proficient marketing and sales personnel,
                  well-trained staff, and dedicated labour force. United by a
                  singular vision of providing customers with quality homes, the
                  management team believes in the power of teamwork to deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div id="our-story" className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Constructing new global standards through profit-centred yet
                  customer-driven excellence in Construction. Our vision integrates
                  profitability seamlessly with unparalleled customer satisfaction,
                  leading the way in our industries.
                </p>
              </div>
              <div id="leadership" className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  To deliver innovative, sustainable, and high-quality solutions
                  in Construction, Real Estate, and Interior Design, tailored to
                  meet the diverse needs of our clients. Through collaboration,
                  integrity, and a relentless focus on customer satisfaction, we
                  strive to create spaces that inspire, enrich, and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
