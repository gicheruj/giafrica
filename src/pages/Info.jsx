import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import commercialisation from '../assets/Info/commercialisation.png'
import distribution from '../assets/Info/distribution.png'
import innovation from '../assets/Info/innovate.png'
import data from '../assets/Info/data-led.png'

import rembeka1 from '../assets/Info/rembeka-1.jpg'
import rembeka2 from '../assets/Info/rembeka-2.jpg'
import adorn1 from '../assets/Info/adorn-1.jpg'
import adorn2 from '../assets/Info/adorn-2.jpg'

import africaMap from '../assets/Info/africa-map.png'

const stats = [
  { value: '2022', label: 'Operating in Kenya Since' },
  { value: '3', label: 'Integrated Beauty Engines' },
  { value: '36%', label: 'Founder Shareholding, Rembeka Online' },
  { value: 'KSh 100K', label: 'IVA Revenue Since March 2026' },
]

const pillars = [
  {
    num: '01',
    title: 'Commercialisation',
    text: 'Go-to-market, partnerships and market entry that turn beauty ideas into revenue.',
    image: commercialisation,
  },
  {
    num: '02',
    title: 'Beauty Distribution',
    text: 'Retail, reselling and supply-chain development that gets products where customers are.',
    image: distribution,
  },
  {
    num: '03',
    title: 'Innovation',
    text: 'Locally relevant proprietary products, built for African skin, hair and budgets.',
    image: innovation,
  },
  {
    num: '04',
    title: 'Data-Led Growth',
    text: 'Marketplace signals that sharpen what we sell, make and scale next.',
    image: data,
  },
]

// Year-by-year roadmap for the gold line/dot graphic — one 2-word beat per year.
const roadmapYears = [
  { year: 2022, desc: 'Ecosystem Founded' },
  { year: 2023, desc: 'Building Foundations' },
  { year: 2024, desc: 'Validating Model' },
  { year: 2025, desc: 'Adorn Launches' },
  { year: 2026, desc: 'Commercial Launch' },
  { year: 2027, desc: 'Distribution Scale' },
  { year: 2028, desc: 'Local Manufacturing' },
]

const LINE_END_INDEX = 4 // index of 2026 — the gold line runs up to here

// Product photography — two shots each for Rembeka and Adorn.
const productShots = [
  { tag: 'Rembeka Online', image: rembeka1 },
  { tag: 'Rembeka Online', image: rembeka2 },
  { tag: 'Adorn Africa', image: adorn1 },
  { tag: 'Adorn Africa', image: adorn2 },
]

// Expansion markets shown below the Africa map card.
const expansionCountries = [
  { name: 'Kenya', status: 'Current Operations' },
  { name: 'Uganda', status: 'Coming Soon' },
  { name: 'Tanzania', status: 'Future Market' },
]

// Animates a stat value counting up from 0 to its target once it scrolls into view.
// Understands prefixes/suffixes like "KSh " + "100" + "K", or "36" + "%".
const StatCounter = ({ value, duration = 1500 }) => {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/)
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!match) return
    const [, prefix, numStr, suffix] = match
    const target = parseInt(numStr.replace(/,/g, ''), 10)
    const hasComma = numStr.includes(',')
    const formatNum = (n) => (hasComma ? n.toLocaleString() : String(n))

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            const current = Math.round(eased * target)
            setDisplay(`${prefix}${formatNum(current)}${suffix}`)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}

