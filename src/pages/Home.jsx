import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import transformImg from '../assets/Hero/transform.png'
import innovateImg from '../assets/Hero/innovate.png'
import leadImg from '../assets/Hero/lead.png'

const heroSlides = [
  {
    image: transformImg,
  },
  {
    image: innovateImg,
  },
  {
    image: leadImg,
  },
]

const stats = [
  { value: '2022', label: 'Operating in Kenya Since' },
  { value: '3', label: 'Integrated Beauty Engines' },
  { value: '36%', label: 'Founder Shareholding, Rembeka' },
  { value: 'KSh 100K', label: 'IVA Revenue Since March 2026' },
]

const engines = [
  {
    num: '01',
    name: 'Rembeka Online',
    role: 'Data & Last-Mile Distribution',
  },
  {
    num: '02',
    name: 'IVA Cosmetics',
    role: 'Commercial & Retail Distribution',
  },
  {
    num: '03',
    name: 'Adorn Africa',
    role: 'Proprietary Brand & Innovation',
  },
]

const flow = [
  { title: 'Rembeka', text: 'Data & demand signals' },
  { title: 'IVA', text: 'Commercial reach & distribution' },
  { title: 'Adorn', text: 'Proprietary product growth' },
  { title: 'Outcome', text: 'Stronger insight & better decisions' },
]

const timeline = [
  { period: '2022–2025', title: 'Validate' },
  { period: '2026', title: 'Commercial Launch' },
  { period: '2027–2028', title: 'Distribution' },
  { period: '2028+', title: 'Manufacturing' },
]

const partnerCategories = [
  'Manufacturers & Innovators',
  'Retail & Distribution',
  'Technology & Data',
  'Investors & Strategic Partners',
]

