import { NextResponse } from 'next/server'
import { Resend } from 'resend'

console.log("🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 })
    }

    // Send email
    await resend.emails.send({
      from: "Alsyed Brothers <info@alsyedbrothers.com>",
      to: "info@alsyedbrothers.com",  
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 })
  }
}
