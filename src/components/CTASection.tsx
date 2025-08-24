'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Start Your 
            <span className="block mt-2">Journey with Us?</span>
          </h2>
          
          <p className="text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards greater independence and community participation. Our team is ready to discuss your NDIS plan and how we can support your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-primary-100 text-sm">Speak directly with our support team</p>
              <a 
                href="tel:+61403093770" 
                className="block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-50 transition-colors"
              >
                040 3093770
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-primary-100 text-sm">Send us your questions anytime</p>
              <a 
                href="mailto:info@compassdiversity.com.au" 
                className="block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-50 transition-colors text-sm"
              >
                info@compassdiversity.com.au
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Book a Meeting</h3>
              <p className="text-primary-100 text-sm">Schedule a consultation</p>
              <Link 
                href="/contact" 
                className="block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-50 transition-colors"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-white/20"
          >
            <p className="text-primary-100 text-sm">
              <strong>Available 24/7</strong> • Emergency support • NDIS Registered Provider
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}