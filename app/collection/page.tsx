'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { collectionContent } from '@/data/collection'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? collectionContent.products 
    : collectionContent.products.filter(product => product.categories.includes(selectedCategory))

  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-16 bg-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-serif text-center mb-8 text-charcoal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {collectionContent.hero.title}
          </motion.h1>
          <motion.p 
            className="text-center text-charcoal mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {collectionContent.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-8 bg-off-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.button
              variants={fadeInUp}
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === 'All' 
                  ? 'bg-gold text-white' 
                  : 'bg-cream text-charcoal hover:bg-gold/20'
              }`}
            >
              All
            </motion.button>
            {collectionContent.categories.map((category: string) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gold text-white' 
                    : 'bg-cream text-charcoal hover:bg-gold/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/collection/${product.id}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-charcoal/60 mt-1">{product.categories.join(', ')}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
} 