'use client'

import Image from 'next/image'
import { aboutContent } from '@/data/about'
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

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const valueCardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { 
    y: -5,
    transition: { duration: 0.2 }
  }
}

export default function AboutPage() {
  return (
    <div className="bg-off-white min-h-screen">
      <motion.section 
        className="py-16 bg-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-serif text-center mb-8 text-charcoal"
            variants={titleAnimation}
            initial="initial"
            animate="animate"
          >
            {aboutContent.hero.title}
          </motion.h1>
          <motion.p 
            className="text-center text-charcoal mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {aboutContent.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/images/about/story.jpg"
                alt="Our Story"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-serif mb-6 text-charcoal"
                variants={titleAnimation}
              >
                {aboutContent.story.title}
              </motion.h2>
              {aboutContent.story.content.map((paragraph: string, index: number) => (
                <motion.p 
                  key={index} 
                  className="text-charcoal mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-center mb-12 text-charcoal"
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aboutContent.values.title}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aboutContent.values.items.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-off-white p-6 rounded-lg shadow-md"
                variants={valueCardAnimation}
                whileHover="whileHover"
              >
                <motion.h3 
                  className="text-xl font-serif mb-4 text-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  className="text-charcoal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

