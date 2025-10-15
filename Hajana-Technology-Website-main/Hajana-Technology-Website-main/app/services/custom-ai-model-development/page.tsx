'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function CustomAIPage() {
  const service = SERVICES.find(s => s.slug === 'custom-ai-model-development')!
  return <ServicePageTemplate service={service} />
}


