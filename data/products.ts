import { ProductDetail } from '@/types/content';

export const products: ProductDetail[] = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    description: "A stunning diamond eternity ring featuring 2 carats of brilliant-cut diamonds set in 18k white gold.",
    price: 4999.99,
    category: "Rings",
    image: "/images/collection/diamond-eternity-ring.jpg",
    additionalImages: [
      "/images/collection/diamond-eternity-ring-side.jpg",
      "/images/collection/diamond-eternity-ring-detail.jpg"
    ],
    story: "Inspired by the eternal nature of love, this ring symbolizes an unbreakable bond. Each diamond is carefully selected and placed to create a seamless circle of brilliance.",
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    name: "Sapphire Pendant",
    description: "An elegant sapphire pendant featuring a 1.5 carat blue sapphire surrounded by diamonds.",
    price: 3499.99,
    category: "Necklaces",
    image: "/images/collection/sapphire-pendant.jpg",
    additionalImages: [
      "/images/collection/sapphire-pendant-side.jpg",
      "/images/collection/sapphire-pendant-detail.jpg"
    ],
    story: "Drawing inspiration from the deep blue ocean, this pendant captures the mesmerizing beauty of nature. The sapphire's rich color is enhanced by the sparkling diamond halo.",
    relatedProducts: [1, 3, 4]
  },
  {
    id: 3,
    name: "Pearl Earrings",
    description: "Classic pearl drop earrings featuring 8mm South Sea pearls set in 18k white gold with diamond accents.",
    price: 2499.99,
    category: "Earrings",
    image: "/images/collection/pearl-earrings.jpg",
    additionalImages: [
      "/images/collection/pearl-earrings-side.jpg",
      "/images/collection/pearl-earrings-detail.jpg"
    ],
    story: "These timeless earrings celebrate the natural beauty of pearls. Each pearl is carefully selected for its lustrous glow and perfect shape.",
    relatedProducts: [1, 2, 4]
  },
  {
    id: 4,
    name: "Gold Bangle",
    description: "A modern 18k gold bangle with a unique geometric design and hidden diamond details.",
    price: 1999.99,
    category: "Bracelets",
    image: "/images/collection/gold-bangle.jpg",
    additionalImages: [
      "/images/collection/gold-bangle-side.jpg",
      "/images/collection/gold-bangle-detail.jpg"
    ],
    story: "Merging contemporary design with classic craftsmanship, this bangle represents the perfect balance of tradition and innovation.",
    relatedProducts: [1, 2, 3]
  }
]; 