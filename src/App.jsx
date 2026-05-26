import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

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
            <NavLink
              to="/about"
              className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors"
            >
              About Us
            </NavLink>
            <a
              href="/#how-it-works"
              onClick={handleSectionClick('how-it-works')}
              className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
            >
              How It Works
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-sm py-3 px-5 items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order Now
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
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors"
              >
                About Us
              </NavLink>
              <a
                href="/#how-it-works"
                onClick={handleSectionClick('how-it-works')}
                className="text-sm text-gray-900 font-bold hover:text-[#E8943A] transition-colors cursor-pointer"
              >
                How It Works
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
      <div className="container-custom py-16 md:py-20" style={{paddingBottom: '150px'}}>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">
              Flt14, NO 31 UGBENE II ABAKPA NIKE, ENUGU STATE.
            </p>
            <a href="mailto:support@pricedeck.xyz" className="text-gray-400 text-sm hover:text-[#E8943A] transition-colors">
              support@pricedeck.xyz
            </a>
            <div className="mt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] text-sm font-medium hover:text-[#20c25c] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            <Link to="/about" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Terms of Service
            </Link>
            <a href="https://twitter.com/usepricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Twitter
            </a>
            <a href="https://facebook.com/usepricedeck" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-semibold hover:text-[#E8943A] transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="container-custom border-t border-gray-800 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2025 PriceDeck. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right">
            Operated by PriceDeck Concepts
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
