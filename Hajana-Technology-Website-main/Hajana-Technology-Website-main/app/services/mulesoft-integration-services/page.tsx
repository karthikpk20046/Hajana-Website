'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function MuleSoftPage() {
  const service = SERVICES.find(s => s.slug === 'mulesoft-integration-services')!
  return <ServicePageTemplate service={service} />
}


