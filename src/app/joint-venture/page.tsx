import { SiteShell } from "@/components";

export default function JointVenturePage() {
  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F69F11]">
              Strategic Partnerships
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Joint venture partnerships for scalable growth.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-600">
              We collaborate with trusted partners to accelerate development,
              unlock opportunities, and create stronger projects with shared
              vision and accountability.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Partnership Model
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Flexible collaboration structures designed for land
                  development, project execution, and market expansion across
                  residential and commercial segments.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shared Success
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Transparent planning, shared accountability, and aligned
                  decision-making help every partnership move forward with
                  confidence.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-[#F2F6FF] p-8">
              <h2 className="text-2xl font-bold text-gray-900">Our approach</h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li>
                  • Clear objectives and mutually beneficial project alignment
                </li>
                <li>• Reliable execution with strong operational discipline</li>
                <li>
                  • Long-term value creation backed by market insight and
                  planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
