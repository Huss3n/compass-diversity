'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Heart, Award, Headphones } from 'lucide-react'
import { NDISLoveBadge } from './NDISLoveBadge'

const reasons = [
  {
    icon: Shield,
    title: 'NDIS Registered & Compliant',
    description: 'Fully registered NDIS provider with all necessary certifications and quality standards.'
  },
  {
    icon: Clock,
    title: '24/7 Support Available',
    description: 'Round-the-clock support when you need it most, including emergency assistance.'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Qualified professionals with years of experience in disability support services.'
  },
  {
    icon: Heart,
    title: 'Person-Centred Approach',
    description: 'Every support plan is tailored to your unique needs, goals, and preferences.'
  },
  {
    icon: Award,
    title: 'Cultural Competency',
    description: 'Understanding and respecting diverse cultural backgrounds and individual values.'
  },
  {
    icon: Headphones,
    title: 'Responsive Communication',
    description: 'Clear, timely communication with participants, families, and support coordinators.'
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900">
            Why Choose <span className="text-primary-600">Compass Diversity</span>?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We stand out through our commitment to quality, cultural understanding, and genuine care for every participant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <h3 className="text-2xl font-semibold text-secondary-900">
                  Trusted by Participants and Families
                </h3>
                <NDISLoveBadge size="medium" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary-600">500+</div>
                  <div className="text-secondary-600">Happy Participants</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary-600">5+</div>
                  <div className="text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary-600">100%</div>
                  <div className="text-secondary-600">NDIS Compliant</div>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6">
                <blockquote className="text-lg text-secondary-700 italic mb-4">
                  "The support we've received has been life-changing. The team truly understands our cultural needs and treats us with such respect and dignity."
                </blockquote>
                <div className="text-secondary-600 font-medium">— NDIS Participant Family</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}