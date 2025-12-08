"use client";

import { useState } from "react";
import { FiCheck, FiPackage, FiHeart, FiActivity } from "react-icons/fi";
import type { Product } from "@/types/product";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: FiActivity },
    { id: "features", label: "Features", icon: FiCheck },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors text-sm sm:text-base ${
                activeTab === tab.id
                  ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6 md:p-8">
        {activeTab === "overview" && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Product Overview
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                {product.fullDescription}
              </p>
            </div>
            {product.benefits && product.benefits.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Key Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {product.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <FiCheck
                        className="text-primary-600 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product.whatsIncluded && product.whatsIncluded.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  What&apos;s Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {product.whatsIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <FiPackage
                        className="text-primary-600 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "features" && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Product Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg"
                >
                  <FiCheck className="text-primary-600 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
