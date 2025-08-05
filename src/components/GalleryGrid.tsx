'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { type Event } from '@/types/gallery';

interface GalleryGridProps {
  events: Event[];
  limit?: number;
}

export function GalleryGrid({ events, limit }: GalleryGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sort events by date (most recent first) and apply limit if specified
  const sortedEvents = [...events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  const handleImageClick = (event: Event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {sortedEvents.map((event) => (
            <div 
              key={event._id} 
              className="bg-white rounded shadow hover:shadow-md transition-all duration-300 cursor-pointer w-full text-left"
              onClick={() => handleImageClick(event)}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={event.mainImage.url}
                  alt={event.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                  priority
                />
              </div>
              <div className="p-1.5 md:p-4">
                <h3 className="text-xs md:text-base font-semibold mb-0.5 md:mb-1 line-clamp-1">{event.title}</h3>
                <p className="text-gray-600 text-[9px] md:text-xs mb-0.5 md:mb-2">{new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</p>
                <p className="text-gray-700 text-[10px] md:text-sm line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl p-0 bg-black/95">
          {selectedEvent && (
            <div className="relative flex items-center justify-center min-h-[80vh]">
              <div className="relative h-full w-full flex items-center justify-center px-16">
                <Image
                  src={selectedEvent.mainImage.url}
                  alt={selectedEvent.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 