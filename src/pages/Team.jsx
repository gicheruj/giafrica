import { Link } from 'react-router-dom'

const team = [
  {
    initials: 'MW',
    name: 'Dr. Millicent Wanjeri Loice',
    role: 'Founder & CEO',
    bio: 'A medical doctor turned tech entrepreneur, Dr. Millicent brings over eight years of strategic and business development experience to G-AFRICA. Her background at the intersection of healthcare, technology and commerce drives the company\'s human-centred approach to building Africa\'s beauty economy.',
    linkedin: '#',
  },
  {
    initials: 'EN',
    name: 'Enid Njuguna',
    role: 'Chief Operating Officer',
    bio: 'Oversees day-to-day operations, driving execution and operational excellence across all three engines of the ecosystem.',
    linkedin: '#',
  },
  {
    initials: 'JG',
    name: 'John Maina Gicheru',
    role: 'Tech Lead',
    bio: 'Leads technology strategy and platform development across the G-AFRICA ecosystem.',
    linkedin: '#',
  },
  {
    initials: 'AO',
    name: 'Angela Omurunga',
    role: 'Tech Product Owner',
    bio: 'Owns product direction for G-AFRICA\'s technology platforms, translating strategy into shipped features.',
    linkedin: '#',
  },
  {
    initials: 'IN',
    name: 'Ian Njue',
    role: 'Brand & Marketing Lead',
    bio: 'Leads brand strategy and marketing across Rembeka, IVA and Adorn.',
    linkedin: '#',
  },
]

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const Team = () => {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-[#0B2A4A] px-6 md:px-16 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-px bg-[#C9963A]" />
          <span className="text-[#C9963A] text-xs font-semibold tracking-[3px] uppercase">
            Meet the Team
          </span>
        </div>
        <h1 className="font-serif text-white text-5xl md:text-7xl font-bold leading-[1.05] max-w-3xl">
          The People{' '}
          <em className="text-[#C9963A] not-italic">Behind the Ecosystem.</em>
        </h1>
        <p className="text-white/70 text-base font-light leading-[1.9] max-w-xl mt-8 border-l-2 border-[#C9963A] pl-6">
          A full-time team across leadership, operations, technology and
          marketing — built to execute, not just advise.
        </p>
      </section>

      {/* ── Team Grid ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-[#FAF6EF]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((person) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-2xl border border-[#EAE6DF] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Portrait area — ivory, with initials monogram and hover bio */}
              <div className="relative aspect-[3/4] bg-[#FAF6EF] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, #C9963A 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full border border-[#C9963A]/30 flex items-center justify-center">
                    <span className="font-serif text-[#0B2A4A] text-3xl font-bold tracking-wide">
                      {person.initials}
                    </span>
                  </div>
                </div>

                {/* Hover bio overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-[#0B2A4A]/95 p-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>

              {/* Name / role + LinkedIn button */}
              <div className="p-6 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-[#111111] text-lg font-bold mb-1">
                    {person.name}
                  </h3>
                  <div className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase">
                    {person.role}
                  </div>
                </div>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on LinkedIn`}
                  className="shrink-0 w-9 h-9 rounded-full border border-[#0B2A4A]/20 text-[#0B2A4A] flex items-center justify-center transition-colors duration-200 hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A]"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#FAFAFA] px-6 md:px-16 py-16 md:py-24 text-center border-t border-[#EAE6DF]">
        <h2 className="font-serif text-[#111111] text-4xl md:text-5xl font-bold mb-5">
          Want to{' '}
          <em className="text-[#C9963A] not-italic">Work With Us?</em>
        </h2>
        <p className="text-[#4A5568] text-base max-w-lg mx-auto mb-10">
          Learn more about G-AFRICA or start a conversation about partnering
          with our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/info"
            className="bg-[#0B2A4A] text-white text-xs font-bold tracking-widest uppercase px-9 py-4 rounded-sm hover:bg-[#C9963A] hover:text-[#0B2A4A] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            About G-AFRICA
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

export default Team