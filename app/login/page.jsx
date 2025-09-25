"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [role, setRole] = useState(""); // selected role

  const roles = [
    { id: "customer", label: "Customer" },
    { id: "vendor", label: "Vendor" },
    { id: "service", label: "Service Provider" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        {!role ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Welcome! Select Your Role
            </h1>
            <div className="flex flex-col gap-4">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                  {r.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center capitalize">
              {roles.find((r) => r.id === role).label} Login
            </h1>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <button
                type="submit"
                className="py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                href={`/signup/${role}`}
                className="text-orange-500 font-semibold"
              >
                Sign Up
              </Link>
            </p>

            <button
              onClick={() => setRole("")}
              className="mt-4 text-gray-500 hover:underline text-sm"
            >
              ← Back to role selection
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
