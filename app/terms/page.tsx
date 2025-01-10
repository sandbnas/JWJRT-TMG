export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-8 text-brown">Terms of Service</h1>
          <div className="max-w-4xl mx-auto space-y-6 text-brown bg-beige p-8 rounded-lg shadow-md">
            <p className="mb-4">Last updated: January 2024</p>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">2. Product Information</h2>
              <p>We strive to display our products as accurately as possible. However, actual colors and details may vary due to screen settings and photography conditions.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are subject to change without notice</li>
                <li>Product availability is not guaranteed</li>
                <li>We reserve the right to limit quantities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">3. Orders and Payment</h2>
              <p>By placing an order, you warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are legally capable of entering into binding contracts</li>
                <li>All information you provide is true and accurate</li>
                <li>You are an authorized user of the payment method provided</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">4. Shipping and Delivery</h2>
              <p>We aim to process and ship orders within 1-3 business days. Delivery times may vary depending on location and shipping method selected.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">5. Returns and Refunds</h2>
              <p>Our return policy allows returns within 30 days of delivery. Items must be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unworn and in original condition</li>
                <li>Accompanied by original packaging and documentation</li>
                <li>Returned with proof of purchase</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">6. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Jawahraat and is protected by copyright laws.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">7. Limitation of Liability</h2>
              <p>Jawahraat shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-carmine mt-8 mb-4">8. Contact Information</h2>
              <p>For any questions regarding these terms, please contact us at:</p>
              <p>Email: legal@luxejewels.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

