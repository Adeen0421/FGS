'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Event } from '@/types/gallery';

export default function GalleryPage() {
  // Static gallery data
  const events: Event[] = [
    {
      _id: '1',
      title: 'School Art Exhibition',
      date: '2025-07-15',
      description: 'Annual art exhibition showcasing student creativity',
      category: 'arts',
      mainImage: {
        _id: 'art-studio-1',
        url: '/gallery/art-studio.jpg',
        metadata: {
          dimensions: {
            width: 1920,
            height: 1080
          }
        }
      }
    },
    {
      _id: '2',
      title: 'Science Fair 2025',
      date: '2025-08-20',
      description: 'Annual science fair highlighting student projects',
      category: 'science',
      mainImage: {
        _id: 'chemistry-lab-1',
        url: '/gallery/chemistry-lab.jpg',
        metadata: {
          dimensions: {
            width: 1920,
            height: 1080
          }
        }
      }
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus_highlight.jpg"
            alt="School Gallery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            School Events Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xl text-white/90 max-w-3xl mx-auto px-4"
          >
            Capturing memorable moments from our school events and activities that showcase our vibrant community and student life.
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4"
            >
              Explore Our Events
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              From academic achievements to cultural celebrations, discover the diverse activities that make our school community special.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <GalleryGrid events={events} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}