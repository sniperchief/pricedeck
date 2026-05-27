import { useState } from 'react'

const WHATSAPP_LINK = 'https://wa.me/15551661013'

function HeroSection() {
  return (
    <section className="section-padding" style={{background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #E8943A 100%)'}}>
      <div className="container-custom flex justify-center">
        <div className="max-w-2xl text-center">
          <p className="overline mb-4" data-aos="fade-up">REAL PRICES. NO STRESS.</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-relaxed md:leading-snug tracking-wide mb-6" data-aos="fade-up" data-aos-delay="100">
            Order Foodstuff on WhatsApp <span className="text-[#E8943A]">Without Market Stress</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 mx-auto max-w-2xl text-justify" data-aos="fade-up" data-aos-delay="200">
            PriceDeck is a WhatsApp shopping assistant that helps Nigerians shop for foodstuff. Check market prices, order, pay online, and receive home delivery — all via WhatsApp. Currently serving Ogbete Main Market, Enugu.
          </p><br></br>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-5 inline-flex items-center justify-center gap-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      title: 'Chat on WhatsApp',
      description: 'Send us a message on WhatsApp. Ask about any foodstuff or item you need.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: 'Check Prices',
      description: 'Get real market prices from different markets. Know exactly what things cost today.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      title: 'Pay Online',
      description: 'Pay securely online via bank transfer or card. No cash needed at delivery.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: 'Get Delivered',
      description: 'We deliver fresh foodstuff straight to your door. No market stress for you.'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="overline mb-4">HOW IT WORKS</p><br></br>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From Chat to Doorstep in 4 Simple Steps
          </h2><br></br>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="dark-card dark-card-hover text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-[#E8943A]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#E8943A]">
                {step.icon}
              </div>
              <div className="w-8 h-8 bg-[#E8943A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function WhatsAppDemoSection() {
  return (
    <section className="section-padding bg-[#E8943A]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="overline mb-4 !text-white" data-aos="fade-up">SEE IT IN ACTION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
              Order Like You're Chatting With a Friend
            </h2>
            <p className="text-white text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
              No apps to download. No complicated forms. Just chat naturally on WhatsApp and we'll handle everything else.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-5 inline-flex items-center justify-center gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Try It Now
            </a>
          </div>

          {/* Right - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/images/chat-mockup.png"
              alt="PriceDeck WhatsApp conversation showing ordering flow"
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I used to dread going to the market every weekend. Now I just text PriceDeck and my foodstuff arrives at home. Life changer!",
      name: "Chidi O.",
      role: "Software Developer, Enugu",
      avatar: "CO"
    },
    {
      quote: "As someone who works long hours, I don't have time for market runs. PriceDeck saves me so much time and the prices are actually fair.",
      name: "Amaka E.",
      role: "Bank Staff, Independence Layout",
      avatar: "AE"
    },
    {
      quote: "I was skeptical at first, but the prices are transparent and delivery is fast. Now I recommend PriceDeck to all my friends.",
      name: "Tochukwu N.",
      role: "Business Owner, GRA",
      avatar: "TN"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="overline mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="dark-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E8943A] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="section-padding bg-[#0a0c0e]">
      <div className="container-custom flex justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Know the real price before you buy.
          </h2>
          <p className="text-gray-400 text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Fast foodstuff delivery across Enugu. No market stress, just fresh food at your door.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-4 px-8 inline-flex items-center justify-center gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
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
      answer: 'Yes, checking prices on PriceDeck is completely free. You only pay for the items you order plus a small delivery fee based on your location.'
    },
    {
      question: 'How does ordering work?',
      answer: 'Simply message us on WhatsApp, tell us what you need, and we\'ll show you current market prices. Add items to your cart, checkout, pay online, and we\'ll deliver to your address.'
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We currently deliver across Enugu including Independence Layout, GRA, New Haven, Trans-Ekulu, Abakpa, and surrounding areas. We\'re expanding to more locations soon.'
    },
    {
      question: 'How do I pay?',
      answer: 'We accept bank transfers and card payments. After checkout, you\'ll receive payment details via WhatsApp. Your order is confirmed once payment is received.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Most orders are delivered same-day if placed before 12pm, or next-day for later orders. Delivery times may vary based on your location and order size.'
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
          <div>
            {faqs.map((faq, index) => (
              <div key={index} data-aos="fade-up" style={{
                marginTop: '20px',
                padding: '20px',
                marginBottom: '25px',
                borderBottom: '1px solid #e5e7eb'
              }}
              data-aos-delay={index * 100}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex flex-row items-center justify-between py-4 gap-4"
                >
                  <span className="text-[#20232D] font-bold text-xl md:text-2xl tracking-wide text-left">
                    {index + 1}. {faq.question}
                  </span>
                  <svg
                    className="w-6 h-6 text-[#E8943A] flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
      <HowItWorksSection />
      <WhatsAppDemoSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
    </>
  )
}
