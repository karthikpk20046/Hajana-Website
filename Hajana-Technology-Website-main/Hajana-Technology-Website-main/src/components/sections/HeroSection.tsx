'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { NeuralNetworkBackground } from '../ai-effects/NeuralNetworkBackground'
import { ParticleField } from '../ai-effects/ParticleField'
import { CircuitPattern } from '../ai-effects/CircuitPattern'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Effects */}
      <NeuralNetworkBackground className="text-cyan-400" />
      <CircuitPattern className="text-blue-400" opacity={0.05} />
      <ParticleField 
        particleCount={30} 
        colors={['rgba(6, 182, 212, 0.8)', 'rgba(59, 130, 246, 0.6)', 'rgba(147, 51, 234, 0.4)']} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>

      {/* Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* Left */}
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/20 mb-6">
            🚀 AI-Powered CRM Solutions Since 2014
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Leading{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Salesforce & AI
            </span>{' '}
            Cloud Experts
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 mb-4">
            Transforming Business Through{' '}
            <span className="text-cyan-400">Intelligent Technology</span>
          </p>

          <p className="text-lg text-white/60 mb-8 max-w-2xl">
            Your Strategic Partner in AI-Driven CRM Solutions, Machine Learning, and Cloud Innovation Since 2014
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Link href="/get-started">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Link href="/solutions">
                <Play className="w-5 h-5 mr-2" />
                View Our Services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl text-cyan-400 mb-1">150+</div>
              <div className="text-white/60 text-sm">Successful Clients</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl text-cyan-400 mb-1">10+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl text-cyan-400 mb-1">24/7</div>
              <div className="text-white/60 text-sm">Support</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl text-cyan-400 mb-1">200+</div>
              <div className="text-white/60 text-sm">AI Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Right - Hero Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1639060015191-9d83063eab2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Futuristic AI Dashboard"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 animate-bounce"></div>
        </motion.div>
      </div>

      
    </section>
  )
}