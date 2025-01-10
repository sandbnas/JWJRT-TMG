import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, PinIcon as Pinterest } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brown text-off-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif mb-2 text-gold">Jawahraat</h3>
            <p className="text-light-gold">info@luxejewels.com</p>
            <p className="text-light-gold">+1 (555) 123-4567</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gold hover:text-light-gold transition-colors"><Instagram /></Link>
            <Link href="#" className="text-gold hover:text-light-gold transition-colors"><Facebook /></Link>
            <Link href="#" className="text-gold hover:text-light-gold transition-colors"><Pinterest /></Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <Link href="/privacy" className="text-gold hover:text-light-gold transition-colors mr-4">Privacy Policy</Link>
          <Link href="/terms" className="text-gold hover:text-light-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
} 