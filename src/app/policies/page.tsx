'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Policies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/admission-image.jpg"
            alt="Policy Page Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-10"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-display-nature mb-6"
            >
              Legal & Policies
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Important information about privacy, terms of service, and data handling at Faiz Grammar School.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/">
                <Button variant="outline" size="lg">
                  ← Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-16"
          >
            
            {/* Privacy Policy */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Privacy Policy
                </h2>
                <p className="text-md text-gray-600">
                  Faiz Grammar School
                </p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                At Faiz Grammar School, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                    Information We Collect
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• Student and parent names</li>
                    <li>• Contact numbers</li>
                    <li>• Email addresses</li>
                    <li>• Other details necessary for school communication</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                    How We Use Information
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• To send important school updates and reminders</li>
                    <li>• To communicate with parents regarding fees, events, and notices</li>
                    <li>• To maintain academic and administrative records</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                    Data Protection
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• We do not sell or share your information with third parties</li>
                    <li>• Data is stored securely and used only for educational purposes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                    Data Deletion
                  </h3>
                  <p className="text-gray-700 ml-9 text-sm">
                    Parents and students may request deletion of their personal data at any time by contacting us at{' '}
                    <a href="mailto:fgsimran@gmail.com" className="text-primary hover:text-primary-dark font-medium">
                      fgsimran@gmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                    Contact Us
                  </h3>
                  <p className="text-gray-700 mb-2 ml-9 text-sm">
                    If you have any questions about this Privacy Policy, please reach out to:
                  </p>
                  <div className="ml-9">
                    <a 
                      href="mailto:fgsimran@gmail.com" 
                      className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-base"
                    >
                      📧 fgsimran@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terms of Service */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Terms of Service
                </h2>
                <p className="text-md text-gray-600">
                  Faiz Grammar School
                </p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                By using our services (school management system, communication tools, and digital platforms), 
                you agree to the following terms:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                    Use of Services
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• Parents and students must provide accurate information for school records</li>
                    <li>• Services are intended for educational and communication purposes only</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                    Responsibilities
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• Parents are responsible for keeping their contact information up to date</li>
                    <li>• Students must follow school rules when accessing digital services</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                    Data Usage
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• Information collected will be used only for school-related communication and administration</li>
                    <li>• Faiz Grammar School will never sell your information to third parties</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-700 ml-9 text-sm">
                    The school is not responsible for issues caused by misuse of the communication system.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                    Changes to Terms
                  </h3>
                  <p className="text-gray-700 ml-9 text-sm">
                    We may update these Terms occasionally. Continued use of our services means you accept any changes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Deletion Policy */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Data Deletion Policy
                </h2>
                <p className="text-md text-gray-600">
                  Faiz Grammar School
                </p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                At Faiz Grammar School, we value your right to control your personal data. 
                We believe in transparency and giving you full control over your information.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                    Your Rights
                  </h3>
                  <p className="text-gray-700 ml-9 text-sm">
                    Parents or students may request deletion of their data (name, phone number, email, or records) at any time.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                    How to Request Deletion
                  </h3>
                  <div className="ml-9 space-y-2">
                    <p className="text-gray-700 text-sm">
                      To request deletion, please email us at{' '}
                      <a href="mailto:fgsimran@gmail.com" className="text-primary hover:text-primary-dark font-medium">
                        fgsimran@gmail.com
                      </a>
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                      <p className="text-yellow-800 font-medium text-sm">
                        📧 <strong>Subject Line:</strong> "Data Deletion Request"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                    Processing Time
                  </h3>
                  <div className="ml-9">
                    <p className="text-gray-700 mb-2 text-sm">
                      Once verified, we will delete your data from our systems within:
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-md p-3">
                      <p className="text-green-800 font-bold text-base">
                        ⏱️ <strong>7 Working Days</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                    What Happens After Deletion
                  </h3>
                  <ul className="text-gray-700 space-y-1 ml-9 text-sm">
                    <li>• Your personal data will be permanently removed from our systems</li>
                    <li>• You will receive a confirmation email once deletion is complete</li>
                    <li>• No further communications will be sent to deleted contact information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
                    Contact Information
                  </h3>
                  <div className="ml-9">
                    <p className="text-gray-700 mb-2 text-sm">
                      For any questions about data deletion or privacy concerns:
                    </p>
                    <a 
                      href="mailto:fgsimran@gmail.com" 
                      className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-base"
                    >
                      📧 fgsimran@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Last Updated Section */}
            <motion.div 
              variants={itemVariants}
              className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"
            >
              <p className="text-gray-700 font-medium text-sm">
                <span className="text-primary font-semibold">Last Updated:</span> August 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 