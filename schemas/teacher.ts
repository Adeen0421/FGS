import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teacherApplication',
  title: 'Teacher Applications',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().custom((value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return true;
      }),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subject',
      title: 'Subject Area',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', type: 'string', title: 'Degree' },
            { name: 'institution', type: 'string', title: 'Institution' },
            { name: 'year', type: 'number', title: 'Year' },
          ],
        },
      ],
    }),
    defineField({
      name: 'cv',
      title: 'CV',
      type: 'file',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Under Review', value: 'reviewing' },
          { title: 'Interviewed', value: 'interviewed' },
          { title: 'Accepted', value: 'accepted' },
          { title: 'Rejected', value: 'rejected' },
        ]
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'new'
    }),
  ],
}); 