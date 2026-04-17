import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import Home from './pages/Home'
import MarketPartners from './pages/MarketPartners'
import About from './pages/About'
import Privacy from './pages/Privacy'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqUqly2xSd1DEU4Sr4T5QLnpfuN0njfXp8z4JLQXV9j_QDvWcQWMCMFIPjm2SIX-bp/exec'

function WaitlistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    location: '',
    foodItems: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          foodItems: formData.foodItems ? [formData.foodItems] : [],
          otherItems: ''
        })
      })
      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        setFormData({ phone: '', email: '', location: '', foodItems: '' })
      }, 3000)
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {isSuccess ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
            <p className="text-gray-600">We'll notify you when PriceDeck launches in Enugu.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
            <p className="text-gray-500 mb-6">Be the first to know when we launch.</p>

            <div className="space-y-5">
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="08012345678"
                  className="form-input"
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>

              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="form-input"
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div>
                <label className="form-label">Where do you live in Enugu?</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Independence Layout"
                  className="form-input"
                />
                {errors.location && <p className="form-error">{errors.location}</p>}
              </div>

              <div>
                <label className="form-label">What do you usually buy? <span className="font-normal text-gray-400">(optional)</span></label>
                <input
                  type="text"
                  name="foodItems"
                  value={formData.foodItems}
                  onChange={handleInputChange}
                  placeholder="e.g. rice, tomatoes, garri"
                  className="form-input"
                />
              </div>

              {errors.submit && <p className="form-error">{errors.submit}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full text-center py-4 text-base ${isSubmitting ? 'btn-loading' : ''}`}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Navbar({ onJoinWaitlist }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = (sectionId) => (e) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 text-gray-900 font-bold text-xl">
            <span className="text-[#25D366]">.</span>
            <span>PriceDeck</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors"
            >
              Home
            </NavLink>
            <a
              href="/#how-it-works"
              onClick={handleSectionClick('how-it-works')}
              className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="/#market-partners"
              onClick={handleSectionClick('market-partners')}
              className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
            >
              Market Partners
            </a>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={onJoinWaitlist}
            className="hidden md:block btn-primary text-sm py-3 px-5"
          >
            Join Waitlist
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors"
              >
                Home
              </NavLink>
              <a
                href="/#how-it-works"
                onClick={handleSectionClick('how-it-works')}
                className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="/#market-partners"
                onClick={handleSectionClick('market-partners')}
                className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
              >
                Market Partners
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0a0c0e]">
      <div className="container-custom py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">
              Flt14, NO 31 UGBENE II ABAKPA NIKE, ENUGU STATE.
            </p>
            <a href="mailto:support@pricedeck.xyz" className="text-gray-400 text-sm hover:text-[#E8943A] transition-colors">
              support@pricedeck.xyz
            </a>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            <Link to="/about" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Privacy Policy
            </Link>
            <a href="https://twitter.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Twitter
            </a>
            <a href="https://facebook.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Facebook
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            &copy; 2025 PriceDeck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  const openWaitlistModal = () => setIsModalOpen(true)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onJoinWaitlist={openWaitlistModal} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onJoinWaitlist={openWaitlistModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/market-partners" element={<MarketPartners />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  )
}

export default App
