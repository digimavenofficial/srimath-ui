"use client";

import { useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          Experience Our Projects
        </h2>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vRtLYH8KwoiXId-KXd8QOsHVi57Da59UhqOwtWF5bg&s=10"
          >
            <source
              src="https://www.youtube.com/watch?v=mIeJGrJfv48"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-50"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center bg-[#F69F11] rounded-full transform transition-all duration-300 hover:scale-110">
              {isPlaying ? (
                // Pause Icon
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                // Play Icon
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 text-white ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </button>

          {/* Video Duration Indicator */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-semibold">
            2:45
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto leading-relaxed">
          Watch how we transform architectural visions into magnificent
          realities. Our construction process combines traditional craftsmanship
          with modern innovation.
        </p>
      </div>
    </section>
  );
}
