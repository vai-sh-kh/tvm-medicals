"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductImageGallery from "./ProductImageGallery";

interface ProductImageSectionProps {
  mainImage: string;
  galleryImages?: string[];
  productName: string;
  imagePosition?: string;
}

export default function ProductImageSection({
  mainImage,
  galleryImages = [],
  productName,
  imagePosition = "center",
}: ProductImageSectionProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  // Combine main image with gallery images, avoiding duplicates
  const allImages = [
    mainImage,
    ...galleryImages.filter((img) => img !== mainImage),
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl mb-4 overflow-hidden border border-gray-200">
        <ProductImage
          key={selectedImage}
          src={selectedImage}
          alt={productName}
          fill
          className={`object-cover object-${imagePosition}`}
          fallbackText={productName}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={true}
        />
      </div>
      {allImages.length > 1 && (
        <ProductImageGallery
          images={allImages}
          productName={productName}
          selectedImage={selectedImage}
          onImageClick={handleImageClick}
        />
      )}
    </div>
  );
}
