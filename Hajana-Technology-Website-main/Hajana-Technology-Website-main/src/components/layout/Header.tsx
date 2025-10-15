'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">HT</span>
              </div>
              <span className="text-gray-900 font-bold text-xl">Hajana Technologies</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
            <Link href="/career" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Career</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 absolute top-16 left-0 right-0 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/career"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>

              {/* Mobile CTA Button */}
              <div className="px-4 py-3 border-t border-gray-200 mt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white min-h-[44px]">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}