'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { COMPANY_STATS, COMPANY_VALUES, EXPERTISE_AREAS } from '@/lib/constants/services'
import { Globe, Users, Award, Target, Shield, Clock } from 'lucide-react'
import { Button } from '../../src/components/ui/button'

export default function AboutPage() {
  const iconMap: { [key: string]: any } = {
    Globe,
    Award,
    Target,
    Users,
    Shield,
    Clock,
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Hajana Technologies</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed max-w-4xl mx-auto text-base sm:text-lg">
                We, Hajana Technologies, are Salesforce Partners for the CRM platform. Since 2014, we've been on a mission to connect the world through transformative technology solutions. We’re not just a service provider; we’re your trusted partner in navigating the dynamic digital landscape.
              </p>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-base sm:text-lg">
                We provide contemporary Salesforce CRM solutions for industries like manufacturing, retail, automobiles, life sciences, and more. Our journey is fueled by a customer-centric philosophy – we aim to exceed expectations with an unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  To be a recognized leader in Salesforce implementation and integration, enabling businesses to thrive in the digital era. We envision a future where organizations harness Salesforce to achieve operational excellence, foster customer loyalty, and accomplish strategic goals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  As a trusted Salesforce partner, our mission is to empower businesses with the full potential of Salesforce solutions. We deliver tailored implementations that drive efficiency, innovation, and overall success.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Success Stats */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Our Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat, index) => {
              const IconComponent = iconMap[stat.icon]
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-4 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-700 text-sm sm:text-base">{stat.label}</div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Hajana Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon]
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-4 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 text-base sm:text-lg">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Our Expertise</h2>
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {EXPERTISE_AREAS.map((skill, index) => (
                <motion.div key={index} className="bg-white/70 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <div className="text-gray-900 font-medium text-sm sm:text-base">{skill}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business with Salesforce & AI?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our growing list of successful clients and experience the power of professional Salesforce and AI solutions.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => window.location.href = '/contact'}
                className="!px-6 !py-2 !text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}