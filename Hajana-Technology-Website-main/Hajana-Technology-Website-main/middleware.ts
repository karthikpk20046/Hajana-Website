// ./src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {Redis} from '@upstash/redis'

/**
 * Initialize Upstash Redis (serverless-friendly)
 * Create a free Upstash Redis account and set REDIS_REST_URL and REDIS_REST_TOKEN in .env
 */
const redis = new Redis({
  url: process.env.REDIS_REST_URL!,
  token: process.env.REDIS_REST_TOKEN!,
})

/**
 * Helper to get user IP
 */
function getIP(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'anonymous'
}

/**
 * Rate limit function
 */
async function isRateLimited(key: string, limit = 10, windowSec = 60) {
  const count = await redis.incr(key)
  if (count === 1) {
    // Set expiration on first request
    await redis.expire(key, windowSec)
  }
  return count > limit
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { method } = request

  // Apply rate limiting only to API routes
  if (pathname.startsWith('/api/')) {
    const ip = getIP(request)
    let limit = 10
    let window = 60 // seconds

    if (pathname.includes('/contact')) {
      limit = 5
      window = 300
    } else if (pathname.includes('/chat')) {
      limit = 20
      window = 60
    }

    const key = `rate:${ip}:${pathname}`

    if (await isRateLimited(key, limit, window)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Handle preflight OPTIONS requests for CORS
    if (method === 'OPTIONS') {
      const response = NextResponse.json({}, { status: 204 })
      response.headers.set('Access-Control-Allow-Origin', '*')
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      return response
    }
  }

  // Default response with security headers
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  // CORS headers for API
  if (pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }

  return response
}

export const config = {
  matcher: ['/api/:path*'],
}