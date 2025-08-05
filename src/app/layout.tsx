'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';
import './globals.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeIn,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col w-full overflow-x-hidden m-0 p-0">
        <Navbar />

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-grow w-full overflow-x-hidden"
          >
            <div className="w-full overflow-x-hidden">
              {children}
            </div>
          </motion.main>
        </AnimatePresence>

        {/* Footer */}
        <Footer />

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Top-right gradient blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          
          {/* Bottom-left gradient blob */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        </div>
      </body>
    </html>
  );
}
