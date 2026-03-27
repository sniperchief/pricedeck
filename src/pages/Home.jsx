import { useState } from 'react'
import { Link } from 'react-router-dom'

const WHATSAPP_LINK = 'https://wa.me/15551661013'

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function HeroSection() {
  return (
    <section className="section-padding" style={{background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #E8943A 100%)'}}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-left">
            <p className="overline mb-4">AI-POWERED MARKET INTELLIGENCE</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Know Market Price <span className="text-[#E8943A]">Before</span> <span className="text-[#E8943A]">You Budget or Buy</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              PriceDeck is WhatsApp-based tool that help shoppers check market prices for food and househood items across local market in Nigeria — Currently starting off in Enugu and expanding nation wide
            </p>
            <br></br>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-5 inline-flex items-center justify-center gap-2"
            >
              
              Check Price
            </a>
          </div>
          {/* Right - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end mt-2 lg:mt-4">
            <img
              src="/images/phone_mockup.png"
              alt="PriceDeck WhatsApp chat showing commodity prices"
              className="max-w-none w-[450px] sm:w-[550px] md:w-[700px] lg:w-[850px] xl:w-[950px] h-auto drop-shadow-2xl"
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
            <p className="overline mb-4">FOR BUYERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Ask Any Price. Get the Full Market Picture.
            </h2>
            <p className="text-white text-lg">
              Send any price question in plain English or Pidgin. PriceDeck checks every market and returns a comparison sorted cheapest to most expensive — so you always know where to buy.
            </p>
          </div>

          {/* Right - Chat Visual */}
          <div>
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

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">

        <div className="text-center mb-16">
          <p className="overline mb-4">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Real Market Prices in Seconds
          </h2>
        </div>
        <br></br>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">

          {/* Step 1 */}
          <div className="flex gap-6 md:gap-8 mb-12">
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
          <div className="flex gap-6 md:gap-8 mb-12">
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
          <div className="flex gap-6 md:gap-8 mb-12">
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
          <div className="flex gap-6 md:gap-8">
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
        <div className="text-center mt-16">
         
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 inline-flex items-center justify-center gap-2"
          >
            
            Try PriceDeck
          </a>
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
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/market-woman.jpg"
              alt="Nigerian market woman at her stall with garri, rice or tomatoes displayed"
              className="w-full h-[400px] object-cover rounded-xl"
            />

            {/* Floating Card */}
            <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-xl max-w-[200px]">
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
            <p className="overline mb-4">FOR MARKET PARTNERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8943A] leading-tight mb-6">
              Share Prices. Reach More Buyers.
            </h2> <br></br>
            <p className="text-[#E8943A] text-lg mb-8">
              Are you a seller or market trader? Report your prices on PriceDeck in seconds. Buyers already on PriceDeck will see your prices and come to you.
            </p> <br></br>
            <Link to="/market-partners" className="btn-primary text-sm py-3 px-5">
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
            <p className="overline mb-4">NEVER MISS A GOOD PRICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Set Alerts. Buy at the Right Time.
            </h2>
            <p className="text-gray-600 text-lg">
              Tell PriceDeck when you want to be notified. When garri drops below your target price, we message you instantly on WhatsApp.
            </p>
          </div>

          {/* Right - Alert Card */}
          <div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6C8] text-center mb-12">
          PriceDeck in Everyday Nigerian Life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="dark-card dark-card-hover p-0 overflow-hidden">
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
            <div key={index} className="dark-card text-center">
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
    <section className="pt-20 md:pt-28 pb-[30px] bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#20232D] mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>
        <br></br>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 mb-12 pt-8">
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <AskPriceSection />
      <HowItWorksSection />
      <SharePriceSection />
      <PriceAlertsSection />
      <EverydayLifeSection />
      <StatsSection />
      <FAQSection />
    </>
  )
}
