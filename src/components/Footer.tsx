'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'Contact', href: '/contact' },
];

const resources = [
  { name: 'Student Portal', href: '/student-portal' },
  { name: 'Parent Portal', href: '/parent-portal' },
  { name: 'Library', href: '/library' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'News & Events', href: '/news' },
];

const contact = {
  address: '123 Education Street, Academic City, ST 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@smartacademia.edu',
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '/facebook.svg' },
  { name: 'Twitter', href: '#', icon: '/twitter.svg' },
  { name: 'Instagram', href: '#', icon: '/instagram.svg' },
  { name: 'LinkedIn', href: '#', icon: '/linkedin.svg' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            variants={fadeIn('right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/logo-new.png"
                alt="School Logo"
                width={400}
                height={130}
                className="h-24 w-auto"
                priority
              />
              <div className="text-2xl font-semibold text-white">
                Faiz Grammar School
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Empowering minds and shaping futures through excellence in education and fostering a nurturing learning environment.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn('left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{contact.address}</p>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/your-number"
                  className="text-gray-400 hover:text-white transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Smart Academia. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
} 