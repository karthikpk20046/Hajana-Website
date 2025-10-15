'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../src/components/ui/button'
import { Input } from '../../src/components/ui/input'
import { Textarea } from '../../src/components/ui/textarea'
import { Card, CardContent } from '../../src/components/ui/card'
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar, Check } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    date: '',
    timeSlot: ''
  })

  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const generateTimeSlots = (date: string) => {
    const baseSlots = [
      '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
    ]
    const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
    const slots = baseSlots.map(time => {
      const pstDate = new Date(`${date}T${convertTo24Hour(time)}:00-08:00`)
      const localTime = pstDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: userTZ })
      return localTime
    })
    setAvailableSlots(slots)
  }

  const convertTo24Hour = (time: string) => {
    const [t, mer] = time.split(' ')
    let [h, m] = t.split(':').map(Number)
    if (mer === 'PM' && h !== 12) h += 12
    if (mer === 'AM' && h === 12) h = 0
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setFormData(prev => ({ ...prev, date, timeSlot: '' }))
    generateTimeSlots(date)
  }

  const handleSlotSelect = (slot: string) => {
    setFormData(prev => ({ ...prev, timeSlot: slot }))
  }

  const clearSelection = () => {
    setFormData(prev => ({ ...prev, date: '', timeSlot: '' }))
    setAvailableSlots([])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', company: '', phone: '', message: '', date: '', timeSlot: '' })
        setAvailableSlots([])
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'An error occurred while submitting the form' })
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div className="text-center mb-16 pt-[45px]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transform</span> Your Business
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
            Ready to harness the power of AI and Salesforce? Schedule your free consultation today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Schedule Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} required />
                    <InputField label="Email Address *" name="email" value={formData.email} onChange={handleInputChange} type="email" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Company Name" name="company" value={formData.company} onChange={handleInputChange} />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} type="tel" />
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Select Date *</label>
                    <Input type="date" name="date" value={formData.date} onChange={handleDateChange} required className="bg-white/70 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>

                  {/* Time Slots */}
                  <AnimatePresence>
                    {availableSlots.length > 0 && (
                      <motion.div key="slots" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="block text-sm text-gray-700 flex items-center gap-1">
                            Select Time Slot *
                            <div className="relative group">
                              <span className="text-gray-500 text-xs border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer">
                                i
                              </span>
                              <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-2 py-1 bottom-full left-1/2 -translate-x-1/2 mb-1 whitespace-nowrap shadow-md">
                                Times shown in your local timezone (auto-converted from PST)
                              </div>
                            </div>
                          </label>
                          {formData.timeSlot && (
                            <button type="button" onClick={clearSelection} className="text-sm text-gray-500 hover:text-red-500 transition-colors">
                              Clear Selection
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {availableSlots.map((slot, i) => (
                            <button key={i} type="button" onClick={() => handleSlotSelect(slot)} className={`flex items-center justify-center p-2 rounded-lg border transition-all duration-200 ${
                              formData.timeSlot === slot
                                ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-300'
                                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                            }`}>
                              {slot}
                              {formData.timeSlot === slot && <Check className="w-4 h-4 text-blue-600 ml-2" />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <TextareaField label="Project Details" name="message" value={formData.message} onChange={handleInputChange} rows={4} />

                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info + Socials */}
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

// --- Subcomponents ---

function InputField({ label, name, value, onChange, type = 'text', required = false }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-gray-700 mb-2">{label}</label>
      <Input id={name} name={name} type={type} required={required} value={value} onChange={onChange} className="bg-white/70 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
    </div>
  )
}

function TextareaField({ label, name, value, onChange, rows = 4 }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; rows?: number }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-gray-700 mb-2">{label}</label>
      <Textarea id={name} name={name} rows={rows} value={value} onChange={onChange} className="bg-white/70 border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
    </div>
  )
}

function ContactInfo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
        <CardContent className="p-6 space-y-4">
          <ContactItem icon={<Phone className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-blue-500 to-cyan-500" title="+1 (669) 235-6845" subtitle="Monday - Friday, 9 AM - 6 PM PST" />
          <ContactItem icon={<Mail className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-green-500 to-teal-500" title="info@hajanatechnologies.com" subtitle="We'll respond within 24 hours" />
          <ContactItem icon={<MapPin className="w-6 h-6 text-white" />} iconBg="bg-gradient-to-r from-purple-500 to-pink-500" title="Global Offices" subtitle="Fresno, California, USA | Bangalore, Karnataka, India" />
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/company/hajanatechnologies/" bg="bg-blue-600 hover:bg-blue-700" />
            <SocialLink icon={<Twitter className="w-5 h-5" />} href="https://x.com/HajanaTechnolo1" bg="bg-blue-400 hover:bg-blue-500" />
            <SocialLink icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/hajanatechnologies01/" bg="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" />
            <SocialLink icon={<Facebook className="w-5 h-5" />} href="https://www.facebook.com/profile.php?id=61556587704967&sk=about" bg="bg-blue-800 hover:bg-blue-900" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

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