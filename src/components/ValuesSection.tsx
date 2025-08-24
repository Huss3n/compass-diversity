'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Globe, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Respect',
    description: 'Treating everyone with dignity and understanding, honoring individual choices and personal autonomy.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Acting with honesty and transparency in all we do, maintaining trust through ethical practices.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Zap,
    title: 'Empowerment',
    description: 'Supporting participants to take control of their lives and make informed decisions about their care.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Globe,
    title: 'Inclusivity',
    description: 'Celebrating diversity and cultural differences, creating welcoming spaces for everyone.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Striving for the highest standards of care and service, continuously improving our support.',
    color: 'bg-purple-100 text-purple-600'
  }
]

export function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900">
            Our Core <span className="text-primary-600">Values</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            These values guide everything we do and shape how we deliver person-centred support to our participants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-secondary-50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-secondary-200"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-secondary-900">
              Experience Values-Driven Care
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              When you choose Compass Diversity, you're choosing a provider that puts your values, dignity, and independence at the center of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}