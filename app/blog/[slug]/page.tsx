import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, BLOG_POSTS } from '@/lib/blog-posts'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} — Gilgamesh Enterprise`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GCE" className="w-8 h-8 rounded-lg" />
            <span className="font-black text-white tracking-tight hidden sm:block">Gilgamesh Enterprise</span>
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-[#d4a017] text-sm transition-colors">← All posts</Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-[#d4a017] bg-[#d4a017]/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">{post.title}</h1>
          <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-[#d4a017]/40 pl-4">{post.excerpt}</p>
        </div>

        <div className="prose-custom space-y-5">
          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} className="text-xl font-black text-white mt-8 mb-2">{para.replace(/\*\*/g, '')}</h3>
            }
            if (para.includes('**')) {
              const parts = para.split(/(\*\*[^*]+\*\*)/)
              return (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {parts.map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-white font-bold">{part.replace(/\*\*/g, '')}</strong> : part
                  )}
                </p>
              )
            }
            return <p key={i} className="text-gray-300 leading-relaxed">{para}</p>
          })}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-xs text-gray-600 mb-4">Written by Joshua Bostic — Founder, Gilgamesh Enterprise LLC</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://socialmate.studio" className="text-xs font-semibold text-[#d4a017] hover:underline">SocialMate →</a>
            <a href="https://www.renewalmate.com" className="text-xs font-semibold text-[#d4a017] hover:underline">RenewalMate →</a>
            <Link href="/guides" className="text-xs font-semibold text-[#d4a017] hover:underline">Free Guides →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
