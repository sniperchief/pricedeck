export default function Privacy() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-600">
            <section>
              <p>
                PriceDeck ("we", "our", or "us") respects your privacy. This policy explains what information we collect, how we use it, and your rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you use PriceDeck on WhatsApp, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your WhatsApp phone number</li>
                <li>Messages you send to PriceDeck (price queries, orders, etc.)</li>
                <li>Your delivery address when you place orders</li>
                <li>Your approximate location if you share it with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your price queries with accurate market information</li>
                <li>To process and deliver your orders</li>
                <li>To send you order updates and confirmations</li>
                <li>To improve our service and AI accuracy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Don't Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We don't sell your personal information to third parties</li>
                <li>We don't share your phone number publicly</li>
                <li>We don't send you marketing messages without your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain your message history and order data to improve our service. You can request deletion of your data at any time by messaging us on WhatsApp or emailing support@pricedeck.xyz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of promotional messages at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
              <p>
                We use industry-standard security measures to protect your data. WhatsApp messages are end-to-end encrypted by WhatsApp's infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. We will notify you of significant changes via WhatsApp or on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your data, contact us at{' '}
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
