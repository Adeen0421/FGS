'use client'

import { Footer } from '@/components/Footer'
import { Card } from '@/components/Card'
import Image from 'next/image'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from academics to extracurricular activities.',
  },
  {
    title: 'Innovation',
    description: 'We embrace innovative teaching methods and modern technology to enhance learning.',
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity, honesty, and ethical behavior.',
  },
  {
    title: 'Community',
    description: 'We foster a strong sense of community and belonging among students, staff, and parents.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="School campus"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Learn about our mission, history, and the values that drive us to
            provide exceptional education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#0A192F] hover:bg-[#0A192F] hover:border-transparent transition-all duration-500 group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-4 md:mb-6">Our Mission</h2>
              <p className="text-sm md:text-base text-gray-700 group-hover:text-white/90 transition-colors duration-500 mb-4 md:mb-6">
                At Faiz Grammar School, our mission is to provide a transformative
                educational experience that empowers students to become lifelong
                learners, critical thinkers, and responsible global citizens.
              </p>
              <p className="text-sm md:text-base text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                We are committed to fostering academic excellence, personal growth,
                and character development in a supportive and inclusive environment
                that celebrates diversity and promotes innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <Image
                src="/mission-image.jpg"
                alt="Students collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A192F]/10 hover:bg-[#0A192F]/20 transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-8 md:mb-12 text-center">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#0A192F] hover:bg-[#0A192F] hover:border-transparent transition-all duration-500 group hover:shadow-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-3 md:mb-4">Founded in 1995</h3>
              <p className="text-sm md:text-base text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                Faiz Grammar School was established with a vision to provide quality
                education that combines traditional values with modern teaching
                methods.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#0A192F] hover:bg-[#0A192F] hover:border-transparent transition-all duration-500 group hover:shadow-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-3 md:mb-4">Growing Years</h3>
              <p className="text-sm md:text-base text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                Through the years, we've expanded our facilities, enriched our
                curriculum, and built a strong community of learners and educators.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#0A192F] hover:bg-[#0A192F] hover:border-transparent transition-all duration-500 group hover:shadow-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-3 md:mb-4">Today</h3>
              <p className="text-sm md:text-base text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                We continue to evolve and adapt, preparing students for the
                challenges and opportunities of the 21st century.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-8 md:mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                title={value.title}
                className="text-center group/card hover:shadow-2xl transition-all duration-500 bg-white hover:bg-[#0A192F] border-2 border-[#0A192F] hover:border-transparent p-4 md:p-6"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#0A192F] group-hover/card:text-white transition-colors duration-500 mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 group-hover/card:text-white/90 transition-colors duration-500">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
