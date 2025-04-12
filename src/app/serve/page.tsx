"use client";
import Image from "next/image";
import { images } from "@/constants";

export default function ServicesPage() {
  const services = [
    {
      title: "Dialysis Services",
      description:
        "We offer both hemodialysis and peritoneal dialysis with personalized treatment plans and state-of-the-art equipment.",
      image: images.imgd1,
    },
    {
      title: "Kidney Disease Management",
      description:
        "From chronic kidney disease to acute renal failure, we manage all stages with a comprehensive and compassionate approach.",
      image: images.imgd2,
    },
    {
      title: "Transplant Coordination",
      description:
        "We assist with kidney transplant preparation, referrals, and post-operative monitoring for long-term success.",
      image: images.imgd3,
    },
    {
      title: "Laboratory & Diagnostics",
      description:
        "Advanced diagnostic tools including renal function testing, imaging, and lab services ensure accurate and timely results.",
      image: images.imgd4,
    },
    {
      title: "Hypertension & Diabetes Care",
      description:
        "Our integrated care includes managing underlying conditions like high blood pressure and diabetes that affect kidney health.",
      image: images.imgd5,
    },
    {
      title: "Nutritional Counseling",
      description:
        "Renal-friendly dietary plans and expert guidance from certified renal dietitians to support your kidney health journey.",
      image: images.imgd6,
    },
  ];

  return (
    <div className="min-h-screen pt-30 pb-28 px-6 md:px-16 lg:px-32 bg-white">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg">
          At Nah-Sekey Renal Institute, we provide comprehensive renal care and support services tailored to meet your unique health needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
