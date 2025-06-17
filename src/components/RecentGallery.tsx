import GalleryGrid from '@/components/GalleryGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { type Event } from '@/types/gallery';

interface RecentGalleryProps {
  events: Event[];
}

export default function RecentGallery({ events }: RecentGalleryProps) {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Events</h2>
          <Link href="/gallery">
            <Button variant="outline" className="hover:bg-emerald-50 text-sm">
              View All Events
            </Button>
          </Link>
        </div>
        
        <GalleryGrid events={events} limit={4} />
      </div>
    </section>
  );
} 