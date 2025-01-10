import Image from 'next/image'
import Link from 'next/link'

const products = [
  { id: 1, name: 'Diamond Necklace', price: '$1,999', image: '/placeholder.svg?height=400&width=300' },
  { id: 2, name: 'Gold Bracelet', price: '$899', image: '/placeholder.svg?height=400&width=300' },
  { id: 3, name: 'Pearl Earrings', price: '$599', image: '/placeholder.svg?height=400&width=300' },
  { id: 4, name: 'Sapphire Ring', price: '$1,499', image: '/placeholder.svg?height=400&width=300' },
  { id: 5, name: 'Emerald Pendant', price: '$2,499', image: '/placeholder.svg?height=400&width=300' },
  { id: 6, name: 'Ruby Bracelet', price: '$1,799', image: '/placeholder.svg?height=400&width=300' },
  { id: 7, name: 'Diamond Studs', price: '$999', image: '/placeholder.svg?height=400&width=300' },
  { id: 8, name: 'Gold Chain', price: '$799', image: '/placeholder.svg?height=400&width=300' },
]

export default function ShopPage() {
  return (
    <div className="bg-off-white min-h-screen">
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-8 text-charcoal">Our Collection</h1>
          <p className="text-center text-charcoal mb-12 max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted jewelry, each piece a testament to timeless elegance and unparalleled craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl mb-2">{product.name}</h3>
                    <p className="mb-4">{product.price}</p>
                    <Link href={`/product/${product.id}`} className="bg-gold text-white px-4 py-2 rounded hover:bg-light-gold hover:text-charcoal transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

