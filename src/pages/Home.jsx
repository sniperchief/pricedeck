import { useState } from 'react'
import { Link } from 'react-router-dom'

function HeroSection({ onJoinWaitlist }) {
  return (
    <section className="section-padding" style={{background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #E8943A 100%)'}}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-left">
            <p className="overline mb-4" data-aos="fade-up">AI-POWERED MARKET INTELLIGENCE</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Know Market Price <span className="text-[#E8943A]">Before</span> <span className="text-[#E8943A]">You Budget or Buy</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg" data-aos="fade-up" data-aos-delay="200">
              PriceDeck is WhatsApp-based tool that help shoppers check market prices for food and househood items across local market in Nigeria — Currently starting off in Enugu and expanding nation wide
            </p>
            <br></br>
            <button
              onClick={onJoinWaitlist}
              className="btn-primary text-sm py-3 px-5 inline-flex items-center justify-center gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Join Waitlist
            </button>
          </div>
          {/* Right - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end mt-2 lg:mt-4 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/images/phone_mockup.png"
              alt="PriceDeck WhatsApp chat showing commodity prices"
              className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[950px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AskPriceSection() {
  return (
    <section className="section-padding bg-[#E8943A]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="overline mb-4" data-aos="fade-up">FOR BUYERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Ask Any Price. Get the Full Market Picture.
            </h2>
            <p className="text-white text-lg" data-aos="fade-up" data-aos-delay="200">
              Send any price question in plain English or Pidgin. PriceDeck checks every market and returns a comparison sorted cheapest to most expensive — so you always know where to buy.
            </p>
          </div>

          {/* Right - Chat Visual */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="dark-card">
              <div className="chat-container">
                {/* User Message */}
                <div className="chat-bubble-user">
                  <p>How much is garri today?</p>
                  <p className="chat-time">10:32 AM</p>
                </div>

                {/* Bot Response */}
                <div className="chat-bubble-bot">
                  <p className="chat-sender">PriceDeck</p>
                  <p className="font-medium mb-2">Garri (white 50kg bag) in Enugu</p>
                  <p className="text-sm mb-2"><strong>Cheapest:</strong></p>
                  <ul className="text-sm mb-2 ml-4">
                    <li>• Ogbete — ₦16,000–17,500</li>
                    <li>• Abakpa — ₦17,000–18,000</li>
                  </ul>
                  <p className="text-sm mb-2"><strong>Mid range:</strong></p>
                  <ul className="text-sm mb-3 ml-4">
                    <li>• New Market — ₦18,500</li>
                    <li>• Obiagu — ₦19,000</li>
                  </ul>
                  <p className="text-sm text-gray-600">Reply ALERT to set a price alert 🔔</p>
                  <p className="chat-time">10:32 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection({ onJoinWaitlist }) {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="overline mb-4">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Real Market Prices in Seconds
          </h2>
        </div>
        <br></br>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">

          {/* Step 1 */}
          <div className="flex gap-6 md:gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#E8943A] text-white flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div className="w-0.5 bg-gray-200 flex-1 mt-3"></div>
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send hello to PriceDeck</h3>
              <p className="text-gray-600 mb-3">
                Answer follow up questions clicking button
              </p>
              <p className="text-[#E8943A] font-medium">"How much is rice at Ogbete?"</p>
            </div>
          </div>
<br></br><br></br>
          {/* Step 2 */}
          <div className="flex gap-6 md:gap-8 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#E8943A] text-white flex items-center justify-center font-bold text-lg shrink-0">
                2
              </div>
              <div className="w-0.5 bg-gray-200 flex-1 mt-3"></div>
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Current Prices</h3>
              <p className="text-gray-600">
                We check multiple markets and show you where items cost less — so you know where to buy.
              </p>
            </div>
          </div>
<br></br>
          {/* Step 3 */}
          <div className="flex gap-6 md:gap-8 mb-12" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#E8943A] text-white flex items-center justify-center font-bold text-lg shrink-0">
                3
              </div>
              <div className="w-0.5 bg-gray-200 flex-1 mt-3"></div>
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Markets</h3>
              <p className="text-gray-600">
                See which market has the best price today. No more guessing or getting overcharged.
              </p>
            </div>
          </div>
<br></br>
          {/* Step 4 */}
          <div className="flex gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#E8943A] text-white flex items-center justify-center font-bold text-lg shrink-0">
                4
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Shop with Confidence</h3>
              <p className="text-gray-600">
                Walk into the market knowing exactly what things should cost. No one can overcharge you.
              </p>
            </div>
          </div>

        </div>
<br></br>
        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="500">
          <button
            onClick={onJoinWaitlist}
            className="btn-primary py-3 px-6 inline-flex items-center justify-center gap-2"
          >
            Join Waitlist
          </button>
        </div>

      </div>
    </section>
  )
}

function SharePriceSection() {
  return (
    <section id="market-partners" className="section-padding bg-[#0a0c0e]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual (flipped layout) */}
          <div className="relative order-2 lg:order-1" data-aos="fade-up">
            <img
              src="/images/market-woman.jpg"
              alt="Nigerian market woman at her stall with garri, rice or tomatoes displayed"
              className="w-full h-[400px] object-cover rounded-xl"
            />

            {/* Floating Card */}
            <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-xl max-w-[200px]" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#C9952A] text-xl">✓</span>
                <span className="font-semibold text-gray-900">Price Submitted</span>
              </div>
              <p className="text-gray-500 text-sm">Garri • Ogbete Market</p>
              <p className="text-xl font-bold text-gray-900">₦16,500 per bag</p>
              <p className="text-[#C9952A] text-xs mt-2 font-medium">Verified by PriceDeck AI</p>
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 lg:order-2">
            <p className="overline mb-4" data-aos="fade-up">FOR MARKET PARTNERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8943A] leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Share Prices. Reach More Buyers.
            </h2> <br></br>
            <p className="text-[#E8943A] text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
              Are you a seller or market trader? Report your prices on PriceDeck in seconds. Buyers already on PriceDeck will see your prices and come to you.
            </p> <br></br>
            <Link to="/market-partners" className="btn-primary text-sm py-3 px-5" data-aos="fade-up" data-aos-delay="300">
              Become a Market Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function PriceAlertsSection() {
  return (
    <section className="section-padding bg-[#FFECD2]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="overline mb-4" data-aos="fade-up">NEVER MISS A GOOD PRICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Set Alerts. Buy at the Right Time.
            </h2>
            <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="200">
              Tell PriceDeck when you want to be notified. When garri drops below your target price, we message you instantly on WhatsApp.
            </p>
          </div>

          {/* Right - Alert Card */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="dark-card">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9952A]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🔔</span>
                  </div>
                  <span className="text-gray-900 font-semibold">Price Alert</span>
                </div>
                <p className="text-gray-900 text-lg font-medium mb-2">
                  Garri has dropped below ₦17,000
                </p>
                <p className="text-gray-600 mb-1">
                  Current price: <span className="text-[#C9952A] font-semibold">₦16,500</span> at Ogbete
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Reported 30 minutes ago
                </p>
                <button className="btn-primary text-sm py-2 px-4">
                  View Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EverydayLifeSection() {
  const cards = [
    {
      image: '/images/garri-seller.jpg',
      alt: 'Market woman selling garri at Ogbete market',
      overlay: 'Garri • ₦16,500/bag',
      label: 'Buying at Ogbete Market',
      subtext: 'Checked PriceDeck first. Saved ₦3,000.',
    },
    {
      image: '/images/tomatoes.jpg',
      alt: 'Tomatoes and peppers displayed at Abakpa market',
      overlay: 'Tomatoes • ₦1,200',
      label: 'Fresh Produce at Abakpa',
      subtext: 'Abakpa is cheaper for fresh produce today.',
    },
    {
      image: '/images/cement.jpg',
      alt: 'frozen chickens',
      overlay: 'Chicken • ₦3500/kg',
      label: 'Protein',
      subtext: 'Price checked before heading to the market.',
    },
    {
      image: '/images/partner-submit.jpg',
      alt: 'Market woman on phone submitting prices',
      overlay: '✓ Price Submitted',
      label: 'Market Partner',
      subtext: 'Reporting prices. Reaching more buyers.',
    },
  ]

  return (
    <section className="section-padding bg-[#3D2517]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6C8] text-center mb-12" data-aos="fade-up">
          PriceDeck in Everyday Nigerian Life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="dark-card dark-card-hover p-0 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Photo with overlay */}
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-[180px] object-cover"
                  style={{ borderRadius: '12px 12px 0 0' }}
                />
                <div className="absolute bottom-3 left-3 bg-white/95 rounded-lg px-3 py-1.5">
                  <p className="text-gray-900 text-sm font-medium">{card.overlay}</p>
                </div>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold mb-1">{card.label}</h3>
                <p className="text-gray-500 text-sm">{card.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: '6+', label: 'Markets' },
    { value: '40+', label: 'Commodities' },
    { value: '1', label: 'City' },
    { value: 'Expanding', label: 'Nation-wide' },
  ]

  return (
    <section className="section-padding" style={{background: 'linear-gradient(to bottom, #f8f9fa 0%, #f8f9fa 100%)'}}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="dark-card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is PriceDeck free to use?',
      answer: 'Yes, PriceDeck is completely free for buyers. Simply message us on WhatsApp to check prices anytime. No hidden fees, no subscriptions.'
    },
    {
      question: 'How accurate are the prices?',
      answer: 'Our prices are reported by verified market partners and cross-checked by our AI system. We update prices multiple times daily to ensure accuracy.'
    },
    {
      question: 'Which markets does PriceDeck cover?',
      answer: 'We currently cover 6+ major markets in Enugu including Ogbete, New Market, Abakpa, and more. We are rapidly expanding to cover markets across Nigeria.'
    },
    {
      question: 'How do I become a Market Partner?',
      answer: 'Simply send us a WhatsApp message expressing your interest. We will verify your details and onboard you as a Market Partner within 24-48 hours.'
    },
    {
      question: 'How often are prices updated?',
      answer: 'Prices are updated multiple times throughout the day by our network of market partners. You will always see the most recent prices available.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="pt-20 md:pt-8 pb-[30px] bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#20232D] mb-8 md:mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
        <br></br>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex flex-row items-center justify-between py-4 gap-4"
                >
                  <span className="text-[#20232D] font-bold text-xl md:text-2xl tracking-wide text-left">
                    {index + 1}. {faq.question}
                  </span>
                  <span className="text-[#E8943A] text-3xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pt-4 pb-2">
                    <p className="text-[#667085] text-lg leading-relaxed tracking-wide text-justify">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ onJoinWaitlist }) {
  return (
    <>
      <HeroSection onJoinWaitlist={onJoinWaitlist} />
      <AskPriceSection />
      <HowItWorksSection onJoinWaitlist={onJoinWaitlist} />
      <SharePriceSection />
      <PriceAlertsSection />
      <EverydayLifeSection />
      <StatsSection />
      <FAQSection />
    </>
  )
}
