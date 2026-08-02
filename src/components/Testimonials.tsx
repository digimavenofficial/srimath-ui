"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(TESTIMONIALS.length / testimonialsPerView) - 1;
      return prev < maxIndex ? prev + 1 : 0;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(TESTIMONIALS.length / testimonialsPerView) - 1;
      return prev > 0 ? prev - 1 : maxIndex;
    });
  };

  const getVisibleTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < testimonialsPerView; i++) {
      testimonials.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);
    }
    return testimonials;
  };

  const visibleTestimonials = getVisibleTestimonials();
  const totalSlides = Math.ceil(TESTIMONIALS.length / testimonialsPerView);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real stories from our satisfied clients who chose SRIMATH Builders
            for their dream homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-700/50 p-8 rounded-xl backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#F69F11] text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote Icon */}
              <svg
                className="w-8 h-8 text-[#F69F11] mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5S0 5 0 7c0 3 1.5 4 3 4s-1 1-1 3c0 2 0 4 2 5s4 2 6 2z" />
              </svg>

              {/* Testimonial Text */}
              <p className="text-gray-100 text-lg mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                {testimonial.designation && (
                  <p className="text-gray-400 text-sm">
                    {testimonial.designation}
                  </p>
                )}
                <p className="text-[#F69F11] text-sm font-semibold mt-1">
                  {testimonial.projectName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full border-2 border-[#F69F11] text-[#F69F11] hover:bg-[#F69F11] hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#F69F11] w-8" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full border-2 border-[#F69F11] text-[#F69F11] hover:bg-[#F69F11] hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
