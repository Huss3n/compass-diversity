'use client'

import Link from 'next/link'
import { ArrowRight, Heart, Users, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { NDISLoveBadge } from './NDISLoveBadge'

const stats = [
  { icon: Users, label: 'Happy Participants', value: '500+' },
  { icon: Heart, label: 'Years of Care', value: '5+' },
  { icon: Shield, label: 'NDIS Registered', value: '100%' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-700 rounded-full blur-2xl"></div>
      </div>

      <div className="container-responsive relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>NDIS Registered Provider</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                Empowering Lives Through 
                <span className="text-primary-600 block mt-2">
                  Compassionate Care
                </span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed max-w-lg">
                Dedicated NDIS provider in Victoria, delivering person-centred supports that help you live independently, achieve your goals, and participate fully in your community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center space-x-2 text-center justify-center group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary text-center"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-sm text-secondary-500">
                <strong className="text-secondary-900">ABN:</strong> 89 680 930 796
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-secondary-600">Available 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900">Person-Centred Care</h3>
                    <p className="text-secondary-600">Supporting your unique journey</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-secondary-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">500+</div>
                    <div className="text-xs text-secondary-500">Happy Participants</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-secondary-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">100%</div>
                    <div className="text-xs text-secondary-500">NDIS Compliant</div>
                  </div>
                </div>
              </div>

              {/* NDIS Love Badge - Floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -right-6"
              >
                <NDISLoveBadge size="large" className="drop-shadow-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-secondary-200"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-900">{stat.value}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}