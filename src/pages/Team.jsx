import { Link } from 'react-router-dom'

const team = [
  {
    initials: 'MW',
    name: 'Dr. Millicent Wanjeri Loice',
    role: 'Founder & CEO',
    bio: 'A medical doctor turned tech entrepreneur, Dr. Millicent brings over eight years of strategic and business development experience to G-AFRICA. Her background at the intersection of healthcare, technology and commerce drives the company\'s human-centred approach to building Africa\'s beauty economy.',
    linkedin: null,
  },
  {
    initials: 'EN',
    name: 'Enid Njuguna',
    role: 'Chief Operating Officer',
    bio: 'Oversees day-to-day operations, driving execution and operational excellence across all three engines of the ecosystem.',
    linkedin: null,
  },
  {
    initials: 'JG',
    name: 'John Maina Gicheru',
    role: 'Tech Lead',
    bio: 'Leads technology strategy and platform development across the G-AFRICA ecosystem.',
    linkedin: null,
  },
  {
    initials: 'AO',
    name: 'Angela Omurunga',
    role: 'Tech Product Owner',
    bio: 'Owns product direction for G-AFRICA\'s technology platforms, translating strategy into shipped features.',
    linkedin: null,
  },
  {
    initials: 'IN',
    name: 'Ian Njue',
    role: 'Brand & Marketing Lead',
    bio: 'Leads brand strategy and marketing across Rembeka, IVA and Adorn.',
    linkedin: null,
  },
]

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
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((person) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-lg border border-[#EAE6DF] bg-[#FAFAFA]"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] bg-[#0B2A4A] flex items-center justify-center overflow-hidden">
                <span className="font-serif text-[#C9963A]/40 text-5xl font-bold">
                  {person.initials}
                </span>

                {/* Hover bio overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-[#0B2A4A]/95 p-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase hover:text-white transition-colors duration-200 self-start"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>

              {/* Name / role — always visible */}
              <div className="p-6">
                <h3 className="font-serif text-[#111111] text-lg font-bold mb-1">
                  {person.name}
                </h3>
                <div className="text-[#C9963A] text-xs font-semibold tracking-[2px] uppercase">
                  {person.role}
                </div>
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