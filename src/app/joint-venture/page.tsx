import { SiteShell } from "@/components";

const whyChooseUs = [
  {
    title: "25+ Years of Construction Expertise",
    description:
      "Strong experience in the core construction field, backed by more than 25 years of industry experience.",
  },
  {
    title: "Attractive Landowner Share",
    description:
      "We aim to offer competitive and attractive sharing ratios based on each property's actual development potential.",
  },
  {
    title: "Superior Quality Materials",
    description:
      "Carefully selected construction materials and strict quality control throughout the project lifecycle.",
  },
  {
    title: "Strong In-House Team",
    description:
      "Our experienced team handles execution with close control over workmanship, coordination and project delivery.",
  },
  {
    title: "Commitment to Timely Delivery",
    description:
      "Clear planning and disciplined execution help us complete developments within the agreed timeline.",
  },
  {
    title: "Transparent Partnership",
    description:
      "Documented responsibilities, open discussion and clear terms help build confidence for both parties.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Property Discussion",
    text: "We understand the property, expectations and the landowner's development goals.",
  },
  {
    step: "02",
    title: "Site & Feasibility Study",
    text: "We review location, access, road width, development potential and market viability.",
  },
  {
    step: "03",
    title: "Development Proposal",
    text: "We prepare a suitable concept with the proposed sharing structure, project scope and timelines.",
  },
  {
    step: "04",
    title: "Agreement & Documentation",
    text: "Both parties finalize responsibilities, sharing ratio, legal documentation and project conditions.",
  },
  {
    step: "05",
    title: "Design & Approvals",
    text: "Architectural planning, structural design and statutory approvals are carried out professionally.",
  },
  {
    step: "06",
    title: "Construction",
    text: "Our in-house team handles the project from foundation work to finishing and common areas.",
  },
  {
    step: "07",
    title: "Handover",
    text: "After completion and formalities, the agreed units are identified and handed over as planned.",
  },
];

const propertyTypes = [
  "Vacant Land",
  "Old Building / Redevelopment",
  "Multiple Landowners",
  "Residential Development",
];

const benefits = [
  {
    icon: "🏠",
    title: "Homes for Your Family",
    description:
      "Retain quality apartments for your own use or future generations.",
  },
  {
    icon: "💰",
    title: "Sale Opportunity",
    description:
      "Sell your allotted units when you need funds, subject to applicable terms.",
  },
  {
    icon: "📈",
    title: "Long-Term Asset Value",
    description:
      "Hold apartments as a long-term property investment for future appreciation.",
  },
  {
    icon: "🏢",
    title: "Rental Income",
    description:
      "Rent your allotted units and generate recurring income from the asset.",
  },
  {
    icon: "🤝",
    title: "Partnership Value",
    description:
      "Benefit from your land's development potential without independently managing construction.",
  },
];

const galleryItems = [
  {
    title: "Residential Development",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern Townhomes",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Finishing",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Project Execution",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Well Planned Community",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Construction Progress",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
  },
];

const storyboardImages = Array.from({ length: 8 }, (_, index) => ({
  step: index + 1,
  src: `/images/story-board/${index + 1}.png`,
}));

const reviewVideos = [
  { title: "A clearer path for your land", caption: "JV owner review 01" },
  {
    title: "Transparent from discussion to handover",
    caption: "JV owner review 02",
  },
  { title: "A partnership built on trust", caption: "JV owner review 03" },
  { title: "Creating more value together", caption: "JV owner review 04" },
];

