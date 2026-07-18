import { useState } from 'react'


const categories = [
  { num: '01', title: 'Manufacturers & Innovators' },
  { num: '02', title: 'Retail & Distribution' },
  { num: '03', title: 'Technology & Data' },
  { num: '04', title: 'Investors & Strategic Partners' },
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
      <section className="relative overflow-hidden bg-[#FAF6EF] px-6 md:px-16 pt-24 md:pt-32 pb-20 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#A9C6E8]/25 blur-[120px]" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#C9963A]" />
              <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
                Partner With G-Africa
              </span>
            </div>
            <h1 className="font-serif text-[#0B2A4A] text-5xl md:text-7xl font-bold leading-[1.05]">
              Build the Future of{' '}
              <em className="text-[#C9963A] not-italic">African Beauty With Us.</em>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-[#0B2A4A]/65 text-base font-light leading-[1.9] border-l-2 border-[#C9963A] pl-6">
              G-AFRICA is seeking partners who can accelerate product
              innovation, distribution, retail access, manufacturing and
              technology-enabled growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── Start a Partnership Conversation (categories + form, single focused action) ── */}
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
            Where we collaborate
          </div>
          <h2 className="font-serif text-white text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
            Start a Partnership Conversation
          </h2>
          {/* <p className="text-white/60 text-base font-light leading-[1.9]">
            Tell us about your organisation and how you'd like to build
            Africa's beauty economy with us.
          </p> */}
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

          {/* Left — Who We're Looking For, vertical list, titles only */}
          <div className="md:sticky md:top-28">
            <h3 className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-6">
              Who We're Looking For
            </h3>
            <ul className="border-t border-white/10">
              {categories.map((item) => (
                <li
                  key={item.title}
                  className="group flex items-center gap-4 py-5 border-b border-white/10 pl-3 -ml-3 transition-all duration-300 hover:pl-5 hover:bg-white/5 rounded-r-sm"
                >
                  <span className="font-serif text-[#C9963A]/50 text-sm font-bold tracking-[1px] transition-colors duration-300 group-hover:text-[#C9963A]">
                    {item.num}
                  </span>
                  <span className="font-serif text-white text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-[#C9963A]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 md:p-10 space-y-6"
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

        </div>
      </section>

    </div>
  )
}

export default Partner