'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function LightningWebComponentsPage() {
  const service = SERVICES.find(s => s.slug === 'lightning-web-components')!
  return <ServicePageTemplate service={service} />
}


