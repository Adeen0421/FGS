'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent',
    image: '/images/face2.jpeg',
    quote: "The personalized attention and cutting-edge curriculum helped my child excel in their studies. The teachers are truly dedicated to each student's success."
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Alumni',
    image: '/images/face1.jpeg',
    quote: "My time at FGS School prepared me for university and beyond. The diverse student body and international exposure gave me a global perspective that's invaluable."
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Student',
    image: '/images/face3.jpeg',
    quote: "I love how the school encourages creativity and critical thinking. The hands-on projects and industry partnerships provide real-world experience that sets us apart."
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their experiences at FGS School
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto"
             onMouseEnter={() => setAutoplay(false)}
             onMouseLeave={() => setAutoplay(true)}>
          {/* Arrow Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10 transition-colors"
            aria-label="Previous testimonial"
            style={{ left: '-2.5rem' }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10 transition-colors"
            aria-label="Next testimonial"
            style={{ right: '-2.5rem' }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="mt-2">
                    <p className="font-medium text-gray-700">{testimonials[current].name}</p>
                    <p className="text-gray-700">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-deep-teal' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 