
'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FileText, ShoppingCart } from 'lucide-react';
import RatingCounter from './RatingCounter';

export default function Hero() {

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const delayedVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">


      <div className="relative min-h-screen flex items-center">

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </motion.div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
            className="max-w-4xl"
          >
            <motion.div variants={textVariant} className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rounded"></div>
              </div>
              <span className="text-sm uppercase tracking-wider">Welcome to Zhirmitech Web Agency</span>
            </motion.div>

            <motion.h1 variants={textVariant} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              YOUR VISION, OUR
              <br />
              <span className="text-lime-400">CREATIVE EXPERTISE</span>
            </motion.h1>

            <motion.div variants={delayedVariant} className="flex flex-wrap items-start gap-12">
              {/* Rating */}
              <div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <RatingCounter />
                  <span className="text-gray-400">(5k+reviews)</span>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-lime-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Average rating based<br />on client feedback
                </p>
              </div>

              {/* Description and CTA */}
              <div>
                <p className="text-xl mb-8 text-gray-300">
                  We craft innovative websites<br />and digital solutions.
                </p>

                {/* rotate */}
                <div className="relative w-40 h-40">
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-[11px] fill-lime-400 uppercase tracking-widest font-medium">
                      <textPath href="#circlePath" startOffset="0%">
                        Get Started • Get Started • Get Started •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition transform hover:scale-110 shadow-xl">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
    </div>
  );
}
