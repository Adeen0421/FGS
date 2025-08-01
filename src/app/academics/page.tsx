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
    image: "/images/features/modern-facilities.jpg"
  },
  {
    title: "Technology Integration",
    description: "Digital tools and resources are seamlessly incorporated into lessons to enhance learning experiences and prepare students for a tech-driven future.",
    image: "/images/features/expert-faculty.jpg"
  },
  {
    title: "Differentiated Instruction",
    description: "Teaching approaches are tailored to meet individual learning needs, styles, and interests to ensure every student can succeed.",
    image: "/images/features/personalized-learning.jpg"
  },
  {
    title: "Inquiry-Based Learning",
    description: "Students drive their learning through questions, investigation, and discovery, developing deeper understanding and research skills.",
    image: "/images/features/global-perspective.jpg"
  },
];

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/classroom.jpg"
            alt="Academics"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xl text-white/90 max-w-3xl mx-auto px-4"
          >
            Discover our comprehensive curriculum and innovative teaching approaches designed to inspire and challenge students at every level.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
              Curriculum Overview
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our curriculum is designed to provide a balanced and challenging education that prepares students for success in college and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookMarked,
                title: "Elementary School",
                description: "Building strong foundations in core subjects while nurturing creativity and curiosity through discovery-based learning.",
                levels: [
                  { grade: "K", text: "Foundational skills in literacy and numeracy through play-based learning" },
                  { grade: "1-2", text: "Core reading, writing, and math skills with introduction to science and social studies" },
                  { grade: "3-5", text: "Deeper exploration of subjects with beginning research skills and independent projects" }
                ]
              },
              {
                icon: BookOpen,
                title: "Middle School",
                description: "Transitioning to more specialized subject areas with emphasis on critical thinking, time management, and study skills.",
                levels: [
                  { grade: "6", text: "Introduction to departmentalized instruction with core subjects and electives" },
                  { grade: "7", text: "Advanced analytical skills with introduction to pre-algebra and laboratory sciences" },
                  { grade: "8", text: "Preparation for high school with algebra, integrated sciences, and research projects" }
                ]
              },
              {
                icon: Brain,
                title: "High School",
                description: "Rigorous college preparatory curriculum with Advanced Placement courses, electives, and opportunities for specialization.",
                levels: [
                  { grade: "9-10", text: "Core requirements with introduction to honors courses and elective options" },
                  { grade: "11-12", text: "Advanced courses, AP options, dual enrollment, and college/career preparation" },
                  { grade: "12+", text: "Senior capstone projects, internships, and community service opportunities" }
                ]
              }
            ].map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#0A192F]/20 hover:border-[#0A192F] hover:bg-[#0A192F]/95 group transition-all duration-500 hover:shadow-2xl"
              >
                <div className="h-14 w-14 bg-[#0A192F]/5 group-hover:bg-white/10 rounded-full flex items-center justify-center mb-6 transition-colors duration-500">
                  <level.icon className="h-7 w-7 text-[#0A192F] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-4">
                  {level.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-500 mb-6">
                  {level.description}
                </p>
                <ul className="space-y-3">
                  {level.levels.map((item) => (
                    <li key={item.grade} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#0A192F]/10 group-hover:bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 transition-colors duration-500">
                        <span className="text-[#0A192F] group-hover:text-white font-medium text-sm transition-colors duration-500">
                          {item.grade}
                        </span>
                      </div>
                      <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
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
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#0A192F]/20 hover:border-[#0A192F] hover:bg-[#0A192F]/95 group transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A192F]/5 group-hover:bg-white/10 flex items-center justify-center mr-3 transition-colors duration-500">
                    <subject.icon className="h-5 w-5 text-[#0A192F] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A192F] group-hover:text-white transition-colors duration-500">
                    {subject.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm group-hover:text-white/90 transition-colors duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group/section"
              >
                <div className={index % 2 === 1 ? "md:order-last" : ""}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group/image">
                    <Image 
                      src={method.image} 
                      alt={method.title} 
                      fill
                      className="object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0A192F]/5 group-hover/image:bg-[#0A192F]/20 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover/image:translate-y-0 transition-transform duration-500">
                      <h4 className="text-lg font-semibold mb-2">{method.title}</h4>
                      <p className="text-sm text-white/90">{method.description}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#0A192F]/20 hover:border-[#0A192F] hover:bg-[#0A192F]/95 group transition-all duration-500 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#0A192F] group-hover:text-white transition-colors duration-500 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  Academic Support & Enrichment
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  We provide comprehensive support services to ensure every student can succeed and excel.
                </p>
                <ul className="space-y-4">
                  {[
                    "Personalized learning plans for diverse learning needs",
                    "After-school tutoring and homework assistance",
                    "Gifted and talented enrichment programs",
                    "Learning support specialists and counselors",
                    "College preparation and advanced study options"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start group hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-300 to-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300">
                        <span className="text-[#1E3A8A] font-bold text-sm">✓</span>
                      </div>
                      <span className="text-blue-100 group-hover:text-white transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
                <Image 
                  src="/academic-support.jpg" 
                  alt="Academic Support" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </section>
    </main>
  );
} 