'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto p-4 bg-primary">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
            {/* Logo & Newsletter */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="text-3xl font-logo mb-2 text-black">FGS</div>
              <form className="flex flex-col gap-2">
                <label className="border border-green-600 px-2 py-1 rounded text-sm font-normal mb-1 text-white">
                  Subscribe to our newsletter for the latest updates on features and school news.
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your Email Here"
                    className="border border-green-600 px-3 py-2 rounded w-full text-black bg-white"
                  />
                  <button type="submit" className="border border-white px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/80 transition-colors">Subscribe</button>
                </div>
                <span className="text-xs text-white">By subscribing, you consent to our Privacy Policy and agree to receive updates.</span>
              </form>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2 text-white">Quick Links</h3>
              <ul className="space-y-1 text-white/90">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/admissions">Admissions Info</Link></li>
                <li><Link href="/calendar">School Calendar</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
              </ul>
          </div>

            {/* Resources */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2 text-white">Resources</h3>
              <ul className="space-y-1 text-white/90">
                <li><Link href="/support">Academic Support</Link></li>
                <li><Link href="/parent-portal">Parent Portal</Link></li>
                <li><Link href="/student-life">Student Life</Link></li>
                <li><Link href="/events">Events Calendar</Link></li>
                <li><Link href="/news">News Updates</Link></li>
            </ul>
          </div>

            {/* Connect With Us */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2 text-white">Connect With Us</h3>
              <ul className="space-y-1 text-white/90">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-green-300">
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-pink-300">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-blue-300">
                    <SiX /> X
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-blue-400">
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-red-400">
                    <FaYoutube /> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-black pt-4">
          <p className="text-white/80 text-sm">© {new Date().getFullYear()} FGS Karachi. All rights reserved.</p>
          <div className="flex gap-4 text-white/80 text-sm">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 