import { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  hero: {
    title: "Jawahraat",
    subtitle: "Timeless elegance crafted with passion"
  },
  featured: {
    title: "Featured Collection",
    products: [
      {
        id: 1,
        name: "Diamond Solitaire Ring",
        description: "A timeless classic featuring a brilliant-cut diamond set in 18k white gold.",
        price: 2499.99,
        categories: ["Rings", "Diamonds", "Jadau"],
        image: "/images/collection/diamond-solitaire-ring.jpg",
        additionalImages: [
          "/images/collection/diamond-solitaire-ring.jpg",
          "/images/collection/diamond-solitaire-ring.jpg"
        ],
        story: "Our Diamond Solitaire Ring represents the epitome of elegance and timeless beauty. Each ring is crafted with meticulous attention to detail, featuring a carefully selected diamond that meets our stringent quality standards. The 18k white gold setting is designed to maximize the diamond's brilliance while ensuring durability for everyday wear.",
        relatedProducts: [2, 3, 4]
      },
      {
        id: 9,
        name: "Jadau Necklace",
        description: "Modern necklace featuring freshwater pearls and diamonds.",
        price: 2199.99,
        categories: ["Necklaces", "Jadau", "Diamonds"],
        image: "/images/collection/jadau-necklace-diamond.jpg",
        additionalImages: [
          "/images/collection/jadau-necklace-diamond.jpg",
          "/images/collection/jadau-necklace-diamond.jpg"
        ],
        story: "The Pearl necklace offers a contemporary take on classic pearl jewelry. The innovative design combines lustrous freshwater pearls with brilliant diamonds in a modern bangle setting. The hinged closure ensures easy wear while maintaining a seamless appearance.",
        relatedProducts: [2, 4, 6]
      },
      {
        id: 11,
        name: "Beautiful Jadau Necklace with Pearls",
        description: "Modern necklace featuring freshwater pearls and diamonds.",
        price: 2199.99,
        categories: ["Necklaces", "Jadau", "Diamonds", "Heirloom", "Beeds"],
        image: "/images/collection/necklace-diamond-pearl.jpg",
        additionalImages: [
          "/images/collection/necklace-diamond-pearl.jpg",
          "/images/collection/jadau-necklace-diamond.jpg"
        ],
        story: "The Pearl necklace offers a contemporary take on classic pearl jewelry. The innovative design combines lustrous freshwater pearls with brilliant diamonds in a modern bangle setting. The hinged closure ensures easy wear while maintaining a seamless appearance.",
        relatedProducts: [2, 4, 6]
      }
    ]
  },
  about: {
    title: "Our Story",
    description: "Discover the artistry and passion behind our handcrafted jewelry pieces.",
    image: "/images/about/jewelry.jpg"
  },
  blog: { 
    title: "Latest Articles",
    posts: [
      {
        id: 1,
        title: "The Art of Selecting the Perfect Diamond",
        excerpt: "Discover the 4 Cs of diamond quality and how to choose the ideal stone for your jewelry.",
        image: "/images/blog/diamond-guide.jpg",
        date: "May 15, 2023",
        content: "Learn about the essential factors that determine a diamond's quality and value..."
      },
      {
        id: 2,
        title: "Timeless Elegance: The History of Pearl Jewelry",
        excerpt: "Explore the fascinating journey of pearls from ancient treasures to modern-day classics.",
        image: "/images/blog/pearl-history.jpg",
        date: "April 22, 2023",
        content: "Dive into the rich history of pearl jewelry and its enduring appeal..."
      }
    ]
  }
}; 