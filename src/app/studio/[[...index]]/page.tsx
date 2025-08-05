import { Suspense } from 'react'
import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextStudio config={config} />
    </Suspense>
  )
}
}
