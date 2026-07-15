import { useState } from 'react'
// import hevaLogo from '../assets/partners/heva-fund.png'
// import afrinextLogo from '../assets/partners/afrinext-ventures.png'
// import wowziLogo from '../assets/partners/wowzi.png'

const categories = [
  {
    num: '01',
    title: 'Manufacturers & Innovators',
    text: 'Partners who can accelerate product innovation, quality and locally relevant manufacturing.',
  },
  {
    num: '02',
    title: 'Retail & Distribution',
    text: 'Partners who bring retail reach, reselling networks and supply-chain capability.',
  },
  {
    num: '03',
    title: 'Technology & Data',
    text: 'Partners who strengthen the platforms and data infrastructure behind the ecosystem.',
  },
  {
    num: '04',
    title: 'Investors & Strategic Partners',
    text: 'Partners who bring capital and strategic support to fund commercialisation and scale.',
  },
]

const trackRecord = [
  {
    name: 'HEVA Fund',
    // logo: hevaLogo,
    sector: 'Creative Economy Investment',
    text: 'An East African impact investment fund providing tailored financing and business support to creative economy enterprises across fashion, media, and the arts. GI-Africa holds a signed commercial agreement with HEVA Fund.',
    url: 'https://www.hevafund.com/',
  },
  {
    name: 'AfriNext Ventures',
    // logo: afrinextLogo,
    sector: 'Venture Capital',
    text: 'A venture capital fund aggregating and supporting the next generation of disruptive, African-led, tech-driven startups from ideation to scale — sector-agnostic, with a focus on early-stage founders and honoring the authenticity of African heritage. AfriNext provided $100,000 in angel investment supporting startup sourcing, investment negotiations and multi-sector portfolio support.',
    url: 'https://www.afrinext.net/',
  },
  {
    name: 'Wowzi',
    // logo: wowziLogo,
    sector: 'Creator Economy',
    text: 'A technology platform connecting global brands to a diverse community of African creators, unleashing the power of creator social marketing through pre-vetted, verified influencers across the continent. Partnered with GI-Africa on healthcare influencer strategy and a digital wallet commercialisation pilot.',
    url: 'https://www.wowzi.co/',
  },
]

const partnershipInterests = [
  'Manufacturers & Innovators',
  'Retail & Distribution',
  'Technology & Data',
  'Investors & Strategic Partners',
  'Other',
]

const initialForm = {
  name: '',
  organisation: '',
  interest: partnershipInterests[0],
  email: '',
  message: '',
}

const Partner = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // TODO: wire this up to a real endpoint (e.g. Formspree, EmailJS, or a
    // custom backend route) — this is a placeholder that simulates success.
    try {
      // await fetch('/api/partner-inquiries', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0B2A4A] px-6 md:px-16 pt-24 md:pt-32 pb-20 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#C9963A]/10 blur-[120px]" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#C9963A]" />
              <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
                Partner With G-Africa
              </span>
            </div>
            <h1 className="font-serif text-white text-5xl md:text-7xl font-bold leading-[1.05]">
              Build the Future of{' '}
              <em className="text-[#C9963A] not-italic">African Beauty With Us.</em>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-white/70 text-base font-light leading-[1.9] border-l-2 border-[#C9963A] pl-6">
              G-AFRICA is seeking partners who can accelerate product
              innovation, distribution, retail access, manufacturing and
              technology-enabled growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner Categories ── */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Who We're Looking For
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-16 max-w-2xl">
          Invite Partners in Manufacturing, Distribution, Retail, Technology
          and Strategic Capital.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EAE6DF] rounded-lg overflow-hidden border border-[#EAE6DF]">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white p-8 pt-9 transition-colors duration-300 hover:bg-[#0B2A4A]"
            >
              <span className="block text-[#C9963A]/50 text-xs font-semibold tracking-[2px] mb-5 transition-colors duration-300 group-hover:text-[#C9963A]">
                {item.num}
              </span>
              <h3 className="font-serif text-[#111111] text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#C9963A]">
                {item.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Track Record ── */}
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Track Record
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-16">
          Beyond Beauty Businesses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trackRecord.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col bg-white p-8 md:p-10 border border-[#EAE6DF] rounded-lg transition-all duration-300 hover:border-[#C9963A]/50 hover:shadow-[0_16px_40px_-16px_rgba(11,42,74,0.16)] hover:-translate-y-1"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9963A]/0 to-transparent group-hover:via-[#C9963A]/60 transition-all duration-300" />
              <div className="h-12 w-28 mb-6 flex items-center justify-start">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-12 max-w-28 object-contain"
                />
              </div>
              <h3 className="font-serif text-[#111111] text-xl font-bold mb-1">
                {item.name}
              </h3>
              <div className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase mb-4">
                {item.sector}
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6 flex-1">
                {item.text}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-2 hover:gap-4 hover:text-[#C9963A] transition-all duration-200 self-start"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Start a Partnership Conversation (single focused action) ── */}
      <section className="relative overflow-hidden bg-[#0B2A4A] px-6 md:px-16 py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center mb-14">
          <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
            Start Here
          </div>
          <h2 className="font-serif text-white text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
            Start a Partnership Conversation
          </h2>
          <p className="text-white/60 text-base font-light leading-[1.9]">
            Tell us about your organisation and how you'd like to build
            Africa's beauty economy with us.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative max-w-2xl mx-auto bg-white rounded-lg p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-[#111111] text-xs font-semibold tracking-widest uppercase mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[#EAE6DF] rounded-sm px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="organisation" className="block text-[#111111] text-xs font-semibold tracking-widest uppercase mb-2">
                Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                required
                value={form.organisation}
                onChange={handleChange}
                className="w-full border border-[#EAE6DF] rounded-sm px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
                placeholder="Your company or organisation"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="block text-[#111111] text-xs font-semibold tracking-widest uppercase mb-2">
              Partnership Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className="w-full border border-[#EAE6DF] rounded-sm px-4 py-3 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
            >
              {partnershipInterests.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-[#111111] text-xs font-semibold tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#EAE6DF] rounded-sm px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#C9963A] transition-colors duration-200"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#111111] text-xs font-semibold tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-[#EAE6DF] rounded-sm px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#C9963A] transition-colors duration-200 resize-none"
              placeholder="Tell us about your organisation and how you'd like to partner."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Start a Partnership Conversation'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-[#0B2A4A] text-center font-medium">
              Thank you — we've received your message and will be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 text-center font-medium">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </section>

    </div>
  )
}

export default Partner