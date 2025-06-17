import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'studentApplication',
  title: 'Student Applications',
  type: 'document',
  fields: [
    // Student Information
    defineField({
      name: 'studentName',
      title: 'Student Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gradeApplyingFor',
      title: 'Grade Applying For',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
          { title: 'Other', value: 'other' },
          { title: 'Prefer not to say', value: 'prefer-not-to-say' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Parent/Guardian Information
    defineField({
      name: 'parentInfo',
      title: 'Parent/Guardian Information',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Full Name' },
        { name: 'relationship', type: 'string', title: 'Relationship to Student' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
        { name: 'address', type: 'text', title: 'Address' },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Academic History
    defineField({
      name: 'currentSchool',
      title: 'Current School',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'School Name' },
        { name: 'address', type: 'text', title: 'School Address' },
        { name: 'currentGrade', type: 'string', title: 'Current Grade' },
        { name: 'yearsAttended', type: 'number', title: 'Years Attended' },
      ],
    }),

    // Documents
    defineField({
      name: 'documents',
      title: 'Required Documents',
      type: 'object',
      fields: [
        { 
          name: 'transcripts', 
          title: 'Academic Transcripts',
          type: 'file',
        },
        { 
          name: 'birthCertificate', 
          title: 'Birth Certificate',
          type: 'file',
        },
        { 
          name: 'recommendationLetter', 
          title: 'Recommendation Letter',
          type: 'file',
        },
      ],
    }),

    // Additional Information
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'object',
      fields: [
        { 
          name: 'specialNeeds', 
          title: 'Special Educational Needs',
          type: 'text',
        },
        { 
          name: 'interests', 
          title: 'Interests and Activities',
          type: 'text',
        },
        { 
          name: 'whyFGS', 
          title: 'Why FGS?',
          type: 'text',
        },
      ],
    }),

    // Application Status
    defineField({
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          { title: 'Submitted', value: 'submitted' },
          { title: 'Under Review', value: 'under-review' },
          { title: 'Interview Scheduled', value: 'interview-scheduled' },
          { title: 'Accepted', value: 'accepted' },
          { title: 'Waitlisted', value: 'waitlisted' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
    }),

    // Submission Details
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
}); 