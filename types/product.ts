export interface Product {
  id: string;
  name: string;
  slug: string;
  label?: string; // Optional label to display below product name
  fullDescription: string;
  features: string[];
  benefits?: string[];
  whatsIncluded?: string[];
  image: string;
  cardImage?: string; // Optional image to show in product listing cards
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}
