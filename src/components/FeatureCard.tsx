'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  index: number;
}

export function FeatureCard({ title, description, image, imageAlt, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[16/10] md:aspect-[16/9] relative overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
        
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <div className="relative p-4 md:p-6">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-sm md:text-base text-gray-600 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className="mt-3 md:mt-4"
        >
          <button className="text-blue-600 font-medium inline-flex items-center text-sm md:text-base hover:text-blue-700 transition-colors">
            Learn more
            <svg
              className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
} 