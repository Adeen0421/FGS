'use client';

import { motion } from 'framer-motion';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const stats: StatProps[] = [
  {
    value: 1200,
    suffix: '+',
    label: 'Students',
    description: 'Active learners in our community'
  },
  {
    value: 80,
    suffix: '+',
    label: 'Teachers',
    description: 'Expert educators and mentors'
  },
  {
    value: 25,
    suffix: '+',
    label: 'Years',
    description: 'Of educational excellence'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'In academic achievements'
  }
];

function StatCard({ value, suffix = '', label, description }: StatProps) {
  const { count, ref } = useCountAnimation(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="stat-value-gradient mb-2">
        {count}{suffix}
      </h3>
      <p className="text-gradient-ocean font-semibold mb-1">{label}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-header-tech mb-4">Our Impact in Numbers</h2>
          <p className="text-gradient-ocean text-lg max-w-2xl mx-auto">
            Measuring our success through meaningful achievements and continuous growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
} 