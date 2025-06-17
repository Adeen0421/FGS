import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Event Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cultural', value: 'cultural' },
          { title: 'Sports', value: 'sports' },
          { title: 'Academic', value: 'academic' },
          { title: 'Celebration', value: 'celebration' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    })
  ]
}); 