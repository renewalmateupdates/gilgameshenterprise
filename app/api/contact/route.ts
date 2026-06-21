import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, phone, businessName, businessType, currentSite, message } = body

    if (!name || !email || !phone || !businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Storefront Studio <onboarding@resend.dev>',
      to: 'gilgameshenterprisellc@gmail.com',
      replyTo: email,
      subject: `New Storefront Studio Inquiry — ${businessName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#c9a84c;margin-bottom:4px;">New Website Inquiry</h2>
          <p style="color:#888;font-size:13px;margin-top:0;">via gilgameshenterprise.com/storefront-studio</p>
          <hr style="border:none;border-top:1px solid #222;margin:20px 0;" />
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#c9a84c;">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Business</td><td style="padding:8px 0;font-weight:600;">${businessName}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Vertical</td><td style="padding:8px 0;">${businessType || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Current site</td><td style="padding:8px 0;">${currentSite || 'None'}</td></tr>
          </table>
          ${message ? `<hr style="border:none;border-top:1px solid #222;margin:20px 0;" /><p style="color:#888;font-size:13px;margin-bottom:6px;">Message</p><p style="white-space:pre-wrap;margin:0;">${message}</p>` : ''}
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
