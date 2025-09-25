"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HomeIcon, 
  ShoppingCartIcon, 
  ShoppingBagIcon, 
  UserIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/marketplace", text: "Marketplace", icon: <HomeIcon className="w-5 h-5" /> },
    { href: "/orders", text: "My Orders", icon: <ShoppingCartIcon className="w-5 h-5" /> },
    { href: "/cart", text: "My Cart", icon: <ShoppingBagIcon className="w-5 h-5" /> },
    { href: "/login", text: "Login", icon: <UserIcon className="w-5 h-5" /> },
    { href: "/contact", text: "Contact Us", icon: <PhoneIcon className="w-5 h-5" /> },
    { href: "/en", text: "EN", icon: <GlobeAltIcon className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-orange-500 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"}>
      <h1 className="text-white font-extrabold text-xl sm:text-2xl">Jalaaby</h1>
</Link>
      {/* Search bar */}
      <div className="flex-1 max-w-[40%] mx-4 hidden bg-white rounded-2xl sm:block">
        <input
          type="text"
          placeholder="🔍 Search for shops, services or products"
          className="w-full p-2 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Desktop links */}
      <div className="hidden sm:flex gap-6 items-center text-white">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center justify-center gap-1 hover:text-gray-200"
          >
            {link.icon}
            <p className="text-sm">{link.text}</p>
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-orange-500 text-white flex flex-col items-center gap-4 py-4 sm:hidden z-50">
          <input
            type="text"
            placeholder="🔍 Search for shops, services or products"
            className="w-11/12 p-2 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-2"
          />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center justify-center gap-1 hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.icon}
              <p className="text-sm">{link.text}</p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
