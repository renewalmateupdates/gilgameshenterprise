import Link from 'next/link'
import type { Metadata } from 'next'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Storefront Studio | Local Business Websites by Gilgamesh Enterprise',
  description: 'Conversion-focused, mobile-first websites for local businesses. Flat-fee builds starting at $1,500. Built by the team behind SocialMate. See our live work at rjstreecare.com.',
}

const TIERS = [
  {
    name: 'Trades & Home Services',
    range: '$1,800 – $3,500',
    examples: 'Plumbers, electricians, welders, mechanics, tree services, contractors, landscapers',
    features: [
      'Multi-page conversion-focused build',
      'Mobile-first, fast-loading design',
      'Local SEO + schema markup baked in',
      'Working contact/quote pipeline wired to your inbox',
      'Service area pages targeting your real cities and zip codes',
      'Photo gallery of your actual work',
    ],
    highlight: false,
  },
  {
    name: 'Medical & Professional',
    range: '$3,500 – $7,000+',
    examples: 'Doctors, dentists, specialists, law offices, professional practices',
    features: [
      'Everything in Trades & Home Services',
      'Higher-trust design language for patient/client confidence',
      'Booking and scheduling integration ready',
      'Insurance, patient info, and credentials pages',
      'Expanded content and SEO strategy for competitive local markets',
      'Priority build timeline and revisions',
    ],
    highlight: true,
  },
  {
    name: 'Retail & Food',
    range: '$1,500 – $3,000',
    examples: 'Bakeries, small retail shops, restaurants, cafes, local makers',
    features: [
      'Conversion-focused, visual-first build',
      'Menu or product showcase pages',
      'Online ordering and social links ready to wire in',
      'Mobile-first, fast-loading design',
      'Local SEO + schema markup baked in',
      'Photo gallery built around your actual products',
    ],
    highlight: false,
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery call',
    desc: 'A real conversation about your business, your customers, and what your current site (or lack of one) is costing you. No sales pitch, just a straight assessment of what you actually need.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'Your site gets built on a fast, modern stack (the same one powering SocialMate and our other live products). Mobile-first, conversion-focused, and wired with the SEO fundamentals most cheap builds skip entirely.',
  },
  {
    step: '03',
    title: 'Launch + handoff',
    desc: 'Your site goes live on your own domain with a working contact pipeline that actually lands leads in your inbox. You get full ownership, not a rented template you lose access to if you stop paying someone else.',
  },
  {
    step: '04',
    title: 'Ongoing care (optional)',
    desc: 'Hosting, maintenance, content updates, new blog posts, and SEO upkeep for $50–$150/month if you want it handled for you. No contract lock-in, cancel anytime.',
  },
]

