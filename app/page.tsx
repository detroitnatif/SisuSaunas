'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/6x8-outdoor-sauna-kit-sloped-roof-3-ft-overhang-post-beam-porch-mountain-snow.jpg',
    alt: 'Traditional Finnish Sauna',
    title: 'Experience Authentic Finnish Sauna Culture',
    description: 'Discover the perfect blend of tradition and modern wellness'
  },
  {
    src: '/8x8-sauna-prefab-sauna-wooder-sauna-heater-windows.jpg',
    alt: 'Premium Sauna Experience',
    title: 'Complete Your Wellness Journey',
    description: 'Pair your sauna with our premium ice bath experience'
  },
  {
    src: '/6x7-outdoor-prefab-sauna-2ft-overhang-metal-roof-cocoa-brown-500x667.jpeg.avif',
    alt: 'Luxury Sauna Interior',
    title: 'Luxury Meets Tradition',
    description: 'Premium materials and expert craftsmanship'
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {images[currentImageIndex].title}
                </h1>
                <p className="text-xl md:text-2xl">
                  {images[currentImageIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Health Benefits of Sauna & Ice Bath</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cardiovascular Health</h3>
              <p className="text-gray-600">Regular sauna use improves circulation, reduces blood pressure, and strengthens the heart.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Immune System Boost</h3>
              <p className="text-gray-600">The combination of sauna and ice bath stimulates the immune system and increases white blood cell production.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Stress Relief</h3>
              <p className="text-gray-600">Experience deep relaxation and reduced stress levels through regular sauna sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sisu Saunas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Built with the finest materials and expert craftsmanship for lasting durability.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
                <p className="text-gray-600">Designed with modern technology to minimize energy consumption while maximizing performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Wellness Journey?</h2>
          <p className="text-xl mb-8">Contact us today to learn more about our premium sauna and ice bath solutions.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
