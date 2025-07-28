'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariants } from '@/lib/animations';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        .nav-link {
          position: relative;
          outline: none !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link:active {
          transform: scale(0.95);
        }

        .apply-button {
          outline: none !important;
          position: relative;
          overflow: hidden;
        }

        .apply-button::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%);
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.5s ease, opacity 0.5s ease;
          pointer-events: none;
        }

        .apply-button:active::after {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0;
          transition: 0s;
        }
      `}</style>

      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent border-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <span className="flex items-center space-x-3">
                  <Image src="/logo-new.png" alt="School Logo" width={320} height={100} className="h-20 w-auto" priority />
                  <span className={`font-semibold text-lg whitespace-nowrap ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}>Faiz Grammar School</span>
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`nav-link text-sm font-medium transition-colors ${
                      isScrolled ? 'text-gray-900 hover:text-[#0A192F]' : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`apply-button px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#0A192F] text-white hover:bg-[#112240] shadow-lg hover:shadow-xl'
                    : 'bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl'
                }`}
              >
                Apply Now
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden apply-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className={`w-6 h-6 flex flex-col justify-center items-center ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current mt-1.5 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current mt-1.5 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="nav-link block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#0A192F]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="pt-4"
              >
                <button className="apply-button w-full px-4 py-2 bg-[#0A192F] text-white rounded-full text-sm font-medium hover:bg-[#112240] transition-colors">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 