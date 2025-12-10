import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { APP_CONSTANTS } from "@/constants/app.constant";
import { products } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container-custom py-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {APP_CONSTANTS.name}
            </h3>
            <p className="mb-4">{APP_CONSTANTS.website.description.short}</p>
            <p className="mb-4 text-sm text-gray-400">
              Resmed authorised dealer
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {APP_CONSTANTS.contact.location.short}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone />
                <a
                  href={APP_CONSTANTS.contact.phone.tel}
                  className="text-sm hover:text-white transition-colors"
                >
                  {APP_CONSTANTS.contact.phone.formatted}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail />
                <a
                  href={`mailto:${APP_CONSTANTS.contact.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {APP_CONSTANTS.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {products.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Product Consultation</li>
              <li>Equipment Installation</li>
              <li>Maintenance & Support</li>
              <li>Warranty Services</li>
              <li>Rental Options</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} {APP_CONSTANTS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
