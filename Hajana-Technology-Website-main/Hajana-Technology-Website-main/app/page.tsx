'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesShowcase } from '@/components/sections/ServicesShowcase'
import { TechnologyStack } from '@/components/sections/TechnologyStack'
import { ClientTestimonials } from '@/components/sections/ClientTestimonials'
import { TrustCredibility } from '@/components/sections/TrustCredibility'
import { ContactSection } from '@/components/sections/ContactSection'


// Lazy load ChatBot to improve initial page performance
const ChatBot = dynamic(
  () => import('@/components/interactive/ChatBot').then(mod => mod.ChatBot),
  { ssr: false } // no server-side rendering
)

export default function HomePage() {
  return (
    <div >
      <main >
        <HeroSection />
        <ServicesShowcase />
        <TechnologyStack />
        <ClientTestimonials />
        <TrustCredibility />
        <ContactSection />
      </main>

      {/* Floating ChatBot */}
      <div className="fixed bottom-4 right-4 z-50">
        <ChatBot />
      </div>
    </div>
  )
}