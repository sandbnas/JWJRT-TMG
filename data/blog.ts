import { BlogContent } from '@/types/content';

export const blogContent: BlogContent = {
  hero: {
    title: "Jawahraat Blog",
    subtitle: "Dive into the world of fine jewelry with our expert insights, trends, and care tips."
  },
  posts: [
    {
      id: 1,
      title: "The Art of Selecting the Perfect Diamond",
      excerpt: "Discover the 4 Cs of diamond quality and how to choose the ideal stone for your jewelry.",
      image: "/images/blog/diamond-guide.jpg",
      date: "May 15, 2023",
      content: `
        <h2>Understanding the 4 Cs</h2>
        <p>When it comes to selecting the perfect diamond, understanding the 4 Cs - Cut, Color, Clarity, and Carat weight - is essential. These characteristics determine not only the beauty but also the value of your diamond.</p>

        <h3>Cut</h3>
        <p>The cut of a diamond is perhaps the most important factor as it directly affects the stone's brilliance and sparkle. A well-cut diamond reflects light internally and displays brightness, fire, and scintillation.</p>

        <h3>Color</h3>
        <p>Diamond color is graded on a scale from D (colorless) to Z (light yellow or brown). The most valuable diamonds are those with the least color, as they allow more light to pass through them.</p>

        <h3>Clarity</h3>
        <p>Clarity refers to the absence of inclusions and blemishes. The scale ranges from Flawless to Included. Many inclusions are not visible to the naked eye, so a diamond need not be flawless to appear perfect.</p>

        <h3>Carat Weight</h3>
        <p>Carat is the unit of measurement for diamond weight. While larger diamonds are typically more valuable, two diamonds of equal carat weight can have very different values depending on their cut, color, and clarity.</p>
      `
    },
    {
      id: 2,
      title: "Timeless Elegance: The History of Pearl Jewelry",
      excerpt: "Explore the fascinating journey of pearls from ancient treasures to modern-day classics.",
      image: "/images/blog/pearl-history.webp",
      date: "April 22, 2023",
      content: `
        <h2>Ancient Beginnings</h2>
        <p>Pearls have captivated humanity for millennia. Ancient civilizations in China, Egypt, Rome, and Persia treasured these gems from the sea. They were considered so valuable that Julius Caesar once passed a law limiting pearl ownership to the ruling classes.</p>

        <h2>The Evolution of Pearl Cultivation</h2>
        <p>The modern pearl industry was revolutionized in the early 20th century when Kokichi Mikimoto successfully developed the first cultured pearl. This breakthrough made pearls more accessible while maintaining their elegant allure.</p>

        <h2>Pearls in Fashion</h2>
        <p>Throughout history, pearls have been a symbol of sophistication and refinement. From Coco Chanel's iconic pearl necklaces to Jackie Kennedy's elegant pearl accessories, these gems have defined classic style.</p>
      `
    },
    {
      id: 3,
      title: "Caring for Your Fine Jewelry",
      excerpt: "Learn how to maintain the sparkle and beauty of your precious pieces for years to come.",
      image: "/images/blog/jewelry-care.webp",
      date: "March 10, 2023",
      content: `
        <h2>Essential Care Guidelines</h2>
        <p>Fine jewelry is an investment that can last generations when properly maintained. Understanding how to care for your precious pieces is crucial for preserving their beauty and value.</p>

        <h2>Daily Care Routine</h2>
        <ul>
          <li>Clean your jewelry regularly with appropriate methods</li>
          <li>Store pieces separately to prevent scratching</li>
          <li>Remove jewelry before swimming or exercising</li>
          <li>Handle pieces by their bands or edges, not by stones</li>
        </ul>

        <h2>Professional Maintenance</h2>
        <p>Regular professional servicing is recommended for maintaining your jewelry's condition and value. Have settings checked annually and get professional cleaning every six months.</p>
      `
    },
    {
      id: 4,
      title: "The Rise of Ethical Jewelry",
      excerpt: "Understand the importance of sustainable practices in the jewelry industry and how to make conscious choices.",
      image: "/images/blog/ethical-jewelry.jpg",
      date: "February 5, 2023",
      content: `
        <h2>The Importance of Ethical Jewelry</h2>
        <p>As consumers become more conscious of their purchasing decisions, the demand for ethically sourced and sustainably produced jewelry continues to grow.</p>

        <h2>What Makes Jewelry Ethical?</h2>
        <ul>
          <li>Responsible sourcing of materials</li>
          <li>Fair labor practices and working conditions</li>
          <li>Environmental sustainability</li>
          <li>Transparency in the supply chain</li>
        </ul>

        <h2>Making Conscious Choices</h2>
        <p>When shopping for ethical jewelry, consider the origin of materials, look for certifications, and research the brand's sustainability practices.</p>
      `
    }
  ]
}; 