"use client";

import React from "react";
import { useParams } from "next/navigation";
import { shopsData } from "@/Data/ShopsData";
import Image from "next/image";
import Link from "next/link";

const ShopPage = () => {
  const params = useParams();
  const shopName = decodeURIComponent(params.shopName);

  const shop = shopsData.find((s) => s.name === shopName);

  if (!shop) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold">Shop not found</h2>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Shop Header: Image + Info */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden mb-6">
        {/* Shop Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src={`/${shop.image}`}
            alt={shop.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Shop Info */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-2">
          <h1 className="text-4xl font-extrabold mb-2">{shop.name}</h1>
          <p className="text-gray-700"><strong>Type:</strong> {shop.type}</p>
          <p className="text-gray-700"><strong>Location:</strong> {shop.place}</p>
          <p className="text-gray-700"><strong>Rating:</strong> ⭐ {shop.rating}</p>
          <p className="text-gray-700"><strong>Delivery:</strong> {shop.deliveryTime}</p>
          <p className="text-gray-700"><strong>Service Fee:</strong> AED {shop.serviceFee}</p>
          <p className="text-gray-700"><strong>Min Order:</strong> AED {shop.minOrder}</p>
        </div>
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {shop.categories.map((cat, index) => (
          <Link href={`/shop/${encodeURIComponent(shop.name)}/${cat.id}`}>
          <div
            key={cat.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition transform cursor-pointer"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 mb-2">
              <Image src={cat.image} alt={cat.name} fill className="object-cover" />
            </div>
            <p className="text-sm text-center font-medium">{cat.name}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
