import { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import { APP_CONSTANTS } from "@/constants/app.constant";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${APP_CONSTANTS.name}`,
    description: product.fullDescription,
    openGraph: {
      title: product.name,
      description: product.fullDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.fullDescription,
      images: [product.image],
    },
    alternates: {
      canonical: `${APP_CONSTANTS.website.url}/products/${product.slug}`,
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
