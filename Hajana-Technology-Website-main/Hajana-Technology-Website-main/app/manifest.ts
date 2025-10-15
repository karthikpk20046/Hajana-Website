import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hajana Technologies - AI-Powered Salesforce Solutions',
    short_name: 'Hajana Tech',
    description: 'Leading Salesforce and AI technology company transforming businesses through intelligent solutions since 2014.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'technology', 'ai', 'salesforce'],
    lang: 'en-US',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
