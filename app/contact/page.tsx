import type { Metadata } from "next";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import HeroImage from "@/components/HeroImage";
import SectionImage from "@/components/SectionImage";
import MapSection from "@/components/MapSection";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${APP_CONSTANTS.name} for inquiries about medical equipment, product information, support, or service. Call us at ${APP_CONSTANTS.contact.phone.formatted}.`,
  openGraph: {
    title: `Contact Us | ${APP_CONSTANTS.name}`,
    description: `Contact ${APP_CONSTANTS.name} for medical equipment inquiries and support.`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src="/images/contact.jpg"
            alt={`Contact ${APP_CONSTANTS.name}`}
            priority
            objectPosition="center "
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative container-custom h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 drop-shadow-md">
              Get in touch with our team for product inquiries, support, or
              expert consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">
                Get in Touch
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-primary-100 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="text-primary-600 text-xl md:text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      Phone
                    </h3>
                    <a
                      href={APP_CONSTANTS.contact.phone.tel}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm md:text-base break-words"
                    >
                      {APP_CONSTANTS.contact.phone.formatted}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-primary-100 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <FiMail className="text-primary-600 text-xl md:text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${APP_CONSTANTS.contact.email}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm md:text-base break-all"
                    >
                      {APP_CONSTANTS.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-primary-100 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <FiMapPin className="text-primary-600 text-xl md:text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {APP_CONSTANTS.contact.location.full}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 p-4 md:p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <span>Monday - Friday</span>
                    <span className="font-medium">
                      {APP_CONSTANTS.businessHours.weekdays}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <span>Saturday</span>
                    <span className="font-medium">
                      {APP_CONSTANTS.businessHours.saturday}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <span>Sunday</span>
                    <span className="font-medium">
                      {APP_CONSTANTS.businessHours.sunday}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm md:text-base"
                    placeholder="Name *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm md:text-base"
                    placeholder="Email *"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm md:text-base"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400 text-sm md:text-base"
                    placeholder="Message *"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 md:mt-6 w-full px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Find Us
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our office is located in {APP_CONSTANTS.contact.location.full}.
              Visit us or reach out for any inquiries about our medical
              equipment and services.
            </p>
          </div>
        </div>

        <div className="container-custom px-0 sm:px-4">
          <MapSection />
        </div>
      </section>
    </div>
  );
}
