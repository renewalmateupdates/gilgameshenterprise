'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// ── Data ─────────────────────────────────────────────────────────────
const VENTURES = [
  {
    name:     'SocialMate',
    url:      'https://socialmate.studio',
    tag:      'Creator OS',
    tagColor: '#D4A017',
    desc:     'Multi-platform social media scheduling and AI-powered content tools. What competitors charge $99/month for — we give for $5 or free.',
    external: true,
  },
  {
    name:     'RenewalMate',
    url:      'https://www.renewalmate.com',
    tag:      'FinTech',
    tagColor: '#2d9e6b',
    desc:     'Stop bleeding money on subscriptions and bills you forgot about. Track every recurring expense in one free dashboard — no paywall, ever.',
    external: true,
  },
  {
    name:     'Hearthforge',
    url:      'https://hearth-forge.com',
    tag:      '3D Products — Partnership',
    tagColor: '#e07b39',
    desc:     'Co-founded with Butch Chiappinelli. Modular 3D-printed desk rail systems for streamers and content creators. Matte black, precision-made, modular.',
    external: true,
  },
  {
    name:     "Gilgamesh's Guides",
    url:      'https://socialmate.studio/guides',
    tag:      'Free Education',
    tagColor: '#9b6dd6',
    desc:     'Free long-form guides on starting a business, building credit, marketing on zero budget, and vibe coding with AI. No paywall. Ever.',
    external: true,
  },
  {
    name:     'Grants Finder',
    url:      'https://socialmate.studio/grants',
    tag:      'Free Tool',
    tagColor: '#5bc0a8',
    desc:     'Search live U.S. federal grant opportunities from grants.gov — for individuals, small businesses, and nonprofits. Free, no account required.',
    external: true,
  },
  {
    name:     'Storefront Studio',
    url:      '/storefront-studio',
    tag:      'Web Services',
    tagColor: '#5b9bd5',
    desc:     'Conversion-focused, mobile-first websites for local businesses. Flat-fee builds starting at $1,500 — see it live at rjstreecare.com.',
    external: false,
  },
] as const

const PILLARS = [
  {
    title: 'No Gatekeeping',
    body:  'We only charge for what actually costs us money to run. Everything else is free — no artificial paywalls, no feature-locking for profit.',
  },
  {
    title: 'Real Tools',
    body:  "We build what competitors charge $99/month for and give it to people for $5 or free. Premium tools shouldn't be reserved for people who can already afford them.",
  },
  {
    title: 'Built in Public',
    body:  "Solo. Bootstrapped. No VC money. No bullshit. Every venture is built nights and weekends with full transparency about what works and what doesn't.",
  },
]

const NAV_LINKS = [
  { label: 'Ventures',         href: '#ventures',          hide: '' },
  { label: 'Storefront Studio', href: '/storefront-studio', hide: 'md' },
  { label: 'Portfolio',        href: '/portfolio',          hide: 'sm' },
  { label: 'Guides',           href: '/guides',             hide: 'sm' },
  { label: 'Blog',             href: '/blog',               hide: 'md' },
  { label: 'FAQ',              href: '/faq',                hide: 'sm' },
  { label: 'Contact',          href: '#contact',            hide: '' },
]

// ── Shared ease curve ─────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ── Sub-components ────────────────────────────────────────────────────

function GoldButton({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover="hovered"
      className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink font-semibold rounded-full text-sm overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
    >
      <span className="relative z-10">{children}</span>
      {/* shimmer sweep on hover */}
      <motion.div
        aria-hidden
        variants={{
          initial: { x: '-120%' },
          hovered: { x: '220%' },
        }}
        transition={{ duration: 0.45, ease: EASE }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)',
          width: '60%',
        }}
      />
    </motion.a>
  )
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-ash/75 font-semibold rounded-full text-sm hover:border-gold/30 hover:text-ash transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold/50 focus-visible:outline-offset-2"
    >
      {children}
    </a>
  )
}

