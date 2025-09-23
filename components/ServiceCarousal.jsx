"use client";

import React, { useRef, useState } from "react";
import { servicesData } from "@/Data/ServicesData";

const ServiceCarousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = startX - x;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const endDrag = () => setIsDragging(false);

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold px-4 mb-4">Our Services</h2>

      <div
        ref={carouselRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide px-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={endDrag}
      >
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[22%] min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-sm truncate">{service.name}</h3>
              <p className="text-xs text-gray-500">{service.type}</p>
              <p className="text-xs text-yellow-500 mt-1">⭐ {service.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
