'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ContactPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const productName = searchParams.get('product')
    if (productName) {
      const subjectInput = document.getElementById('subject') as HTMLInputElement
      const messageInput = document.getElementById('message') as HTMLTextAreaElement
      if (subjectInput) {
        subjectInput.value = `Price inquiry for ${productName}`
      }
      if (messageInput) {
        messageInput.value = `I would like to know the price for ${productName}.`
      }
    }
  }, [searchParams])

  return (
    <div className="bg-off-white min-h-screen">
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-8 text-charcoal">Contact Us</h1>
          <p className="text-center text-charcoal mb-12 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our pieces, custom designs, or anything else, our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-charcoal mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-charcoal mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-charcoal mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-2 px-4 rounded-md hover:bg-light-gold hover:text-charcoal transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6 text-charcoal">Get in Touch</h2>
            <p className="text-charcoal">
              Phone: +1 (555) 123-4567<br />
              Email: info@jawahraat.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

