'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import { Footer } from '@/components/Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooterPaths = ['/apply', '/teacher/apply'];
  const shouldShowFooter = !hideFooterPaths.some(path => pathname?.startsWith(path));

  return (
    <>
      <main className="pt-16">
        {children}
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
} 