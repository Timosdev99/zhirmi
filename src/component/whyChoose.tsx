'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Monitor, Users, Headphones, CheckCircle } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          <div className="relative">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dmgf16qzz/image/upload/v1766623091/WhatsApp_Image_2025-12-09_at_10.07.47_AM_jf8dbe.jpg"
                alt="Professional woman with laptop"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
              <div className="absolute top-8 right-8">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="badgeCircle"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text className="text-[6px] fill-black uppercase tracking-wider font-semibold">
                      <textPath href="#badgeCircle">
                        • We Explore • We Explore • We Explore
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Geometric Shape */}
            <div className="absolute -right-20 bottom-0 w-64 h-64 opacity-20">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 200 200" className="w-full h-full text-gray-600">
                  <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="100,20 180,60 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="100,20 20,60 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="100,180 180,140 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="100,180 20,140 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">Why Choose Us</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your trusted partner for<br />
              <span className="text-lime-400">digital success</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are dedicated to helping your business succeed in digital world by providing innovative solutions, personalized strategies.
            </p>


            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lime-400">✱</span>
                  <h3 className="font-semibold text-lg">Proven Track Record</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Demonstrated success with clients across various industries.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lime-400">✱</span>
                  <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Demonstrated success with clients across various industries.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-lime-400" />
                <span className="text-sm">Results-driven approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-lime-400" />
                <span className="text-sm">Transparent communication</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl border-10 border-b-0 border-lime-400 bg-black p-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lime-400 text-xl">✱</span>
                <span className="text-sm uppercase tracking-wider text-white">Our Feature</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Our powerful <span className="text-lime-400">feature</span>
              </h2>
            </div>
            <Link href="/contact">
              <button className="hidden md:flex bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition items-center space-x-3 group">
                <span>Contact Us</span>
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-14 h-14 border-2 border-lime-400 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-7 h-7 text-lime-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Web Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Robust security measures to protect data and privacy
              </p>
            </div>

            <div>
              <div className="w-14 h-14 border-2 border-lime-400 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-lime-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">User-Centric Interfaces</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Robust security measures to protect data and privacy
              </p>
            </div>

            <div>
              <div className="w-14 h-14 border-2 border-lime-400 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-lime-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Supports</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Robust security measures to protect data and privacy
              </p>
            </div>
          </div>

          {/*  CTA */}
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center space-x-3 bg-lime-400 text-black px-6 py-3 rounded-full">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-lime-400 text-xs font-bold">
                💬
              </div>
              <span className="font-medium">Let's make something great work together.</span>
              <a href="#" className="font-bold underline">Get Free Quote</a>
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
