'use client'

import { motion } from "framer-motion";
import { blogContent } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-off-white">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{blogContent.hero.title}</h1>
            <p className="text-xl text-gray-600">{blogContent.hero.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogContent.posts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                    <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.date}</p>
                    <p className="text-gray-700">{post.excerpt}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 hover:text-blue-800 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

