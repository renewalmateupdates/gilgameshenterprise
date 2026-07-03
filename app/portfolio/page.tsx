import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Joshua Bostic — Builder, Gilgamesh Enterprise',
  description: 'What Joshua Bostic has built: live SaaS products, partner ventures, and client websites — all self-taught, bootstrapped, and shipped solo. The full builder resume.',
}

const SHIPPED = [
  {
    name: 'SocialMate',
    role: 'Founder & Lead Builder',
    url: 'https://socialmate.studio',
    color: '#c9a84c',
    desc: 'Multi-platform social media scheduler and AI-powered Creator OS. 7 live platforms, 15+ AI tools, full Stripe billing, Supabase backend, Inngest job orchestration. Soft launched March 2026, shipping new features weekly. Built solo, nights and weekends, while working full-time.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Inngest', 'Gemini AI', 'Vercel'],
  },
  {
    name: 'RenewalMate',
    role: 'Founder & Lead Builder',
    url: 'https://renewalmate.com',
    color: '#2d9e6b',
    desc: 'Subscription and recurring-bill tracker. Rebuilt from scratch after the original technical partner went dark — reclaimed the domain, redesigned the brand, and relaunched with a working waitlist funnel.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    name: 'Hearthforge',
    role: 'Co-Founder — Web & Business',
    url: 'https://hearth-forge.com',
    color: '#e07b39',
    desc: '3D-printed product company, 50/50 partnership with Butch Chiappinelli. Joshua owns the web presence, brand site, business operations, and go-to-market strategy while Butch handles manufacturing and design.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    name: 'Gilgamesh Enterprise',
    role: 'Founder & Lead Builder',
    url: '/',
    color: '#c9a84c',
    desc: 'The holding company hub you\'re looking at right now. Migrated off Squarespace, rebuilt as a fast Next.js site on Vercel\'s free tier, dark/gold brand identity, full blog and guides system.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
]

const CLIENT_WORK = [
  {
    name: 'rjstreecare.com',
    client: "RJ's Tree Care — Ron, Dillsboro IN",
    url: 'https://rjstreecare.com',
    desc: '19-page conversion-focused local business site. Technical SEO with schema markup, real service-area pages targeting actual cities and zip codes, photo gallery of completed jobs, working contact pipeline wired straight to the owner\'s inbox via Zoho Mail. Live, indexed, and generating real leads.',
  },
]

const SKILLS = [
  { area: 'Frontend', items: 'React, Next.js (App Router), TypeScript, Tailwind CSS' },
  { area: 'Backend & Data', items: 'Supabase (PostgreSQL + RLS), API routes, server components' },
  { area: 'Infrastructure', items: 'Vercel deployment, Inngest background jobs, webhook architecture' },
  { area: 'Payments', items: 'Stripe subscriptions, webhooks, promo codes, usage-based billing' },
  { area: 'AI Integration', items: 'Google Gemini API — content generation, analysis, chat tooling' },
  { area: 'SEO & Growth', items: 'Schema.org markup, sitemaps, technical SEO, content strategy, i18n' },
]

