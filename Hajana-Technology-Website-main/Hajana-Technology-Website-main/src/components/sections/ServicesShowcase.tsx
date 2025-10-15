'use client'

import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants/services'
import { FaCloud, FaBrain, FaUsers, FaChartBar, FaMicrochip, FaBolt, FaCode, FaLink } from 'react-icons/fa'
import Link from 'next/link'

const ICON_MAP: Record<string, React.ElementType> = {
  'salesforce-sales-cloud': FaCloud,
  'einstein-ai-and-machine-learning': FaBrain,
  'service-cloud-automation': FaUsers,
  'marketing-cloud-intelligence': FaChartBar,
  'custom-ai-model-development': FaMicrochip,
  'iot-and-real-time-analytics': FaBolt,
  'lightning-web-components': FaCode,
  'mulesoft-integration-services': FaLink,
}

export function ServicesShowcase() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.slug]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full bg-white shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-4 sm:p-6 rounded-xl hover:scale-105">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 sm:mb-4 text-white text-xl sm:text-3xl transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* SEE ALL Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/services">
              <button className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                SEE ALL SERVICES
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}