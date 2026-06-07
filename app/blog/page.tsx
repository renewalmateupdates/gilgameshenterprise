import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Gilgamesh Enterprise',
  description: 'Business formation, bootstrapping, vibe coding, content marketing, and building an empire from nothing. Real talk from a solo founder.',
}

const CATEGORY_COLORS: Record<string, string> = {
  'Business':        'bg-amber-100 text-amber-700',
  'Business Credit': 'bg-blue-100 text-blue-700',
  'Founder Story':   'bg-purple-100 text-purple-700',
  'Tech':            'bg-gray-100 text-gray-700',
  'Mission':         'bg-yellow-100 text-yellow-700',
  'Marketing':       'bg-green-100 text-green-700',
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GCE" className="w-8 h-8 rounded-lg" />
            <span className="font-black text-white tracking-tight hidden sm:block">Gilgamesh Enterprise</span>
          </Link>
          <div className="flex gap-5 text-sm">
            <Link href="/ventures" className="text-gray-400 hover:text-[#d4a017] transition-colors">Ventures</Link>
            <Link href="/guides" className="text-gray-400 hover:text-[#d4a017] transition-colors">Guides</Link>
            <Link href="/blog" className="text-[#d4a017] font-semibold">Blog</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-[#d4a017] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Gilgamesh Blog</p>
          <h1 className="text-5xl font-black text-white tracking-tight mb-4">No fluff. Real talk.</h1>
          <p className="text-gray-400 text-lg">Business formation, bootstrapping, building with AI, and making it from nothing.</p>
        </div>

        <div className="space-y-6">
          {sorted.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#d4a017]/40 hover:bg-white/8 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#d4a017] transition-colors">{post.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
              <p className="text-[#d4a017] text-xs font-semibold mt-4">Read more →</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 mt-16">
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
