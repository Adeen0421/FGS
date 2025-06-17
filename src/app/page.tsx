'use client';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Suspense } from 'react';
import GallerySection from '@/components/GallerySection';
import StatisticsSection from '@/components/StatisticsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <Suspense fallback={
        <div className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded-lg aspect-[3/2]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <GallerySection />
      </Suspense>

      <StatisticsSection />

      <TestimonialsSection />

      <FeaturesSection />
      
      <Footer />
    </div>
  );
}
