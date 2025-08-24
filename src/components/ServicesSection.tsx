'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Home, Clock, GraduationCap, Car, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with daily living activities including personal hygiene, dressing, and medication support.',
    features: ['Personal hygiene support', 'Meal preparation', 'Medication assistance', 'Health monitoring']
  },
  {
    icon: Users,
    title: 'Community Participation',
    description: 'Supporting social and recreational engagement to help you connect with your community.',
    features: ['Social activities', 'Recreation programs', 'Community events', 'Peer support groups']
  },
  {
    icon: Home,
    title: 'Household Tasks',
    description: 'Help with cleaning, cooking, and home maintenance to maintain a comfortable living environment.',
    features: ['House cleaning', 'Laundry services', 'Garden maintenance', 'Home organization']
  },
  {
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term accommodation and support services providing relief for primary carers.',
    features: ['Short-term stays', 'Emergency support', 'Planned respite', 'Family support']
  },
  {
    icon: GraduationCap,
    title: 'Life Skills Development',
    description: 'Building independence and confidence through skill-building programs and training.',
    features: ['Independent living skills', 'Financial literacy', 'Communication skills', 'Employment support']
  },
  {
    icon: Car,
    title: 'Transport Services',
    description: 'Safe and reliable travel to appointments, activities, and community participation.',
    features: ['Medical appointments', 'Social outings', 'Shopping trips', 'Accessible vehicles']
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900">
            Our <span className="text-primary-600">NDIS Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We offer a comprehensive range of NDIS-funded supports designed to meet your unique needs and help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-secondary-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-secondary-100">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Need a Custom Support Plan?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Every participant is unique. We work with you to create personalized support plans that align with your NDIS goals and budget.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Discuss Your Needs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}