'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  // @ts-ignore - NextStudio types are not properly exported
  return <NextStudio config={config} />
}
