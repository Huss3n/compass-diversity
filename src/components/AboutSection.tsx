'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>About Compass Diversity</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900">
                Committed to 
                <span className="text-primary-600 block mt-2">Your Independence</span>
              </h2>

              <p className="text-lg text-secondary-600 leading-relaxed">
                Compass Diversity is a dedicated NDIS provider based in Victoria, committed to delivering high-quality, person-centred supports that empower individuals to live independently, achieve their goals, and participate fully in their communities.
              </p>

              <p className="text-secondary-600 leading-relaxed">
                We pride ourselves on cultural understanding, compassionate care, and a strong focus on building trust with participants and their families. Our approach celebrates diversity and ensures that every individual receives support that respects their unique background and values.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Start Your Journey
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Our Services
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-secondary-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-secondary-600 font-medium">Participants Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-secondary-600 font-medium">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission, Vision & Registration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-900">Our Mission</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                To provide inclusive and tailored disability support services that respect individual values, embrace diversity, and promote independence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-900">Our Vision</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                A community where people of all abilities are supported to live with dignity, choice, and opportunity.
              </p>
            </div>

            {/* Registration Info */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">NDIS Registered</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">ABN:</span>
                  <span>89 680 930 796</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Registration:</span>
                  <span>NDIS Approved Provider</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Victoria, Australia</span>
                </div>
              </div>
            </div>

            {/* Cultural Diversity Highlight */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent-500">
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="w-8 h-8 text-accent-600" />
                <h4 className="text-xl font-semibold text-secondary-900">Cultural Understanding</h4>
              </div>
              <p className="text-secondary-600">
                We celebrate diversity and provide culturally sensitive support that respects your background, values, and beliefs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}