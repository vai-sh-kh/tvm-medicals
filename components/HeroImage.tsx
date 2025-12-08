"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function HeroImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  priority = false,
  objectPosition = "center",
}: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && !error) {
      setImgSrc(fallbackSrc);
      setError(true);
    } else {
      setError(true);
    }
  };

  if (error && !fallbackSrc) {
    return (
      <div
        className={`relative w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <p className="text-gray-600 font-medium">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
        onError={handleError}
        sizes="100vw"
      />
    </div>
  );
}
