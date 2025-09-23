"use client";

import React from "react";

const promotionsData = [
  {
    id: 1,
    title: "50% Off Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Get Free Delivery",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60",
    cta: "Order Now",
  },
];

const PromotionsBanner = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row gap-4 my-8 px-4 py-6 rounded-xl">
      {promotionsData.map((promo) => (
        <div
          key={promo.id}
          className="relative w-full md:w-1/2 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center"
        >
          <img
            src={promo.image}
            alt={promo.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h3 className="text-white text-lg md:text-2xl font-bold mb-2 text-center drop-shadow-lg">
              {promo.title}
            </h3>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              {promo.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotionsBanner;
