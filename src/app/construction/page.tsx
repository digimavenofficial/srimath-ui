import { SiteShell } from "@/components";

export default function ConstructionPage() {
  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F69F11]">
              Construction Services
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Building spaces that stand the test of time.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-600">
              We deliver premium residential and commercial construction with a
              strong focus on planning, quality execution, and customer
              confidence.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Design & Planning",
                  text: "Site evaluation, structural planning, and practical layouts crafted for long-term value.",
                },
                {
                  title: "Execution Excellence",
                  text: "On-site coordination, material quality checks, and disciplined project supervision.",
                },
                {
                  title: "Handover Support",
                  text: "Transparent updates, quality audits, and a smooth final handover experience for every client.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-[#FFF7E8] p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Why clients choose us
              </h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>• Timely execution with controlled project milestones</li>
                <li>• Premium materials and proven construction standards</li>
                <li>
                  • Clear communication and cost transparency throughout the
                  build
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