const HeroCarousel = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.tag}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === active
              ? 'opacity-100 translate-x-0'
              : i < active
                ? 'opacity-0 -translate-x-4'
                : 'opacity-0 translate-x-4'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Dot navigation */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.tag}
            onClick={() => setActive(i)}
            aria-label={`Show ${slide.tag} slide`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-[#C9963A]' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-[#FAF6EF]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FAF6EF] min-h-[92vh] grid grid-cols-1 md:grid-cols-2">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute top-1/4 right-[-12%] h-[560px] w-[560px] rounded-full bg-[#A9C6E8]/25 blur-[130px]" />

        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-20 md:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-[#C9963A]" />
            <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
              Transform · Innovate · Lead
            </span>
          </div>
          <h1 className="font-serif text-[#0B2A4A] text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Building Africa's Next Generation of{' '}
            <em className="text-[#C9963A] not-italic">Beauty Businesses.</em>
          </h1>
          <p className="text-[#0B2A4A]/65 text-base font-light leading-relaxed max-w-md mb-10">
            G-AFRICA Beauty connects commerce, data and innovation to
            transform beauty ideas into scalable African businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/ecosystem"
              className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200"
            >
              Explore Our Ecosystem
            </Link>
            <Link
              to="/partner"
              className="border border-[#0B2A4A]/25 text-[#0B2A4A] text-xs font-medium tracking-widest uppercase px-9 py-4 rounded-sm hover:border-[#C9963A] hover:text-[#C9963A] transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Right — Sliding image carousel: Transform / Innovate / Lead */}
        <div className="flex items-center justify-center px-2 md:px-4 py-6 md:py-10 relative z-10">
          <div className="w-full">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ── Brand Story, In Numbers ── */}
      <section className="px-6 md:px-16 py-16 md:py-20 bg-[#FAF6EF] border-b border-[#EAE6DF]">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-8 text-center md:text-left">
          The Brand Story, In Numbers
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group rounded-lg p-7 text-center border transition-all duration-300 hover:-translate-y-1 ${
                i === 0
                  ? 'bg-[#A9C6E8]/20 border-[#A9C6E8]/60 hover:border-[#A9C6E8]'
                  : 'bg-[#FAFAFA] border-[#EAE6DF] hover:border-[#A9C6E8]/60'
              }`}
            >
              <div className="font-serif text-[#0B2A4A] text-3xl md:text-4xl font-bold leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[#0B2A4A]/50 text-[10px] md:text-xs font-medium tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The G-Africa Difference ── */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-[#FAF6EF] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
        <div>
          <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
            The G-Africa Difference
          </div>
          <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15]">
            More Than Beauty Products. A Connected Ecosystem.
          </h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-[#4A5568] text-base leading-[1.9] max-w-2xl">
            Africa's beauty economy needs more than great products. It needs
            reliable market access, stronger supply chains, real consumer
            insight and locally relevant innovation — which is exactly what
            our three connected engines are built to deliver.
          </p>
        </div>
      </section>

      {/* ── Our Ecosystem (teaser) ── */}
      <section className="bg-[#FAF6EF] px-6 md:px-16 py-20 md:py-28">
        <div className="mb-14 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
              Our Ecosystem
            </span>
            <div className="w-20 h-px bg-[#111111]/10" />
          </div>
          <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold leading-[1.15]">
            One Ecosystem.{' '}
            <em className="text-[#C9963A] not-italic">Three Engines.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE6DF] rounded-lg overflow-hidden border border-[#EAE6DF] mb-10">
          {engines.map((engine) => (
            <div
              key={engine.num}
              className="group bg-white p-8 md:p-10 transition-colors duration-300 hover:bg-[#0B2A4A]"
            >
              <span className="block text-[#C9963A]/50 text-xs font-semibold tracking-[2px] mb-5 transition-colors duration-300 group-hover:text-[#C9963A]">
                {engine.num}
              </span>
              <h3 className="font-serif text-[#111111] text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                {engine.name}
              </h3>
              <p className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase">
                {engine.role}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/ecosystem"
          className="text-[#0B2A4A] text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2 hover:gap-4 hover:text-[#C9963A] transition-all duration-200"
        >
          Explore the Full Ecosystem →
        </Link>
      </section>

      {/* ── How the Model Works ── */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-[#FAF6EF]">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          How It Fits Together
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-14 max-w-2xl">
          One Ecosystem. Three Engines. Stronger Growth.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flow.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="bg-[#FAFAFA] border border-[#EAE6DF] rounded-lg p-6 h-full">
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
      <section className="bg-[#0B2A4A] px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
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
            inform inventory, product development, channel strategy and
            commercial growth — sharpening every decision we make.
          </p>
        </div>
      </section>

      {/* ── Growth Journey (teaser) ── */}
      <section className="bg-[#FAF6EF] px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Roadmap
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-14 max-w-2xl">
          Commercial Launch Now. Owned Manufacturing Next.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {timeline.map((item) => (
            <div
              key={item.period}
              className="bg-white border border-[#EAE6DF] rounded-lg p-6"
            >
              <div className="text-[#C9963A]/70 font-serif text-base font-bold mb-2 tracking-wide">
                {item.period}
              </div>
              <h3 className="font-serif text-[#111111] text-lg font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <Link
          to="/info"
          className="text-[#0B2A4A] text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2 hover:gap-4 hover:text-[#C9963A] transition-all duration-200"
        >
          See the Full Roadmap →
        </Link>
      </section>

      {/* ── Partnership Invitation (CTA) ── */}
      <section className="relative overflow-hidden px-6 md:px-16 py-20 md:py-28 bg-[#FAF6EF] border-t border-[#EAE6DF]">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#C9963A]/[0.06] blur-3xl" />
        <div className="max-w-3xl relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9963A]" />
            <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
              Partner With G-Africa
            </span>
          </div>
          <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold leading-[1.15] mb-6">
            Build the Future of{' '}
            <em className="text-[#C9963A] not-italic">African Beauty With Us</em>
          </h2>
          <p className="text-[#111111]/60 text-base font-light leading-relaxed max-w-xl mb-6">
            G-AFRICA is seeking partners who can accelerate product
            innovation, distribution, retail access, manufacturing and
            technology-enabled growth.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {partnerCategories.map((item) => (
              <span
                key={item}
                className="border border-[#0B2A4A]/20 text-[#0B2A4A] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            to="/partner"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 inline-block"
          >
            Start a Partnership Conversation
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home