"use client";

import React, { useState } from "react";
import Image from "next/image";

// demo cart items from productsData
const demoCart = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 3999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=60",
    shopName: "ElectroHub",
    category: "Mobile Phones",
  },
  {
    id: 2,
    name: "Men's Jacket",
    price: 250,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=200&q=60",
    shopName: "Fashion Avenue",
    category: "Men's Clothing",
  },
  {
    id: 3,
    name: "Pet Dog Food",
    price: 120,
    quantity: 3,
    image: "https://images.unsplash.com/photo-1601758123927-0e9b6c69f7d0?auto=format&fit=crop&w=200&q=60",
    shopName: "Pet Paradise",
    category: "Pet Food",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(demoCart);

  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.shopName}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-medium text-orange-600">AED {item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, "decrease")}
                className="px-2 py-1 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span className="font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, "increase")}
                className="px-2 py-1 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Item Total */}
            <p className="font-semibold">AED {item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="flex justify-end mt-6">
        <div className="bg-white p-4 shadow-md rounded-lg w-full sm:w-1/3">
          <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">AED {subtotal}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Fee</span>
            <span className="font-medium">AED 20</span>
          </p>
          <hr className="my-2" />
          <p className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>AED {subtotal + 20}</span>
          </p>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
