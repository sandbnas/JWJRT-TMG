'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParallax } from './hooks/useParallax'
import { homeContent } from '@/data/home'
import { motion } from 'framer-motion'

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

export default function HomePage() {
  const scrollY = useParallax();

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/images/home/hero.jpg"
            alt="Luxury Jewelry Collection"
            fill
            className="object-cover transform scale-110"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-brown/40" />
        <motion.div 
          className="relative z-10 flex items-center justify-center h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center text-off-white">
            <motion.h1 
              className="font-serif text-5xl md:text-7xl mb-4 text-gold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {homeContent.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {homeContent.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="/collection" className="inline-block bg-carmine text-off-white px-8 py-3 rounded-full hover:bg-orange transition-colors">
                View Collection
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-center mb-12 text-brown"
            {...fadeInUp}
          >
            {homeContent.featured.title}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {homeContent.featured.products.map((product) => (
              <motion.div 
                key={product.id} 
                className="group relative"
                variants={fadeInUp}
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
                    <div className="absolute inset-0 bg-brown/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-off-white p-4">
                      <h3 className="text-xl mb-2 text-gold">{product.name}</h3>
                      <p className="mb-4 text-off-white text-sm text-center">{product.description}</p>
                      <p className="mb-4 text-gold text-sm">Contact for Price</p>
                      <span className="bg-orange text-off-white px-4 py-2 rounded hover:bg-carmine transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-4 text-brown">{homeContent.about.title}</h2>
            <p className="mb-8 text-brown">{homeContent.about.description}</p>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={homeContent.about.image}
                alt="Our Workshop"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-center mb-12 text-brown"
            {...fadeInUp}
          >
            {homeContent.blog.title}
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {homeContent.blog.posts.map((post) => (
              <motion.article 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2 text-brown">{post.title}</h3>
                    <p className="text-carmine mb-4">{post.date}</p>
                    <p className="text-brown">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="text-carmine hover:text-orange transition-colors text-lg">
              Read More Articles →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