const PRINCIPLES = [
  {
    title: 'Ship over polish-paralysis',
    desc: 'Real products in front of real users beat perfect products that never launch. Every venture here is live, not a concept deck.',
  },
  {
    title: 'Cost-aware by default',
    desc: 'Every feature gets evaluated against infrastructure cost before it gets built. Free-tier-first, quota-gated, sustainable at scale — not just at launch.',
  },
  {
    title: 'Self-taught, AI-accelerated',
    desc: 'No CS degree. Learned by building, broke things, fixed them, and now builds production SaaS with AI as a daily co-pilot — and is transparent about exactly how that works.',
  },
  {
    title: 'Build in public',
    desc: 'Full transparency about what works, what fails, and what gets rebuilt. No smoke, no vague promises — just shipped work you can go look at right now.',
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Gilgamesh Enterprise" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-sm tracking-wide text-[#c9a84c] hidden sm:block">GILGAMESH ENTERPRISE</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/#ventures" className="hover:text-[#c9a84c] transition-colors">Ventures</Link>
            <Link href="/storefront-studio" className="hover:text-[#c9a84c] transition-colors hidden sm:block">Storefront Studio</Link>
            <Link href="/portfolio" className="text-[#c9a84c] font-semibold">Portfolio</Link>
            <Link href="/faq" className="hover:text-[#c9a84c] transition-colors hidden sm:block">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4">The Builder Resume</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
            Joshua Bostic
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Self-taught, solo, and 100% bootstrapped. This is the actual record:
            live products, real client work, and the stack behind all of it.
            Not a deck. Not a pitch. Just what&apos;s shipped and running right now.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center text-xs font-semibold text-gray-500">
            {['Indiana', 'Wyoming LLC', 'Solo Bootstrapped', 'Self-Taught', 'Built with AI', 'Open to Contract Work'].map(t => (
              <span key={t} className="px-3 py-1.5 border border-[#1e1e1e] rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPED PRODUCTS */}
      <section className="py-16 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Live & Shipping</p>
            <h2 className="text-4xl font-black tracking-tight">Products built and running</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SHIPPED.map((p) => {
              const isInternal = p.url.startsWith('/')
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                        style={{ background: `${p.color}20`, color: p.color }}
                      >
                        {p.role}
                      </span>
                      <h3 className="text-xl font-black text-white group-hover:text-[#c9a84c] transition-colors">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map(s => (
                      <span key={s} className="text-[10px] font-semibold px-2 py-1 rounded-full border border-[#1e1e1e] text-gray-500">{s}</span>
                    ))}
                  </div>
                </>
              )
              const cls = "group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#2e2e2e] transition-all hover:-translate-y-0.5"
              return isInternal ? (
                <Link key={p.name} href={p.url} className={cls}>{inner}</Link>
              ) : (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section className="py-16 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Client Work</p>
            <h2 className="text-4xl font-black tracking-tight">Built for real businesses</h2>
          </div>
          <div className="flex flex-col gap-5">
            {CLIENT_WORK.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#c9a84c]/40 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2d9e6b]/10 text-[#2d9e6b] mb-2 inline-block">
                      Live Site
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-[#c9a84c] transition-colors">{c.name}</h3>
                    <p className="text-gray-500 text-sm">{c.client}</p>
                  </div>
                  <p className="text-[#c9a84c] text-xs font-semibold group-hover:underline">Visit site →</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-6 bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm">
              Looking for a website like this for your business? Visit{' '}
              <Link href="/storefront-studio" className="text-[#c9a84c] font-semibold hover:underline">Storefront Studio</Link>{' '}
              for pricing and process.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS / STACK */}
      <section className="py-16 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Toolbox</p>
            <h2 className="text-4xl font-black tracking-tight">What I build with</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((s) => (
              <div key={s.area} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6">
                <h3 className="font-black text-[#c9a84c] text-sm uppercase tracking-wider mb-2">{s.area}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-16 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">How I Work</p>
            <h2 className="text-4xl font-black tracking-tight">The approach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6">
                <h3 className="font-black text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Let&apos;s Build Something</p>
          <h2 className="text-3xl font-black tracking-tight mb-4">Open to contract work, partnerships, and the right cofounder conversation.</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            If you need a product built, a website that actually converts, or you&apos;re building
            something and think there&apos;s a fit — reach out directly. No gatekeepers here.
          </p>
          <a
            href="mailto:gilgameshenterprisellc@gmail.com?subject=Portfolio%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a84c] text-black font-bold rounded-full hover:bg-[#e8c96a] transition-colors text-sm"
          >
            gilgameshenterprisellc@gmail.com →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#141414] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Gilgamesh Enterprise" className="w-7 h-7 rounded-lg" />
            <span className="text-xs text-gray-600 font-semibold">© 2026 Gilgamesh Enterprise LLC. All rights reserved.</span>
          </div>
          <div className="flex gap-5 text-xs text-gray-600">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <Link href="/storefront-studio" className="hover:text-[#c9a84c] transition-colors">Storefront Studio</Link>
            <Link href="/faq" className="hover:text-[#c9a84c] transition-colors">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
