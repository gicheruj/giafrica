import { Link } from 'react-router-dom'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Ecosystem', path: '/ecosystem' },
  { name: 'Info', path: '/info' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Partner', path: '/partner' },
]

const contact = [
  { label: 'Phone', value: '+254 742 633 263', href: 'tel:+254742633263' },
  { label: 'Email', value: 'info@gimaniafrica.com', href: 'mailto:info@gimaniafrica.com' },
  { label: 'Location', value: 'Westlands, Nairobi', href: null },
]

// Placeholder text-logos until brand/partner logo image assets are supplied.
// Swap each `name` entry for an <img src={logo} alt={name} /> when files arrive.
const logos = [
  'Rembeka Online',
  'IVA Cosmetics',
  'Adorn Africa',
  'Kami Konsult',
  'AfriNext Ventures',
  'Wowzi',
  'HEVA Fund',
]

const LogoSlider = () => {
  const track = [...logos, ...logos] // duplicated for seamless loop

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/10 mb-12 md:mb-14">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B2A4A] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B2A4A] to-transparent z-10" />

      <div className="flex w-max animate-[logo-scroll_28s_linear_infinite] gap-4">
        {track.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center border border-[#C9963A]/25 rounded-sm px-8 py-4 whitespace-nowrap"
          >
            <span className="font-serif text-white/50 text-sm tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B2A4A] border-t border-[#C9963A]/30">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-[#C9963A]/10 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 pt-16 md:pt-20 pb-8">

        {/* Logo / Partner Slider */}
        <LogoSlider />

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-14">

          {/* Brand */}
          <div>
            <div className="font-serif text-white text-2xl font-bold tracking-[3px] mb-3">
              GI AFRICA
            </div>
            <p className="text-xs text-white/40 tracking-wider mb-6">
              Transform · Innovate · Lead
            </p>
            <Link
              to="/partner"
              className="inline-block bg-[#C9963A] text-[#0B2A4A] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold text-[#C9963A] tracking-[3px] uppercase mb-5">
              Pages
            </h4>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    <span className="h-px w-0 bg-[#C9963A] transition-all duration-200 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#C9963A] tracking-[3px] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {contact.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/55 break-words">
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-center sm:text-left">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} GIMANI (Gi-Africa) Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with purpose · Nairobi, Kenya
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer