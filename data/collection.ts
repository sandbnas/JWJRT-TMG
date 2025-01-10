import { ProductDetail } from '@/types/content';

export const collectionContent = {
  hero: {
    title: "Our Collection",
    subtitle: "Discover our curated selection of fine jewelry pieces."
  },
  categories: [
    "Jadau",
    "Diamonds",
    "Victorian",
    "Beeds",
    "Hierloom",
    "Pearls",
    "Necklaces",
    "Rings",
    "Earrings",
    "Bracelets"
  ],
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
      id: 2,
      name: "Pearl Strand Necklace",
      description: "Elegant strand of cultured Akoya pearls with a white gold clasp.",
      price: 1899.99,
      categories: ["Necklaces", "Pearls"],
      image: "/images/collection/necklace-pearl.jpg",
      additionalImages: [
        "/images/collection/pearl-strand-necklace.jpg",
        "/images/collection/pearl-strand-necklace.jpg"
      ],
      story: "Our Pearl Strand Necklace features carefully selected Akoya pearls, known for their exceptional luster and perfectly round shape. Each pearl is individually knotted and secured with a custom-designed 18k white gold clasp. This piece embodies sophistication and can be dressed up or down for any occasion.",
      relatedProducts: [1, 5, 6]
    },
    {
      id: 3,
      name: "Sapphire Drop Earrings",
      description: "Stunning blue sapphires surrounded by diamonds in white gold.",
      price: 3299.99,
      categories: ["Earrings", "Diamonds", "Pearls"],
      image: "/images/collection/earrings-diamond-pearl.jpg",
      additionalImages: [
        "/images/collection/earrings-diamond-pearl.jpg",
        "/images/collection/earrings-diamond-pearl.jpg"
      ],
      story: "These Sapphire Drop Earrings combine the deep blue hues of fine sapphires with the sparkle of diamonds. The design draws inspiration from vintage jewelry while maintaining a contemporary appeal. Each sapphire is carefully selected for its color and clarity, creating a perfectly matched pair.",
      relatedProducts: [4, 7, 8]
    },
    {
      id: 4,
      name: "Diamond Tennis Bracelet",
      description: "Classic tennis bracelet featuring round brilliant diamonds.",
      price: 4999.99,
      categories: ["Bracelets", "Diamonds"],
      image: "/images/collection/bracelet-diamond-2.jpg",
      additionalImages: [
        "/images/collection/bracelet-diamond-2.jpg",
        "/images/collection/bracelet-diamond-2.jpg"
      ],
      story: "The Diamond Tennis Bracelet is a symbol of enduring elegance. Each diamond is carefully matched for color and clarity, creating a seamless line of brilliance. The secure clasp mechanism ensures both safety and comfort, while the classic design makes it perfect for both special occasions and everyday luxury.",
      relatedProducts: [1, 3, 5]
    },
    {
      id: 5,
      name: "Emerald Halo Ring",
      description: "Vibrant emerald surrounded by a halo of diamonds.",
      price: 3799.99,
      categories: ["Rings", "Diamonds", "Victorian"],
      image: "/images/collection/diamond-solitaire-ring-2.jpg",
      additionalImages: [
        "/images/collection/diamond-ring-3.jpg",
        "/images/collection/diamond-ring-2.jpg"
      ],
      story: "The Emerald Halo Ring showcases a stunning Colombian emerald, celebrated for its rich green color and garden-like inclusions. The diamond halo enhances the center stone while adding extra sparkle. This ring represents the perfect balance between classic design and modern luxury.",
      relatedProducts: [1, 6, 7]
    },
    {
      id: 6,
      name: "Gold Chain Necklace",
      description: "18k gold chain with a modern twist design.",
      price: 1299.99,
      categories: ["Necklaces", "Victorian", "Beeds"],
      image: "/images/collection/necklace-beeds.jpg",
      additionalImages: [
        "/images/collection/necklace-beeds.jpg",
        "/images/collection/necklace-beeds.jpg"
      ],
      story: "Our Gold Chain Necklace combines traditional craftsmanship with contemporary design. The unique twist pattern catches and reflects light beautifully, while the solid 18k gold construction ensures lasting quality. This versatile piece can be worn alone or layered with other necklaces.",
      relatedProducts: [2, 7, 8]
    },
    {
      id: 7,
      name: "Ruby Diamond Bracelet",
      description: "Classic ruby studs set in 18k yellow gold.",
      price: 1599.99,
      categories: ["Bracelets", "Victorian", "Diamonds"],
      image: "/images/collection/bracelet-diamond.jpg",
      additionalImages: [
        "/images/collection/bracelet-diamond.jpg",
        "/images/collection/bracelet-diamond.jpg"
      ],
      story: "These Ruby Stud Bracelet feature perfectly matched Burmese rubies, known for their pigeon's blood red color. The simple yet elegant setting in 18k yellow gold allows the natural beauty of the rubies to take center stage. These earrings are a testament to timeless sophistication.",
      relatedProducts: [3, 5, 8]
    },
    {
      id: 8,
      name: "Pearl Bangle Bracelet",
      description: "Modern bangle featuring freshwater pearls and diamonds.",
      price: 2199.99,
      categories: ["Bracelets", "Pearls", "Diamonds"],
      image: "/images/collection/bracelet-pearl.jpg",
      additionalImages: [
        "/images/collection/bracelet-pearl.jpg",
        "/images/collection/bracelet-pearl.jpg"
      ],
      story: "The Pearl Bangle Bracelet offers a contemporary take on classic pearl jewelry. The innovative design combines lustrous freshwater pearls with brilliant diamonds in a modern bangle setting. The hinged closure ensures easy wear while maintaining a seamless appearance.",
      relatedProducts: [2, 4, 6]
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
      id: 10,
      name: "Beautiful Jadau Necklace",
      description: "Modern necklace featuring freshwater pearls and diamonds.",
      price: 2199.99,
      categories: ["Necklaces", "Jadau", "Diamonds", "Victorian","Beeds"],
      image: "/images/collection/jadau-necklace.jpg",
      additionalImages: [
        "/images/collection/jadau-necklace.jpg",
        "/images/collection/jadau-necklace.jpg"
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
  ] as ProductDetail[]
}; 