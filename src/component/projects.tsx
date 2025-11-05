import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      category: "Social Media",
      title: "Responsive Design for a Mobile-First Audience",
      categoryColor: "text-lime-400"
    },
    {
      image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=600&h=400&fit=crop",
      category: "Brand Strategy",
      title: "Crafting Visually Stunning Online Journeys",
      categoryColor: "text-lime-400"
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
      category: "Content Creation",
      title: "Transforming Ideas into Interactive Platforms",
      categoryColor: "text-lime-400"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      category: "Content Creation",
      title: "Custom Web Develop Next-Level Growth",
      categoryColor: "text-lime-400"
    }
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lime-400 text-xl">✱</span>
              <span className="text-sm uppercase tracking-wider text-white">Projects</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Our latest web <span className="text-lime-400">portfolio</span>
            </h2>
          </div>

          <button className="hidden md:flex bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition items-center space-x-3 group">
            <span>See All Projects</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className={`text-sm uppercase tracking-wider mb-2 ${project.categoryColor}`}>
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8">
                  <div className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-8">
          <button className="w-full bg-gray-800 text-white px-6 py-4 rounded-full font-medium hover:bg-gray-700 transition flex items-center justify-center space-x-3 group">
            <span>See All Projects</span>
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
