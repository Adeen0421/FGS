export const metadata = {
  title: 'Sanity Studio',
  description: 'Content Management System for FGS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 