"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const params = useParams();
  const router = useRouter();
  const role = params.role; // customer, vendor, service
  const [formData, setFormData] = useState({});

  const roleLabel =
    role === "customer"
      ? "Customer"
      : role === "vendor"
      ? "Vendor"
      : "Service Provider";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // TODO: send to backend / auth system
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">{roleLabel} Sign Up</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-orange-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-orange-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-orange-500"
          />

          {/* Vendor Fields */}
          {role === "vendor" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company / Shop Name"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
                required
              />
              <input
                type="text"
                name="companyAddress"
                placeholder="Company Address"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
                required
              />
              <input
                type="text"
                name="tradeLicense"
                placeholder="Trade License Number"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
                required
              />
              <input
                type="text"
                name="vatNumber"
                placeholder="VAT Number"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
                required
              />
              <select
                name="companyType"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              >
                <option value="">Select Company Type</option>
                <option value="LLC">LLC</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="bankIBAN"
                placeholder="Bank Account / IBAN"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
            </>
          )}

          {/* Service Provider Fields */}
          {role === "service" && (
            <>
              <select
                name="providerType"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              >
                <option value="">Freelancer or Company</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Company">Company</option>
              </select>
              <input
                type="text"
                name="serviceCategory"
                placeholder="Service Category"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="text"
                name="licenseNumber"
                placeholder="License Number (if Company)"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="text"
                name="skills"
                placeholder="Skills / Services Offered"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="number"
                name="experience"
                placeholder="Experience (years)"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="text"
                name="rate"
                placeholder="Hourly / Service Rate"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address / Location"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-orange-500"
              />
            </>
          )}

          <button
            type="submit"
            className="py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>

        <button
          onClick={() => router.back()}
          className="mt-4 text-gray-500 hover:underline text-sm"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
