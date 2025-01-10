# Jawahraat Website

A Next.js-based jewelry e-commerce website featuring a collection of luxury jewelry pieces.

## Image Organization

### Current Image Structure
```
public/
  └── images/
      ├── categories/    # Category-specific images
      └── products/      # Product images and details
```

### Required Image Organization

1. **Product Images** (`public/images/products/`)
   - Each product should have its own folder named after the product ID or slug
   ```
   public/images/products/
   ├── product-1/
   │   ├── main.jpg        # Main product image
   │   ├── detail-1.jpg    # Additional detail image
   │   ├── detail-2.jpg    # Additional detail image
   │   └── detail-3.jpg    # Additional detail image
   ├── product-2/
   └── product-3/
   ```

2. **Category Images** (`public/images/categories/`)
   ```
   public/images/categories/
   ├── rings.jpg
   ├── necklaces.jpg
   ├── earrings.jpg
   └── bracelets.jpg
   ```

3. **Blog Images** (`public/images/blog/`)
   ```
   public/images/blog/
   ├── post-1/
   │   ├── main.jpg        # Main blog image
   │   ├── content-1.jpg   # In-content images
   │   └── content-2.jpg
   ├── post-2/
   └── post-3/
   ```

4. **About Page Images** (`public/images/about/`)
   ```
   public/images/about/
   ├── story.jpg           # Story section image
   └── values/             # Values section images/icons
       ├── craftsmanship.jpg
       ├── sustainability.jpg
       └── innovation.jpg
   ```

5. **Home Page Images** (`public/images/home/`)
   ```
   public/images/home/
   ├── hero.jpg            # Hero section background
   └── about-section.jpg   # About section image
   ```

## Data File Image References

### 1. Collection Data (`data/collection.ts`)
```typescript
{
  products: [
    {
      id: 1,
      name: "Product Name",
      image: "/images/products/product-1/main.jpg",
      additionalImages: [
        "/images/products/product-1/detail-1.jpg",
        "/images/products/product-1/detail-2.jpg",
        "/images/products/product-1/detail-3.jpg"
      ]
    }
  ]
}
```

### 2. Blog Data (`data/blog.ts`)
```typescript
{
  posts: [
    {
      id: 1,
      title: "Blog Post Title",
      image: "/images/blog/post-1/main.jpg",
      content: `
        ... content with image references ...
        ![Content Image 1](/images/blog/post-1/content-1.jpg)
        ... more content ...
      `
    }
  ]
}
```

### 3. About Data (`data/about.ts`)
```typescript
{
  story: {
    title: "Our Story",
    content: [...],
    image: "/images/about/story.jpg"
  },
  values: {
    items: [
      {
        title: "Craftsmanship",
        image: "/images/about/values/craftsmanship.jpg",
        description: "..."
      }
    ]
  }
}
```

### 4. Home Data (`data/home.ts`)
```typescript
{
  hero: {
    title: "...",
    image: "/images/home/hero.jpg"
  },
  about: {
    title: "...",
    image: "/images/home/about-section.jpg"
  }
}
```

## Image Guidelines

### Formats
- Photos: `.jpg` or `.webp` for better compression
- Icons: `.svg` for scalability
- Transparent elements: `.png`

### Recommended Dimensions
- Hero images: 1920x1080px
- Product images: 800x800px (1:1 ratio)
- Blog post images: 1200x800px
- Thumbnails: 400x400px

## Implementation Steps
1. Create any missing folders under `public/images/`
2. Add appropriate images to each folder following the naming conventions
3. Update the data files to reference the correct image paths
4. Test each page to ensure images are loading correctly

## Notes
- All image paths in data files should start with `/images/`
- Use descriptive names for images that match their content
- Maintain consistent image dimensions within each category
- Optimize images for web use to ensure fast loading times 