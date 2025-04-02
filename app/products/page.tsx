'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Traditional Finnish Sauna',
    description: 'Our flagship model, featuring premium Nordic spruce wood and traditional Finnish design. Perfect for home use.',
    features: [
      'Premium Nordic spruce construction',
      'Digital temperature control',
      'LED mood lighting',
      'Bluetooth audio system',
      'Capacity: 4-6 people'
    ],
    price: 'Starting at $8,999',
    image: '/6x8-outdoor-sauna-kit-sloped-roof-3-ft-overhang-post-beam-porch-mountain-snow.jpg'
  },
  {
    id: 2,
    name: 'Compact Home Sauna',
    description: 'Space-efficient design perfect for smaller homes or apartments. All the benefits of a traditional sauna in a compact package.',
    features: [
      'Space-saving design',
      'Quick heat-up time',
      'Energy efficient',
      'Easy installation',
      'Capacity: 2-3 people'
    ],
    price: 'Starting at $4,999',
    image: '/8x8-sauna-prefab-sauna-wooder-sauna-heater-windows.jpg'
  },
  {
    id: 3,
    name: 'Premium Ice Bath',
    description: 'Professional-grade ice bath with temperature control and filtration system. Perfect for recovery and wellness.',
    features: [
      'Temperature control system',
      'Built-in filtration',
      'UV sanitization',
      'Digital display',
      'Easy maintenance'
    ],
    price: 'Starting at $3,999',
    image: '/6x7-outdoor-prefab-sauna-2ft-overhang-metal-roof-cocoa-brown-500x667.jpeg.avif'
  },
  {
    id: 4,
    name: 'Sauna & Ice Bath Combo',
    description: 'Complete wellness solution combining our premium sauna with an ice bath. The perfect setup for contrast therapy.',
    features: [
      'Matching design',
      'Space-efficient layout',
      'Shared control panel',
      'Premium materials',
      'Complete installation package'
    ],
    price: 'Starting at $12,999',
    image: '/6x8-outdoor-sauna-kit-sloped-roof-3-ft-overhang-post-beam-porch-mountain-snow.jpg'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover our range of premium saunas and ice baths
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Custom Solutions Available</h2>
          <p className="text-gray-600 mb-8">
            We can customize any of our products to meet your specific needs and space requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us for Customization
          </a>
        </div>
      </div>
    </div>
  );
} 