"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface SectionImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
  fallbackSrc?: string;
}

export default function SectionImage({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackText,
  fallbackSrc,
}: SectionImageProps) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center ${className}`}
      >
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">📷</span>
          </div>
          <p className="text-gray-600 text-sm">{fallbackText || alt}</p>
        </div>
      </div>
    );
  }

  const handleError = () => {
    if (fallbackSrc && !error) {
      setImgSrc(fallbackSrc);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover rounded-lg ${className}`}
      onError={handleError}
    />
  );
}
