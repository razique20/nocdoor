"use client";

import React from "react";
import Image from "next/image";

// demo orders data
const demoOrders = [
  {
    id: "ORD-1001",
    orderDate: "2025-09-25",
    status: "Delivered",
    total: 1370,
    products: [
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
    ],
  },
  {
    id: "ORD-1002",
    orderDate: "2025-09-20",
    status: "Pending",
    total: 420,
    products: [
      {
        id: 3,
        name: "Pet Dog Food",
        price: 120,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1601758123927-0e9b6c69f7d0?auto=format&fit=crop&w=200&q=60",
        shopName: "Pet Paradise",
        category: "Pet Food",
      },
    ],
  },
];

export default function OrdersPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      {demoOrders.length === 0 ? (
        <p className="text-gray-500 text-center">You have no orders yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {demoOrders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
              {/* Order Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-semibold">Order ID: {order.id}</h2>
                  <p className="text-sm text-gray-500">Date: {order.orderDate}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Products List */}
              <div className="flex flex-col gap-4 border-t border-gray-200 pt-4">
                {order.products.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 justify-between"
                  >
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
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.shopName}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-orange-600 font-semibold">
                          AED {item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">AED {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="flex justify-end mt-4 font-bold text-lg">
                Total: AED {order.total}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
