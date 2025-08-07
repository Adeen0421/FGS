'use client'

import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const admissionSteps = [
  {
    title: 'Submit Application',
    description: 'Complete and submit the online application form with all required documents.',
  },
  {
    title: 'Document Review',
    description: 'Our admissions team will review your application and academic records.',
  },
  {
    title: 'Entrance Test',
    description: 'Qualified candidates will be invited to take an entrance test.',
  },
  {
    title: 'Interview',
    description: 'Selected students and parents will be called for an interview.',
  },
  {
    title: 'Decision',
    description: 'Final admission decision will be communicated within two weeks.',
  },
]

export default function Admissions() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    previousSchool: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      grade: '',
      previousSchool: '',
      message: '',
    })
    alert('Application submitted successfully!')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/admission-image.jpg"
            alt="Admissions Hero"
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Admissions</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl">
            Take the first step towards joining our vibrant academic community. We&apos;re excited to welcome new students who are eager to learn and grow.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-8 md:mb-12 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <Card
                key={step.title}
                title={`Step ${index + 1}`}
                className="text-center bg-white border-2 border-[#0A192F]/20 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-[#0A192F] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card title="Application Form" className="bg-white border-2 border-[#0A192F]/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-8">
              Application Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#0A192F] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#0A192F] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0A192F] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0A192F] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-[#0A192F] mb-2">
                    Grade Applying For
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  >
                    <option value="">Select Grade</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={`Grade ${i + 1}`}>
                        Grade {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-[#0A192F] mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0A192F] mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#0A192F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-[#0A192F] transition-all bg-white"
                />
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
