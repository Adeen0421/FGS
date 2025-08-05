'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load the NextStudio component to prevent serialization issues
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => {
    const { NextStudio } = mod
    return function StudioComponent() {
      // We need to dynamically import the config to avoid serialization issues
      const config = require('../../../../sanity.config').default
      // @ts-ignore - NextStudio types are not properly exported
      return <NextStudio config={config} />
    }
  }),
  {
    loading: () => (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-lg">Loading Studio...</div>
      </div>
    ),
    ssr: false,
  }
)

export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextStudio />
    </Suspense>
  )
}
