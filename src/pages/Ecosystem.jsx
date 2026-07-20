import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Adorn from '../assets/Home/Adorn.png'
import Rembeka from '../assets/Home/Rembeka.jpg'
import IVA from '../assets/Home/IVA.jpg'

const rembekaStats = [
  { value: '2,000+', label: 'Orders Fulfilled' },
  { value: '70+', label: 'Stylists Onboarded' },
  { value: '36%', label: 'Founder Shareholding' },
]

const ivaStats = [
  { value: 'KSh 100K', label: 'Revenue Since March 2026' },
]

const adornStats = [
  { value: '300', label: 'Unit Pilot Inventory' },
  { value: 'KSh 500K', label: 'Per-Partner Investment' },
  { value: '2025', label: 'Year Launched' },
]

const brands = [
  {
    num: '01',
    name: 'Rembeka Online',
    role: 'COMMERCE',
    est: 'Est. 2022',
    image: Rembeka,
    shortText:
      'Technology, marketplace data and last-mile delivery — connecting consumers with curated African beauty products and professional stylists.',
    fullText:
      "Kenya's beauty marketplace, connecting consumers with curated African beauty products and professional stylists. Rembeka is the ecosystem's data and last-mile distribution engine — every order and stylist booking sharpens what the rest of G-AFRICA builds and sells next.",
    stats: rembekaStats,
    cta: { label: 'Shop on Rembeka', href: 'https://rembekaonline.com' },
  },
  {
    num: '02',
    name: 'IVA Cosmetics',
    role: 'INFRASTRUCTURE',
    est: null,
    image: IVA,
    shortText:
      'The commercial engine — retail, reselling and distribution reach that carries products from marketplace to shelf.',
    fullText:
      "The ecosystem's commercial and retail distribution engine — carrying products from marketplace validation into wider retail and reselling reach across Kenya.",
    stats: ivaStats,
    cta: null,
  },
  {
    num: '03',
    name: 'Adorn Africa',
    role: 'PRODUCT',
    est: 'Est. 2025',
    image: Adorn,
    shortText:
      "GI-Africa's own cosmetics line — proprietary products built and validated in-market, starting with cosmetics and expanding toward skincare.",
    fullText:
      "A premium African cosmetics brand celebrating the beauty of the African woman — bold, intentional and made to last. The ecosystem's proprietary product and innovation engine, launched with a 300-unit eyeshadow pilot and co-invested with Kami Consult Limited.",
    stats: adornStats,
    cta: { label: 'See More', href: 'https://www.instagram.com/adorn.africa/' },
  },
]

const flow = [
  { title: 'Rembeka', text: 'Data & demand signals' },
  { title: 'IVA', text: 'Commercial reach & distribution' },
  { title: 'Adorn', text: 'Proprietary product growth' },
  { title: 'Outcome', text: 'Stronger customer insight & better decisions' },
]

const BrandCard = ({ brand, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(brand)}
    className="group relative text-left rounded-2xl overflow-hidden border border-[#EAE6DF] bg-[#0B2A4A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9963A]"
  >
    <div className="relative h-80 md:h-96 lg:h-[26rem] overflow-hidden">
      <img
        src={brand.image}
        alt={brand.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/85 via-[#0B2A4A]/10 to-transparent" />
      <span className="absolute top-4 left-4 text-white/80 text-xs font-semibold tracking-[3px]">
        {brand.num}
      </span>
      {brand.est && (
        <span className="absolute top-4 right-4 text-[10px] text-white/80 tracking-widest uppercase border border-white/30 rounded-sm px-2 py-1">
          {brand.est}
        </span>
      )}
      <div className="absolute bottom-4 left-5 right-5">
        <h3 className="font-serif text-white text-xl font-bold leading-tight">
          {brand.name}
        </h3>
      </div>
    </div>

    <div className="px-6 py-4 md:px-7 md:py-5 flex items-center justify-between gap-4">
      <span className="text-[#C9963A] text-[11px] font-semibold tracking-[2px] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
        {brand.role}
      </span>
      <span className="shrink-0 text-[#0B2A4A] text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2 transition-all duration-200 group-hover:gap-4 group-hover:text-[#C9963A]">
        View Details →
      </span>
    </div>
  </button>
)

const BrandModal = ({ brand, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!brand) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} details`}
    >
      <div
        className="absolute inset-0 bg-[#0B2A4A]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#0B2A4A] flex items-center justify-center hover:bg-[#C9963A] hover:text-white transition-colors duration-200"
        >
          ✕
        </button>

        <div className="relative h-56 md:h-72">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-[#0B2A4A]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="block text-[#C9963A] text-xs font-semibold tracking-[2px] mb-2">
              {brand.num}
              {brand.est ? ` · ${brand.est}` : ''}
            </span>
            <h2 className="font-serif text-white text-3xl md:text-4xl font-bold">
              {brand.name}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase mb-4">
            {brand.role}
          </div>
          <p className="text-[#4A5568] text-base leading-[1.9] mb-8">
            {brand.fullText}
          </p>

          {brand.stats.length > 0 && (
            <div
              className={`grid gap-0.5 mb-8 ${
                brand.stats.length === 1 ? 'grid-cols-1 max-w-xs' : 'grid-cols-3'
              }`}
            >
              {brand.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#FAFAFA] border border-[#EAE6DF] p-5 text-center"
                >
                  <div className="font-serif text-[#C9963A] text-2xl md:text-3xl font-bold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#4A5568] text-[10px] font-medium tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {brand.cta && (
            <a
              href={brand.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 inline-block"
            >
              {brand.cta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Ecosystem = () => {
  const [selectedBrand, setSelectedBrand] = useState(null)

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-[#0B2A4A] px-6 md:px-16 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-px bg-[#C9963A]" />
          <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
            Our Ecosystem
          </span>
        </div>
        <h1 className="font-serif text-white text-5xl md:text-7xl font-bold leading-[1.05] max-w-3xl">
          Three Brands.{' '}
          <em className="text-[#C9963A] not-italic">One Vision for African Beauty.</em>
        </h1>
        <p className="text-white/70 text-base font-light leading-[1.9] max-w-xl mt-8 border-l-2 border-[#C9963A] pl-6">
          Rembeka Online, IVA Cosmetics and Adorn Africa aren't separate
          standalone brands — they're one connected model, each engine
          strengthening the others.
        </p>
      </section>

      {/* ── Brand Cards ── */}
      <section className="bg-[#FAF6EF] px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {brands.map((brand) => (
            <BrandCard key={brand.num} brand={brand} onSelect={setSelectedBrand} />
          ))}
        </div>
      </section>

      <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />

      {/* ── How the Model Works ── */}
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-16 md:py-24">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          How It Fits Together
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-14 max-w-2xl">
          One Ecosystem. Three Brands. Stronger Growth.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flow.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="bg-white border border-[#EAE6DF] rounded-lg p-6 h-full">
                <div className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase mb-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-[#111111] text-lg font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-[#C9963A]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-24 text-center">
        <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold mb-5">
          Want to Partner{' '}
          <em className="text-[#C9963A] not-italic">With Us?</em>
        </h2>
        <p className="text-[#4A5568] text-base max-w-lg mx-auto mb-10">
          Explore how G-AFRICA can help build, scale or commercialise your
          next beauty venture.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/info"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
          <Link
            to="/partner"
            className="border border-[#0B2A4A] text-[#0B2A4A] text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#0B2A4A] hover:text-white transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Partner With Us
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Ecosystem