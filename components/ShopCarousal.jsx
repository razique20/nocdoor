"use client";

import React, { useRef, useState } from "react";
import { shopsData } from "@/Data/ShopsData";
import Link from "next/link";

const ShopCarousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start drag / swipe
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // While dragging / swiping
  const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = startX - x;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  // End drag
  const endDrag = () => setIsDragging(false);

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold px-4 mb-4">Popular Shops</h2>
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
        {shopsData.map((shop) => (
         
         <div
  key={shop.id}
  className="flex-shrink-0 w-[22%] min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
>
         <Link href={`/shops/${encodeURIComponent(shop.name)}`} className="block">
    <img
      src={shop.image}
      alt={shop.name}
      className="w-full h-32 object-cover"
    />
    <div className="p-2">
      <h3 className="font-semibold text-sm truncate">{shop.name}</h3>
      <p className="text-xs text-gray-500">{shop.type}</p>
    </div>
  </Link>
  </div>


        ))}
      </div>
    </div>
  );
};

export default ShopCarousel;
