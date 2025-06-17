'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from 'lucide-react/dynamic';
import { IconName } from '@/types/icons';

interface Statistic {
  icon: IconName;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const statistics: Statistic[] = [
  {
    icon: 'users',
    value: '1000',
    label: 'Students Enrolled',
    suffix: '+'
  },
  {
    icon: 'award',
    value: '95',
    label: 'Success Rate',
    suffix: '%'
  },
  {
    icon: 'graduation-cap',
    value: '50',
    label: 'Expert Teachers',
    suffix: '+'
  },
  {
    icon: 'book',
    value: '100',
    label: 'Courses Offered',
    suffix: '+'
  }
];

export default function StatisticsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and the success of our students.
            Here's a glimpse of our journey in numbers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-soft text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <DynamicIcon name={stat.icon} className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 