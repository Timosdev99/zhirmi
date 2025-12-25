import React from 'react';
import { ArrowUpRight, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider mb-6">Let's Collaborate</p>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
              LET'S WORK<br />TOGETHER
            </h2>
            <div className="inline-flex items-center justify-center">
              <button className="relative group">
                <div className="w-32 h-32 bg-lime-400 rounded-full flex items-center justify-center hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <span className="text-black font-semibold text-sm block">Get in Touch</span>
                    <ArrowUpRight className="w-5 h-5 text-black mx-auto mt-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20">
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-4 border-gray-700 rounded-full"
                style={{
                  transform: `scale(${1 - i * 0.15}) translateX(${i * 8}px)`,
                  opacity: 1 - i * 0.12
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center transform -rotate-12">
                  <div className="w-6 h-6 border-3 border-black rounded"></div>
                </div>
                <span className="text-2xl font-bold">zhirmitech.</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Quality Work with No Limits. Freelancing Made Simple and Successful.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-lime-400 transition">Help</a>
                <a href="#" className="hover:text-lime-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-lime-400 transition">Term & Condition</a>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="service" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    E-Commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    Web Design & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition text-sm">
                    Website Maintenance Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-lime-400/10 border border-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">+234 704 363 5009</p>
                    <p className="text-sm text-gray-400">zhirmitech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-lime-400/10 border border-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Lagos<br />NIGERIA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border border-gray-800 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Subscribe our newsletter:</h3>
              </div>
              <div className="flex-1 flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 bg-transparent border border-gray-700 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-lime-400 transition"
                />
                <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Follow on:</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-lime-400 hover:bg-lime-400 hover:text-black transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Copyright © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
