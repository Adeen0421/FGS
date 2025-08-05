'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from '../../../sanity/schema'

const config = defineConfig({
  projectId: '9b55bjgt',
  dataset: 'production',
  title: 'School Website',
  schema,
  plugins: [deskTool()],
  apiVersion: '2024-03-01'
})

export default function StudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <NextStudio {...config} />
    </div>
  )
} 