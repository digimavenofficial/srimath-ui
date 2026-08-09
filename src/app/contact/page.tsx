import { SiteShell } from "@/components";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="pt-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Reach out to Srimath Builder for project inquiries, consultation,
              or customer support. We are here to help you build your next dream space.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">ADDRESS</h2>
              <p className="text-gray-700 leading-relaxed">
                Ragham Apartments, M10/G4, 1st Main Rd, Thiruvalluvar Nagar,
                Thiruvanmiyur, Chennai, Tamil Nadu 600041
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">PHONE</h2>
              <a
                href="tel:+918015050994"
                className="text-[#F69F11] font-semibold hover:text-amber-400 transition-colors"
              >
                +91 801 505 0994
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
