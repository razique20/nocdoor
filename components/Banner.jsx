"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full max-w-[90%] items-center justify-center mx-auto overflow-hidden bg-gray-100">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Animated Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2"
          >
            Discover Amazing Deals
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-white text-md md:text-lg drop-shadow-md"
          >
            Shop from hundreds of categories and services
          </motion.p>
        </div>
      </div>

      {/* Ads / Small banners */}
      {/* <div className="flex gap-4 px-4 py-6 overflow-x-auto scrollbar-hide">
        {[1, 2, 3, 4].map((ad) => (
          <div
            key={ad}
            className="min-w-[200px] md:min-w-[250px] h-32 md:h-40 bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={`https://source.unsplash.com/400x300/?shopping,store&sig=${ad}`}
              alt={`Ad ${ad}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Banner;