export default function StorefrontStudioPage() {
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
            <Link href="/storefront-studio" className="text-[#c9a84c] font-semibold">Storefront Studio</Link>
            <Link href="/blog" className="hover:text-[#c9a84c] transition-colors hidden sm:block">Blog</Link>
            <Link href="/faq" className="hover:text-[#c9a84c] transition-colors hidden sm:block">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4">A Gilgamesh Enterprise Service</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
            Websites that bring<br /><span className="text-[#c9a84c]">your business calls.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Conversion-focused, mobile-first websites for local businesses. Flat fee.
            No retainers, no agency markup, no template you don&apos;t own. Built by the
            same team shipping SocialMate to thousands of creators.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rjstreecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded-full hover:bg-[#e8c96a] transition-colors text-sm"
            >
              See Live Work — rjstreecare.com →
            </a>
            <a
              href="#inquire"
              className="px-8 py-3 border border-[#2a2a2a] text-gray-300 font-semibold rounded-full hover:border-[#c9a84c]/40 transition-colors text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Baseline</p>
            <h2 className="text-4xl font-black tracking-tight">What every build includes</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every Storefront Studio site, regardless of vertical, ships with the fundamentals
              most cheap website builds skip entirely.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Multi-page build', desc: 'Home, services, about, gallery, contact, and more — not a single scrolling page pretending to be a website.' },
              { title: 'Technical SEO baked in', desc: 'Schema.org markup, geo meta tags, and per-page descriptions so search engines actually understand and rank your business.' },
              { title: 'Working lead pipeline', desc: 'A contact form that lands real emails in your real inbox — not a form that quietly goes nowhere.' },
              { title: 'Conversion design', desc: 'Sticky call-to-action bars, clear quote flows, and multiple contact touchpoints designed to turn visitors into calls.' },
              { title: 'Mobile-first', desc: 'Most of your customers are finding you on their phone. Your site is built for that reality first, desktop second.' },
              { title: 'Real local content', desc: 'Service-area pages and content written around the actual cities, zip codes, and search terms your customers use.' },
            ].map((f) => (
              <div key={f.title} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6">
                <h3 className="font-black text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Flat-Fee Pricing</p>
            <h2 className="text-4xl font-black tracking-tight">One price. No surprises.</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Pricing is grounded in real, delivered scope — benchmarked against rjstreecare.com,
              a live, full-featured site currently bringing in real leads for a real local business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-7 border ${
                  t.highlight
                    ? 'bg-[#13110a] border-[#c9a84c]/40 lg:-translate-y-2'
                    : 'bg-[#0f0f0f] border-[#1e1e1e]'
                }`}
              >
                {t.highlight && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#c9a84c]/15 text-[#c9a84c] uppercase tracking-wider">
                    Highest Trust Premium
                  </span>
                )}
                <h3 className="text-xl font-black text-white mt-3">{t.name}</h3>
                <p className="text-3xl font-black text-[#c9a84c] mt-2">{t.range}</p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">{t.examples}</p>
                <div className="mt-6 flex flex-col gap-3">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <span className="text-[#c9a84c] text-sm mt-0.5">✓</span>
                      <p className="text-gray-400 text-sm leading-snug">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-7 text-center">
            <h3 className="font-black text-white text-lg mb-2">Want it handled after launch too?</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              Optional ongoing care plan: <span className="text-[#c9a84c] font-bold">$50–$150/month</span> for
              hosting, maintenance, content updates, new blog posts, and SEO upkeep. No contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Proof, Not Promises</p>
            <h2 className="text-4xl font-black tracking-tight">See it live</h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* Live client */}
            <a
              href="https://rjstreecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[#c9a84c]/40 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2d9e6b]/10 text-[#2d9e6b] mb-3 inline-block">
                    Live Client Site
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#c9a84c] transition-colors">
                    rjstreecare.com
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">RJ&apos;s Tree Care — Dillsboro, IN</p>
                </div>
                <p className="text-[#c9a84c] text-sm font-semibold group-hover:underline">
                  Visit the live site →
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-5 max-w-2xl">
                A real, full-featured local business site: 19 pages, technical SEO with schema markup,
                service-area pages targeting real cities and zip codes, a photo gallery of real completed
                jobs, and a contact pipeline that lands every lead directly in the owner&apos;s inbox.
                This is the caliber of site every Storefront Studio client gets, not a stripped-down demo.
              </p>
            </a>

            {/* Demo sites */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://dentist-demo-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#c9a84c]/40 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 shrink-0">
                    Demo — Medical
                  </span>
                  <p className="text-[#c9a84c] text-xs font-semibold group-hover:underline shrink-0">View demo →</p>
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#c9a84c] transition-colors mb-1">
                  Maple &amp; Birch Family Dentistry
                </h3>
                <p className="text-gray-500 text-xs mb-3">Family dental practice — services, team, booking flow</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Multi-page dental site with services, meet-the-team, patient resources, insurance info, and a conversion-focused contact flow.
                </p>
              </a>

              <a
                href="https://bakery-demo-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#c9a84c]/40 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
                    Demo — Food &amp; Bakery
                  </span>
                  <p className="text-[#c9a84c] text-xs font-semibold group-hover:underline shrink-0">View demo →</p>
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#c9a84c] transition-colors mb-1">
                  Wren &amp; Wheat Bakehouse
                </h3>
                <p className="text-gray-500 text-xs mb-3">Artisan bakery and café — 17 pages, menu, ordering, blog</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Full-featured bakery site with menu, custom cakes, catering, seasonal specials, order-ahead, gallery, and 3 editorial blog posts.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-4xl font-black tracking-tight">From call to launch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6">
                <span className="text-[#c9a84c]/50 text-3xl font-black">{p.step}</span>
                <h3 className="font-black text-white mt-2 mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquire" className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Get Started</p>
            <h2 className="text-3xl font-black tracking-tight mb-4">Tell us about your business</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fill this out and we&apos;ll look it over. No obligation, no sales pitch.
              If it&apos;s a good fit we&apos;ll set up a quick call.
            </p>
          </div>
          <InquiryForm />
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
            <Link href="/faq" className="hover:text-[#c9a84c] transition-colors">FAQ</Link>
            <a href="mailto:gilgameshenterprisellc@gmail.com" className="hover:text-[#c9a84c] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
