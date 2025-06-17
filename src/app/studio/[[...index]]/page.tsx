'use client'

import { NextStudio } from 'next-sanity/studio'
import { createClient } from 'next-sanity'
import config from '../../../../sanity.config'

const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2024-03-13',
  useCdn: false,
})

export default function StudioPage() {
  return <NextStudio client={client} />
} 