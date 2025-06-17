'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

type IconName = "book-open" | "image" | "mail" | "user-plus" | "menu" | "x";

type NavItem = {
  name: string;
  href: string;
  icon: IconName;
};

const navItems: NavItem[] = [
  { 
    name: 'Admissions',
    href: '/admissions',
    icon: 'book-open'
  },
  { 
    name: 'Gallery',
    href: '/gallery',
    icon: 'image'
  },
  { 
    name: 'Contact',
    href: '/contact',
    icon: 'mail'
  },
  { 
    name: 'Apply as Teacher',
    href: '/teacher',
    icon: 'user-plus'
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center"
          >
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <motion.span 
                className={`text-2xl font-semibold transition-all duration-300 ${
                  scrolled ? 'text-white' : 'text-primary-600'
                } group-hover:text-accent-400`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FGS
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-base font-medium transition-all duration-300 ${
                    scrolled ? 'text-gray-100 hover:text-white' : 'text-gray-800 hover:text-primary-600'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="mr-2"
                  >
                    <DynamicIcon name={item.icon} className="w-[18px] h-[18px]" />
                  </motion.div>
                  {item.name}
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply"
                  className="ml-3 px-5 py-2.5 rounded-md bg-accent-500 hover:bg-accent-600 text-white text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get Admission
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="flex items-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-400 hover:text-white hover:bg-primary-700' : 'text-gray-800 hover:text-primary-600 hover:bg-gray-100'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <DynamicIcon name={isOpen ? 'x' : 'menu'} className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2.5 rounded-md text-[15px] font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50/80 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="mr-2.5"
                    >
                      <DynamicIcon name={item.icon} className="w-5 h-5 text-gray-500" />
                    </motion.div>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="px-3 pt-3"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/apply"
                    className="block w-full px-5 py-2.5 text-center rounded-md bg-accent-500 hover:bg-accent-600 text-white text-[15px] font-medium transition-all duration-300 hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Admission
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 