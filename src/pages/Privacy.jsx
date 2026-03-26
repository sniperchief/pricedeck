export default function Privacy() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-600">
              <div>
                <p className="mb-4">
                  Last updated: January 2025
                </p>
                <p>
                  PriceDeck ("we", "our", or "us") respects your privacy. This policy explains what information we collect, how we use it, and your rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  When you use PriceDeck on WhatsApp, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your WhatsApp phone number</li>
                  <li>Messages you send to PriceDeck (price queries, price reports, etc.)</li>
                  <li>Your approximate location if you share it with us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To respond to your price queries with accurate market information</li>
                  <li>To send you price alerts you've requested</li>
                  <li>To verify and publish price reports from Market Partners</li>
                  <li>To improve our service and AI accuracy</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  What We Don't Do
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We don't sell your personal information to third parties</li>
                  <li>We don't share your phone number publicly</li>
                  <li>We don't send you marketing messages without your consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Market Partners
                </h2>
                <p>
                  If you become a Market Partner, your submitted prices may be displayed to other users along with the market name. Your phone number and personal details are never shared publicly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Data Retention
                </h2>
                <p>
                  We retain your message history and price data to improve our service. You can request deletion of your data at any time by messaging us on WhatsApp or emailing hello@pricedeck.ng.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of price alerts at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Security
                </h2>
                <p>
                  We use industry-standard security measures to protect your data. WhatsApp messages are end-to-end encrypted by WhatsApp's infrastructure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this policy from time to time. We will notify you of significant changes via WhatsApp or on our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this privacy policy or your data, contact us at{' '}
                  <a href="mailto:hello@pricedeck.ng" className="text-[#25D366] hover:underline">
                    hello@pricedeck.ng
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
