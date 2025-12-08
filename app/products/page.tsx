import Link from "next/link";
import { products } from "@/data/products";
import HeroImage from "@/components/HeroImage";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of medical equipment including Auto CPAP, BiPAP, Oxygen Concentrators, Travel CPAP, Portable Oxygen Concentrators, Home Sleep Study devices, and NIV Masks.",
  openGraph: {
    title: `Medical Equipment Products | ${APP_CONSTANTS.name}`,
    description:
      "Complete range of medical equipment for sleep apnea treatment and respiratory care.",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src="/img/products.jpg"
            alt="Our Products - Medical Equipment"
            objectPosition="top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40  to-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight drop-shadow-lg">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 drop-shappdow-md">
              Premium medical equipment for sleep apnea treatment and
              respiratory care
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      {/*
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors border border-gray-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-10 sm:py-12 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Medical Equipment for Sleep Apnea and Respiratory Care
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {APP_CONSTANTS.name} offers a comprehensive range of medical
              equipment designed to improve the quality of life for patients
              with sleep apnea and respiratory conditions.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Auto CPAP Machines
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Advanced automatic continuous positive airway pressure devices
                  that adjust pressure levels throughout the night for optimal
                  sleep apnea treatment.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  BiPAP Machines
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Bi-level positive airway pressure devices providing
                  comfortable respiratory support with dual pressure settings.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Oxygen Concentrators
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Reliable stationary and portable oxygen concentrators for
                  continuous home oxygen therapy.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Travel CPAP
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Compact, portable CPAP machines perfect for maintaining
                  therapy while traveling.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Portable Oxygen Concentrators
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Lightweight, battery-powered devices for active patients
                  requiring supplemental oxygen.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Home Sleep Study Devices
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Comprehensive home sleep testing solutions for convenient
                  sleep apnea diagnosis.
                </p>
              </div>
              <div className="pb-3 sm:pb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  NIV Masks
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Comfortable and effective non-invasive ventilation masks for
                  CPAP/BiPAP therapy.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              All our products are sourced from world-renowned manufacturers and
              come with comprehensive warranty and support services. Contact us
              today to find the perfect medical equipment solution for your
              needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
