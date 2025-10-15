import { NextRequest, NextResponse } from 'next/server'

interface ChatRequest {
  message: string
  sessionId?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { message, sessionId } = body

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Message is required'
        },
        { status: 400 }
      )
    }

    // Simple chatbot responses based on keywords
    const responses = {
      default: "Thank you for your question! Our AI specialists are here to help. Would you like to schedule a consultation to discuss your specific needs?",
      salesforce: "We're Salesforce certified partners with expertise in Sales Cloud, Service Cloud, Marketing Cloud, and custom Lightning components. How can we help optimize your Salesforce implementation?",
      ai: "Our AI solutions include Einstein AI, machine learning models, predictive analytics, and custom AI development. What type of AI solution are you interested in?",
      integration: "We specialize in MuleSoft integration, API development, and connecting Salesforce with your existing systems. What systems do you need to integrate?",
      pricing: "Our pricing is customized based on your specific requirements. Would you like to schedule a free consultation to discuss your project and get a personalized quote?",
      support: "We provide 24/7 support and maintenance for all our solutions. Our team is always available to help you succeed with your AI and Salesforce implementation.",
      hello: "Hello! Welcome to Hajana Technologies. I'm here to help you learn about our AI-powered Salesforce solutions. What can I assist you with today?",
      services: "We offer comprehensive services including Salesforce Sales Cloud, Einstein AI & Machine Learning, Service Cloud Automation, Marketing Cloud Intelligence, Custom AI Development, IoT & Real-time Analytics, Lightning Web Components, and MuleSoft Integration.",
      company: "Hajana Technologies has been a leading Salesforce and AI technology company since 2014. We've successfully completed 200+ projects for 150+ clients worldwide, with offices in California, USA and Bangalore, India."
    }

    const lowerMessage = message.toLowerCase()
    let response = responses.default

    // Enhanced keyword matching
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = responses.hello
    } else if (lowerMessage.includes('salesforce') || lowerMessage.includes('crm')) {
      response = responses.salesforce
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning') || lowerMessage.includes('einstein')) {
      response = responses.ai
    } else if (lowerMessage.includes('integration') || lowerMessage.includes('api') || lowerMessage.includes('mulesoft') || lowerMessage.includes('connect')) {
      response = responses.integration
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('quote')) {
      response = responses.pricing
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('maintenance')) {
      response = responses.support
    } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      response = responses.services
    } else if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you')) {
      response = responses.company
    }

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    return NextResponse.json({
      success: true,
      response: response,
      sessionId: sessionId || `session-${Date.now()}`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chatbot error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Sorry, I encountered an error. Please try again or contact our support team.'
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
