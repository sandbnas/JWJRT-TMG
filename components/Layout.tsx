import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Instagram, Facebook, PinIcon as Pinterest } from 'lucide-react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-charcoal">Luxe Jewels</Link>
          <div className="hidden md:flex space-x-6">
            {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-charcoal hover:text-gold transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="block py-2 px-4 text-charcoal hover:bg-cream">
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-charcoal text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-serif mb-2">Luxe Jewels</h3>
              <p>info@luxejewels.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gold transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-gold transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-gold transition-colors"><Pinterest /></Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <Link href="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

