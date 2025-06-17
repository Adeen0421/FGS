import { client } from '@/sanity/lib/client';
import GalleryGrid from './GalleryGrid';

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
    }
  }`;

  const events = await client.fetch(query);
  return events;
}

export default async function GallerySection() {
  const events = await getEvents();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            School Life in Pictures
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Explore our vibrant community and student life through our latest events and activities
          </p>
        </div>
        <GalleryGrid events={events} limit={4} />
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-block bg-deep-teal text-white px-8 py-3 rounded-md hover:bg-deep-teal/90 transition-colors"
          >
            View All Photos
          </a>
        </div>
      </div>
    </section>
  );
} 