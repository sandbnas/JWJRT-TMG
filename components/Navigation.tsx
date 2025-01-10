'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="fixed w-full z-10 transition-all duration-300 bg-beige/95 backdrop-blur-sm shadow-sm border-b border-gold/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-brown hover:text-carmine transition-colors">Jawahraat</Link>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Collection', 'About', 'Blog', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-brown hover:text-orange transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <button 
          className="md:hidden text-brown hover:text-orange transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-beige/95 backdrop-blur-sm border-t border-gold/20">
          {['Home', 'Collection', 'About', 'Blog', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
              className="block py-2 px-4 text-brown hover:text-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
} 