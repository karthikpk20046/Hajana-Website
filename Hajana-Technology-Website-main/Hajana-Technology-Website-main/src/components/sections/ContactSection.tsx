'use client'

import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'  // Make sure this is imported

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title + Button */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transform</span> Your Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Ready to harness the power of AI and Salesforce? Reach out and schedule your free consultation today.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Main Content: Contact Info + Follow Us */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column: Contact Info */}
          <div className="flex-1">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <ContactItem icon={<Phone className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-blue-500 to-cyan-500" title="+1 (669) 235-6845" subtitle="Mon - Fri, 9 AM - 6 PM PST" />
                <ContactItem icon={<Mail className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-green-500 to-teal-500" title="info@hajanatechnologies.com" subtitle="We'll respond within 24 hours" />
                <ContactItem icon={<MapPin className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-purple-500 to-pink-500" title="Global Offices" subtitle="Fresno, California, USA | Bangalore, Karnataka, India" />
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Follow Us */}
          <div className="flex-1">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 text-base sm:text-lg mb-4">
        Stay connected and updated with the latest insights and news from Hajana Technologies.
      </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/company/hajanatechnologies/" bg="bg-blue-600 hover:bg-blue-700" />
                  <SocialLink icon={<Twitter className="w-5 h-5" />} href="https://x.com/HajanaTechnolo1" bg="bg-blue-400 hover:bg-blue-500" />
                  <SocialLink icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/hajanatechnologies01/" bg="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" />
                  <SocialLink icon={<Facebook className="w-5 h-5" />} href="https://www.facebook.com/profile.php?id=61556587704967&sk=about" bg="bg-blue-800 hover:bg-blue-900" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Subcomponents ---
function ContactItem({ icon, iconBg, title, subtitle }: { icon: React.ReactNode; iconBg: string; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg}`}>{icon}</div>
      <div>
        <p className="text-gray-900 font-medium">{title}</p>
        {subtitle && <p className="text-gray-700 text-sm">{subtitle}</p>}
      </div>
    </div>
  )
}

function SocialLink({ icon, href, bg }: { icon: React.ReactNode; href: string; bg: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${bg} transition-colors duration-300`}>
      {icon}
    </a>
  )
}