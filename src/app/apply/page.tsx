'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

interface ParentInfo {
  name: string;
  relationship: string;
  email: string;
  phone: string;
  address: string;
}

interface CurrentSchool {
  name: string;
  address: string;
  grade: string;
}

interface Documents {
  birthCertificate?: File;
  previousReportCard?: File;
  recommendationLetter?: File;
  [key: string]: File | undefined;
}

interface AdditionalInfo {
  specialNeeds?: string;
  medicalConditions?: string;
  allergies?: string;
  [key: string]: string | undefined;
}

interface FormData {
  studentName: string;
  dateOfBirth: string;
  gradeApplyingFor: string;
  gender: string;
  parentInfo: ParentInfo;
  currentSchool: CurrentSchool;
  documents: Documents;
  additionalInfo: AdditionalInfo;
  [key: string]: any;
}

export default function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    dateOfBirth: '',
    gradeApplyingFor: '',
    gender: '',
    parentInfo: {
      name: '',
      relationship: '',
      email: '',
      phone: '',
      address: '',
    },
    currentSchool: {
      name: '',
      address: '',
      grade: '',
    },
    documents: {},
    additionalInfo: {},
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof FormData],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [fieldName]: file
        }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload documents to Sanity
      const uploadedDocs = {} as any;
      for (const [key, file] of Object.entries(formData.documents)) {
        if (file) {
          const fileData = new FormData();
          fileData.append('file', file);
          const response = await fetch(
            `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/files/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
              },
              body: fileData,
            }
          );
          const data = await response.json();
          uploadedDocs[key] = {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: data.document._id,
            },
          };
        }
      }

      // Create application document in Sanity
      await client.create({
        _type: 'studentApplication',
        studentName: formData.studentName,
        dateOfBirth: formData.dateOfBirth,
        gradeApplyingFor: formData.gradeApplyingFor,
        gender: formData.gender,
        parentInfo: formData.parentInfo,
        currentSchool: formData.currentSchool,
        documents: uploadedDocs,
        additionalInfo: formData.additionalInfo,
        status: 'submitted',
        submittedAt: new Date().toISOString(),
      });

      // Redirect to success page
      router.push('/apply/success');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Student Application Form</h2>
            <p className="mt-2 text-gray-600">Please fill out all required fields carefully</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Student Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-[#0f172a]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.studentName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-[#0f172a]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="gradeApplyingFor" className="block text-sm font-medium text-[#0f172a]">
                    Grade Applying For
                  </label>
                  <select
                    id="gradeApplyingFor"
                    name="gradeApplyingFor"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.gradeApplyingFor}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Grade</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={`Grade ${i + 1}`}>
                        Grade {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-[#0f172a]">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Parent/Guardian Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="parentInfo.name" className="block text-sm font-medium text-[#0f172a]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="parentInfo.name"
                    name="parentInfo.name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.parentInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="parentInfo.relationship" className="block text-sm font-medium text-[#0f172a]">
                    Relationship to Student
                  </label>
                  <input
                    type="text"
                    id="parentInfo.relationship"
                    name="parentInfo.relationship"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.parentInfo.relationship}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="parentInfo.email" className="block text-sm font-medium text-[#0f172a]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="parentInfo.email"
                    name="parentInfo.email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.parentInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="parentInfo.phone" className="block text-sm font-medium text-[#0f172a]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="parentInfo.phone"
                    name="parentInfo.phone"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.parentInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="parentInfo.address" className="block text-sm font-medium text-[#0f172a]">
                    Address
                  </label>
                  <textarea
                    id="parentInfo.address"
                    name="parentInfo.address"
                    required
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.parentInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Current School Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Current School Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="currentSchool.name" className="block text-sm font-medium text-[#0f172a]">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="currentSchool.name"
                    name="currentSchool.name"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.currentSchool.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="currentSchool.grade" className="block text-sm font-medium text-[#0f172a]">
                    Current Grade
                  </label>
                  <input
                    type="text"
                    id="currentSchool.grade"
                    name="currentSchool.grade"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.currentSchool.grade}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="currentSchool.address" className="block text-sm font-medium text-[#0f172a]">
                    School Address
                  </label>
                  <textarea
                    id="currentSchool.address"
                    name="currentSchool.address"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.currentSchool.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Required Documents</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="birthCertificate" className="block text-sm font-medium text-[#0f172a]">
                    Birth Certificate
                  </label>
                  <input
                    type="file"
                    id="birthCertificate"
                    name="birthCertificate"
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#10b981] file:text-white hover:file:bg-[#059669]"
                    onChange={(e) => handleFileChange(e, 'birthCertificate')}
                  />
                </div>
                <div>
                  <label htmlFor="recommendationLetter" className="block text-sm font-medium text-[#0f172a]">
                    Recommendation Letter
                  </label>
                  <input
                    type="file"
                    id="recommendationLetter"
                    name="recommendationLetter"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#10b981] file:text-white hover:file:bg-[#059669]"
                    onChange={(e) => handleFileChange(e, 'recommendationLetter')}
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Additional Information</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="additionalInfo.specialNeeds" className="block text-sm font-medium text-[#0f172a]">
                    Special Educational Needs
                  </label>
                  <textarea
                    id="additionalInfo.specialNeeds"
                    name="additionalInfo.specialNeeds"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.additionalInfo.specialNeeds}
                    onChange={handleInputChange}
                    placeholder="Please describe any special educational needs or accommodations required"
                  />
                </div>
                <div>
                  <label htmlFor="additionalInfo.medicalConditions" className="block text-sm font-medium text-[#0f172a]">
                    Medical Conditions
                  </label>
                  <textarea
                    id="additionalInfo.medicalConditions"
                    name="additionalInfo.medicalConditions"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.additionalInfo.medicalConditions}
                    onChange={handleInputChange}
                    placeholder="Please list any medical conditions"
                  />
                </div>
                <div>
                  <label htmlFor="additionalInfo.allergies" className="block text-sm font-medium text-[#0f172a]">
                    Allergies
                  </label>
                  <textarea
                    id="additionalInfo.allergies"
                    name="additionalInfo.allergies"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-1 focus:ring-[#10b981]"
                    value={formData.additionalInfo.allergies}
                    onChange={handleInputChange}
                    placeholder="Please list any known allergies"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#10b981] hover:bg-[#059669] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981] disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 