import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  title: {
    default: `${APP_CONSTANTS.name} - Premium Medical Equipment`,
    template: `%s | ${APP_CONSTANTS.name}`,
  },
  description: APP_CONSTANTS.website.description.default,
  keywords: [...APP_CONSTANTS.keywords],
  authors: [{ name: APP_CONSTANTS.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: APP_CONSTANTS.website.url,
    siteName: APP_CONSTANTS.name,
    title: `${APP_CONSTANTS.name} - Premium Medical Equipment`,
    description: APP_CONSTANTS.website.description.short,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: APP_CONSTANTS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_CONSTANTS.name} - Premium Medical Equipment`,
    description: APP_CONSTANTS.website.description.short,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: APP_CONSTANTS.logo.path,
    apple: APP_CONSTANTS.logo.path,
  },
};

const organizationData = {
  name: APP_CONSTANTS.name,
  url: APP_CONSTANTS.website.url,
  logo: APP_CONSTANTS.logo.url,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: APP_CONSTANTS.contact.phone.formatted,
    contactType: "Sales",
    areaServed: "IN",
    availableLanguage: "en",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Kerala",
  },
  sameAs: APP_CONSTANTS.social
    ? Object.values(APP_CONSTANTS.social).filter(Boolean)
    : [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={APP_CONSTANTS.website.url} />
        <link rel="icon" href={APP_CONSTANTS.logo.path} type="image/jpeg" />
        <link rel="apple-touch-icon" href={APP_CONSTANTS.logo.path} />
        <meta name="theme-color" content="#1e40af" />
        <StructuredData type="Organization" data={organizationData} />
        <StructuredData
          type="WebSite"
          data={{
            name: APP_CONSTANTS.name,
            url: APP_CONSTANTS.website.url,
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${APP_CONSTANTS.website.url}/products?search={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
