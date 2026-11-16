import Link from 'next/link'
import { shopUrl } from '@/lib/shop'
import type { Metadata } from 'next'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Storefront Studio | Local Business Websites by Gilgamesh Enterprise',
  description: 'Conversion-focused, mobile-first websites for local businesses. Flat-fee builds from $1,000, with a free sample first. Built by the team behind SocialMate. See our live work at rjstreecare.com.',
}

const TIERS = [
  {
    name: 'Starter',
    range: '$1,000',
    examples: 'For shops that need to be found and look legit, fast. Live in about 7 days.',
    features: [
      'Up to 5 pages (home, services, about, gallery, contact)',
      'Mobile-first, fast-loading design',
      'Contact form that lands in your inbox',
      'Basic local SEO and Google schema markup',
      'Linked to your Google Business listing',
      '1 round of changes',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    range: '$2,000',
    examples: 'For businesses that want more calls from more towns. Live in about 10 days.',
    features: [
      'Everything in Starter',
      'Up to 10 pages',
      'A dedicated page for each service you offer',
      'Service-area page for the towns you cover',
      'Reviews section and photo gallery of your work',
      '2 rounds of changes',
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    range: '$3,000+',
    examples: 'The full build, like rjstreecare.com. Priced to what you need. Live in 2 to 3 weeks.',
    features: [
      'Everything in Standard',
      '15 to 20 pages',
      'Blog with 4 to 6 starter posts written for local search',
      'Town-by-town SEO for your whole service area',
      'Extras like booking, menus, emergency pages or quote flows',
      '3 rounds of changes',
    ],
    highlight: false,
  },
]

const CARE = [
  {
    name: 'Care',
    price: '$49/month',
    desc: 'Hosting, SSL, security updates, keeping your site online, and up to 30 minutes of small edits each month. We check in monthly so your hours and services stay current.',
  },
  {
    name: 'Growth',
    price: '$99/month',
    desc: 'Everything in Care, plus a new blog post every month, photo and specials updates, a monthly Google Business post, and a quarterly report on how your site is doing.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Free sample',
    desc: 'Tell us about your business with the form below. We build a free sample of your site so you can see exactly what you would get before you pay anything.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'Half up front, then we build your site on the same fast, modern stack that powers SocialMate. Mobile-first, conversion-focused, with the SEO basics most cheap builds skip.',
  },
  {
    step: '03',
    title: 'Launch and handoff',
    desc: 'The other half at launch. Your site goes live on your own domain with a contact form that lands leads in your inbox. You own it, not a rented template you lose if you stop paying.',
  },
  {
    step: '04',
    title: 'Ongoing care (optional)',
    desc: 'Care ($49/month) or Growth ($99/month) keeps it hosted, updated and growing. No contract lock-in, cancel anytime, and you keep your site and domain.',
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
            <a href={shopUrl('nav')} className="hover:text-[#c9a84c] transition-colors">Shop</a>
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
            same team behind SocialMate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rjstreecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded-full hover:bg-[#e8c96a] transition-colors text-sm"
            >
              See Live Work: rjstreecare.com →
            </a>
            <a
              href="/examples"
              className="px-8 py-3 border border-[#c9a84c]/50 text-[#c9a84c] font-semibold rounded-full hover:border-[#c9a84c] transition-colors text-sm"
            >
              See Example Sites
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
              { title: 'Multi-page build', desc: 'Home, services, about, gallery, contact, and more, not a single scrolling page pretending to be a website.' },
              { title: 'Technical SEO baked in', desc: 'Schema.org markup, geo meta tags, and per-page descriptions so search engines actually understand and rank your business.' },
              { title: 'Working lead pipeline', desc: 'A contact form that lands real emails in your real inbox, not a form that quietly goes nowhere.' },
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
              Pricing is grounded in real, delivered scope, benchmarked against rjstreecare.com:
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE.map((c) => (
              <div key={c.name} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-7">
                <h3 className="font-black text-white text-lg">{c.name} <span className="text-[#c9a84c]">{c.price}</span></h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-7">
            <h3 className="font-black text-white text-lg mb-2">About domains</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your domain is registered in your name and billed at cost, not marked up. A .com usually runs
              $10 to $25 a year, though some premium names cost more. We&apos;ll check availability and suggest
              options, but we can&apos;t guarantee a specific name, and registrars set the prices. Builds are half
              up front and half at launch.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 border-t border-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">How It Works</p>
            <h2 className="text-4xl font-black tracking-tight">From sample to launch</h2>
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
              If it&apos;s a good fit, we&apos;ll build you a free sample and send you the link.
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
            <a href={shopUrl('footer')} className="hover:text-[#c9a84c] transition-colors">Shop</a>
            <a href="mailto:gilgameshenterprisellc@gmail.com" className="hover:text-[#c9a84c] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
