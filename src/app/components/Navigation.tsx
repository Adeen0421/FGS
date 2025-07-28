'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const navItems = [
  {
    name: 'About',
    href: '/about',
    description: 'Learn about our mission and values',
  },
  {
    name: 'Admissions',
    href: '/admissions',
    description: 'Join our academic community',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    description: 'Access your student portal',
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-white/80 backdrop-blur-md shadow-soft-md': scrolled,
          'bg-transparent': !scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              'text-2xl font-bold transition-colors duration-300',
              {
                'text-primary': scrolled,
                'text-white': !scrolled,
              }
            )}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">SA</span>
              </div>
              <span className="hidden sm:inline">Smart Academia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group',
                  {
                    'text-primary bg-primary/5': pathname === item.href && scrolled,
                    'text-white bg-white/10': pathname === item.href && !scrolled,
                    'text-text hover:text-primary': scrolled && pathname !== item.href,
                    'text-white/90 hover:text-white hover:bg-white/10': !scrolled && pathname !== item.href,
                  }
                )}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
            <Link
              href="/admissions"
              className={clsx(
                'ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                {
                  'bg-gradient-primary text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5': scrolled,
                  'bg-white text-primary shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5': !scrolled,
                }
              )}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              'md:hidden p-2 rounded-lg transition-colors duration-300',
              {
                'text-text hover:bg-gray-100': scrolled,
                'text-white hover:bg-white/10': !scrolled,
              }
            )}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden transition-all duration-300 ease-in-out',
          {
            'opacity-100 translate-y-0': isOpen,
            'opacity-0 -translate-y-4 pointer-events-none': !isOpen,
          }
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-soft-lg border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300',
                {
                  'text-primary bg-primary/5': pathname === item.href,
                  'text-text hover:text-primary hover:bg-gray-50': pathname !== item.href,
                }
              )}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
              <p className="mt-1 text-sm text-text-light">{item.description}</p>
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/admissions"
              className="block w-full px-4 py-3 text-center rounded-lg bg-gradient-primary text-white font-medium shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 