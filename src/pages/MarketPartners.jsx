const WHATSAPP_PARTNER_LINK = 'https://wa.me/2348142928820?text=I%20want%20to%20become%20a%20Market%20Partner'

export default function MarketPartners() {
  const benefits = [
    'Reach buyers already on PriceDeck',
    'Verified Market Partner badge',
    'Help your community buy smarter',
    'Free to join. No fees. Ever.',
  ]

  const steps = [
    { number: '01', title: 'Send a Message', description: 'Reach out to us on WhatsApp' },
    { number: '02', title: 'Get Verified', description: 'We verify and add you as a Partner' },
    { number: '03', title: 'Start Reporting', description: 'Submit prices in seconds via WhatsApp' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#3D2517]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-[#E8943A] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">For Sellers & Agents</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8943A] mb-6 md:mb-8">
              Become a Market Partner
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Are you a market trader, seller, or someone who visits markets regularly? Join PriceDeck as a Market Partner — report prices, reach buyers, grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="section-padding bg-[#FFECD2]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {/* Market Sellers */}
            <div className="bg-white p-5 md:p-8 border border-[#3D2517]/10 text-center">
              <p className="text-[#E8943A] text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4">Market Sellers</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#3D2517] mb-3 md:mb-4">
                You Sell. They Come to You.
              </h3>
              <p className="text-[#3D2517]/80 leading-relaxed text-sm md:text-base">
                Report your prices on PriceDeck. Buyers already using PriceDeck will see your prices and choose your stall. The better your price, the more buyers find you.
              </p>
            </div>

            {/* Market Agents */}
            <div className="bg-white p-5 md:p-8 border border-[#3D2517]/10 text-center">
              <p className="text-[#E8943A] text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4">Market Agents</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#3D2517] mb-3 md:mb-4">
                Visit Markets. Earn Recognition.
              </h3>
              <p className="text-[#3D2517]/80 leading-relaxed text-sm md:text-base">
                You visit markets regularly. Become a verified PriceDeck agent, report prices from your market, and earn a verified badge as a trusted community contributor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-[#3D2517]">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8943A] text-center mb-10 md:mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E8943A] mb-3 md:mb-4">{step.number}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-[#FFECD2]">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2517] text-center mb-12">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-4 bg-white p-5 border border-[#3D2517]/10 text-center">
                <span className="text-[#C9952A] text-2xl font-bold">✓</span>
                <span className="text-[#3D2517] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#3D2517]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8943A] mb-6">
              Ready to Join PriceDeck?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Start reporting prices and reach thousands of buyers today.
            </p>
            <a
              href={WHATSAPP_PARTNER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-bold py-4 px-8 inline-flex items-center gap-3 hover:bg-black/80 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            Join as a Partner
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
