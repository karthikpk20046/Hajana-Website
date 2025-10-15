import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, company, phone, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are required fields'
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address'
        },
        { status: 400 }
      )
    }

    // Log the contact form submission (for demo purposes)
    console.log('Contact form submission received:', {
      name,
      email,
      company: company || 'Not provided',
      phone: phone || 'Not provided',
      timestamp: new Date().toISOString()
    })

    // For production, integrate with:
    // - Email service (SendGrid, EmailJS, Netlify Forms)
    // - Database (Supabase, Firebase)
    // - CRM (Salesforce, HubSpot)

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      data: {
        submissionId: `HT-${Date.now()}`,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.'
      },
      { status: 500 }
    )
  }
}
