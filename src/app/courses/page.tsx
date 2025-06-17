'use client';

import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    level: 'Pre-Primary',
    programs: [
      {
        name: 'Montessori',
        ageGroup: '2.5 - 3.5 years',
        description: 'Child-centered educational approach fostering natural development and independence.',
        features: [
          'Sensory development activities',
          'Practical life exercises',
          'Early mathematics concepts',
          'Language development',
          'Cultural awareness'
        ]
      },
      {
        name: 'Nursery',
        ageGroup: '3.5 - 4.5 years',
        description: 'Nurturing environment focusing on basic skills and social development.',
        features: [
          'Phonics and letter recognition',
          'Number concepts',
          'Arts and crafts',
          'Physical activities',
          'Social skills development'
        ]
      },
      {
        name: 'KG-1',
        ageGroup: '4.5 - 5.5 years',
        description: 'Foundation program developing essential academic and social skills.',
        features: [
          'Reading readiness',
          'Writing skills',
          'Basic mathematics',
          'Environmental awareness',
          'Creative expression'
        ]
      },
      {
        name: 'KG-2',
        ageGroup: '5.5 - 6.5 years',
        description: 'Advanced kindergarten program preparing for primary education.',
        features: [
          'Advanced reading skills',
          'Writing development',
          'Mathematical operations',
          'Science exploration',
          'Computer basics'
        ]
      }
    ]
  },
  {
    level: 'Primary (Classes 1-5)',
    programs: [
      {
        name: 'Class 1',
        ageGroup: '6+',
        description: 'Beginning of formal education with core subjects and activities.',
        features: [
          'English language and literature',
          'Mathematics fundamentals',
          'Environmental science',
          'Art and craft',
          'Physical education'
        ]
      },
      {
        name: 'Class 2-3',
        ageGroup: '7-8',
        description: 'Building on fundamentals with expanded subject knowledge.',
        features: [
          'Advanced language skills',
          'Mathematical concepts',
          'Science and social studies',
          'Computer education',
          'Music and dance'
        ]
      },
      {
        name: 'Class 4-5',
        ageGroup: '9-10',
        description: 'Comprehensive primary education with diverse subjects.',
        features: [
          'Advanced mathematics',
          'Science experiments',
          'Social sciences',
          'Language arts',
          'Digital literacy'
        ]
      }
    ]
  },
  {
    level: 'Middle School (Classes 6-8)',
    programs: [
      {
        name: 'Class 6',
        ageGroup: '11+',
        description: 'Transition to middle school with specialized subjects.',
        features: [
          'Advanced mathematics',
          'Physical science',
          'Social studies',
          'Literature',
          'Second language'
        ]
      },
      {
        name: 'Class 7',
        ageGroup: '12+',
        description: 'Intermediate middle school with in-depth subject exploration.',
        features: [
          'Algebra basics',
          'Life science',
          'World history',
          'Computer programming',
          'Arts and music'
        ]
      },
      {
        name: 'Class 8',
        ageGroup: '13+',
        description: 'Final year of middle school preparing for secondary education.',
        features: [
          'Advanced algebra',
          'Chemistry and physics',
          'Advanced literature',
          'Digital technologies',
          'Career guidance'
        ]
      }
    ]
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Our Academic Programs
            </h1>
            <p className="mt-4 text-xl text-primary/80">
              Comprehensive education from Montessori to Middle School
            </p>
          </div>
        </div>
      </section>

      {/* Course Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {courses.map((section, index) => (
          <div key={section.level} className={`mb-16 ${index !== 0 ? 'pt-16 border-t border-gray-200' : ''}`}>
            <h2 className="text-3xl font-bold text-primary mb-8">{section.level}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.programs.map((program) => (
                <div key={program.name} className="bg-white rounded-xl shadow-lg border border-primary-100 overflow-hidden hover:border-accent transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary">{program.name}</h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        Age {program.ageGroup}
                      </span>
                    </div>
                    <p className="text-primary/80 mb-4">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-primary/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <Link href="/apply" 
                      className="block w-full text-center px-4 py-2 bg-accent hover:bg-accent-700 text-white rounded-md transition-colors">
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our school community and give your child the gift of quality education
          </p>
          <Link href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-700 text-white rounded-md transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 