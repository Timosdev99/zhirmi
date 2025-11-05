'use client'
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote: "Working with this agency has been a-changer for our business. Their creativity, dedication, and expertise exceeded!",
      name: "Dianne Russell",
      position: "CEO, Tech Innovators Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Working with this agency has been a-changer for our business. Their creativity, dedication, and expertise exceeded!",
      name: "Emily Smith",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Outstanding service and exceptional results! They transformed our online presence completely.",
      name: "Michael Johnson",
      position: "Founder, StartUp Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "The team's attention to detail and innovative approach made all the difference for our brand.",
      name: "Sarah Williams",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Professional, creative, and results-driven. Best decision we made for our digital strategy.",
      name: "James Chen",
      position: "CTO, Digital Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Their expertise in web development helped us achieve remarkable growth in just months.",
      name: "Lisa Anderson",
      position: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Incredible team that delivers beyond expectations. Highly recommend their services!",
      name: "Robert Martinez",
      position: "VP of Operations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "They brought our vision to life with creativity and precision. Truly exceptional work!",
      name: "Jennifer Lee",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face=1"
    },
    {
      quote: "Working with them was seamless. Great communication and outstanding final product.",
      name: "David Thompson",
      position: "CEO, Growth Ventures",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&face=1"
    }
  ];

  // slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getVisibleTestimonials = () => {
    const first = testimonials[currentIndex];
    const second = testimonials[(currentIndex + 1) % testimonials.length];
    return [first, second];
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              What our <span className="text-lime-400">client says</span>
            </h2>
          </div>

          <button className="hidden md:flex bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition items-center space-x-3 group">
            <span>See All Testimonials</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/50 to-black border-2 border-gray-800 p-8 hover:border-lime-400/50 transition-all duration-300 h-full flex flex-col">
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>

                  </div>

                  <div className="absolute  top-16 right-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-lime-400 p-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-gray-900 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:border-lime-400 transition-all duration-300 group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-black" />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 bg-gray-900 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:border-lime-400 transition-all duration-300 group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-black" />
            </button>
          </div>


          <div className="flex items-center justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index * 2);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / 2) === index
                  ? 'w-8 bg-lime-400'
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
