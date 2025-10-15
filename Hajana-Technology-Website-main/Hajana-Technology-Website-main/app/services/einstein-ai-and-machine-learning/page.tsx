'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function EinsteinAIPage() {
  const service = SERVICES.find(s => s.slug === 'einstein-ai-and-machine-learning')!
  return <ServicePageTemplate service={service} />
}