const faqs = [
  {
    question: "What is a Joint Venture in real estate?",
    answer:
      "A Joint Venture is a partnership where the landowner provides the land and the builder develops the property. The completed development is shared between both parties based on a mutually agreed ratio.",
  },
  {
    question: "Do I have to pay for the construction?",
    answer:
      "Generally, under the proposed JV structure, Srimath Builder takes responsibility for the development and construction costs as agreed in the JV agreement. The exact financial responsibilities will be clearly documented before the project begins.",
  },
  {
    question: "How much share will the landowner receive?",
    answer:
      "There is no single fixed percentage for every property. The share depends on the location, land extent, road width, development potential, FSI, project size and market feasibility. We evaluate each property individually and propose a suitable sharing structure.",
  },
  {
    question: "Will I continue to own my land?",
    answer:
      "The ownership and development rights will depend on the legal structure agreed between both parties. All rights, responsibilities and conditions will be clearly documented in the JV agreement.",
  },
  {
    question: "Who takes care of approvals and construction?",
    answer:
      "Srimath Builder coordinates the development process, including design, approvals, construction and project execution, as agreed in the JV documentation.",
  },
  {
    question: "Can I choose the apartments I receive?",
    answer:
      "Unit allocation can be mutually discussed and documented based on the project design and agreed sharing arrangement. The allocation process should be clearly specified in the JV agreement.",
  },
  {
    question: "How long will the project take?",
    answer:
      "The timeline depends on the project size, approvals, location and development conditions. A project-specific timeline will be discussed and documented before commencement.",
  },
  {
    question: "What happens if there is a delay?",
    answer:
      "The JV agreement will define the project timeline, responsibilities and applicable provisions relating to delays. We believe clear documentation is essential for protecting both parties.",
  },
  {
    question: "Can old buildings or multiple properties be considered?",
    answer:
      "Yes. Old-building redevelopment and multiple adjoining properties can be evaluated, provided the property has suitable development potential and meets applicable regulations.",
  },
  {
    question: "How do I start a Joint Venture discussion with Srimath Builder?",
    answer:
      "Simply contact us and share your property location, land extent and basic property details. Our team will review the opportunity, conduct a preliminary feasibility assessment and discuss the possible development options with you.",
  },
];

const reviewQuotes = [
  {
    name: "Mr. Aravind S.",
    role: "Landowner, Medavakkam",
    text: "The process was transparent from day one. They explained the land potential clearly and kept us informed every step of the way.",
  },
  {
    name: "Mrs. Kavitha R.",
    role: "Landowner, Tambaram",
    text: "We felt confident because the team was clear about approvals, timelines and the expected sharing model. It felt professional and reliable.",
  },
];

