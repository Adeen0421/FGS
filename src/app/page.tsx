'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { StatCard } from '@/components/StatCard'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/FeatureCard';

const stats = [
  { value: "1,200+", label: "Students", description: "Active learners" },
  { value: "80+", label: "Teachers", description: "Expert educators" },
  { value: "25+", label: "Years", description: "Of excellence" },
  { value: "98%", label: "Success Rate", description: "Graduate success" }
]

const features = [
  {
    title: 'Modern Facilities',
    description: 'Experience learning in state-of-the-art classrooms, advanced laboratories, and innovative learning spaces designed for collaborative education.',
    image: '/images/features/modern-facilities.jpg',
    imageAlt: 'Modern classroom with students using technology',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from passionate educators and industry experts who bring real-world experience and innovative teaching methods to every class.',
    image: '/images/features/expert-faculty.jpg',
    imageAlt: 'Teacher engaging with students in a collaborative environment',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Personalized Learning',
    description: 'Benefit from individualized attention and customized learning paths that help you achieve your full potential and academic goals.',
    image: '/images/features/personalized-learning.jpg',
    imageAlt: 'Student receiving one-on-one mentoring',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Perspective',
    description: 'Expand your horizons through international programs, cultural exchanges, and a diverse learning environment that prepares you for global success.',
    image: '/images/features/global-perspective.jpg',
    imageAlt: 'Diverse group of students collaborating',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const coreValues = [
  {
    title: "Academic Excellence",
    description: "We foster a rigorous academic environment that challenges students to reach their full potential. Our curriculum integrates traditional learning with modern educational approaches, preparing students for future success.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Character Development",
    description: "Beyond academics, we emphasize the development of strong moral character, leadership skills, and ethical values. Our students learn to be responsible, compassionate, and contributing members of society.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation & Creativity",
    description: "We encourage innovative thinking and creative expression. Our teaching methods incorporate the latest educational technologies and hands-on learning experiences to spark curiosity and foster innovation.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const galleryImages = [
  { src: "/gallery/campus-1.jpg", alt: "Modern Campus Building" },
  { src: "/gallery/library.jpg", alt: "Well-equipped Library" },
  { src: "/gallery/lab.jpg", alt: "Science Laboratory" },
  { src: "/gallery/sports.jpg", alt: "Sports Facilities" },
  { src: "/gallery/classroom.jpg", alt: "Interactive Classroom" },
  { src: "/gallery/activities.jpg", alt: "Student Activities" },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/80 z-10" />
          <Image
            src="/hero-image.jpg"
            alt="Campus life"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-6">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
              style={{
                color: 'white',
                WebkitTextFillColor: 'white',
                textShadow: '0 3px 6px rgba(0,0,0,0.3)',
                background: 'none',
                backgroundImage: 'none',
                WebkitBackgroundClip: 'unset',
                backgroundClip: 'unset',
                letterSpacing: '-0.02em'
              }}
            >
              Faiz Grammar School
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-medium drop-shadow-md animate-slide-up">
              Empowering minds, shaping futures. Join us in our mission to provide
              excellence in education and foster a nurturing learning environment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button 
                variant="primary" 
                size="xl"
                className="bg-[#0A192F] hover:bg-[#112240] text-white px-8 py-3 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full border-2 border-[#1E3A8A]/30"
              >
                <Link href="/admissions" className="font-semibold">
                  Apply Now
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full"
              >
                <Link href="/about" className="font-semibold">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Measuring our success through meaningful achievements and continuous growth
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 text-center group hover:-translate-y-1"
              >
                <div className="font-bold text-4xl md:text-5xl mb-2 text-[#0A192F]">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our world-class facilities and vibrant campus life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.alt}
                className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A192F] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-500 animate-fade-in border border-[#1E3A8A]/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                color: '#1a365d',
                background: 'none',
                WebkitTextFillColor: '#1a365d'
              }}
            >
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience excellence in education through our comprehensive approach to learning and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                imageAlt={feature.imageAlt}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building the foundation for lifelong learning and success through our fundamental principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0A192F] backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group hover:-translate-y-1 border border-[#1E3A8A]/30"
              >
                <div className="text-white mb-6 transform group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium animate-slide-up">
            Take the first step towards a brighter future. Apply now to become part of our vibrant academic community.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button 
              variant="primary" 
              size="xl"
              className="bg-[#0A192F] hover:bg-[#112240] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <Link href="/admissions" className="font-semibold px-8">
                Start Application
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <Link href="/contact" className="font-semibold px-8">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
