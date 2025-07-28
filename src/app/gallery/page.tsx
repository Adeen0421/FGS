import { client } from '@/sanity/lib/client';
import { GalleryGrid } from '@/components/GalleryGrid';

async function getEvents() {
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
}

export default async function GalleryPage() {
  const events = await getEvents();

  return (
    <div className="container mx-auto py-12 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">School Events Gallery</h1>
        <p className="text-gray-600">Capturing memorable moments from our school events</p>
      </div>

      <GalleryGrid events={events} />
    </div>
  );
} 