function VentureCard({
  v,
  reduced,
}: {
  v: (typeof VENTURES)[number]
  reduced: boolean
}) {
  return (
    <motion.a
      href={v.url}
      target={v.external ? '_blank' : undefined}
      rel={v.external ? 'noopener noreferrer' : undefined}
      className="group relative block bg-surface border border-white/[0.06] rounded-2xl p-6 overflow-hidden cursor-pointer"
      variants={{
        hidden:  { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
      whileHover={
        reduced
          ? undefined
          : { y: -3, boxShadow: '0 0 36px rgba(212,160,23,0.09), 0 0 0 1px rgba(212,160,23,0.22)' }
      }
      transition={{ duration: 0.2 }}
    >
      {/* Gold top rail — CSS group-hover */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-t-2xl"
        style={{ backgroundColor: '#D4A017' }}
      />

      <div className="flex items-start justify-between mb-5">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${v.tagColor}1A`, color: v.tagColor }}
        >
          {v.tag}
        </span>
        <span className="text-[10px] font-bold text-emerald-400 border border-emerald-400/25 bg-emerald-400/[0.08] px-2.5 py-1 rounded-full">
          ● Live
        </span>
      </div>

      <h3 className="font-display font-bold text-[19px] text-ash mb-3 transition-colors duration-200 group-hover:text-gold leading-snug">
        {v.name}
      </h3>
      <p className="text-stone text-sm leading-relaxed">{v.desc}</p>
      <p className="mt-5 text-gold text-xs font-semibold">
        {v.external ? `Visit ${v.name}` : 'Learn more'} →
      </p>
    </motion.a>
  )
}

// ── Main component ────────────────────────────────────────────────────
export default function HomeClient() {
  const reduced = useReducedMotion() ?? false

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial:    { opacity: 0, y: 28 },
          animate:    { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: EASE, delay },
        }

  const scrollReveal = (delay = 0) =>
    reduced
      ? {}
      : {
          initial:    { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport:   { once: true, margin: '-70px' },
          transition: { duration: 0.65, ease: EASE, delay },
        }

  return (
    <div className="min-h-screen text-ash antialiased">

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-ink/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Gilgamesh Enterprise"
              width={36}
              height={36}
              className="rounded-lg"
              unoptimized
            />
            <span className="font-display font-bold text-[11px] tracking-[0.25em] text-gold uppercase hidden sm:block">
              Gilgamesh Enterprise
            </span>
          </Link>

          <div className="flex items-center gap-5 text-[13px] text-stone">
            {NAV_LINKS.map(({ label, href, hide }) => (
              <Link
                key={label}
                href={href}
                className={`relative hover:text-ash transition-colors duration-200 group ${
                  hide === 'md'
                    ? 'hidden md:block'
                    : hide === 'sm'
                    ? 'hidden sm:block'
                    : ''
                }`}
              >
                {label}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full origin-left"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">

        {/* Radial ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 62%, rgba(212,160,23,0.055) 0%, transparent 70%)',
          }}
        />

        {/* Hero content */}
        <div className="relative max-w-4xl w-full mx-auto text-center">

          <motion.div {...fadeUp(0.1)} className="mb-8">
            <Image
              src="/logo.png"
              alt="Gilgamesh Enterprise"
              width={96}
              height={96}
              className="mx-auto rounded-[22px]"
              unoptimized
            />
          </motion.div>

          <motion.p
            {...fadeUp(0.32)}
            className="font-display font-bold text-[10px] sm:text-[11px] tracking-[0.38em] text-gold uppercase mb-6"
          >
            Gilgamesh Enterprise LLC — Wyoming
          </motion.p>

          {/* Headline block — sweep overlaid on this container */}
          <div className="relative inline-block w-full overflow-hidden">
            <h1 className="font-display font-extrabold leading-[1.06] text-[clamp(36px,6.5vw,78px)]" style={{ letterSpacing: '-0.04em' }}>
              <motion.span {...fadeUp(0.52)} className="block text-ash">
                Where ambition
              </motion.span>
              <motion.span
                {...fadeUp(0.70)}
                className="block"
                style={{ color: '#D4A017' }}
              >
                meets action.
              </motion.span>
            </h1>

            {/* Gold sweep — slow repeating shimmer */}
            {!reduced && (
              <motion.div
                aria-hidden
                className="absolute inset-0 pointer-events-none z-10"
                initial={{ x: '-110%' }}
                animate={{ x: '215%' }}
                transition={{
                  delay:       1.5,
                  duration:    2.8,
                  ease:        EASE,
                  repeat:      Infinity,
                  repeatDelay: 6,
                }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(234,192,32,0.38) 50%, transparent 100%)',
                  width: '48%',
                }}
              />
            )}
          </div>

          <motion.p
            {...fadeUp(0.90)}
            className="mt-7 text-stone text-[17px] sm:text-xl max-w-xl mx-auto leading-relaxed"
          >
            A Wyoming LLC building ventures that tear down paywalls, cut gatekeepers,
            and put real tools in the hands of real people.
          </motion.p>

          <motion.div
            {...fadeUp(1.10)}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GoldButton href="#ventures">Explore the Empire</GoldButton>
            <OutlineButton href="#mission">Our Mission</OutlineButton>
          </motion.div>
        </div>

        {/* Scroll fade line */}
        {!reduced && (
          <motion.div
            {...fadeUp(1.55)}
            aria-hidden
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          </motion.div>
        )}
      </section>

      {/* ── VENTURES ────────────────────────────────────────────── */}
      <section id="ventures" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div {...scrollReveal()} className="mb-16 text-center">
            <p className="font-display font-bold text-[10px] tracking-[0.38em] text-gold uppercase mb-3">
              The Portfolio
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,48px)] text-ash tracking-tight">
              Our Ventures
            </h2>
            <p className="text-stone mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Every product we build follows one rule: if it doesn't cost us anything, it's free for you.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={reduced ? false : 'hidden'}
            whileInView={reduced ? undefined : 'visible'}
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden:   {},
              visible:  { transition: { staggerChildren: 0.09 } },
            }}
          >
            {VENTURES.map((v) => (
              <VentureCard key={v.name} v={v} reduced={reduced} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────────────── */}
      <section
        id="mission"
        className="py-28 px-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto">

          <motion.div {...scrollReveal()} className="text-center mb-4">
            <p className="font-display font-bold text-[10px] tracking-[0.38em] text-gold uppercase mb-3">
              Why We Exist
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,48px)] text-ash tracking-tight">
              The Mission
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div {...scrollReveal(0.12)} className="mt-12 mb-16 text-center">
            <blockquote className="font-display font-bold text-[clamp(18px,3vw,32px)] text-ash/88 leading-tight max-w-3xl mx-auto">
              &ldquo;Power to the people. Tear down gatekeeping walls.{' '}
              <span style={{ color: '#D4A017' }}>Build the door.</span>&rdquo;
            </blockquote>
            <p className="mt-5 text-stone text-sm">— Joshua Bostic, Founder &amp; CEO</p>
          </motion.div>

          {/* Pillars */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            initial={reduced ? false : 'hidden'}
            whileInView={reduced ? undefined : 'visible'}
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.10 } },
            }}
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={
                  reduced
                    ? {}
                    : {
                        hidden:  { opacity: 0, y: 36 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                      }
                }
                className="bg-surface border rounded-2xl p-7"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Gold rule */}
                <div
                  className="w-8 h-[2px] mb-6 rounded-full"
                  style={{ backgroundColor: '#D4A017' }}
                />
                <h3 className="font-display font-bold text-ash mb-3 text-[15px]">
                  {p.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-start">

            <motion.div {...scrollReveal()} className="flex-1 min-w-0">
              <p className="font-display font-bold text-[10px] tracking-[0.38em] text-gold uppercase mb-3">
                The Builder
              </p>
              <h2 className="font-display font-extrabold text-[clamp(26px,3.5vw,42px)] text-ash tracking-tight mb-5 leading-tight">
                Joshua Bostic
              </h2>
              <p className="text-stone text-sm leading-relaxed mb-7">
                Solo founder from Indiana. Self-taught. 100% bootstrapped. Started building SocialMate after
                trying to market another product and discovering how absurd social media tool pricing was.
                Built it nights and weekends with AI as a co-pilot. Now building an empire — one venture at a time.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-bright transition-colors group"
              >
                Full builder resume
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              {...scrollReveal(0.15)}
              className="sm:w-56 flex-shrink-0"
            >
              <div className="flex flex-wrap gap-2">
                {[
                  'Wyoming LLC',
                  'Solo Bootstrapped',
                  'Built with AI',
                  '100% Free Where Possible',
                  'Indiana',
                  'Nights & Weekends',
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-medium text-stone border rounded-full bg-surface"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 px-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...scrollReveal()}>
            <p className="font-display font-bold text-[10px] tracking-[0.38em] text-gold uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-display font-extrabold text-[clamp(26px,4vw,50px)] text-ash tracking-tight mb-4">
              Contact
            </h2>
            <p className="text-stone text-sm mb-10 max-w-xs mx-auto leading-relaxed">
              Partnership inquiries, press, or just want to say what's up — reach out directly.
              No gatekeepers here.
            </p>
            <GoldButton href="mailto:gilgameshenterprisellc@gmail.com" external>
              gilgameshenterprisellc@gmail.com
            </GoldButton>
            <div
              className="mt-8 flex justify-center gap-5 text-sm"
              style={{ color: 'rgba(107,96,72,0.65)' }}
            >
              <a
                href="https://socialmate.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                SocialMate
              </a>
              <span aria-hidden>·</span>
              <a
                href="https://www.renewalmate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                RenewalMate
              </a>
              <span aria-hidden>·</span>
              <a
                href="https://socialmate.studio/guides"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Guides
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer
        className="border-t py-8 px-6"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Gilgamesh Enterprise"
              width={24}
              height={24}
              className="rounded-md"
              unoptimized
            />
            <span
              className="text-xs font-medium"
              style={{ color: 'rgba(107,96,72,0.50)' }}
            >
              © 2026 Gilgamesh Enterprise LLC. All rights reserved.
            </span>
          </div>
          <div
            className="flex gap-5 text-xs"
            style={{ color: 'rgba(107,96,72,0.42)' }}
          >
            <span>Cheyenne, WY 82001</span>
            <span aria-hidden>·</span>
            <a
              href="mailto:gilgameshenterprisellc@gmail.com"
              className="hover:text-gold transition-colors"
            >
              gilgameshenterprisellc@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
