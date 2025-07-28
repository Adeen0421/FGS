import { motion } from 'framer-motion';
import { EventCard } from './EventCard';

const events = [
  {
    title: "Annual Science Fair",
    date: "March 15, 2024",
    description: "Showcase of innovative student projects and experiments",
    category: "Academic",
    image: "/event-science.svg"
  },
  {
    title: "Arts Festival",
    date: "April 5, 2024",
    description: "Celebrating creativity through visual and performing arts",
    category: "Cultural",
    image: "/event-arts.svg"
  },
  {
    title: "Leadership Conference",
    date: "May 20, 2024",
    description: "Developing tomorrow's leaders through workshops and seminars",
    category: "Development",
    image: "/event-conference.svg"
  }
];

export function EventsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-header-sunset mb-4">Upcoming Events</h2>
          <p className="text-gradient-candy text-lg max-w-2xl mx-auto">
            Join us for exciting events that enrich learning and foster community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                category={event.category}
                image={event.image}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="/events" className="link-gradient text-lg font-semibold inline-flex items-center group">
            View All Events
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 