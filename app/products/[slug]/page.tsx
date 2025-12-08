import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getProductBySlug,
  getAllProductSlugs,
  products,
} from "@/data/products";
import { FiPhone, FiCheck, FiArrowLeft } from "react-icons/fi";
import StructuredData from "@/components/StructuredData";
import ProductTabs from "@/components/ProductTabs";
import ProductImageSection from "@/components/ProductImageSection";
import { APP_CONSTANTS } from "@/constants/app.constant";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products (excluding current)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const productStructuredData = {
    name: product.name,
    description: product.fullDescription,
    image: `${APP_CONSTANTS.website.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: APP_CONSTANTS.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: APP_CONSTANTS.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="Product" data={productStructuredData} />

      {/* Breadcrumb */}
      <section className="bg-white py-3 sm:py-4 border-b sticky top-20 z-10">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary-600 whitespace-nowrap"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/products"
              className="text-gray-600 hover:text-primary-600 whitespace-nowrap"
            >
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="bg-white py-6 sm:py-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <FiArrowLeft />
            <span>Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Product Images */}
            <div>
              <ProductImageSection
                mainImage={product.image}
                galleryImages={product.images}
                productName={product.name}
                imagePosition={product.position}
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-gray-900">
                {product.name}
              </h1>
              {/* Product Label */}
              {product.label && (
                <p className="text-base sm:text-lg md:text-xl text-primary-600 font-medium mb-3 sm:mb-4">
                  {product.label}
                </p>
              )}

              {/* Key Highlights */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-primary-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-primary-100">
                  <h3 className="text-base sm:text-lg font-semibold text-primary-900 mb-2 sm:mb-3">
                    Key Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <FiCheck
                          className="text-primary-600 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a
                  href={APP_CONSTANTS.contact.phone.tel}
                  className="btn-primary w-full text-center block text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <FiPhone />
                    <span>Call for Price & Details</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ProductTabs product={product} />
        </div>
      </section>
    </div>
  );
}
