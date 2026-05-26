export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About PriceDeck</h1>
          <p className="text-gray-500 mb-8">Foodstuff shopping made simple</p>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">The Problem</h2>
              <p>
                Shopping for foodstuff in Nigerian markets is stressful. The crowds, the heat, the haggling, and never knowing if you're paying the right price. For busy people, finding time for market runs is a constant struggle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h2>
              <p>
                PriceDeck is a WhatsApp shopping assistant that handles your foodstuff shopping. Check real market prices, place orders, pay online, and get everything delivered to your doorstep — all through a simple WhatsApp chat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Work</h2>
              <p>
                We source directly from Ogbete Main Market in Enugu, ensuring you get fresh items at real market prices. No markup surprises, no hidden fees — just transparent pricing and reliable delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p>
                We started in Enugu, but we're building for every Nigerian who wants to skip market stress. Fresh foodstuff, fair prices, delivered to your door.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                Have questions or feedback? Reach out to us at{' '}
                <a href="mailto:support@pricedeck.xyz" className="text-[#E8943A] hover:underline">
                  support@pricedeck.xyz
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
