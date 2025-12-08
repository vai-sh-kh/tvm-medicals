"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function MapSection() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative shadow-2xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 rounded-lg">
      {/* {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
          <div className="flex flex-col items-center space-y-4">
            <FaSpinner className="w-10 h-10 animate-spin text-primary-600" />
            <p className="text-gray-600 text-sm font-medium">Loading map...</p>
          </div>
        </div>
      )} */}

      <iframe
        src="https://www.google.com/maps?q=Bethany+Building,+1st+Floor,+Nalanchira+Kurishadi+Junction,+Nalanchira+P.O,+Opposite+Federal+Bank+ATM,+MC+Road,+Trivandrum+695015&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
