'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function ServiceCloudPage() {
  const service = SERVICES.find(s => s.slug === 'service-cloud-automation')!
  return <ServicePageTemplate service={service} />
}


