import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MarketPartners from './pages/MarketPartners'
import About from './pages/About'
import Privacy from './pages/Privacy'

const WHATSAPP_LINK = 'https://wa.me/2348000000000'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/market-partners', label: 'Market Partners' },
  ]

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
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-gray-900 font-bold hover:opacity-70 transition-opacity"
              >
                {link.label}
              </NavLink>
            ))}
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-gray-900 font-bold hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </NavLink>
              ))}
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
            <Link to="/about" className="text-gray-500 text-sm font-bold hover:text-[#25D366] transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm font-bold hover:text-[#25D366] transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#25D366] transition-colors">
              Contact
            </a>
            <a href="https://twitter.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#25D366] transition-colors">
              Twitter
            </a>
            <a href="https://facebook.com/pricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-bold hover:text-[#25D366] transition-colors">
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
