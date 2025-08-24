'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Calendar } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone', 'both']),
  ndisNumber: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const services = [
  'Personal Care',
  'Community Participation',
  'Household Tasks', 
  'Respite Care',
  'Life Skills Development',
  'Transport Services',
  'General Inquiry'
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitMessage('Thank you for your inquiry! We will contact you within 24 hours.')
    setIsSubmitting(false)
    reset()
    
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-secondary-900">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Ready to start your journey with Compass Diversity? Contact us today to discuss your NDIS support needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-semibold text-secondary-900">Send us a message</h2>
              </div>

              {submitMessage && (
                <div className="bg-accent-100 text-accent-700 p-4 rounded-lg mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                      placeholder="040 3093770"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      NDIS Number (Optional)
                    </label>
                    <input
                      {...register('ndisNumber')}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                      placeholder="Your NDIS number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="email"
                        className="mr-2 text-primary-600 focus:ring-primary-600"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="phone"
                        className="mr-2 text-primary-600 focus:ring-primary-600"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="both"
                        className="mr-2 text-primary-600 focus:ring-primary-600"
                      />
                      Both
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-600 transition-colors"
                    placeholder="Tell us about your support needs, goals, and any questions you have..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary inline-flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-primary-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <a href="tel:+61403093770" className="flex items-center space-x-4 hover:text-primary-200 transition-colors group">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-primary-100">040 3093770</div>
                  </div>
                </a>

                <a href="mailto:info@compassdiversity.com.au" className="flex items-center space-x-4 hover:text-primary-200 transition-colors group">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-primary-100">info@compassdiversity.com.au</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-primary-100">Victoria, Australia</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-primary-100">Mon-Fri: 9AM-5PM</div>
                    <div className="text-primary-200 text-sm">24/7 Emergency Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Emergency Support</h3>
              <p className="text-red-700 mb-4">
                If you need immediate assistance outside business hours, please call our emergency line.
              </p>
              <a 
                href="tel:+61403093770" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: 040 3093770</span>
              </a>
            </div>

            {/* Registration Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Registration Details</h3>
              <div className="space-y-3 text-secondary-600">
                <div className="flex justify-between">
                  <span className="font-medium">ABN:</span>
                  <span>89 680 930 796</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">NDIS Registration:</span>
                  <span>Approved Provider</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Service Area:</span>
                  <span>Victoria</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}