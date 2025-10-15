'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function MarketingCloudPage() {
  const service = SERVICES.find(s => s.slug === 'marketing-cloud-intelligence')!
  return <ServicePageTemplate service={service} />
}


