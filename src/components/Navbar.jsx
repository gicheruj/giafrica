import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png'

const REMBEKA_URL = 'https://rembekaonline.com'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Info', path: '/info' },
    { name: 'Meet the Team', path: '/team' },
    { name: 'Partner', path: '/partner' },
  ]

  // Close the mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="sticky top-0 z-50 bg-[#0B2A4A] border-b border-[#C9963A]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="GI Africa Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.path} className="relative">
              <Link
                to={link.path}
                className={`relative py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#C9963A]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-[1px] h-px bg-[#C9963A] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <a
              href={REMBEKA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9963A] text-[#0B2A4A] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-white transition-colors duration-200"
            >
              Shop on Rembeka
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-[#C9963A]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-[#C9963A]' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0B2A4A] border-t border-[#C9963A]/20 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-medium tracking-widest uppercase py-3 border-b border-white/5 transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#C9963A]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={REMBEKA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-[#C9963A] text-[#0B2A4A] text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-sm text-center mt-4 hover:bg-white transition-colors duration-200"
          >
            Shop on Rembeka
          </a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar