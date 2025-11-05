'use client'
import React from 'react';
import { ArrowUpRight, CheckCircle, Calendar, CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const plans = [
    {
      name: "Regular plan",
      price: "2900",
      description: "Start at $29 included 3 client",
      features: [
        "Custom Website Design",
        "Responsive Mobile Optimization",
        "Basic Security Features",
        "Social Media Integration"
      ],
      buttonStyle: "bg-gray-700 text-white hover:bg-gray-600",
      popular: false
    },
    {
      name: "Standard Plan",
      price: "3900",
      description: "Start at $39 included 3 client",
      features: [
        "Custom Website Design",
        "Responsive Mobile Optimization",
        "Basic Security Features",
        "Social Media Integration"
      ],
      buttonStyle: "bg-lime-400 text-black hover:bg-lime-300",
      popular: true
    },
    {
      name: "Advance Plan",
      price: "4900",
      description: "Start at $49 included 3 client",
      features: [
        "Custom Website Design",
        "Responsive Mobile Optimization",
        "Basic Security Features",
        "Social Media Integration"
      ],
      buttonStyle: "bg-gray-700 text-white hover:bg-gray-600",
      popular: false
    }
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">Pricing Plan</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Flexible <span className="text-lime-400">pricing</span> plan
            </h2>
          </div>

          <button className="hidden md:flex bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition items-center space-x-3 group">
            <span>View Pricing Plans</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white/5 backdrop-blur-lg border-2 border-gray-800 p-8 hover:border-lime-400/50 transition-all duration-300"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-lime-400 text-black px-6 py-2 rounded-bl-3xl rounded-tr-3xl font-bold text-sm uppercase">
                    Popular
                  </div>
                </div>
              )}


              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-6xl font-bold text-lime-400">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/Per Month</span>
                </div>
              </div>

              <div className="border-t border-gray-800 my-8"></div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-lime-400" />
            </div>
            <span>Get 30 day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-lime-400" />
            </div>
            <span>No any hidden fees pay</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-lime-400" />
            </div>
            <span>You can cancel anytime</span>
          </div>
        </div>
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
    </section>
  );
}
