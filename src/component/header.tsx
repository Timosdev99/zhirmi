'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ContactSidebar from './contactSidebar';
import { Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false)

  const contentVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const containerVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -15 }}
            className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center transform -rotate-12">
              <div className="w-8 h-8 border-4 border-black rounded"></div>
            </div>
            <span className="text-2xl font-bold text-white">artistic.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden text-xl md:flex items-center space-x-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              className="text-lime-400 hover:text-lime-300 transition-colors duration-200"
            >
              Home
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              className="text-white hover:text-lime-400 transition-colors duration-200"
            >
              About Us
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              className="text-white hover:text-lime-400 transition-colors duration-200"
            >
              Services
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              className="text-white hover:text-lime-400 transition-colors duration-200"
            >
              Pages
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              className="text-white hover:text-lime-400 transition-colors duration-200"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Social Icons & Menu Grid */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              aria-label="Twitter"
            >
              <Twitter size={30} className='text-lime-400 hover:text-white transition duration-500 ease-in-out' />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              aria-label="Facebook"
            >
              <Facebook size={30} className='text-lime-400 hover:text-white transition duration-500 ease-in-out' />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-lime-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={30} className='text-lime-400 hover:text-white transition duration-500 ease-in-out' />
            </motion.a>
            <button
              className="p-2 bg-gray-500 rounded-full text-white hover:bg-lime-400 transition duration-500 ease-in-out"
              aria-label="Menu"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-current rounded-full"
                  />
                ))}
              </div>
            </button>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isMenuOpen ? 0 : "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`fixed top-0 right-0 h-full w-96 bg-gray-700 border-l border-gray-800 z-50`}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300"
                aria-label="Close sidebar"
              >
                <X size={24} />
              </button>


              <motion.div
                variants={containerVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                className="flex flex-col mt-10 bg-gray-700  items-center justify-center h-[700px] px-8 space-y-12">
                {/* Phone Section */}
                <motion.div variants={contentVariants} className="text-center">
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
                </motion.div>

                {/* Email Section */}
                <motion.div variants={contentVariants} className="text-center">
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
                </motion.div>

                {/* Address Section */}
                <motion.div variants={contentVariants} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-lime-400 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-lime-400" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    123 Creative Lane London, SW1A 1AA<br />
                    United Kingdom
                  </p>
                </motion.div>
              </motion.div>

            </motion.div>


          </div>

          {/* Mobile*/}
          <button
            className="md:hidden text-white hover:text-lime-400 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:hidden bg-gray-500 border-t border-gray-800">
        <div className="px-4 py-4 space-y-4">
          <a
            href="#"
            className="block text-lime-400 hover:text-lime-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-lime-400 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-white hover:text-lime-400 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-white hover:text-lime-400 transition-colors duration-200"
          >
            Pages
          </a>
          <a
            href="#"
            className="block text-white hover:text-lime-400 transition-colors duration-200"
          >
            Contact Us
          </a>

          <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
            <a
              href="#"
              className="text-white hover:text-lime-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-lime-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-lime-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
