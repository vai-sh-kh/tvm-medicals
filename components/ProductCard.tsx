"use client";

import Link from "next/link";
import { useState } from "react";
import ProductImage from "./ProductImage";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Use cardImage if available, otherwise fall back to product.image
  const defaultImage = product.cardImage || product.image;
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate description
  const maxLength = 120;
  const shouldTruncate = product.fullDescription.length > maxLength;
  const displayDescription = isExpanded
    ? product.fullDescription
    : product.fullDescription.slice(0, maxLength) + "...";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-400 hover:-translate-y-1 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-56 sm:h-64 md:h-72 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        <ProductImage
          src={defaultImage}
          alt={product.name}
          fill
          objectPosition="top"
          objectFit={product.objectFit || "cover"}
          showFallback={false}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col">
        {/* Product Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary-600 transition-colors text-gray-900 leading-tight">
          {product.name}
        </h3>
        {/* Product Label */}
        {product.label && (
          <p className="text-sm sm:text-base text-primary-600 font-medium mb-2 sm:mb-3">
            {product.label}
          </p>
        )}

        {/* Description with Show More/Less */}
        {product.fullDescription && (
          <div className="mb-3 sm:mb-4 flex-1">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="mt-2 text-primary-600 hover:text-primary-700 text-sm sm:text-base font-medium underline transition-colors"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className="text-primary-600 font-bold text-xs sm:text-sm inline-flex items-center group-hover:gap-2 gap-1.5 transition-all">
            View Details
            <span className="group-hover:translate-x-1 transition-transform text-sm sm:text-base">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
