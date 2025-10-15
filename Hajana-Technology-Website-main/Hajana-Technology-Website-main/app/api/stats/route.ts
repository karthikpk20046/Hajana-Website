import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Company statistics - in production these would come from database
    const stats = {
      clients: 150,
      projects: 200,
      yearsExperience: 10,
      teamMembers: 25,
      satisfactionRate: 98,
      aiProjects: 200,
      salesforceImplementations: 150,
      countriesServed: 15,
      uptime: 99.9,
      responseTime: '< 24 hours',
      certifications: [
        'Salesforce Certified Partner',
        'Einstein AI Specialist', 
        'AWS Cloud Partner',
        'ISO 27001 Certified'
      ],
      technologies: [
        'Salesforce',
        'Einstein AI',
        'MuleSoft', 
        'Lightning Platform',
        'Machine Learning',
        'AWS',
        'Azure',
        'Google Cloud'
      ],
      industries: [
        'Healthcare',
        'Financial Services',
        'Manufacturing',
        'Retail',
        'Technology',
        'Education',
        'Non-profit',
        'Government'
      ]
    }

    return NextResponse.json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve statistics'
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
