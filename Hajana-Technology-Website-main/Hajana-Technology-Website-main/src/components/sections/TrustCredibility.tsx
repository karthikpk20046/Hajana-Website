'use client'

import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Award, Shield, Users, CheckCircle, Star } from 'lucide-react'


const certifications = [
  { name: 'Salesforce Certified Partner', level: 'Gold', icon: '🏆' },
  { name: 'Einstein AI Specialist', level: 'Expert', icon: '🧠' },
  { name: 'AWS Cloud Partner', level: 'Advanced', icon: '☁️' },
  { name: 'ISO 27001 Certified', level: 'Security', icon: '🔒' }
];

const awards = [
  { year: '2024', title: 'Best AI Implementation', organization: 'TechAwards' },
  { year: '2023', title: 'Salesforce Partner of the Year', organization: 'Salesforce' },
  { year: '2023', title: 'Innovation Excellence', organization: 'CloudTech' },
  { year: '2022', title: 'Customer Success Leader', organization: 'CRM Excellence' }
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Chief AI Officer', expertise: 'Machine Learning & Einstein AI' },
  { name: 'Michael Rodriguez', role: 'Salesforce Architect', expertise: 'Lightning Platform & Integration' },
  { name: 'Priya Sharma', role: 'Data Science Lead', expertise: 'Analytics & Predictive Modeling' },
  { name: 'David Kim', role: 'Cloud Solutions Director', expertise: 'AWS & MuleSoft Integration' }
];

const clientLogos = [
  { name: 'Microsoft', logo: '🏢' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Google', logo: '🔍' },
  { name: 'IBM', logo: '💼' },
  { name: 'Oracle', logo: '🏛️' },
  { name: 'Cisco', logo: '🌐' }
];

export function TrustCredibility() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications, awards, and experienced team demonstrate our commitment to excellence
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Certifications & Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg text-gray-900 mb-2">{cert.name}</h4>
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700">
                    {cert.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl text-gray-900 mb-8">Trusted by Global Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:opacity-100 transition-opacity duration-300">
                <div className="text-4xl mb-2">{client.logo}</div>
                <span className="text-sm text-gray-600">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 text-center mb-8">Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline" className="text-xs">{award.year}</Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h4 className="text-lg text-gray-900 mb-1">{award.title}</h4>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Security & Compliance */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl mb-4">Enterprise-Grade Security</h3>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            SOC 2 Type II certified with enterprise-grade security measures to protect your sensitive data
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
