'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Trophy } from 'lucide-react';

export default function WhatWeDoSection() {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          <motion.div variants={item}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">What We Do</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Creating digital <span className="text-lime-400">solution</span>
            </h2>
          </motion.div>

          <motion.button variants={item} className="hidden md:flex bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition items-center space-x-3 group">
            <span>Contact Us</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </motion.button>
        </motion.div>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={item} whileHover={{ y: -10 }} className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 hover:border-lime-400/50 transition-all duration-300">
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              With over 16k+ successful Web Design projects Complete.
            </p>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-5xl font-bold text-lime-400 mb-2">16k+</h3>
                <p className="text-white font-semibold">Project web complete</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5 border-2 border-lime-400 rounded"></div>
                <div className="w-5 h-5 border-2 border-lime-400 rounded"></div>
                <div className="w-5 h-5 border-2 border-lime-400 rounded"></div>
                <div className="w-5 h-5 border-2 border-lime-400 rounded"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -10 }} className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -10 }} className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
              alt="Professional woman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <h3 className="text-4xl font-bold text-lime-400 mb-1">98%</h3>
              <p className="text-white font-semibold">Performance<br />Grow in agency</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm leading-relaxed">
                Achieving a 98% performance growth, we focus on delivering results-driven strategies that optimize
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -10 }} className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 hover:border-lime-400/50 transition-all duration-300">
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Win over 24k+ Winning Award Our Web Agency science 2024.
            </p>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-5xl font-bold text-lime-400 mb-2">24k+</h3>
                <p className="text-white font-semibold">Award win web<br />agency</p>
              </div>
              <div>
                <Trophy className="w-16 h-16 text-lime-400" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -10 }} className="md:col-span-2 rounded-3xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dmgf16qzz/image/upload/v1766623092/WhatsApp_Image_2025-12-20_at_11.03.31_PM_1_skckvn.jpg"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="md:hidden mt-8">
          <button className="w-full bg-gray-800 text-white px-6 py-4 rounded-full font-medium hover:bg-gray-700 transition flex items-center justify-center space-x-3 group">
            <span>Contact Us</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>


        <motion.div
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30"
        >
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-4 border-gray-700 rounded-full"
                style={{
                  transform: `scale(${1 - i * 0.15}) translateX(${i * 10}px)`,
                  opacity: 1 - i * 0.12
                }}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
