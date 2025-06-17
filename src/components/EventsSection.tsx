import { getEvents } from '@/lib/sanity';
import RecentGallery from './RecentGallery';
 
export default async function EventsSection() {
  const events = await getEvents();
  return <RecentGallery events={events} />;
} 