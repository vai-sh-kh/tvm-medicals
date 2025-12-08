export const APP_CONSTANTS = {
  // App Name
  name: "Trivandrum Medical System",
  
  // Logo
  logo: {
    path: "/images/logo.jpg",
    url: "https://travancoremedical.com/images/logo.png",
    alt: "Trivandrum Medical System Logo",
  },
  
  // Contact Information
  contact: {
    phone: {
      raw: "+919496714846",
      formatted: "+91 9496714846",
      tel: "tel:+919496714846",
    },
    email: "mail@trivandrummedicalsystem.com",
    location: {
      full: "Bethany Building, 1st Floor, Nalanchira Kurishadi Junction, Nalanchira P.O, Opposite Federal Bank ATM, MC Road, Trivandrum – 695015",
      short: "Nalanchira, Trivandrum, Kerala",
    },
  },
  
  // Website
  website: {
    url: "https://trivandrummedicalsystem.com",
    description: {
      default: "Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and respiratory care equipment. Quality medical devices for sleep apnea treatment and home oxygen therapy.",
      short: "Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and respiratory care equipment.",
    },
  },
  
  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
  },
  
  // SEO Keywords
  keywords: [
    "Auto CPAP",
    "BiPAP",
    "Oxygen Concentrator",
    "Sleep Apnea",
    "Respiratory Care",
    "Medical Equipment",
    "CPAP Machine",
    "Home Sleep Study",
    "NIV Mask",
    "Travel CPAP",
    "Portable Oxygen Concentrator",
    "Medical Devices India",
    "Trivandrum Medical System",
  ] as string[],
  
  // Social Media (can be expanded later)
  social: {
    // Add social media links when available
  },
} as const;

