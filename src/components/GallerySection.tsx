import { GalleryGrid } from './GalleryGrid';

const staticEvents = [
  {
    _id: '1',
    title: 'Art Exhibition',
    date: '2025-08-15',
    description: 'Annual student art exhibition',
    category: 'arts',
    mainImage: {
      _id: 'art-studio-1',
      url: '/gallery/art-studio.jpg',
      metadata: {
        dimensions: {
          width: 1200,
          height: 800
        }
      }
    }
  },
  {
    _id: '2',
    title: 'Sports Day',
    date: '2025-09-01',
    description: 'Annual sports competition',
    category: 'sports',
    mainImage: {
      _id: 'sports-1',
      url: '/gallery/SPORTS.jpg',
      metadata: {
        dimensions: {
          width: 1200,
          height: 800
        }
      }
    }
  },
  {
    _id: '3',
    title: 'Science Fair',
    date: '2025-09-15',
    description: 'Student science projects showcase',
    category: 'science',
    mainImage: {
      _id: 'science-1',
      url: '/gallery/chemistry-lab.jpg',
      metadata: {
        dimensions: {
          width: 1200,
          height: 800
        }
      }
    }
  }
];

export default function GallerySection() {
  const events = staticEvents;
  
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