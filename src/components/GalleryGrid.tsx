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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedEvents.map((event) => (
          <div 
            key={event._id} 
            className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => handleImageClick(event)}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={event.mainImage.url}
                alt={event.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 line-clamp-1">{event.title}</h3>
              <p className="text-gray-600 text-xs mb-2">{new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>
            </div>
          </div>
        ))}
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