'use client';

import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, FileText, ShoppingCart } from 'lucide-react';

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center justify-center h-full px-8 space-y-12">
          {/* Phone Section */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-lime-400 flex items-center justify-center">
              <Phone className="w-8 h-8 text-lime-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+123456789"
              className="text-gray-400 hover:text-lime-400 transition-colors duration-200"
            >
              +123 456 789
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-lime-400 flex items-center justify-center">
              <Mail className="w-8 h-8 text-lime-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@domainname.com"
              className="text-gray-400 hover:text-lime-400 transition-colors duration-200"
            >
              info@domainname.com
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-lime-400 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-lime-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400 leading-relaxed">
              123 Creative Lane London, SW1A 1AA<br />
              United Kingdom
            </p>
          </div>
        </div>

      </div>

    </>
  );
}
