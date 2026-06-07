'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-posts'

const CATEGORY_COLORS: Record<string, string> = {
  'Business':        'bg-amber-900/30 text-amber-400 border-amber-700/30',
  'Business Credit': 'bg-blue-900/30 text-blue-400 border-blue-700/30',
  'Founder Story':   'bg-purple-900/30 text-purple-400 border-purple-700/30',
  'Tech':            'bg-gray-800 text-gray-300 border-gray-600/30',
  'Mission':         'bg-yellow-900/30 text-yellow-400 border-yellow-700/30',
  'Marketing':       'bg-green-900/30 text-green-400 border-green-700/30',
  'Guides':          'bg-orange-900/30 text-orange-400 border-orange-700/30',
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category))).sort()]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
              active === cat
                ? 'bg-[#d4a017] text-black border-[#d4a017]'
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#d4a017]/40 hover:text-[#d4a017]'
            }`}
          >
            {cat}
            {cat !== 'All' && (
              <span className="ml-1.5 opacity-60">{posts.filter(p => p.category === cat).length}</span>
            )}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="space-y-5">
        {filtered.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="block bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#d4a017]/40 hover:bg-white/6 transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${CATEGORY_COLORS[post.category] ?? 'bg-gray-800 text-gray-300 border-gray-600/30'}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#d4a017] transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
            <p className="text-[#d4a017] text-xs font-semibold mt-4">Read more →</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-600 text-sm text-center py-12">No posts in this category yet.</p>
        )}
      </div>
    </div>
  )
}
