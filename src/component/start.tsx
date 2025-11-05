'use client'
import React from 'react';
import { ArrowUpRight, ArrowUp, CheckCircle, Star } from 'lucide-react';

export default function CTAFactsSection() {
  const stats = [
    { value: "25+", label: "Year of experience" },
    { value: "36k", label: "Project complete" },
    { value: "500+", label: "Happy customer" },
    { value: "300+", label: "Awards winning" }
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="relative rounded-3xl border-2 border-gray-800 bg-gradient-to-br from-gray-900/50 to-black p-12 md:p-16 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-transparent pointer-events-none"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lime-400 text-xl">✱</span>
                <span className="text-sm uppercase tracking-wider text-white">Let's Get Started</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Ready to elevate your brands?<br />
                <span className="text-lime-400">start now!</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Take your brands to the next level with our expert web<br />
                solutions! Let's get started today!
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition flex items-center space-x-3 group">
                <span>Get Started</span>
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>

            <div className="relative">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 160 160">
                  <defs>
                    <path
                      id="ctaCircle"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text className="text-[9px] fill-black uppercase tracking-wider font-bold">
                    <textPath href="#ctaCircle">
                      • Get Started • Get Started • Get Started
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 bg-lime-400 rounded-full flex items-center justify-center">
                    <ArrowUp className="w-10 h-10 text-black" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20 ">
            <div className="relative w-full h-full">
              <svg viewBox="0 0 200 200" className="w-full h-full text-green-600">
                <g transform="translate(100, 100)">
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-80"
                      stroke="currentColor"
                      strokeWidth="3"
                      transform={`rotate(${i * 30})`}
                    />
                  ))}
                  <circle cx="0" cy="0" r="15" fill="currentColor" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-lime-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <span className="font-bold text-sm">(5.0)</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden mt-12">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Facts that <span className="text-lime-400">showcase</span><br />
              our excellence
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our track record speaks for itself, with impressive achievements that highlight our dedication to delivering exceptional.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span className="text-gray-300">Results-driven approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span className="text-gray-300">Social media integration</span>
              </div>
            </div>

            <div className="relative w-32 h-32">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 128 128">
                <defs>
                  <path
                    id="factsCircle"
                    d="M 64, 64 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text className="text-[7px] fill-lime-400 uppercase tracking-wider font-bold">
                  <textPath href="#factsCircle">
                    • Years 25+ • Years 25+ • Years 25+
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-lime-400/20 border-2 border-lime-400 rounded-full flex items-center justify-center">
                  <ArrowUp className="w-8 h-8 text-lime-400" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-lime-400 mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
