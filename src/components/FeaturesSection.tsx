'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from 'lucide-react/dynamic';
import { IconName } from '@/types/icons';

interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'book-open',
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum is designed to provide a well-rounded education that prepares students for future success.'
  },
  {
    icon: 'users',
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who are passionate about teaching and dedicated to student success.'
  },
  {
    icon: 'laptop',
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms and labs equipped with the latest technology for enhanced learning.'
  },
  {
    icon: 'target',
    title: 'Personalized Attention',
    description: 'Small class sizes ensure individual attention and support for every student.'
  },
  {
    icon: 'globe',
    title: 'Global Perspective',
    description: 'Exposure to diverse cultures and international educational standards.'
  },
  {
    icon: 'activity',
    title: 'Extra-Curricular Activities',
    description: 'A wide range of sports, arts, and cultural activities for holistic development.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our school unique and how we prepare students for success
            in academics and life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <DynamicIcon name={feature.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 