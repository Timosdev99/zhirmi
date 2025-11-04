'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, ShoppingCart, Palette, Wrench, FolderOpen } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "We create visually, user-friendly websites your business."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce solutions",
      description: "We create visually, user-friendly websites your business."
    },
    {
      icon: Palette,
      title: "Web Design & Development",
      description: "We create visually, user-friendly websites your business."
    },
    {
      icon: Wrench,
      title: "Website Maintenance Support",
      description: "We create visually, user-friendly websites your business."
    },
    {
      icon: FolderOpen,
      title: "Content Management Systems",
      description: "We create visually, user-friendly websites your business."
    }
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">Services</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
              Innovative <span className="text-lime-400">services</span> for<br />
              digital growth
            </h2>

            <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition flex items-center space-x-3 group">
              <span>View All Services</span>
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>

          <div className="lg:col-span-3 space-y-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-t border-gray-800 py-8 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 flex-1">

                    <motion.div
                      whileHover={{ backgroundColor: '#a3e635' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="w-12 h-12 border border-lime-400 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <service.icon className="w-6 h-6 text-lime-400 group-hover:text-black transition-colors" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="ml-6">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t border-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
