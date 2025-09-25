"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white px-6 sm:px-12 py-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & description */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold mb-2">nocdoor</h1>
          <p className="text-sm">
            Your one-stop marketplace for shops, services, and products in UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-sm">
            <li><a href="/marketplace" className="hover:text-gray-200">Marketplace</a></li>
            <li><a href="/orders" className="hover:text-gray-200">My Orders</a></li>
            <li><a href="/basket" className="hover:text-gray-200">My Baskets</a></li>
            <li><a href="/login" className="hover:text-gray-200">Login</a></li>
            <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Contact</h2>
          <p className="text-sm">📍 Dubai, UAE</p>
          <p className="text-sm">📞 +971 50 123 4567</p>
          <p className="text-sm">✉ info@jalaaby.com</p>
        </div>

        {/* Socials */}
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-white/30 pt-4">
        &copy; {new Date().getFullYear()} Jalaaby. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
