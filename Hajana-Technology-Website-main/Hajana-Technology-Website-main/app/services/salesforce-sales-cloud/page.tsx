'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function SalesforceSalesCloudPage() {
  const service = SERVICES.find(s => s.slug === 'salesforce-sales-cloud')!
  return <ServicePageTemplate service={service} />
}