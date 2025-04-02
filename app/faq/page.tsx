'use client';

import { useState } from 'react';

const faqCategories = [
  {
    title: 'General Questions',
    questions: [
      {
        q: 'What is a traditional Finnish sauna?',
        a: 'A traditional Finnish sauna is a heated room, typically between 70-100°C (158-212°F), where people sit to experience the therapeutic benefits of heat. It\'s an integral part of Finnish culture and wellness practices.'
      },
      {
        q: 'How often should I use the sauna?',
        a: 'For optimal benefits, we recommend using the sauna 2-3 times per week. Each session should last 10-15 minutes, followed by a cooling period. Listen to your body and adjust accordingly.'
      },
      {
        q: 'What are the main health benefits of sauna use?',
        a: 'Regular sauna use has been linked to improved cardiovascular health, stress reduction, better sleep, enhanced immune function, and muscle recovery. It also helps with detoxification through sweating.'
      }
    ]
  },
  {
    title: 'Ice Bath Questions',
    questions: [
      {
        q: 'What is an ice bath?',
        a: 'An ice bath is a cold water immersion therapy, typically between 0-10°C (32-50°F), used to complement sauna sessions. It helps reduce inflammation, improve circulation, and enhance recovery.'
      },
      {
        q: 'How long should I stay in an ice bath?',
        a: 'Start with 1-2 minutes and gradually increase to 3-5 minutes as your body adapts. Always listen to your body and exit if you feel uncomfortable.'
      },
      {
        q: 'What are the benefits of ice baths?',
        a: 'Ice baths help reduce muscle soreness, improve circulation, boost immune function, and enhance mental resilience. They\'re particularly effective when alternated with sauna sessions.'
      }
    ]
  },
  {
    title: 'Installation & Maintenance',
    questions: [
      {
        q: 'How long does installation take?',
        a: 'Typical installation takes 1-2 days, depending on the model and site conditions. We handle everything from delivery to final setup and testing.'
      },
      {
        q: 'What maintenance is required?',
        a: 'Regular maintenance includes cleaning the sauna room, checking the heater, and ensuring proper ventilation. We recommend professional inspection annually.'
      },
      {
        q: 'What space requirements are needed?',
        a: 'Our saunas come in various sizes. The smallest models require about 4x4 feet, while larger models may need 8x8 feet or more. We can customize solutions for your space.'
      }
    ]
  },
  {
    title: 'Safety & Usage',
    questions: [
      {
        q: 'Are saunas safe for everyone?',
        a: 'While saunas are generally safe, we recommend consulting your healthcare provider if you have cardiovascular conditions, are pregnant, or have other health concerns.'
      },
      {
        q: 'What should I bring to a sauna session?',
        a: 'Bring a towel to sit on, water to stay hydrated, and comfortable clothing. We recommend showering before and after use.'
      },
      {
        q: 'Can children use the sauna?',
        a: 'Children can use saunas under adult supervision, but should start with shorter sessions at lower temperatures. We recommend consulting a pediatrician first.'
      }
    ]
  }
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionKey]: !prev[questionKey]
    }));
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 text-left bg-blue-600 text-white font-semibold flex justify-between items-center hover:bg-blue-700 transition-colors"
              >
                <span>{category.title}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openCategory === category.title ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openCategory === category.title && (
                <div className="p-6 space-y-4">
                  {category.questions.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <button
                        onClick={() => toggleQuestion(`${category.title}-${index}`)}
                        className="w-full text-left flex justify-between items-center"
                      >
                        <span className="font-semibold text-lg">{item.q}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform ${openQuestions[`${category.title}-${index}`] ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openQuestions[`${category.title}-${index}`] && (
                        <p className="mt-2 text-gray-600">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 