"use client";

import { useEffect, useRef, useState } from "react";
import { STATISTICS } from "@/constants";

function StatCounter({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
          const suffix = value.replace(/[0-9]/g, "");

          let current = 0;
          const increment = Math.ceil(numericValue / 50);
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(current + suffix);
            }
          }, 20);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, isVisible]);

  return (
    <div
      ref={ref}
      className="text-center p-6 sm:p-8 rounded-lg bg-gray-50 hover:bg-[#8b1e23] hover:text-white transition-all duration-300"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-[#8b1e23] hover:text-white transition-colors">
        {displayValue}
      </div>
      <p className="text-gray-600 hover:text-white/90 transition-colors font-semibold">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          Our Track Record
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
