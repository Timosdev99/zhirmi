'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowUpRight, Phone, Database, Target, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const services = [
    "Cloud Solutions",
    "IT Consulting",
    "Technology Strategy",
    "Business Solutions",
    "Analytics",
    "Cloud Solutions",
    "IT Consulting",
    "Technology Strategy"
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const starVariant: Variants = {
    twinkle: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="bg-black text-white">

      <div className="bg-lime-400 mt-16 text-black py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <React.Fragment key={index}>
              <span className="text-3xl font-bold mx-8">{service}</span>
              <span className="text-3xl font-bold mx-8">✱</span>
            </React.Fragment>
          ))}
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div style={{ y: y1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div style={{ y: y2 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mt-6 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                alt="Team working"
                className="w-full h-auto"
              />
            </motion.div>


            <div className="absolute -bottom-8 -left-8 grid grid-cols-5 gap-2">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={starVariant}
                  animate="twinkle"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  className="text-lime-400 text-xl"
                >✱</motion.div>
              ))}
            </div>

            {/* 3d sphere */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 blur-sm"></div>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={item} className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-black rounded"></div>
              </div>
              <span className="text-sm uppercase tracking-wider text-lime-400">About Us</span>
            </motion.div>

            <motion.h2 variants={item} className="text-5xl font-bold mb-6 leading-tight">
              Empowering brand with <span className="text-lime-400">innovative</span><br />
              digital solutions
            </motion.h2>

            <motion.p variants={item} className="text-gray-400 text-lg mb-8 leading-relaxed">
              We specialize in creating innovative digital solutions that elevate your brand,
              engage your audience, and drive measurable success.
            </motion.p>

            <motion.div variants={item} className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mb-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={{ rotate: 45, backgroundColor: '#a3e635' }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 border-2 border-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 group"
                  >
                    <Target className="w-5 h-5 text-lime-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Creative Excellence</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={{ rotate: 45, backgroundColor: '#a3e635' }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 border-2 border-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 group"
                  >
                    <Database className="w-5 h-5 text-lime-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Tailored solutions</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={{ rotate: 45, backgroundColor: '#a3e635' }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 border-2 border-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 group"
                  >
                    <Users className="w-5 h-5 text-lime-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Client approach</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={{ rotate: 45, backgroundColor: '#a3e635' }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 border-2 border-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 group"
                  >
                    <TrendingUp className="w-5 h-5 text-lime-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven track record</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={item} className="flex items-center space-x-6">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition flex items-center space-x-2 group">
                <span>More About</span>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-lime-400" />
                </div>
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Need Help!</p>
                  <a href="tel:+123456789" className="text-lg font-semibold hover:text-lime-400 transition">
                    +123 456 789
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
