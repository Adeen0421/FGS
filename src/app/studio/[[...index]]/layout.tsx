import { ReactNode } from 'react'

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ height: '100vh' }}>
      {children}
    </div>
  )
}
