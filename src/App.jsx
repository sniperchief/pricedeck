import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import Home from './pages/Home'
import MarketPartners from './pages/MarketPartners'
import About from './pages/About'
import Privacy from './pages/Privacy'

const WHATSAPP_LINK = 'https://wa.me/15551661013'

function Navbar() {
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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary text-sm py-3 px-5"
          >
            Check Prices
          </a>

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/market-partners" element={<MarketPartners />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
