'use client'

import { motion } from "framer-motion";
import { blogContent } from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogContent.posts.find(post => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

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
    <motion.main
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <motion.div variants={fadeIn} className="mb-8">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </motion.div>

      <motion.div variants={fadeIn} className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600">{post.date}</p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <motion.div variants={fadeIn} className="mt-12">
        <a
          href="/blog"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Blog
        </a>
      </motion.div>
    </motion.main>
  );
} 