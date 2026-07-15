import { Link } from 'react-router-dom'
import Adorn from '../assets/Ecosystem/Adorn.png'
import Rembeka from '../assets/Ecosystem/Rembeka.png'

const engines = [
  {
    num: '01',
    name: 'Rembeka Online',
    role: 'Data & Last-Mile Distribution',
    text: 'Technology, marketplace data and last-mile delivery — connecting consumers with curated African beauty products and professional stylists.',
  },
  {
    num: '02',
    name: 'IVA Cosmetics',
    role: 'Commercial & Retail Distribution',
    text: 'The commercial engine — retail, reselling and distribution reach that carries products from marketplace to shelf.',
  },
  {
    num: '03',
    name: 'Adorn Africa',
    role: 'Proprietary Brand & Innovation',
    text: 'GI-Africa\'s own cosmetics line — proprietary products built and validated in-market, starting with cosmetics and expanding toward skincare.',
  },
]

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

const flow = [
  { title: 'Rembeka', text: 'Data & demand signals' },
  { title: 'IVA', text: 'Commercial reach & distribution' },
  { title: 'Adorn', text: 'Proprietary product growth' },
  { title: 'Outcome', text: 'Stronger customer insight & better decisions' },
]

const Ecosystem = () => {
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
          One Ecosystem.{' '}
          <em className="text-[#C9963A] not-italic">Three Engines.</em>
        </h1>
        <p className="text-white/70 text-base font-light leading-[1.9] max-w-xl mt-8 border-l-2 border-[#C9963A] pl-6">
          Rembeka Online, IVA Cosmetics and Adorn Africa aren't separate
          standalone brands — they're one connected model, each engine
          strengthening the others.
        </p>
      </section>

      {/* ── Engine Overview Grid ── */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE6DF] rounded-lg overflow-hidden border border-[#EAE6DF]">
          {engines.map((engine) => (
            <div
              key={engine.num}
              className="group bg-white p-8 md:p-10 transition-colors duration-300 hover:bg-[#0B2A4A]"
            >
              <span className="block text-[#C9963A]/50 text-xs font-semibold tracking-[2px] mb-6 transition-colors duration-300 group-hover:text-[#C9963A]">
                {engine.num}
              </span>
              <h3 className="font-serif text-[#111111] text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                {engine.name}
              </h3>
              <div className="text-[#C9963A] text-[11px] font-semibold tracking-[2px] uppercase mb-4">
                {engine.role}
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/60">
                {engine.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rembeka Online ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <div className="border border-[#C9963A]/40 text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase px-3 py-1.5 inline-block mb-6">
            Engine 01 · Est. 2022
          </div>
          <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            Rembeka Online
          </h2>
          <p className="text-[#4A5568] text-base leading-[1.9] mb-8">
            Kenya's beauty marketplace, connecting consumers with curated
            African beauty products and professional stylists. Rembeka is
            the ecosystem's data and last-mile distribution engine — every
            order and stylist booking sharpens what the rest of G-AFRICA
            builds and sells next.
          </p>
          <div className="grid grid-cols-3 gap-0.5 mb-8">
            {rembekaStats.map((stat) => (
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
          <a
            href="https://rembekaonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 inline-block"
          >
            Shop on Rembeka
          </a>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#EAE6DF] bg-[#FAFAFA] order-first md:order-last">
          <img
            src={Rembeka}
            alt="Rembeka Online"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── IVA Cosmetics ── */}
      <section className="bg-[#0B2A4A] px-6 md:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#C9963A]/20 bg-[#C9963A]/5 flex items-center justify-center">
          <span className="font-serif text-[#C9963A]/40 text-2xl font-bold tracking-wide">
            IVA Cosmetics
          </span>
        </div>

        <div>
          <div className="border border-[#C9963A]/40 text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase px-3 py-1.5 inline-block mb-6">
            Engine 02
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            IVA Cosmetics
          </h2>
          <p className="text-white/70 text-base leading-[1.9] mb-8">
            The ecosystem's commercial and retail distribution engine —
            carrying products from marketplace validation into wider retail
            and reselling reach across Kenya.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 mb-2 max-w-xs">
            {ivaStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-[#C9963A]/20 p-5 text-center"
              >
                <div className="font-serif text-[#C9963A] text-2xl md:text-3xl font-bold leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] font-medium tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Adorn Africa ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <div className="border border-[#C9963A]/40 text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase px-3 py-1.5 inline-block mb-6">
            Engine 03 · Est. 2025
          </div>
          <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            Adorn Africa
          </h2>
          <p className="text-[#4A5568] text-base leading-[1.9] mb-8">
            A premium African cosmetics brand celebrating the beauty of the
            African woman — bold, intentional and made to last. The
            ecosystem's proprietary product and innovation engine, launched
            with a 300-unit eyeshadow pilot and co-invested with Kami
            Consult Limited.
          </p>
          <div className="grid grid-cols-3 gap-0.5 mb-8">
            {adornStats.map((stat) => (
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
          <a
            href="https://www.instagram.com/adorn.africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 inline-block"
          >
            See More
          </a>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#C9963A]/20 bg-[#C9963A]/5 order-first md:order-last">
          <img
            src={Adorn}
            alt="Adorn Africa"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── How the Model Works ── */}
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-16 md:py-24">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          How It Fits Together
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-14 max-w-2xl">
          One Ecosystem. Three Engines. Stronger Growth.
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

      {/* ── Why Data Matters ── */}
      <section className="bg-[#0B2A4A] px-6 md:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
        <div>
          <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
            Why Data Matters
          </div>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold leading-[1.15]">
            Data Should Determine What We Sell, Make and Scale Next.
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-white/70 text-base font-light leading-[1.9] border-l-2 border-[#C9963A] pl-6">
            Marketplace activity, supplier participation and customer demand
            across Rembeka, IVA and Adorn inform inventory decisions, product
            development, channel strategy and commercial growth — so every
            engine gets smarter as the ecosystem grows.
          </p>
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