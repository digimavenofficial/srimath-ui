"use client";

import { FEATURES } from "@/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose SRIMATH Builders?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine decades of experience with modern innovation to deliver
            exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-[#8b1e23] font-bold">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 p-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Built on Trust. Delivered with Excellence.
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Every project, every client interaction, and every detail reflects
            our commitment to being more than just a builder—we're your trusted
            partner in creating a better home.
          </p>
        </div>
      </div>
    </section>
  );
}
