"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioGalleryProps {
  images?: Array<{ src: string; alt: string; title?: string }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  marqueeRepeat?: number;
}

const defaultImages = [
  { src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=900&h=700&fit=crop&q=80", alt: "Mustache Gang Xmas — chart screenshot" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&h=700&fit=crop&q=80", alt: "Brazilian Carnival VA cover" },
  { src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&h=700&fit=crop&q=80", alt: "Beatport Top 100 placement" },
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&h=700&fit=crop&q=80", alt: "Squad release coverage" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&h=700&fit=crop&q=80", alt: "Crew studio session" },
  { src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&h=700&fit=crop&q=80", alt: "Live stage takeover" },
  { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&h=700&fit=crop&q=80", alt: "Festival main stage" },
  { src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&h=700&fit=crop&q=80", alt: "Crowd reaction" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=700&fit=crop&q=80", alt: "DJ booth" },
  { src: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=900&h=700&fit=crop&q=80", alt: "Album artwork display" },
];

export function PortfolioGallery({
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-72 md:-space-x-80",
  onImageClick,
  marqueeRepeat = 4,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = customImages || defaultImages;

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop overlapping layout */}
      <div className="hidden md:flex justify-center items-end pt-32 pb-8 overflow-hidden">
        <div className={`flex items-end ${spacing}`}>
          {images.map((image, index) => {
            const totalImages = images.length;
            const middle = Math.floor(totalImages / 2);
            const distanceFromMiddle = Math.abs(index - middle);
            const staggerOffset = maxHeight - distanceFromMiddle * 20;
            const zIndex = totalImages - distanceFromMiddle;
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset;
            const rotation = (index - middle) * 3;

            return (
              <motion.div
                key={index}
                style={{ zIndex: isHovered ? 999 : zIndex }}
                initial={{ y: 0, rotate: rotation }}
                animate={{ y: yOffset, rotate: isHovered ? 0 : rotation, scale: isHovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => onImageClick?.(index)}
                className="cursor-pointer"
              >
                <div className="w-[340px] h-[240px] rounded-2xl overflow-hidden border-2 border-[#2A2A3E] bg-[#13131F] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile marquee */}
      <div className="md:hidden overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {Array(marqueeRepeat).fill(0).map((_, i) => (
            <div key={i} className="flex gap-3 shrink-0">
              {images.map((image, index) => (
                <div
                  key={`${i}-${index}`}
                  className="w-[220px] h-[160px] rounded-xl overflow-hidden border border-[#2A2A3E] bg-[#13131F] shrink-0"
                  onClick={() => onImageClick?.(index)}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}