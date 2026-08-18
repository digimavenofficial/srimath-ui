import { SiteShell } from "@/components";

type ConstructionPackage = {
  name: string;
  price: string;
  sections: string[];
  specifications: string[];
};

const packageSections = [
  "Design & Drawings",
  "Structure",
  "Kitchen",
  "BathRoom",
  "Doors & Windows",
  "Painting",
  "Flooring",
  "Electrical",
  "Others",
];

const constructionPackages: ConstructionPackage[] = [
  {
    name: "Basic Package",
    price: "Rs 2299",
    sections: packageSections,
    specifications: [
      "Steel - Kamachi or Equivalent",
      "Ceramic Wall Dado - Upto Rs 40 per sqft",
      "Ceramic Wall Dado upto 7' height - Rs 40 per sqft",
      "Windows - Aluminium Windows with glass and mesh shutters (3 track with 1 mesh) Jindal or equivalent",
      "Living & Dining flooring - Tiles of value upto Rs 50 per sqft",
      "Wires - Fireproof wires from Finolex or equivalent",
      "Overhead tank - Double layered, 1000 Ltrs Sunplast or equivalent",
      "Main sink faucet - Upto Rs 1300",
      "Sanitarywares and CP fittings upto Rs 30,000 per 1000 sqft (Hindware or equivalent)",
      "Main door - Teak door with teak frame of 5 inch x 3 inch, worth Rs 20,000 including fixtures",
      "Rooms & Kitchen flooring - Tiles upto Rs 50 per sqft",
      "Switches & sockets - Anchor Ziva or equivalent",
      "Underground sump - 4000 Ltrs",
      "Internal doors - Membrane or flush doors with laminates upto Rs 9,000 including fixtures; sal wood frame 4 inch x 2.5 inch",
      "Balcony and open area flooring - Anti-skid tiles value Rs 40 per sqft",
      "Staircase railing - MS railing",
      "Kitchen sink - Stainless steel or granite finish worth Rs 3000",
      "Staircase flooring - Granite value Rs 70 per sqft",
      "Parking tiles - Anti-skid tiles value Rs 40 per sqft",
      "Interior painting - JK Putty + Tractor Emulsion or equivalent",
      "Cement - Dalmia or Zuari or equivalent, 43 or 53 grade",
      "CPVC pipe - Astral or equivalent",
      "Exterior painting - Asian primer + Apex exterior emulsion or equivalent",
      "Aggregates - 20mm and 40mm",
      "Any other faucet or accessories - ISI marked",
      "Blocks - Solid concrete blocks 6 inch and 4 inch",
      "Bathroom doors - Waterproof flush doors or WPC",
      "Window grills - Basic MS grill with enamel paint @ Rs 220 per sqft",
      "RCC design mix - M20/M25 as per structural designer recommendation",
      "Ceiling height - 10 feet (finished floor level to finished floor level)",
      "Architectural layout | 2D",
      "Basic elevation",
      "Structural design",
      "3D elevation",
    ],
  },
  {
    name: "Classic Package",
    price: "Rs 2499",
    sections: packageSections,
    specifications: [
      "Steel - ARS or equivalent",
      "Ceramic Wall Dado - Upto Rs 60 per sqft",
      "Ceramic Wall Dado upto 7' height - Rs 60 per sqft",
      "Windows - UPVC windows with glass and mesh shutters (3 track with 1 mesh) Prominance or equivalent",
      "Living & Dining flooring - Tiles or granite value upto Rs 100 per sqft",
      "Wires - Fireproof wires from Finolex or equivalent",
      "Overhead tank - Double layered, 1500 Ltrs Sunplast or equivalent",
      "Main sink faucet - Upto Rs 2000",
      "Sanitarywares and CP fittings upto Rs 50,000 per 1000 sqft (Parryware or equivalent)",
      "Main door - Teak door with teak frame of 5 inch x 3 inch, worth Rs 30,000 including fixtures",
      "Rooms & Kitchen flooring - Tiles value upto Rs 80 per sqft",
      "Switches & sockets - Anchor Roma or equivalent",
      "Underground sump - 6000 Ltrs",
      "Internal doors - Membrane or flush doors with laminates upto Rs 9,000 including fixtures; sal wood frame 4 inch x 2.5 inch",
      "Balcony and open area flooring - Anti-skid tiles value Rs 60 per sqft",
      "Staircase railing - MS railing",
      "Kitchen sink - Stainless steel or granite finish worth Rs 6000",
      "Staircase flooring - Granite value Rs 80 per sqft",
      "Parking tiles - Anti-skid tiles value Rs 50 per sqft",
      "Interior painting - JK Putty + Tractor Shyne Emulsion or equivalent",
      "Cement - Dalmia or Zuari or equivalent, 43 or 53 grade",
      "CPVC pipe - Ashirwad or equivalent",
      "Exterior painting - Asian primer + Apex exterior emulsion or equivalent",
      "Electrical drawings",
      "Plumbing drawings",
      "Aggregates - 20mm and 40mm",
      "Any other faucet or accessories - ISI marked",
      "Blocks - Solid concrete blocks 6 inch and 4 inch",
      "Bathroom doors - Waterproof flush doors or WPC",
      "Window grills - Basic MS grill with enamel paint @ Rs 220 per sqft",
      "RCC design mix - M20/M25 as per structural designer recommendation",
      "Ceiling height - 10 feet (finished floor level to finished floor level)",
      "Architectural layout | 2D",
      "Basic elevation",
      "Structural design",
      "3D elevation",
    ],
  },
  {
    name: "Premium Package",
    price: "Rs 2999",
    sections: packageSections,
    specifications: [
      "Steel - Tata or equivalent",
      "Ceramic Wall Dado - Upto Rs 80 per sqft",
      "Ceramic Wall Dado upto 7' height - Rs 80 per sqft",
      "Windows - UPVC windows with glass and mesh shutters (3 track with 1 mesh) NCL Veka or equivalent",
      "Living & Dining flooring - Tiles, granite, or marble value upto Rs 140 per sqft",
      "Switches & sockets - GM Modular or equivalent",
      "Overhead tank - Double layered, 2000 Ltrs Sintex/Supreme",
      "Main sink faucet - Upto Rs 3500",
      "Sanitarywares and CP fittings upto Rs 70,000 per 1000 sqft (Jaquar or equivalent)",
      "Main door - Teak door with teak frame of 5 inch x 3.5 inch, worth Rs 40,000 including fixtures",
      "Rooms & Kitchen flooring - Tiles, granite, or marble value upto Rs 120 per sqft",
      "UPS wiring provision",
      "Underground sump - 7000 Ltrs",
      "Internal doors - Membrane or flush doors with laminates upto Rs 12,000 including fixtures; sal wood frame 4 inch x 3 inch",
      "Balcony and open area flooring - Anti-skid tiles value Rs 80 per sqft",
      "Staircase railing - SS railing of SS304 grade profiles",
      "Kitchen sink - Stainless steel or granite finish worth Rs 8000 (Futura or equivalent)",
      "Staircase flooring - Granite value Rs 100 per sqft",
      "Parking tiles - Anti-skid tiles value Rs 70 per sqft",
      "Interior painting - JK Putty + Apcolite Premium Emulsion or equivalent",
      "Cement - Coramandal or Ultratech or equivalent, 43 or 53 grade",
      "CPVC pipe - Ashirwad or equivalent",
      "Exterior painting - Asian primer + Apex exterior emulsion or equivalent",
      "Electrical drawings",
      "Plumbing drawings",
      "Aggregates - 20mm and 40mm",
      "Any other faucet or accessories - ISI marked",
      "Blocks - Solid concrete blocks 6 inch and 4 inch",
      "Bathroom doors - Waterproof flush doors or WPC",
      "Window grills - Basic MS grill with enamel paint @ Rs 220 per sqft",
      "RCC design mix - M20/M25 as per structural designer recommendation",
      "Ceiling height - 10 feet (finished floor level to finished floor level)",
      "Architectural layout | 2D",
      "Basic elevation",
      "Structural design",
      "3D elevation",
    ],
  },
  {
    name: "Super Premium Package",
    price: "Rs 3499",
    sections: packageSections,
    specifications: [
      "Steel - Tata or equivalent",
      "Ceramic Wall Dado - Upto Rs 90 per sqft",
      "Ceramic Wall Dado upto 7' height - Rs 80 per sqft",
      "Windows - UPVC windows with glass and mesh shutters (3 track with 1 mesh) Fenesta or equivalent",
      "Living & Dining flooring - Tiles, granite, or marble value upto Rs 160 per sqft",
      "Switches & sockets - Legrand Myrius or equivalent",
      "Overhead tank - Double layered, 2000 Ltrs Sintex/Supreme",
      "Main sink faucet - Upto Rs 3500",
      "Sanitarywares and CP fittings upto Rs 80,000 per 1000 sqft (Jaquar or equivalent)",
      "Main door - Teak door with teak frame of 5 inch x 3.5 inch, worth Rs 50,000 including fixtures",
      "Rooms & Kitchen flooring - Tiles, granite, or marble value upto Rs 140 per sqft",
      "UPS wiring provision",
      "Underground sump - 8000 Ltrs",
      "Internal doors - Membrane or flush doors with laminates upto Rs 13,000 including fixtures; sal wood frame 4 inch x 3 inch",
      "Balcony and open area flooring - Anti-skid tiles value Rs 90 per sqft",
      "Staircase railing - SS glass railing of SS304 grade profiles",
      "Kitchen sink - Stainless steel or granite finish worth Rs 8000 (Futura or equivalent)",
      "Staircase flooring - Granite value Rs 120 per sqft",
      "Parking tiles - Anti-skid tiles value Rs 70 per sqft",
      "Interior painting - JK Putty + Royale Luxury Emulsion or equivalent",
      "Cement - Coramandal or Ultratech or equivalent, 43 or 53 grade",
      "CPVC pipe - Ashirwad or equivalent",
      "Exterior painting - Asian primer + Apex Ultima Exterior Emulsion or equivalent",
      "Electrical drawings",
      "Plumbing drawings",
      "Aggregates - 20mm and 40mm",
      "Any other faucet or accessories - ISI marked",
      "Blocks - Solid concrete blocks 6 inch and 4 inch",
      "Bathroom doors - Waterproof flush doors or WPC",
      "Window grills - Basic MS grill with enamel paint @ Rs 220 per sqft",
      "RCC design mix - M20/M25 as per structural designer recommendation",
      "Ceiling height - 10 feet (finished floor level to finished floor level)",
      "Architectural layout | 2D",
      "Basic elevation",
      "Structural design",
      "3D elevation",
    ],
  },
];

