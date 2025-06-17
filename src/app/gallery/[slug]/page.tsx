'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
  };
  caption?: string;
  alt?: string;
};

type GalleryItem = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  eventDate?: string;
  images: SanityImage[];
  category: string;
};

interface PageProps {
  params: {
    slug: string;
  }
}

export default function GalleryItemPage({ params }: PageProps) {
  const [galleryItem, setGalleryItem] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchGalleryItem() {
      try {
        const data = await client.fetch(`
          *[_type == "gallery" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            description,
            eventDate,
            images,
            category
          }
        `, { slug: params.slug });
        
        if (data) {
          setGalleryItem(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setIsLoading(false);
      }
    }

    fetchGalleryItem();
  }, [params.slug]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (!galleryItem) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryItem.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (!galleryItem) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen, currentImageIndex]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!galleryItem) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Gallery Not Found</h1>
          <p className="text-gray-600 mb-8">The gallery you are looking for does not exist or has been removed.</p>
          <Link href="/gallery" className="inline-flex items-center text-teal-600 hover:text-teal-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link href="/gallery" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {galleryItem.title}
              </h1>
              
              <div className="flex items-center text-gray-300 mb-4">
                {galleryItem.eventDate && (
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p>
                      {new Date(galleryItem.eventDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                )}
                
                {galleryItem.category && (
                  <div className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full capitalize">
                    {galleryItem.category.replace('-', ' ')}
                  </div>
                )}
              </div>
              
              {galleryItem.description && (
                <p className="text-gray-300 max-w-3xl">
                  {galleryItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItem.images.map((image, index) => (
              <motion.div
                key={image.asset._ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={urlFor(image).width(800).height(600).url()}
                  alt={image.alt || ''}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                {image.caption && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && galleryItem.images[currentImageIndex] && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto">
            <Image
              src={urlFor(galleryItem.images[currentImageIndex]).width(1200).url()}
              alt={galleryItem.images[currentImageIndex].alt || ''}
              fill
              className="object-contain"
            />
            {galleryItem.images[currentImageIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-black bg-opacity-50">
                <p className="text-white">{galleryItem.images[currentImageIndex].caption}</p>
              </div>
            )}
          </div>
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </main>
  );
} 