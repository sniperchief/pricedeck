export default function About() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[680px] mx-auto">
            <p className="overline mb-4">OUR STORY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8943A] mb-8">
              Built for Every Nigerian Market
            </h1>
<br></br>
            <div className="space-y-6 text-white font-bold text-lg leading-relaxed mb-12">
              <p>
                In Nigeria, knowing the right price can make or break your budget. Whether you're a family buying food for the week, a small business restocking supplies, or a builder sourcing materials — you deserve to know what things actually cost before you go to market.
              </p>

              <p>
                But market prices change constantly. What costs ₦15,000 at Ogbete might be ₦18,000 at New Market. The only way to know was to physically visit multiple markets or call around — until now.
              </p>

              <p>
                PriceDeck was built to solve this. We work with market traders and agents across Nigerian markets who report real prices in real time. Our AI verifies these prices and makes them available to anyone — free on WhatsApp.
              </p>

              <p>
                We started in Enugu because we know these markets. We're expanding across Nigeria because every Nigerian deserves to buy smarter.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#E8943A] mb-4">
                Get in touch
              </h3>
              <a
                href="mailto:pricedeck.org@gmail.com"
                className="text-[#25D366] text-lg hover:underline"
              >
                Pricedeck.org@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
