import { Link } from 'react-router-dom'

const identity = [
  {
    title: 'African Born',
    text: 'Rooted in Kenya.',
  },
  {
    title: 'African Bred',
    text: 'Shaped by the continent.',
  },
  {
    title: 'Built for Africa',
    text: 'Designed for scale.',
  },
]

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
  },
  {
    num: '02',
    title: 'Beauty Distribution',
    text: 'Retail, reselling and supply-chain development that gets products where customers are.',
  },
  {
    num: '03',
    title: 'Innovation',
    text: 'Locally relevant proprietary products, built for African skin, hair and budgets.',
  },
  {
    num: '04',
    title: 'Data-Led Growth',
    text: 'Marketplace signals that sharpen what we sell, make and scale next.',
  },
]

const timeline = [
  {
    period: '2022–2025',
    title: 'Validate',
    text: 'Validate the ecosystem, market relationships and product opportunities.',
  },
  {
    period: '2026',
    title: 'Commercial Launch',
    text: 'Commercial launch; strengthen the team and scale operations.',
  },
  {
    period: '2027–2028',
    title: 'Distribution',
    text: 'Build retail reach, supply-chain capability and distribution.',
  },
  {
    period: '2028+',
    title: 'Manufacturing',
    text: 'Develop proprietary haircare under IVA and scale Adorn into skincare and local manufacturing.',
  },
]

const Info = () => {
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
        <div className="pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#C9963A]/10 blur-[120px]" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#C9963A]" />
              <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
                Info
              </span>
            </div>
            <h1 className="font-serif text-white text-5xl md:text-7xl font-bold leading-[1.05]">
              A Kenyan Beauty Business{' '}
              <em className="text-[#C9963A] not-italic">Built to Scale African Ideas.</em>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-white/70 text-base font-light leading-[1.9] border-l-2 border-[#C9963A] pl-6">
              Operating in Kenya since 2022, G-AFRICA Beauty connects
              strategy, commercialisation, technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
        <div className="md:sticky md:top-28">
          <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
            Our Story
          </div>
          <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15]">
            From Idea to Ecosystem
          </h2>
        </div>
        <div className="md:col-span-2 space-y-8">
          <p className="text-[#4A5568] text-base leading-[1.9]">
            <strong className="text-[#111111] font-semibold">
              G-AFRICA Beauty was founded on a singular belief:
            </strong>{' '}
            that the African woman deserves world-class beauty products and
            services built specifically for her. Operating in Kenya since
            2022 under Jimanim Africa Limited, G-AFRICA is building a
            connected beauty ecosystem with three engines — Rembeka Online,
            IVA Cosmetics and Adorn Africa — combining African market
            intelligence with global commercial expertise.
          </p>
          <p className="text-[#4A5568] text-base leading-[1.9]">
            Together, these businesses create a stronger path from product
            insight to market access, customer demand, supply-chain growth
            and future local manufacturing. Rembeka Online has already
            fulfilled over 2,000 e-commerce orders and onboarded 70
            professional stylists; Adorn Africa is co-invested with Kami
            Consult Limited, with KSh 500,000 invested by each partner to
            date.
          </p>

          {/* Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 pb-2">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="font-serif text-[#111111] text-2xl md:text-3xl font-bold mb-1">
                  {item.value}
                </div>
                <div className="text-[#4A5568] text-xs leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Our Identity */}
          <div className="pt-4">
            <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-6">
              Our Identity
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#EAE6DF] rounded-lg overflow-hidden border border-[#EAE6DF]">
              {identity.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white p-8 text-center transition-colors duration-300 hover:bg-[#0B2A4A]"
                >
                  <h3 className="font-serif text-[#111111] text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#C9963A]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The G-AFRICA Difference ── */}
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

      {/* ── Vision & Mission ── */}
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

      {/* ── Capability Pillars ── */}
      <section className="relative overflow-hidden bg-[#0B2A4A] px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-px bg-[#C9963A]" />
          <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
            Capability
          </span>
        </div>
        <h2 className="font-serif text-white text-3xl md:text-5xl font-bold leading-[1.1] mb-4 max-w-2xl">
          Commerce, Distribution, Innovation and Data
        </h2>
        <p className="text-white/60 text-base font-light leading-[1.9] max-w-2xl mb-16">
          Four connected capabilities, working together across every engine
          in the ecosystem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group relative bg-[#0B2A4A] p-8 pt-9 transition-colors duration-300 hover:bg-[#0f3560]"
            >
              <span className="block text-white/25 text-xs font-semibold tracking-[2px] mb-5 transition-colors duration-300 group-hover:text-[#C9963A]/60">
                {item.num}
              </span>
              <h3 className="font-serif text-[#C9963A] text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.text}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9963A] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Growth Journey / Timeline ── */}
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-20 md:py-28">
        <div className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase mb-4">
          Roadmap
        </div>
        <h2 className="font-serif text-[#111111] text-3xl md:text-4xl font-bold leading-[1.15] mb-4">
          Commercial Launch Now. Owned Manufacturing Next.
        </h2>
        <p className="text-[#4A5568] text-base leading-[1.9] max-w-2xl mb-16">
          A clear runway from validation to local manufacturing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, i) => (
            <div
              key={item.period}
              className="group relative bg-white border border-[#EAE6DF] rounded-lg p-7 transition-all duration-300 hover:border-[#C9963A]/50 hover:shadow-[0_16px_40px_-16px_rgba(11,42,74,0.16)]"
            >
              <div className="text-[#C9963A]/70 font-serif text-lg font-bold mb-3 tracking-wide">
                {item.period}
              </div>
              <h3 className="font-serif text-[#111111] text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {item.text}
              </p>
              {i < timeline.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#EAE6DF]" />
              )}
            </div>
          ))}
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