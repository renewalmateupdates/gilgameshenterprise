import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Gilgamesh's Guides — Free Business & Creator Playbooks",
  description: 'Free long-form guides on starting a business, building credit, marketing on zero budget, vibe coding with AI, and creator monetization. Written by Joshua Bostic.',
}

const GUIDES = [
  {
    vol: 'Vol. 1',
    title: 'Starting a Business From Scratch',
    desc: 'LLC formation, EIN, registered agents, first customer, co-founder splits, and building through hard times. The real process, no fluff.',
    chapters: 8,
    href: 'https://socialmate.studio/guides/starting-a-business',
    tag: 'Business Formation',
  },
  {
    vol: 'Vol. 2',
    title: 'Marketing on Zero Budget',
    desc: 'Content flywheels, platform seeding, community-first distribution, building in public, and staying consistent with no ad spend.',
    chapters: 8,
    href: 'https://socialmate.studio/guides/marketing-zero-budget',
    tag: 'Marketing',
  },
  {
    vol: 'Vol. 3',
    title: 'Business Credit & Legal',
    desc: 'DUNS numbers, PAYDEX scores, net-30 vendors, business licenses, tax deductions, LLC vs S-Corp, banking, and insurance for founders.',
    chapters: 7,
    href: 'https://socialmate.studio/guides/business-credit-legal',
    tag: 'Credit & Legal',
  },
  {
    vol: 'Vol. 4',
    title: 'Vibe Coding With AI',
    desc: 'How to build real software with AI assistance — the stack, the workflow, prompting, debugging, going live, and the mindset.',
    chapters: 7,
    href: 'https://socialmate.studio/guides/vibe-coding-with-ai',
    tag: 'Technology',
  },
  {
    vol: 'Vol. 5',
    title: 'Creator Monetization',
    desc: 'Why creators stay broke, tip jars, fan subscriptions, digital products, brand deals, affiliate marketing, and a 12-month $5K/month roadmap.',
    chapters: 8,
    href: 'https://socialmate.studio/guides/creator-monetization',
    tag: 'Monetization',
  },
  {
    vol: 'Vol. 6',
    title: 'Your First 30 Days on Social Media',
    desc: 'The One-Platform Rule, setting up profiles that convert, your first 10 posts, a consistency system, and getting your first 100 followers without spending a dollar.',
    chapters: 9,
    href: 'https://socialmate.studio/guides/first-30-days-social-media',
    tag: 'Social Media',
  },
  {
    vol: 'Vol. 7',
    title: 'Build Your Brand from Zero',
    desc: 'Finding your niche without pigeonholing yourself, telling your story, building a free visual identity, developing your voice, and turning your brand into opportunity.',
    chapters: 9,
    href: 'https://socialmate.studio/guides/build-your-brand-from-zero',
    tag: 'Personal Brand',
  },
  {
    vol: 'Vol. 8',
    title: 'From Side Hustle to Full-Time Creator',
    desc: 'Building while you work, your first $500 online, the creator revenue stack, when to actually quit your job, and the bridge income strategy.',
    chapters: 9,
    href: 'https://socialmate.studio/guides/side-hustle-to-full-time-creator',
    tag: 'Full-Time Creator',
  },
  {
    vol: 'Vol. 9',
    title: "The Content Creator's Business Guide",
    desc: 'Making it official with an LLC, taxes for creators, contracts that protect you, pricing your work, tools worth the cost, and brand deal negotiation.',
    chapters: 8,
    href: 'https://socialmate.studio/guides/content-creator-business',
    tag: 'Business',
  },
  {
    vol: 'Vol. 10',
    title: 'AI Tools for Creators: The Complete 2026 Handbook',
    desc: 'The full AI stack for 2026 — ideation, writing, visuals and video, scheduling, analytics, and the human thing no model can replace.',
    chapters: 9,
    href: 'https://socialmate.studio/guides/ai-tools-for-creators-2026',
    tag: 'AI Tools',
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GCE" className="w-8 h-8 rounded-lg" />
            <span className="font-black text-white tracking-tight hidden sm:block">Gilgamesh Enterprise</span>
          </Link>
          <div className="flex gap-5 text-sm">
            <Link href="/#ventures" className="text-gray-400 hover:text-[#d4a017] transition-colors hidden sm:block">Ventures</Link>
            <Link href="/guides" className="text-[#d4a017] font-semibold">Guides</Link>
            <Link href="/blog" className="text-gray-400 hover:text-[#d4a017] transition-colors">Blog</Link>
            <Link href="/faq" className="text-gray-400 hover:text-[#d4a017] transition-colors hidden sm:block">FAQ</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-[#d4a017] text-xs font-bold tracking-[0.3em] uppercase mb-3">Free Playbooks</p>
          <h1 className="text-5xl font-black text-white tracking-tight mb-4">Gilgamesh's Guides</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything I learned building from nothing — LLC formation, business credit, marketing, vibe coding, and creator monetization. Free forever. No email required.
          </p>
        </div>

        <div className="space-y-5">
          {GUIDES.map(g => (
            <a key={g.vol} href={g.href} target="_blank" rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#d4a017]/40 hover:bg-white/8 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#d4a017]">{g.vol}</span>
                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{g.tag}</span>
                    <span className="text-xs text-gray-600">{g.chapters} chapters</span>
                  </div>
                  <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#d4a017] transition-colors">{g.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-[#d4a017] text-lg flex-shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-2xl p-8 text-center">
          <p className="text-[#d4a017] font-black text-lg mb-2">These guides are free. Always.</p>
          <p className="text-gray-400 text-sm">
            Knowledge shouldn't be gatekept behind a course or a paywall.
            If these helped you, the best thing you can do is share them.
          </p>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">© 2026 Gilgamesh Enterprise LLC</span>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="https://socialmate.studio" className="hover:text-[#d4a017]">SocialMate</a>
            <a href="https://www.renewalmate.com" className="hover:text-[#d4a017]">RenewalMate</a>
            <Link href="/blog" className="hover:text-[#d4a017]">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
