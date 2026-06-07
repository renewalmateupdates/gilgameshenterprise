'use client'
import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    category: 'About Gilgamesh Enterprise',
    questions: [
      {
        q: 'What is Gilgamesh Enterprise?',
        a: 'Gilgamesh Enterprise LLC is a Wyoming-registered holding company founded by Joshua Bostic. It\'s the parent entity for a growing portfolio of ventures - SocialMate, RenewalMate, and Hearthforge. The mission is simple: build tools that tear down paywalls and put real power in people\'s hands.',
      },
      {
        q: 'Who runs Gilgamesh Enterprise?',
        a: 'Joshua Bostic - solo founder, self-taught developer, former Walmart deli worker, current tree service employee. Building the empire nights and weekends with AI as a co-pilot.',
      },
      {
        q: 'Where is Gilgamesh Enterprise based?',
        a: 'Joshua is based in Indiana. The LLC is registered in Wyoming - the best state for small businesses: no state income tax, strong privacy laws, low fees.',
      },
      {
        q: 'Is Gilgamesh Enterprise venture-backed?',
        a: '100% bootstrapped. No VC money. No investors. No outside pressure. Everything is built from revenue and free infrastructure.',
      },
    ],
  },
  {
    category: 'The Ventures',
    questions: [
      {
        q: 'What is SocialMate?',
        a: 'SocialMate (socialmate.studio) is a social media scheduling platform that supports 7 live platforms including Bluesky, TikTok, LinkedIn, Discord, and more. Free plan available. Pro is $5/month - compared to competitors charging $18-99/month.',
      },
      {
        q: 'What is RenewalMate?',
        a: 'RenewalMate (renewalmate.com) is a subscription and bill tracker. The average person wastes $273/month on recurring expenses they forgot about. RenewalMate shows you exactly where your money is going - free forever.',
      },
      {
        q: 'What is Hearthforge?',
        a: 'Hearthforge (hearth-forge.com) is a 3D printing product company co-founded with Butch Chiappinelli. First product: a modular desk rail system for streamers and content creators. Matte black, expandable, premium. Physical prints + STL files.',
      },
      {
        q: 'What is Gilgamesh\'s Guides?',
        a: 'Free long-form guides covering business formation, building credit, marketing on zero budget, vibe coding with AI, and creator monetization. No paywall. No email required to read. Free because they don\'t cost anything to run.',
      },
    ],
  },
  {
    category: 'Philosophy & Mission',
    questions: [
      {
        q: 'Why is so much of this free?',
        a: 'Simple rule: if it doesn\'t cost Gilgamesh Enterprise anything to run, it\'s free for you. We only charge when we have to. No artificial paywalls. No feature-locking for profit.',
      },
      {
        q: 'What does "Power to the people. Build the door." mean?',
        a: 'Most tools gatekeep. They charge hundreds of dollars for features that cost pennies to run. We build the alternatives - premium quality, accessible prices or free. The "door" is the way in for people who were priced out.',
      },
      {
        q: 'Can I work with or partner with Gilgamesh Enterprise?',
        a: 'Reach out at gilgameshenterprisellc@gmail.com. Joshua is open to: partnerships, client websites, equity conversations, and collaborations that make sense. Not open to: spam, vague "let\'s chat" requests with no substance.',
      },
      {
        q: 'Do you offer web development services?',
        a: 'Yes. Joshua builds local business websites - conversion-focused, mobile-first, flat-fee. Stack: Next.js, Tailwind, Vercel. Typical cost: well under what an agency charges. Get in touch to discuss.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GCE" className="w-8 h-8 rounded-lg" />
            <span className="font-black text-white tracking-tight hidden sm:block">Gilgamesh Enterprise</span>
          </Link>
          <div className="flex gap-5 text-sm">
            <Link href="/#ventures" className="text-gray-400 hover:text-[#d4a017] transition-colors">Ventures</Link>
            <Link href="/guides" className="text-gray-400 hover:text-[#d4a017] transition-colors">Guides</Link>
            <Link href="/blog" className="text-gray-400 hover:text-[#d4a017] transition-colors">Blog</Link>
            <Link href="/faq" className="text-[#d4a017] font-semibold">FAQ</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-[#d4a017] text-xs font-bold tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h1 className="text-5xl font-black text-white tracking-tight mb-4">Questions answered.</h1>
          <p className="text-gray-400">Straight answers. No corporate speak.</p>
        </div>

        <div className="space-y-10">
          {FAQS.map(section => (
            <div key={section.category}>
              <h2 className="text-xs font-bold text-[#d4a017] uppercase tracking-[0.2em] mb-4">{section.category}</h2>
              <div className="space-y-2">
                {section.questions.map((item, i) => {
                  const key = `${section.category}-${i}`
                  const isOpen = openItem === key
                  return (
                    <div key={key} className="bg-white/4 border border-white/8 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                      >
                        <span className="font-bold text-white text-sm">{item.q}</span>
                        <span className={`text-[#d4a017] text-lg shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-2xl p-8 text-center">
          <p className="text-white font-bold mb-2">Still have a question?</p>
          <p className="text-gray-400 text-sm mb-5">Reach out directly. Joshua reads every email.</p>
          <a href="mailto:gilgameshenterprisellc@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#d4a017] text-black font-bold rounded-full text-sm hover:bg-[#e8c96a] transition-colors">
            gilgameshenterprisellc@gmail.com →
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">© 2026 Gilgamesh Enterprise LLC</span>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="https://socialmate.studio" className="hover:text-[#d4a017]">SocialMate</a>
            <a href="https://www.renewalmate.com" className="hover:text-[#d4a017]">RenewalMate</a>
            <a href="https://hearth-forge.com" className="hover:text-[#d4a017]">Hearthforge</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