// Gold line running 2022 → 2026, with 2027 and 2028 shown as standalone dots.
const YearRoadmap = () => {
  const lineLeftPct = (0.5 / roadmapYears.length) * 100
  const lineWidthPct = ((LINE_END_INDEX + 0.5) / roadmapYears.length) * 100 - lineLeftPct

  return (
    <div className="overflow-x-auto">
      <div className="relative min-w-[640px] pt-1.5 pb-2">
        <div
          className="absolute top-[7px] h-0.5 bg-[#C9963A]"
          style={{ left: `${lineLeftPct}%`, width: `${lineWidthPct}%` }}
        />
        <div className="relative grid grid-cols-7">
          {roadmapYears.map((item, i) => (
            <div key={item.year} className="flex flex-col items-center text-center px-1">
              <span
                className={`block w-3.5 h-3.5 rounded-full z-10 ${
                  i <= LINE_END_INDEX
                    ? 'bg-[#C9963A]'
                    : 'bg-white border-2 border-[#C9963A]'
                }`}
              />
              <span className="mt-4 font-serif text-[#111111] text-lg md:text-xl font-bold">
                {item.year}
              </span>
              <span className="mt-1 text-[#4A5568] text-[11px] md:text-xs tracking-wide">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Info = () => {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FAF6EF] px-6 md:px-16 pt-24 md:pt-32 pb-16 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#C9963A]/10 blur-[120px]" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#C9963A]" />
              <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
                Info
              </span>
            </div>
            <h1 className="font-serif text-[#0B2A4A] text-5xl md:text-7xl font-bold leading-[1.05]">
              Growth told in figures{' '}
              <em className="text-[#C9963A] not-italic">Not Paragraphs</em>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-[#4A5568] text-base font-light leading-[1.9] border-l-2 border-[#C9963A] pl-6 mb-8">
              Operating in Kenya since 2022, G-AFRICA Beauty connects
              strategy, commercialisation, technology and innovation.
            </p>

            {/* Numbers, counting up, right beside the hero copy */}
            <div className="grid grid-cols-2 gap-6 pl-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="font-serif text-[#0B2A4A] text-2xl md:text-3xl font-bold mb-1">
                    <StatCounter value={item.value} />
                  </div>
                  <div className="text-[#4A5568] text-xs leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap (gold line, year by year) — sits right after the hero ── */}
      <section className="bg-[#FAF6EF] px-6 md:px-16 py-10 md:py-14 border-b border-[#EAE6DF]">
        <YearRoadmap />
      </section>

      {/* ── The G-AFRICA Difference ── 
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
        <div>
          <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
            The G-AFRICA Difference
          </div>
          <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15]">
            More Than Beauty Products. A Connected Ecosystem.
          </h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-[#4A5568] text-base leading-[1.9]">
            Africa's beauty economy needs more than great products. It needs
            reliable market access, stronger supply chains, real consumer
            insight and locally relevant innovation.
          </p>
          <div className="relative bg-[#0B2A4A] rounded-lg border-l-2 border-[#C9963A] p-8 md:p-10 overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C9963A]/10 blur-3xl" />
            <p className="relative text-white/80 text-base leading-[1.9]">
              We build products, routes to market, supply-chain capability
              and data-driven growth — not just cosmetics.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* ── Vision & Mission ── 
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Vision',
              text: "Africa's leading commercialisation and beauty ecosystem development partner — building sustainable enterprises that create economic and social impact.",
            },
            {
              title: 'Mission',
              text: 'To transform ideas into commercially successful beauty businesses through strategic advisory, market intelligence, ecosystem development and execution excellence.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-[#FAFAFA] border border-[#EAE6DF] border-t-4 border-t-[#C9963A] rounded-lg p-8 md:p-10 transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(11,42,74,0.16)] hover:-translate-y-1"
            >
              <h3 className="font-serif text-[#111111] text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* ── Capability Pillars ── */}
      <section className="relative overflow-hidden bg-[#0B2A4A] px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px bg-[#C9963A]" />
          <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
            WHAT WE DO
          </span>
        </div>
        <h2 className="font-serif text-white text-3xl md:text-5xl font-bold leading-[1.1] mb-4 max-w-2xl">
          Four Pillars, shown - not explained
        </h2>
        <p className="text-white/60 text-base font-light leading-[1.9] max-w-2xl mb-16">
          Four connected capabilities, working together across every engine
          in the ecosystem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C9963A]/50 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/85 via-[#0B2A4A]/15 to-transparent" />
                <span className="absolute top-3 left-3 text-white/70 text-xs font-semibold tracking-[2px]">
                  {item.num}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[#C9963A] text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rembeka and Adorn: Product, Photographed ── */}
      <section className="bg-[#0B2A4A] px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Rembeka and Adorn
        </div>
        <h2 className="font-serif text-white text-3xl md:text-5xl font-bold leading-[1.1] mb-14 max-w-2xl">
          Product, Photographed
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {productShots.map((shot, i) => (
            <div
              key={i}
              className="group relative rounded-lg overflow-hidden aspect-[3/4] border border-white/10"
            >
              <img
                src={shot.image}
                alt={shot.tag}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-[10px] font-semibold tracking-[2px] uppercase">
                {shot.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Expansion: Where We Are. Where We Are Going. ── */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Expansion
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-5xl font-bold leading-[1.1] mb-14 max-w-2xl">
          Where We Are. Where We Are Going.
        </h2>

        <div className="max-w-4xl mx-auto bg-[#FAFAFA] border border-[#EAE6DF] rounded-2xl overflow-hidden">
          <div className="aspect-[16/10] md:aspect-[16/9] bg-white flex items-center justify-center p-8 md:p-14">
            <img
              src={africaMap}
              alt="Outline map of Africa highlighting Kenya, Uganda and Tanzania"
              className="max-w-full max-h-full object-contain"
            /> 
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6DF] border-t border-[#EAE6DF]">
            {expansionCountries.map((country) => (
              <div key={country.name} className="p-6 text-center">
                <h3 className="font-serif text-[#111111] text-xl font-bold mb-1">
                  {country.name}
                </h3>
                <p className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase">
                  {country.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-white px-6 md:px-16 py-20 md:py-28 text-center border-t border-[#EAE6DF]">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-24 bg-[#C9963A]" />
        <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold mb-5">
          Want to Know{' '}
          <em className="text-[#C9963A] not-italic">More?</em>
        </h2>
        <p className="text-[#4A5568] text-base max-w-lg mx-auto mb-10">
          Explore our ecosystem or get in touch to discuss partnership opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/ecosystem"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Our Ecosystem
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

export default Info