export default function ConstructionPage() {
  return (
    <SiteShell>
      <section className="bg-[linear-gradient(180deg,#fff8ea_0%,#ffffff_35%)] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.25rem] border border-amber-100 bg-white p-8 shadow-[0_28px_70px_rgba(191,120,8,0.12)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C27A00]">
              Construction Packages
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Choose the right package for your build.
            </h1>
            <p className="mt-5 max-w-4xl text-lg text-gray-600">
              Explore our package options with transparent pricing and detailed
              material specifications. Every package is crafted for dependable
              quality, practical design, and clean execution.
            </p>

            <div className="mt-12 grid gap-8 xl:grid-cols-2">
              {constructionPackages.map((pkg, idx) => (
                <article
                  key={pkg.name}
                  className="group rounded-[2rem] border border-[#F2D9AD] bg-[#FFFCF5] p-6 shadow-[0_12px_35px_rgba(154,103,16,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(154,103,16,0.16)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {pkg.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-600">
                        Complete scope with detailed inclusions
                      </p>
                    </div>
                    <div
                      className="rounded-2xl bg-[#F69F11] px-4 py-2 text-right text-gray-900 shadow-[0_10px_24px_rgba(246,159,17,0.35)] motion-safe:animate-pulse"
                      style={{ animationDelay: `${idx * 220}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.18em]">
                        Starting From
                      </p>
                      <p className="text-2xl font-black">{pkg.price}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pkg.sections.map((section) => (
                      <span
                        key={`${pkg.name}-${section}`}
                        className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-900"
                      >
                        {section}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-100 bg-white p-4">
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#A86700]">
                      Inclusions
                    </h3>
                    <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 sm:grid-cols-2">
                      {pkg.specifications.map((spec) => (
                        <li key={`${pkg.name}-${spec}`} className="flex gap-2">
                          <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[#F69F11]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
