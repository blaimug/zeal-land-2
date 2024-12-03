'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/icon.png" alt="Zeal" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="#support" className="text-gray-600 hover:text-gray-900">
              Support
            </Link>
            <Button asChild variant="outline">
              <Link href="https://app.zeal.rw">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="https://apps.apple.com/us/app/zeal-congregation-assisstant/id6737194361">
                Download
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#support"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://app.zeal.rw">Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="https://apps.apple.com/us/app/zeal-congregation-assisstant/id6737194361">
                  Download
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

