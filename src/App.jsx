import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-8 md:py-12 lg:py-16">
        <div className="flex justify-center my-6 md:my-[50px]">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/about" className="text-gray-500 text-sm font-bold hover:text-[#E8943A] transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm font-bold hover:text-[#E8943A] transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#E8943A] transition-colors">
              Contact
            </a>
            <a href="https://twitter.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#E8943A] transition-colors">
              Twitter
            </a>
            <a href="https://facebook.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#E8943A] transition-colors">
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            &copy; 2025 PriceDeck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
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
