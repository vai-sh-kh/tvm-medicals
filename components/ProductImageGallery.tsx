"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  selectedImage?: string;
  onImageClick?: (imageSrc: string) => void;
  compact?: boolean;
}

export default function ProductImageGallery({
  images,
  productName,
  selectedImage,
  onImageClick,
  compact = false,
}: ProductImageGalleryProps) {
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const handleError = (imgSrc: string) => {
    setErrorImages((prev) => new Set(prev).add(imgSrc));
  };

  const handleClick = (img: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onImageClick) {
      onImageClick(img);
    }
  };

  // Filter out images that have failed to load
  const validImages = useMemo(() => {
    return images.filter((img) => !errorImages.has(img));
  }, [images, errorImages]);

  // Don't render if there are no valid images
  if (validImages.length === 0) {
    return null;
  }

  return (
    <div className={`grid grid-cols-4 ${compact ? "gap-2" : "gap-4"}`}>
      {validImages.map((img, idx) => {
        const isSelected = selectedImage === img;
        return (
          <div
            key={img}
            onClick={(e) => handleClick(img, e)}
            className={`relative ${
              compact ? "h-16" : "h-24"
            } bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
              isSelected
                ? "border-primary-500 ring-2 ring-primary-200"
                : "border-gray-200 hover:border-primary-400"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} - Image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 25vw"
              quality={85}
              onError={() => handleError(img)}
            />
          </div>
        );
      })}
    </div>
  );
}
