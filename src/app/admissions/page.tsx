'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle, School, Download, ArrowRight, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// FAQs for the admissions process
const faqs = [
  {
    question: "What is the application deadline?",
    answer: "Our main application deadline is February 1st for the upcoming academic year. However, we accept applications on a rolling basis depending on availability. Please contact the admissions office for mid-year enrollments."
  },
  {
    question: "What documents are required for the application?",
    answer: "Required documents include completed application form, previous academic records, recommendation letters, birth certificate copy, and passport-size photographs. International students may need to provide additional documentation."
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: "Yes, FGS offers both need-based financial aid and merit scholarships. The financial aid application process is separate from the admission process and requires additional documentation. Merit scholarships are awarded based on academic excellence, leadership, and special talents."
  },
  {
    question: "Is there an entrance exam?",
    answer: "Yes, applicants are required to take an entrance assessment appropriate for their grade level. This helps us understand the student's academic strengths and learning needs to ensure proper placement."
  },
  {
    question: "What is the typical class size?",
    answer: "Our average class size is 18-22 students, maintaining a student-to-teacher ratio that allows for personalized attention while fostering collaborative learning environments."
  },
  {
    question: "Do you accept students with learning differences?",
    answer: "Yes, we are committed to inclusive education and accept students with a range of learning profiles. Our learning support department works with families to determine if we can provide appropriate accommodations to meet each student's needs."
  }
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
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
              Admissions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join our vibrant learning community and begin your educational journey with FGS School
            </motion.p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Welcome to the FGS Admissions Process
              </h2>
              <div className="text-gray-900 space-y-4">
                <p>
                  We are delighted that you are considering FGS School for your child's education. Our admissions process is designed to be thorough yet welcoming, allowing us to get to know your child while introducing you to our community.
                </p>
                <p>
                  We seek students who demonstrate academic promise, curiosity, and character, and whose families value our commitment to educational excellence and personal growth.
                </p>
                <p>
                  Our team is here to guide you through every step of the application process. We look forward to meeting your family and exploring how FGS can provide the ideal educational environment for your child.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href="#apply-now"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors group"
                  >
                    Apply Now
                    <ArrowRight size={16} className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary-600 border border-primary-600 font-medium hover:bg-primary-50 transition-colors"
                  >
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9">
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/admissions.jpg" 
                    alt="Students on campus" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Now Accepting</h3>
                </div>
                <p className="text-gray-600">Applications for the 2024-2025 academic year are now open!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to joining the FGS community
            </p>
          </div>
          
          <div className="relative">
            {/* Process steps */}
            <div className="hidden md:block absolute left-1/2 top-24 bottom-24 transform -translate-x-1/2 w-1 bg-primary-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative md:pb-16"
              >
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-mt-2 md:mb-0 mb-6 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center border-4 border-white shadow-md">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="inline-flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-primary-100 md:hidden">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Inquiry & Application</h3>
                    <p className="text-gray-700">Begin by filling out our online inquiry form or submitting an application through our portal. You'll need to provide basic information about your child and family.</p>
                    <div className="mt-4 flex md:justify-end">
                      <Link 
                        href="#apply-now" 
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Complete Application
                        <ArrowRight size={16} className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:pl-16">
                    <div className="hidden md:flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative md:pb-16"
              >
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-mt-2 md:mb-0 mb-6 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center border-4 border-white shadow-md">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pl-16 md:order-last">
                    <div className="inline-flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-primary-100 md:hidden">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">School Visit & Interview</h3>
                    <p className="text-gray-700">Schedule a campus tour to experience our dynamic learning environment. This includes a parent interview and, for older students, a student interview with appropriate school personnel.</p>
                    <div className="mt-4">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Schedule a Visit
                        <ArrowRight size={16} className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:text-right md:pr-16">
                    <div className="hidden md:flex items-center justify-end mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative md:pb-16"
              >
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-mt-2 md:mb-0 mb-6 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center border-4 border-white shadow-md">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="inline-flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-primary-100 md:hidden">
                      <School className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Assessment & Documentation</h3>
                    <p className="text-gray-700">Students take grade-appropriate entrance assessments. Additionally, we'll need academic records, recommendation letters, and health information. Our team can help guide you through the documentation requirements.</p>
                  </div>
                  <div className="md:pl-16">
                    <div className="hidden md:flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <School className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-mt-2 md:mb-0 mb-6 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center border-4 border-white shadow-md">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pl-16 md:order-last">
                    <div className="inline-flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-primary-100 md:hidden">
                      <CheckCircle className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Decision & Enrollment</h3>
                    <p className="text-gray-700">Admission decisions are typically made within 2-3 weeks after completing all steps. Upon acceptance, secure your child's place by submitting the enrollment contract and deposit, then attend our new student orientation.</p>
                  </div>
                  <div className="md:text-right md:pr-16">
                    <div className="hidden md:flex items-center justify-end mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apply Now Section */}
      <section id="apply-now" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begin your journey with FGS School by submitting your application today
            </p>
          </div>
          
          <div className="bg-primary-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Online Application Portal</h3>
                <p className="text-primary-50 mb-8">
                  Our online portal makes the application process straightforward and convenient. Create an account to begin your application, save your progress, and track your submission status. All applications are securely stored in our system.
                </p>
                
                <div className="space-y-6">
                  <Link href="/apply" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-full bg-white text-primary-600 font-medium hover:bg-primary-50 transition-colors group">
                    Start Application
                    <ArrowRight size={16} className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-primary-700 p-8 md:p-12">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Admissions</h3>
                <p className="text-primary-50 mb-8">
                  Our admissions team is here to help guide you through the process. Feel free to reach out with any questions.
                </p>
                
                <div className="space-y-4 text-primary-50">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p>admissions@fgsschool.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p>(123) 456-7890</p>
                      <p className="text-sm">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Tuition & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investing in your child's education with options for financial assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Tuition</h3>
              <p className="text-gray-700 mb-6">
                Our tuition is competitive and reflects our commitment to providing an exceptional educational experience with outstanding faculty and comprehensive resources.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Elementary School (K-5)</span>
                  <span className="font-semibold">$18,500 per year</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">Middle School (6-8)</span>
                  <span className="font-semibold">$20,500 per year</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium">High School (9-12)</span>
                  <span className="font-semibold">$22,500 per year</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                *Tuition includes textbooks, technology fees, and most field trips. Additional fees may apply for extracurricular activities, specialized programs, and extended day care.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Financial Aid</h3>
              <p className="text-gray-700 mb-6">
                We believe that a quality education should be accessible to promising students from diverse socioeconomic backgrounds. Our financial aid program is designed to bridge the gap between the cost of tuition and what families can reasonably afford.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Need-based financial assistance available for qualifying families</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Merit scholarships for exceptional academic achievement, leadership, and talent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible payment plans available to accommodate family budgets</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/financial-aid" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Learn More About Financial Aid
                  <ArrowRight size={16} className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our admissions process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="text-primary-600">
                      {openFaq === index ? (
                        <span className="text-2xl">−</span>
                      ) : (
                        <span className="text-2xl">+</span>
                      )}
                    </span>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-4">Still have questions? We're here to help.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary-600 text-primary-600 font-medium hover:bg-primary-50 transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 