export default function JointVenturePage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f7f5] text-gray-800">
        <section className="relative overflow-hidden border-b border-[#e8ddd0] bg-[linear-gradient(135deg,#f9f5ef_0%,#f3eee6_42%,#f2efe9_100%)] text-gray-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,159,17,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(35,60,95,0.10),transparent_35%)]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,rgba(255,255,255,0.7),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.015)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.2))]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B77700]">
                Joint Venture
              </p>
              <h1 className="mt-6 text-4xl font-black leading-tight text-[#121212] sm:text-5xl lg:text-7xl">
                Your Land. Our Expertise.
                <span className="mt-2 block text-[#D98A00]">
                  A Partnership That Creates Value.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-700 sm:text-xl">
                Build More. Share More. Grow Together.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-700">
                At Srimath Builder, we partner with landowners to transform
                valuable land into well-planned residential developments. You
                bring the land. We bring the construction expertise, investment,
                professional team and execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-jv"
                  className="inline-flex items-center justify-center rounded-full bg-[#F69F11] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_25px_rgba(246,159,17,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f7b63b]"
                >
                  Discuss Your Property
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7c8b6] bg-white/60 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-white"
                >
                  Explore Process
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#eadfce] bg-white/75 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-3xl font-bold text-[#B77700]">25+</p>
                <p className="mt-2 text-sm text-gray-700">
                  Years of construction experience
                </p>
              </div>
              <div className="rounded-2xl border border-[#eadfce] bg-white/75 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-3xl font-bold text-[#B77700]">Transparent</p>
                <p className="mt-2 text-sm text-gray-700">
                  Partnership and documented process
                </p>
              </div>
              <div className="rounded-2xl border border-[#eadfce] bg-white/75 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-3xl font-bold text-[#B77700]">Shared</p>
                <p className="mt-2 text-sm text-gray-700">
                  Success through value creation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                The JV story
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                See how a Joint Venture creates more value.
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                Follow the journey in eight simple steps, from the first land
                decision to a developed asset and long-term opportunity.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {storyboardImages.map((image) => (
                <figure
                  key={image.step}
                  className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-[#faf9f5] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden bg-white p-2">
                    <img
                      src={image.src}
                      alt={`Joint Venture storyboard step ${image.step}`}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="border-t border-gray-200 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#B77700]">
                    Step {String(image.step).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                What is a Joint Venture?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                A development partnership built on shared value.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                A Joint Venture (JV) is a development partnership between a
                landowner and a builder. The landowner contributes the land,
                while Srimath Builder takes responsibility for the development,
                including planning, approvals, construction and project
                execution.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Once the project is completed, the developed apartments are
                shared between the landowner and Srimath Builder based on the
                mutually agreed sharing ratio.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F69F11]">
                In simple terms
              </p>
              <div className="mt-6 space-y-4 text-base text-gray-700">
                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <span className="font-semibold text-gray-900">
                    You provide the Land
                  </span>
                </div>
                <div className="flex justify-center text-2xl text-[#F69F11]">
                  ↓
                </div>
                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <span className="font-semibold text-gray-900">
                    We develop the Project
                  </span>
                </div>
                <div className="flex justify-center text-2xl text-[#F69F11]">
                  ↓
                </div>
                <div className="rounded-2xl bg-[#f6f7f3] p-4">
                  <span className="font-semibold text-gray-900">
                    You receive your agreed share
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-gray-600">
                The exact sharing ratio depends on factors such as location,
                land extent, road width, development potential, FSI and market
                value.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                Why choose Srimath Builder
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Your Land Deserves the Right Development Partner
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-gray-200 bg-[#faf9f6] p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fef2d5] text-xl text-[#c27a00]">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#171717] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#222222] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                    What do we take care of?
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Once the JV is finalized, our team handles the development
                    process.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-gray-300">
                    Our objective is to keep the process simple, transparent and
                    comfortable for the landowner.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Project planning & feasibility",
                    "Architectural design",
                    "Structural design",
                    "Statutory approvals",
                    "Construction & site execution",
                    "Materials & labour",
                    "Quality control",
                    "Project coordination",
                    "Common area development",
                    "Marketing & sale of builder's share",
                    "Project completion & handover",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#2d2d2d] p-4 text-sm font-medium text-gray-200 shadow-sm transition hover:border-[#F69F11]/60 hover:bg-[#333333]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                What do landowners get?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Convert your land into a long-term asset.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-gray-200 bg-[#f8f8f4] p-5 text-left shadow-sm"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f4f1eb] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                Our joint venture process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                From land evaluation to handover.
              </h2>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="space-y-5 md:hidden">
                {processSteps.map((item, index) => (
                  <div key={item.step}>
                    <div className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fef2d5] text-lg font-black text-[#a36400]">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-gray-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < processSteps.length - 1 ? (
                      <div className="py-2 text-center text-2xl text-[#b77700]">
                        ↓
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="hidden space-y-4 md:block">
                {Array.from({ length: Math.ceil(processSteps.length / 2) }).map(
                  (_, rowIndex) => {
                    const firstIndex = rowIndex * 2;
                    const secondIndex = firstIndex + 1;
                    const firstItem = processSteps[firstIndex];
                    const secondItem = processSteps[secondIndex];
                    const isForwardRow = rowIndex % 2 === 0;
                    const renderCard = (
                      item: (typeof processSteps)[number],
                    ) => (
                      <div className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fef2d5] text-lg font-black text-[#a36400]">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-gray-600">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );

                    return (
                      <div key={firstItem.step}>
                        <div className="grid grid-cols-[1fr_72px_1fr] items-center gap-4">
                          {isForwardRow ? (
                            renderCard(firstItem)
                          ) : secondItem ? (
                            renderCard(secondItem)
                          ) : (
                            <div />
                          )}
                          <span className="text-center text-4xl font-light leading-none text-[#b77700]">
                            {secondItem ? (isForwardRow ? "→" : "←") : ""}
                          </span>
                          {secondItem ? (
                            isForwardRow ? (
                              renderCard(secondItem)
                            ) : (
                              renderCard(firstItem)
                            )
                          ) : (
                            <div />
                          )}
                        </div>
                        {secondItem && firstIndex + 2 < processSteps.length ? (
                          <div
                            className={`flex py-2 text-3xl text-[#b77700] ${isForwardRow ? "justify-end pr-[22%]" : "justify-start pl-[22%]"}`}
                          >
                            ↓
                          </div>
                        ) : null}
                      </div>
                    );
                  },
                )}
              </div>
              <div className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#8c650d]">
                One clear process. One responsible development partner.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                Eligible properties
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                What types of properties can we consider?
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {propertyTypes.map((type, index) => (
                <div
                  key={type}
                  className="rounded-[1.75rem] border border-gray-200 bg-[#f7f7f4] p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d183] text-lg font-bold text-[#4d3300]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {type}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    We assess each opportunity individually based on location,
                    feasibility and regulatory viability.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                JV vs selling your land
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Why consider a joint venture?
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-left">
                <thead className="bg-[#f8f5ef]">
                  <tr>
                    <th className="px-5 py-4 text-base font-semibold text-gray-900">
                      Option
                    </th>
                    <th className="px-5 py-4 text-base font-semibold text-gray-900">
                      Outright Sale
                    </th>
                    <th className="px-5 py-4 text-base font-semibold text-gray-900">
                      Joint Venture
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm text-gray-700">
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Benefit
                    </td>
                    <td className="px-5 py-4">
                      Receive sale consideration and exit
                    </td>
                    <td className="px-5 py-4">
                      Participate in the development and receive share
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Ownership
                    </td>
                    <td className="px-5 py-4">Land ownership is transferred</td>
                    <td className="px-5 py-4">
                      Land is developed through partnership
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Future value
                    </td>
                    <td className="px-5 py-4">
                      No future share in the project
                    </td>
                    <td className="px-5 py-4">
                      Receive agreed share of completed property
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Development responsibility
                    </td>
                    <td className="px-5 py-4">Buyer develops the property</td>
                    <td className="px-5 py-4">
                      Builder and landowner share the development
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Income potential
                    </td>
                    <td className="px-5 py-4">
                      Limited future benefit from development
                    </td>
                    <td className="px-5 py-4">
                      Opportunity for rental, sale or family use
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ee] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                Reviews from JV owners
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Trusted by landowners who chose the right partnership.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {reviewVideos.map((review, index) => (
                <article
                  key={review.caption}
                  className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm"
                >
                  <video
                    controls
                    preload="metadata"
                    poster={`/images/story-board/${index + 1}.png`}
                    className="aspect-video w-full bg-[#1f1f1f] object-cover"
                  >
                    <source src="/videos/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F69F11]">
                      {review.caption}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                      {review.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Dummy video slot ready for the landowner testimonial.
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {reviewQuotes.map((review) => (
                <div
                  key={review.name}
                  className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d183] font-bold text-[#4d3300]">
                      {review.name.split(" ")[1]?.charAt(0) ?? "J"}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-base leading-8 text-gray-700">
                    “{review.text}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
              Recent works
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Gallery showcase of our recent developments.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] bg-[#1d1d1d] p-8 text-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                  Have land with potential?
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Let’s explore what your property can become.
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-300">
                  Your land may be worth more than its present value. Share your
                  property details with us and our team will get in touch to
                  understand your requirements.
                </p>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F69F11]">
                    Required details
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-gray-200">
                    <li>• Land Location</li>
                    <li>• Land Extent</li>
                    <li>• Road Width</li>
                    <li>• Your Contact Details</li>
                  </ul>
                </div>
              </div>

              <div
                id="contact-jv"
                className="rounded-[2rem] border border-gray-200 bg-[#faf9f5] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.04)] sm:p-8"
              >
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                    Enquiry form
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">
                    Submit your JV details
                  </h3>
                </div>

                <form className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Land Location
                    </label>
                    <input
                      type="text"
                      placeholder="Area / locality"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Google Maps Link
                    </label>
                    <input
                      type="url"
                      placeholder="Paste the Google Maps link for your property"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Land Extent
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1500 sq.ft / 2000 sq.ft"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Road Width
                    </label>
                    <input
                      type="text"
                      placeholder="Road width"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Property Type
                    </label>
                    <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]">
                      <option>Vacant Land</option>
                      <option>Old Building / Redevelopment</option>
                      <option>Residential Development</option>
                      <option>Multiple Landowners</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Project Notes
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your land and development idea"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#f8d58a]"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#F69F11] px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f7b63b]"
                    >
                      Submit Property Details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#f3f0e9] px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
              Built on trust. Backed by experience.
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Land. Our Expertise. Our Shared Success.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-700">
              Experience → Quality → Transparency → Execution → Timely Delivery.
              With 25+ years of construction experience, we understand that a
              successful JV is one where both the landowner and builder benefit
              from the project.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F69F11]">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
