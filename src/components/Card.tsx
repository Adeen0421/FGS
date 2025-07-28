'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { scaleIn } from '@/lib/animations';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  index?: number;
  icon?: React.ReactNode;
  className?: string;
  variant?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Card({ 
  title, 
  description, 
  image, 
  link, 
  index = 0, 
  icon,
  className = "",
  variant,
  style,
  children
}: CardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      className={`group relative overflow-hidden rounded-xl p-6 ${className}`}
      style={style}
    >
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      
      {image && (
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        {children}
        {link && (
          <motion.a
            href={link}
            whileHover={{ x: 5 }}
            className="mt-4 inline-flex items-center text-[#0A192F] font-medium hover:text-[#112240] group-hover:text-white"
          >
            Learn more
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
} 