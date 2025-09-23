"use client";

import React, { useRef, useState } from "react";
import { shopCategories } from "@/Data/CategoryCategories";

const CategoryCarousel = () => {
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

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <div className="my-8 relative">
      <h2 className="text-lg font-semibold mb-4 px-4">Order Now</h2>

      <div
        ref={carouselRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide px-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } snap-x snap-mandatory`}
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={endDrag}
      >
        {shopCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center min-w-[100px] snap-start"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500 mb-2 flex-shrink-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
