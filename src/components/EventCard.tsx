'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { fadeIn } from '@/lib/animations';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

export function EventCard({ title, date, description, category, image }: EventCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        <div className="absolute top-4 right-4">
          <span className="text-gradient-candy px-4 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="text-gradient-sunset text-sm font-medium mb-2">
          {date}
        </div>
        
        <h3 className="card-title-vibrant group-hover:text-gradient-candy transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <button className="link-gradient inline-flex items-center group/btn">
          Learn More
          <svg
            className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
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
      </div>
    </div>
  );
} 