'use client'

import { ArrowLeft, CheckCircle, Star, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Service } from '@/types'

interface ServicePageTemplateProps {
  service: Service
}

const iconMap: { [key: string]: any } = {
  TrendingUp,
  Users,
  Star,
  Shield,
  Clock,
  Award
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales by 37%',
      description: 'Our clients see an average increase in sales performance within the first quarter'
    },
    {
      icon: Users,
      title: 'Better Customer Relationships',
      description: '360-degree view of customer interactions and preferences'
    },
    {
      icon: Star,
      title: 'AI-Powered Insights',
      description: 'Einstein AI provides predictive analytics and recommendations'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Page Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/services" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300">
              <ArrowLeft className="w-6 h-6" />
              <span className="text-xl font-semibold">Back to Services</span>
            </Link>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl p-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  {service.title}
                </h1>
              </div>
              <p className="text-white/80 text-lg">{service.description}</p>
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {service.detailedDescription}
                </p>
                <div className="flex gap-4">
                  <Button className={`bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                    Get Started
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-xl border border-gray-700">
                    View Demo
                  </Button>
                </div>
              </div>
              <div className={`bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-2xl p-8 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">37%</div>
                  <div className="text-white/80 text-lg">Average Performance Increase</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose This Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl p-4 mx-auto mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Performance?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Let's discuss how {service.title} can transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className={`bg-gradient-to-r ${service.color} text-white px-12 py-4 text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity duration-300 shadow-2xl`}>
                Schedule a Free Consultation
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-semibold rounded-xl border border-gray-700">
                Download Brochure
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
