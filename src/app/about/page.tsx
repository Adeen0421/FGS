'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Award, UserCheck, Heart } from 'lucide-react';

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

export default function AboutPage() {
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
              About Our School
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Learn about our history, mission, and the values that make FGS School an exceptional place for education.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/principal.jpg" 
                  alt="School Principal" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Message from the Principal</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to FGS School, where we believe in nurturing not just academic excellence, but the development of well-rounded individuals prepared to meet the challenges of tomorrow's world.
                </p>
                <p>
                  At FGS, we pride ourselves on providing a supportive and inclusive environment where each student can discover their unique potential. Our dedicated faculty works tirelessly to create engaging learning experiences that foster critical thinking, creativity, and a lifelong love for learning.
                </p>
                <p>
                  We recognize that education extends beyond textbooks and classrooms. Our comprehensive approach includes character development, leadership skills, and community involvement – all essential elements in preparing our students for success in an ever-changing global landscape.
                </p>
                <p>
                  I invite you to explore our website to learn more about our programs, and I welcome the opportunity to show you firsthand the exceptional educational journey that awaits your child at FGS School.
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-primary-600">Dr. Emily Richardson</p>
                  <p className="text-gray-700">Principal, FGS School</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our approach to education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide an exceptional educational experience that inspires a lifelong love of learning, fosters academic excellence, and empowers students to become responsible global citizens who contribute positively to society.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized as a center of educational excellence where innovative teaching methods, state-of-the-art facilities, and a nurturing environment combine to develop future leaders who are intellectually curious, socially conscious, and prepared to excel in an evolving global community.
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="h-12 w-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <UserCheck className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" />
                  <span><strong>Excellence:</strong> Striving for the highest standards in all endeavors</span>
                </li>
                <li className="flex items-start">
                  <UserCheck className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" />
                  <span><strong>Integrity:</strong> Acting with honesty and strong moral principles</span>
                </li>
                <li className="flex items-start">
                  <UserCheck className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" />
                  <span><strong>Respect:</strong> Valuing diversity and treating others with dignity</span>
                </li>
                <li className="flex items-start">
                  <UserCheck className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" />
                  <span><strong>Responsibility:</strong> Taking ownership of actions and commitments</span>
                </li>
                <li className="flex items-start">
                  <UserCheck className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" />
                  <span><strong>Innovation:</strong> Embracing creativity and forward-thinking approaches</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey of FGS School through the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            {/* Timeline events */}
            <div className="space-y-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary-700 border-4 border-white"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-10">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">1995</h3>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4">Foundation</h4>
                    <p className="text-gray-700">FGS School was founded by a group of educators committed to providing quality education with a focus on holistic development.</p>
                  </div>
                  <div className="md:pl-10">
                    <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-full w-full bg-gray-200">
                        <Image 
                          src="/history-1.jpg" 
                          alt="School Foundation" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary-700 border-4 border-white"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-last md:text-left md:pl-10">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">2005</h3>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4">Campus Expansion</h4>
                    <p className="text-gray-700">The school expanded its facilities to include state-of-the-art laboratories, a modern library, and specialized classrooms to enhance the learning experience.</p>
                  </div>
                  <div className="md:order-first md:pr-10">
                    <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-full w-full bg-gray-200">
                        <Image 
                          src="/history-2.jpg" 
                          alt="Campus Expansion" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary-700 border-4 border-white"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-10">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">2015</h3>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4">Curriculum Innovation</h4>
                    <p className="text-gray-700">FGS implemented an innovative curriculum that integrates technology, project-based learning, and global perspectives to prepare students for the challenges of the 21st century.</p>
                  </div>
                  <div className="md:pl-10">
                    <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-full w-full bg-gray-200">
                        <Image 
                          src="/history-3.jpg" 
                          alt="Curriculum Innovation" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
            </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-primary-700 border-4 border-white"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-last md:text-left md:pl-10">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Today</h3>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4">Excellence in Education</h4>
                    <p className="text-gray-700">Today, FGS School stands as a beacon of educational excellence, recognized for its academic achievements, inclusive community, and commitment to developing well-rounded individuals ready to contribute to society.</p>
                  </div>
                  <div className="md:order-first md:pr-10">
                    <div className="h-48 md:h-64 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-full w-full bg-gray-200">
                        <Image 
                          src="/history-4.jpg" 
                          alt="Modern School" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 