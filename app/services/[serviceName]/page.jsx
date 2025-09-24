"use client";

import React from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/Data/ServicesData";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ServicePage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceName = decodeURIComponent(params.serviceName);

  // Find the service
  const service = servicesData.find((s) => s.name === serviceName);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold">Service not found</h2>
      </div>
    );
  }

  const handleBookNow = (categoryName) => {
    router.push(`/booking/${encodeURIComponent(service.name)}/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Main Service Info */}
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={service.image.startsWith("http") ? service.image : `/${service.image}`}
          alt={service.name}
          fill
          style={{ objectFit: "cover", borderRadius: "0.5rem" }}
        />
      </div>
      <p className="text-gray-700 mb-2">{service.description}</p>
      <p className="text-gray-700 mb-2">
        <strong>Type:</strong> {service.type} | <strong>Duration:</strong> {service.duration} | <strong>Price:</strong> AED {service.price}
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Rating:</strong> ⭐ {service.rating}
      </p>

      {/* Categories / Sub-services */}
      <h2 className="text-2xl font-semibold mb-4">Available Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full h-40">
              <Image
                src={cat.image.startsWith("http") ? cat.image : `/${cat.image}`}
                alt={cat.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <button
                onClick={() => handleBookNow(cat.name)}
                className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
