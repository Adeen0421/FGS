import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Studio } from './Studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: 'Content management for your website',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  interactiveWidget: 'resizes-content',
}

export default function StudioPage() {
  return <Studio />
} 