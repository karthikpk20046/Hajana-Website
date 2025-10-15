'use client'

import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate'
import { SERVICES } from '@/lib/constants/services'

export default function IoTAnalyticsPage() {
  const service = SERVICES.find(s => s.slug === 'iot-and-real-time-analytics')!
  return <ServicePageTemplate service={service} />
}


