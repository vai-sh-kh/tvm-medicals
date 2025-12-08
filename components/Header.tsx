"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { APP_CONSTANTS } from "@/constants/app.constant";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_LINKS = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
              <Image
                src={APP_CONSTANTS.logo.path}
                alt={APP_CONSTANTS.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1B3B6F]">
              {APP_CONSTANTS.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1E5A9A] hover:text-[#2A4A7F] transition-colors font-medium border-b-2 border-transparent hover:border-[#2A4A7F]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={APP_CONSTANTS.contact.phone.tel}
              className="flex items-center space-x-2 text-[#2A4A7F] hover:text-[#1E5A9A] font-semibold border-b-2 border-transparent hover:border-[#1E5A9A] transition-all"
            >
              <FiPhone />
              <span>{APP_CONSTANTS.contact.phone.formatted}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={APP_CONSTANTS.contact.phone.tel}
              className="flex items-center space-x-2 text-primary-600 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiPhone />
              <span>{APP_CONSTANTS.contact.phone.formatted}</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
