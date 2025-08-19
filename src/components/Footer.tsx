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
  { name: 'Contact', href: '/contact' },
];


const contact = {
  address: '3g 8/16 Nazimabad no 3 Karachi, Karachi, Sindh 74600',
  phone: '03211430155',
  email: 'fgsimran@gmail.com',
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
        className="container mx-auto px-4 py-6"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Logo and Description Section */}
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 mb-3">
              <Image
                src="/logo-new.png"
                alt="School Logo"
                width={400}
                height={130}
                className="h-12 lg:h-16 w-auto"
                priority
              />
              <div className="text-base lg:text-xl font-semibold text-white">
                Faiz Grammar School
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm mx-auto lg:mx-0">
              Empowering minds and shaping futures through excellence in education.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-base font-semibold text-white mb-3">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-gray-400">
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
              </div>
              
              {/* Social Links */}
              <div className="pt-1">
                <div className="flex justify-center lg:justify-start gap-2">
                  <a
                    href="https://www.facebook.com/people/Faiz-Grammer-School/100067013864103"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/faizgrammarschool"
                    className="text-gray-400 hover:text-pink-400 transition-all duration-200 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/923211430155"
                    className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <FaWhatsapp className="h-4 w-4" />
                  </a>
                </div>
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
          className="mt-4 pt-3 border-t border-gray-800 text-center text-xs text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Faiz Grammar School. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
