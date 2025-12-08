"use client";

import { useState } from "react";

interface ExpandableDescriptionProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function ExpandableDescription({
  text,
  maxLength = 150,
  className = "",
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className={className}>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {displayText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden text-primary-600 font-semibold text-sm mt-2 hover:text-primary-700 transition-colors"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}

