'use client'

import { motion } from "framer-motion";
import { collectionContent } from "@/data/collection";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/types/content";

interface CollectionDetailPageProps {
  params: {
    id: string;
  };
}

export default function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const product = collectionContent.products.find(
    (p) => p.id === parseInt(params.id)
  );

  if (!product) {
    notFound();
  }

  // Find the related products using the IDs
  const relatedProducts = product.relatedProducts
    .map(id => collectionContent.products.find(p => p.id === id))
    .filter((p): p is ProductDetail => p !== undefined);

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
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div variants={fadeIn} className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.additionalImages.map((image: string, index: number) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <Link 
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-block bg-gold text-white px-6 py-3 rounded-md hover:bg-light-gold hover:text-charcoal transition-colors mb-6"
            >
              Contact for Price
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">The Story</h2>
            <p className="text-gray-700">{product.story}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Details</h2>
            <p className="text-gray-700">Category: {product.categories[0]}</p>
          </div>
        </motion.div>
      </div>

      {relatedProducts.length > 0 && (
        <motion.section variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/collection/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold group-hover:text-blue-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Category: {relatedProduct.categories[0]}
                </p>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </motion.main>
  );
} 