import { FiShield, FiTruck, FiHeadphones } from "react-icons/fi";

export default function FeaturesSection() {
  const features = [
    {
      icon: FiShield,
      title: "Genuine Products",
      description:
        "100% authentic medical equipment from trusted manufacturers",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across India",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description: "Expert support whenever you need assistance",
    },
    {
      icon: FiShield,
      title: "Warranty",
      description: "Comprehensive warranty on all products",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom mt-2 sm:mt-4 md:mt-10">
        {/* Mobile: Horizontal Scrollable */}
        <div className="block sm:hidden">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            <div className="flex gap-2.5 min-w-max">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[220px] text-center bg-white rounded-lg p-3 border border-gray-200/50 shadow-sm"
                  >
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="text-primary-600 text-base" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-3 sm:p-4 lg:p-5 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary-100 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon className="text-primary-600 text-base sm:text-lg lg:text-xl" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
