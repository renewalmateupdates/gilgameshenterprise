import Image from 'next/image'
import Link from 'next/link'

const VENTURES = [
  {
    name: 'SocialMate',
    url: 'https://socialmate.studio',
    color: '#c9a84c',
    tag: 'Creator OS',
    desc: 'Multi-platform social media scheduling and AI-powered content tools. What competitors charge $99/month for — we give for $5 or free.',
    badge: 'Live',
  },
  {
    name: 'RenewalMate',
    url: 'https://renewalmate.com',
    color: '#2d9e6b',
    tag: 'FinTech',
    desc: 'Stop bleeding money on subscriptions and bills you forgot about. Track every recurring expense in one free dashboard — no paywall, ever.',
    badge: 'Live',
  },
  {
    name: 'Hearthforge',
    url: '#',
    color: '#e07b39',
    tag: '3D Products',
    desc: 'Modular desk rail systems for streamers and content creators. Premium matte black hardware designed for the modern setup. Physical + digital.',
    badge: 'Coming Soon',
  },
  {
    name: "Gilgamesh's Guides",
    url: 'https://socialmate.studio/guides',
    color: '#9b6dd6',
    tag: 'Free Education',
    desc: 'Free long-form guides on starting a business, building credit, marketing on zero budget, and vibe coding with AI. No paywall. Ever.',
    badge: 'Live',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f0f0f0]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/683f1f5e568c642d78d49253/5710312f-f277-4f57-915f-2b24cf3fd095/G+E+%281%29.png?format=1500w"
              alt="Gilgamesh Enterprise"
              width={40}
              height={40}
              className="rounded-lg"
              unoptimized
            />
            <span className="font-bold text-sm tracking-wide text-[#c9a84c] hidden sm:block">GILGAMESH ENTERPRISE</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#ventures" className="hover:text-[#c9a84c] transition-colors">Ventures</a>
            <a href="#mission" className="hover:text-[#c9a84c] transition-colors">Mission</a>
            <a href="#contact" className="hover:text-[#c9a84c] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/683f1f5e568c642d78d49253/5710312f-f277-4f57-915f-2b24cf3fd095/G+E+%281%29.png?format=1500w"
            alt="Gilgamesh Enterprise"
            width={120}
            height={120}
            className="mx-auto mb-8 rounded-2xl fade-up"
            unoptimized
          />
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4 fade-up">
            Gilgamesh Enterprise LLC — Wyoming
          </p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 fade-up-delay leading-[1.05]">
            Where ambition<br />
            <span className="text-[#c9a84c]">meets action.</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed fade-up-delay-2">
            A Wyoming LLC building ventures that tear down paywalls,
            cut gatekeepers, and put real tools in the hands of real people.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-up-delay-2">
            <a
              href="#ventures"
              className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded-full hover:bg-[#e8c96a] transition-colors text-sm"
            >
              Explore the Empire
            </a>
            <a
              href="#mission"
              className="px-8 py-3 border border-[#2a2a2a] text-gray-300 font-semibold rounded-full hover:border-[#c9a84c]/40 transition-colors text-sm"
            >
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Portfolio</p>
            <h2 className="text-4xl font-black tracking-tight">Our Ventures</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every product we build follows one rule: if it doesn't cost us anything, it's free for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VENTURES.map((v) => (
              <a
                key={v.name}
                href={v.url}
                target={v.url === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#2e2e2e] transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{ background: `${v.color}20`, color: v.color }}
                    >
                      {v.tag}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-[#c9a84c] transition-colors">
                      {v.name}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full border"
                    style={{
                      color: v.badge === 'Live' ? '#2d9e6b' : '#888',
                      borderColor: v.badge === 'Live' ? '#2d9e6b40' : '#2a2a2a',
                      background: v.badge === 'Live' ? '#2d9e6b10' : 'transparent',
                    }}
                  >
                    {v.badge === 'Live' ? '● Live' : '○ Soon'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                {v.url !== '#' && (
                  <p className="mt-4 text-[#c9a84c] text-xs font-semibold group-hover:underline">
                    Visit {v.name} →
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-24 px-6 border-t border-[#141414]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why We Exist</p>
            <h2 className="text-4xl font-black tracking-tight">The Mission</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '🔓',
                title: 'No Gatekeeping',
                desc: 'We only charge for what actually costs us money to run. Everything else is free — no artificial paywalls, no feature-locking for profit.',
              },
              {
                icon: '⚡',
                title: 'Real Tools',
                desc: 'We build what competitors charge $99/month for and give it to people for $5 or free. Premium tools should not be reserved for people who can already afford them.',
              },
              {
                icon: '🌱',
                title: 'Built in Public',
                desc: 'Solo. Bootstrapped. No VC money. No bullshit. Every venture is built nights and weekends with full transparency about what works and what doesn\'t.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-black text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0f0f0f] border border-[#c9a84c]/20 rounded-2xl p-8 text-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              &ldquo;Power to the people. Tear down gatekeeping walls.
              {' '}<span className="text-[#c9a84c] font-bold">Build the door.</span>&rdquo;
            </p>
            <p className="text-gray-600 text-sm mt-4">— Joshua Bostic, Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Builder</p>
          <h2 className="text-3xl font-black tracking-tight mb-6">Joshua Bostic</h2>
          <p className="text-gray-400 leading-relaxed text-sm max-w-2xl mx-auto">
            Solo founder from Indiana. Self-taught. 100% bootstrapped. Started building SocialMate after
            trying to market another product and discovering how absurd social media tool pricing was.
            Built it nights and weekends with AI as a co-pilot. Now building an empire — one venture at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center text-xs font-semibold text-gray-500">
            {['Wyoming LLC', 'Solo Bootstrapped', 'Built with AI', '100% Free Where Possible', 'Indiana'].map(t => (
              <span key={t} className="px-3 py-1.5 border border-[#1e1e1e] rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl font-black tracking-tight mb-4">Contact</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Partnership inquiries, press, or just want to say what's up — reach out directly.
            No gatekeepers here.
          </p>
          <a
            href="mailto:gilgameshenterprisellc@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a84c] text-black font-bold rounded-full hover:bg-[#e8c96a] transition-colors text-sm"
          >
            gilgameshenterprisellc@gmail.com →
          </a>
          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600">
            <a href="https://socialmate.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">SocialMate</a>
            <a href="https://renewalmate.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">RenewalMate</a>
            <a href="https://socialmate.studio/guides" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">Guides</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#141414] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/683f1f5e568c642d78d49253/5710312f-f277-4f57-915f-2b24cf3fd095/G+E+%281%29.png?format=1500w"
              alt="Gilgamesh Enterprise"
              width={28}
              height={28}
              className="rounded-lg"
              unoptimized
            />
            <span className="text-xs text-gray-600 font-semibold">© 2026 Gilgamesh Enterprise LLC. All rights reserved.</span>
          </div>
          <div className="flex gap-5 text-xs text-gray-600">
            <span>Cheyenne, WY 82001</span>
            <span>·</span>
            <a href="mailto:gilgameshenterprisellc@gmail.com" className="hover:text-[#c9a84c] transition-colors">
              gilgameshenterprisellc@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
