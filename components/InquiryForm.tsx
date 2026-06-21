'use client'

import { useState } from 'react'

const VERTICALS = [
  'Trades & Home Services (plumber, electrician, tree service, contractor…)',
  'Medical & Professional (doctor, dentist, law office…)',
  'Retail & Food (bakery, restaurant, shop, cafe…)',
  'Other',
]

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', businessName: '',
    businessType: '', currentSite: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-[#0f0f0f] border border-[#c9a84c]/30 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-black text-white mb-2">Got it — we'll be in touch.</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
          Expect a reply within 3–5 business days. If it's urgent, email directly at{' '}
          <a href="mailto:gilgameshenterprisellc@gmail.com" className="text-[#c9a84c]">
            gilgameshenterprisellc@gmail.com
          </a>.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your name *</label>
          <input
            className={inputClass}
            placeholder="Ron Johnson"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Business name *</label>
          <input
            className={inputClass}
            placeholder="RJ's Tree Care"
            value={form.businessName}
            onChange={e => set('businessName', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@yourbusiness.com"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone *</label>
          <input
            type="tel"
            className={inputClass}
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Business type</label>
        <select
          className={inputClass + ' cursor-pointer'}
          value={form.businessType}
          onChange={e => set('businessType', e.target.value)}
        >
          <option value="">Select your vertical…</option>
          {VERTICALS.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Current website <span className="text-gray-600 normal-case font-normal">(leave blank if none)</span>
        </label>
        <input
          className={inputClass}
          placeholder="https://yoursite.com"
          value={form.currentSite}
          onChange={e => set('currentSite', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Anything else? <span className="text-gray-600 normal-case font-normal">(optional)</span>
        </label>
        <textarea
          className={inputClass + ' resize-none h-28'}
          placeholder="Tell us a bit about your business and what you're looking for…"
          value={form.message}
          onChange={e => set('message', e.target.value)}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong — try emailing us directly at gilgameshenterprisellc@gmail.com</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 bg-[#c9a84c] text-black font-black rounded-xl hover:bg-[#e8c96a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
      >
        {status === 'sending' ? 'Sending…' : 'Send Inquiry →'}
      </button>

      <p className="text-center text-gray-600 text-xs">
        No obligation. We reply within 3–5 business days.
      </p>
    </form>
  )
}
