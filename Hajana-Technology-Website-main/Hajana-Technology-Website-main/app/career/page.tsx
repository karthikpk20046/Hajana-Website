'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cloud, Cpu, Rocket, Users } from 'lucide-react'

const JOBS = [
  { title: 'Salesforce Developer', location: 'Remote / Hyderabad', experience: '2+ years', slug: 'salesforce-developer', icon: <Cpu className="w-6 h-6 text-white" /> },
  { title: 'AI/ML Engineer', location: 'Remote / Bengaluru', experience: '3+ years', slug: 'ai-ml-engineer', icon: <Rocket className="w-6 h-6 text-white" /> },
  { title: 'Frontend Developer', location: 'Remote / Chennai', experience: '2+ years', slug: 'frontend-developer', icon: <Cloud className="w-6 h-6 text-white" /> },
  { title: 'Project Manager', location: 'Remote / Mumbai', experience: '5+ years', slug: 'project-manager', icon: <Users className="w-6 h-6 text-white" /> },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const openModal = (slug: string) => setSelectedJob(slug)
  const closeModal = () => setSelectedJob(null)

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-900 relative overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center min-h-[270px] px-4 text-center rounded-b-3xl shadow-sm">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
  Build The <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Future</span> With Us
</h1>
          <p className="text-lg sm:text-xl max-w-2xl text-center text-gray-700 mt-2">
            Join Hajana Technologies and shape AI, cloud, and Salesforce innovations.
          </p>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ 
            { title: 'Innovation', desc: 'Work on cutting-edge AI, cloud, and Salesforce solutions that transform businesses.', icon: <Cpu className="w-8 h-8 mx-auto mb-2 text-white" /> },
            { title: 'Growth', desc: 'Opportunities for personal and professional growth in a collaborative environment.', icon: <Rocket className="w-8 h-8 mx-auto mb-2 text-white" /> },
            { title: 'Collaboration', desc: 'Work with talented teams and industry experts to solve challenging problems.', icon: <Users className="w-8 h-8 mx-auto mb-2 text-white" /> },
            { title: 'Culture', desc: 'Inclusive, friendly, and innovative culture focused on employee satisfaction.', icon: <Cloud className="w-8 h-8 mx-auto mb-2 text-white" /> },
          ].map((item, idx) => (
            <motion.div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center"
              whileHover={{ y: -5, scale: 1.03 }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {JOBS.map((job, index) => (
            <motion.div key={index} className="group relative" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card
                onClick={() => openModal(job.slug)}
                className="h-full cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 mb-2">{job.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
                  <p className="text-gray-700 text-sm mb-1"><strong>Location:</strong> {job.location}</p>
                  <p className="text-gray-700 text-sm mb-4"><strong>Experience:</strong> {job.experience}</p>
                  <Button
                    onClick={() => openModal(job.slug)}
                    className="mt-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition duration-300"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Pop-up Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {JOBS.find(j => j.slug === selectedJob)?.title}
              </h2>
              <p className="mb-6 text-gray-600">Fill in your details to apply for this position.</p>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="First Name" className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="text" placeholder="Last Name" className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="email" placeholder="Email" className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="tel" placeholder="Phone Number" className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="text" placeholder="Years of Experience" className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <input type="file" accept=".pdf,.doc,.docx" className="p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600" required />
                <Button type="submit" className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition duration-300">
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-white/80 backdrop-blur-sm text-gray-900 py-16 px-4 text-center shadow-sm">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Ready to shape the future with us?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg sm:text-xl text-gray-700">
          Explore exciting opportunities at Hajana Technologies and help us build innovative AI and Salesforce solutions.
        </p>
      </section>
    </div>
  )
}