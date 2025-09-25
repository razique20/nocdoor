"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📍 Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">
            <strong>Address:</strong> Dubai Mall, Downtown Dubai, Dubai, UAE
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@example.com" className="text-orange-600">
              info@example.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:+971500000000" className="text-orange-600">
              +971 50 000 0000
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Working Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Map */}
        <div className="flex-1 shadow-md rounded-xl overflow-hidden h-96">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.827013273381!2d55.27559831500632!3d25.197179383894592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c1f5a6b4a1b%3A0xabcdef1234567890!2sDubai%20Mall!5e0!3m2!1sen!2sae!4v1695642000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
