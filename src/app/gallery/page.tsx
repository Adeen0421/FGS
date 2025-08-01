'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryGrid } from '@/components/GalleryGrid';

// Fallback data when Sanity is not configured
const fallbackEvents = [
  {
    _id: '1',
    title: 'Sports Day Celebration',
    date: '2024-06-15',
    description: 'Annual sports day with exciting competitions and team spirit',
    category: 'Sports',
    mainImage: {
      url: '/campus_highlight.jpg',
      metadata: { dimensions: { width: 800, height: 600 } }
    }
  },
  {
    _id: '2',
    title: 'Science Fair Exhibition',
    date: '2024-06-10',
    description: 'Students showcase innovative projects and scientific discoveries',
    category: 'Academic',
    mainImage: {
      url: '/images/features/modern-facilities.jpg',
      metadata: { dimensions: { width: 800, height: 600 } }
    }
  },
  {
    _id: '3',
    title: 'Cultural Festival',
    date: '2024-06-05',
    description: 'Celebrating diversity through music, dance, and art performances',
    category: 'Cultural',
    mainImage: {
      url: '/images/features/expert-faculty.jpg',
      metadata: { dimensions: { width: 800, height: 600 } }
    }
  },
  {
    _id: '4',
    title: 'Academic Achievement Ceremony',
    date: '2024-06-01',
    description: 'Recognizing outstanding academic performance and achievements',
    category: 'Academic',
    mainImage: {
      url: '/images/features/personalized-learning.jpg',
      metadata: { dimensions: { width: 800, height: 600 } }
    }
  }
];

async function getEvents() {
  try {
    // Try to import and use Sanity client
    const { client } = await import('@/sanity/lib/client');
    
    const query = `*[_type == "event"] {
      _id,
      title,
      date,
      description,
      category,
      "mainImage": mainImage.asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      "gallery": gallery[]{
        "asset": asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        caption,
        alt
      }
    }`;

    const events = await client.fetch(query);
    return events;
  } catch (error) {
    console.log('Sanity not configured, using fallback data:', error);
    return fallbackEvents;
  }
}

export default async function GalleryPage() {
  const events = await getEvents();

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