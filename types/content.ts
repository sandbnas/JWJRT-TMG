export interface Product {
  id: number;
  name: string;
  description: string;
  categories: string[];
  image: string;
}

export interface ProductDetail extends Product {
  price: number;
  additionalImages: string[];
  story: string;
  relatedProducts: number[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
}

export interface HomeContent {
  hero: HeroSection;
  featured: {
    title: string;
    products: ProductDetail[];
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  blog: {
    title: string;
    posts: BlogPost[];
  };
}

export interface CollectionContent {
  hero: HeroSection;
  categories: string[];
  products: ProductDetail[];
}

export interface AboutContent {
  hero: HeroSection;
  story: {
    title: string;
    content: string[];
  };
  values: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export interface BlogContent {
  hero: HeroSection;
  posts: BlogPost[];
} 