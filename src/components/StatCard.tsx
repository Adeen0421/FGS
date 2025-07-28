'use client';

import { motion } from 'framer-motion';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
}

export function StatCard({ value, label, description, index }: StatCardProps) {
  // Extract the numeric part and any suffix (like '+' or '%')
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  const { count, ref } = useCountAnimation(numericValue, 2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-modern group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative p-8">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: index * 0.1 + 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="number-modern number-gradient text-6xl md:text-7xl mb-4"
        >
          {count}{suffix}
        </motion.div>
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 + 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="text-title text-gray-900 mb-2"
        >
          {label}
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 + 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-body text-gray-600"
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  );
} 