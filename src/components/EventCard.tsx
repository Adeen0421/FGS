'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ImageAsset {
  _id: string;
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}

interface GalleryImage {
  asset: ImageAsset;
  caption?: string;
  alt?: string;
}

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  mainImage: ImageAsset;
  gallery: GalleryImage[];
}

export default function EventCard({ title, date, description, mainImage, gallery }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // Use useMemo to ensure consistent date formatting between server and client
  const formattedDate = useMemo(() => {
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return date;
    }
  }, [date]);

  // Ensure gallery is always an array
  const safeGallery = Array.isArray(gallery) ? gallery : [];
  
  // Combine main image with gallery for the preview
  const allImages = useMemo(() => [
    { asset: mainImage, alt: title },
    ...safeGallery
  ], [mainImage, safeGallery, title]);

  const goToNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length);
  };

  const goToPreviousImage = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Calculate indices for the stack effect
  const getPrevIndex = (current: number) => (current - 1 + allImages.length) % allImages.length;
  const getNextIndex = (current: number) => (current + 1) % allImages.length;

  return (
    <>
      <div className="relative aspect-[4/3] w-full group">
        {/* Image Stack Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Previous Image */}
          {allImages.length > 1 && selectedImage > 0 && (
            <div className="absolute inset-0 z-10 transform -translate-x-[100%] opacity-50 transition-all duration-500">
              <Image
                src={allImages[selectedImage - 1].asset.url}
                alt={allImages[selectedImage - 1].alt || 'Previous image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {/* Current Image */}
          <div 
            className="absolute inset-0 z-20 transform transition-all duration-500 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={allImages[selectedImage].asset.url}
              alt={allImages[selectedImage].alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Next Image */}
          {allImages.length > 1 && selectedImage < allImages.length - 1 && (
            <div className="absolute inset-0 z-10 transform translate-x-[100%] opacity-50 transition-all duration-500">
              <Image
                src={allImages[selectedImage + 1].asset.url}
                alt={allImages[selectedImage + 1].alt || 'Next image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <div className="absolute inset-0 z-30 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={goToPreviousImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transform transition-transform hover:scale-110"
                disabled={selectedImage === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transform transition-transform hover:scale-110"
                disabled={selectedImage === allImages.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Image Counter */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 right-4 z-30 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-30">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((selectedImage + 1) / allImages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute -bottom-12 left-0 right-0 flex gap-2 overflow-x-auto px-2 py-1 justify-center">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                selectedImage === index 
                  ? 'ring-2 ring-emerald-500 scale-110' 
                  : 'opacity-50 hover:opacity-75'
              }`}
            >
              <Image
                src={image.asset.url}
                alt={image.alt || `Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl p-0 bg-black/95">
          <div className="relative flex items-center justify-center min-h-[80vh]">
            {/* Previous Image Preview */}
            {allImages.length > 1 && (
              <div 
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-4"
                onClick={goToPreviousImage}
              >
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <div className="relative w-24 h-24 hidden md:block opacity-50">
                  <Image
                    src={allImages[(selectedImage - 1 + allImages.length) % allImages.length].asset.url}
                    alt="Previous"
                    fill
                    className="object-cover rounded-lg"
                    sizes="96px"
                  />
                </div>
              </div>
            )}

            {/* Main Image */}
            <div className="relative h-full w-full flex items-center justify-center px-16">
              {allImages[selectedImage] && (
                <Image
                  src={allImages[selectedImage].asset.url}
                  alt={allImages[selectedImage].alt || `Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              )}
            </div>

            {/* Next Image Preview */}
            {allImages.length > 1 && (
              <div 
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4"
                onClick={goToNextImage}
              >
                <div className="relative w-24 h-24 hidden md:block opacity-50">
                  <Image
                    src={allImages[(selectedImage + 1) % allImages.length].asset.url}
                    alt="Next"
                    fill
                    className="object-cover rounded-lg"
                    sizes="96px"
                  />
                </div>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
              {selectedImage + 1} / {allImages.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90%] p-2">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden 
                    ${selectedImage === index ? 'ring-2 ring-emerald-500' : 'opacity-50 hover:opacity-75'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.asset.url}
                    alt={image.alt || `Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 