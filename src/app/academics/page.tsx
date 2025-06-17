'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, FileCode, Globe, Calculator, Beaker, Palette, Music, BookMarked, Brain } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Key Subjects with their icons
const subjects = [
  {
    name: "Mathematics",
    icon: Calculator,
    description: "Developing strong foundational skills and problem-solving abilities from basic numeracy to advanced calculus."
  },
  {
    name: "Science",
    icon: Beaker,
    description: "Hands-on exploration of physical, life, and earth sciences with laboratory work and field studies."
  },
  {
    name: "Languages & Literature",
    icon: BookOpen,
    description: "Mastering language arts through reading comprehension, writing, grammar, and exposure to diverse literature."
  },
  {
    name: "Technology",
    icon: FileCode,
    description: "Building digital literacy and computational thinking from basic computer skills to coding and robotics."
  },
  {
    name: "Social Studies",
    icon: Globe,
    description: "Understanding history, geography, civics, and cultures to foster global citizenship and critical thinking."
  },
  {
    name: "Arts",
    icon: Palette,
    description: "Exploring visual arts, design, and creative expression to develop aesthetic appreciation and self-expression."
  },
  {
    name: "Music",
    icon: Music,
    description: "Developing musical literacy, appreciation, and performance skills through vocal and instrumental training."
  },
  {
    name: "Physical Education",
    icon: Star,
    description: "Promoting physical fitness, motor skills, teamwork, and healthy lifestyle choices through sports and activities."
  },
];

// Teaching Methods
const teachingMethods = [
  {
    title: "Project-Based Learning",
    description: "Students engage in long-term, complex projects that address real-world challenges, encouraging critical thinking and collaboration.",
    image: "/teaching-methods-1.jpg"
  },
  {
    title: "Technology Integration",
    description: "Digital tools and resources are seamlessly incorporated into lessons to enhance learning experiences and prepare students for a tech-driven future.",
    image: "/teaching-methods-2.jpg"
  },
  {
    title: "Differentiated Instruction",
    description: "Teaching approaches are tailored to meet individual learning needs, styles, and interests to ensure every student can succeed.",
    image: "/teaching-methods-3.jpg"
  },
  {
    title: "Inquiry-Based Learning",
    description: "Students drive their learning through questions, investigation, and discovery, developing deeper understanding and research skills.",
    image: "/teaching-methods-4.jpg"
  },
];

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            >
              Academics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover our comprehensive curriculum and innovative teaching approaches designed to inspire and challenge students at every level.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Curriculum Overview
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our curriculum is designed to provide a balanced and challenging education that prepares students for success in college and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="h-14 w-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookMarked className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Elementary School</h3>
              <p className="text-gray-700 mb-6">
                Building strong foundations in core subjects while nurturing creativity and curiosity through discovery-based learning.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">K</span>
                  </div>
                  <span>Foundational skills in literacy and numeracy through play-based learning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">1-2</span>
                  </div>
                  <span>Core reading, writing, and math skills with introduction to science and social studies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">3-5</span>
                  </div>
                  <span>Deeper exploration of subjects with beginning research skills and independent projects</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="h-14 w-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Middle School</h3>
              <p className="text-gray-700 mb-6">
                Transitioning to more specialized subject areas with emphasis on critical thinking, time management, and study skills.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">6</span>
                  </div>
                  <span>Introduction to departmentalized instruction with core subjects and electives</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">7</span>
                  </div>
                  <span>Advanced analytical skills with introduction to pre-algebra and laboratory sciences</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">8</span>
                  </div>
                  <span>Preparation for high school with algebra, integrated sciences, and research projects</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="h-14 w-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">High School</h3>
              <p className="text-gray-700 mb-6">
                Rigorous college preparatory curriculum with Advanced Placement courses, electives, and opportunities for specialization.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">9-10</span>
                  </div>
                  <span>Core requirements with introduction to honors courses and elective options</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">11-12</span>
                  </div>
                  <span>Advanced courses, AP options, dual enrollment, and college/career preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-medium text-sm">12+</span>
                  </div>
                  <span>Senior capstone projects, internships, and community service opportunities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Key Subject Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive curriculum covers all essential subject areas with depth and rigor
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {subjects.map((subject) => (
              <motion.div
                key={subject.name}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <subject.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative methodologies that engage students and promote deeper understanding
            </p>
          </div>

          <div className="space-y-16">
            {teachingMethods.map((method, index) => (
              <motion.div 
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-last" : ""}>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={method.image} 
                      alt={method.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-700">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Academic Support & Enrichment
              </h2>
              <p className="text-xl text-blue-50 mb-8">
                We provide comprehensive support services to ensure every student can succeed and excel.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <span>Personalized learning plans for diverse learning needs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <span>After-school tutoring and homework assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <span>Gifted and talented enrichment programs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <span>Learning support specialists and counselors</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <span>College preparation and advanced study options</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/academic-support.jpg" 
                alt="Academic Support" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 