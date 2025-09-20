import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react'

const services = [
  'Personal Care',
  'Community Participation', 
  'Household Tasks',
  'Respite Care',
  'Life Skills Development',
  'Transport Services',
  'Assisted with SIL Accommodation',
  'Assistance with Hospital Discharge'
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Acknowledgment of Country */}
      <div className="bg-secondary-800 border-b border-secondary-700">
        <div className="container-responsive py-8">
          <div className="text-center max-w-4xl mx-auto">
            <h4 className="font-semibold text-lg mb-4 text-accent-400">Acknowledgment of Country</h4>
            <p className="text-secondary-300 leading-relaxed">
              We acknowledge the Traditional Owners and Custodians of Country throughout Australia and their continuing connection to land, waters and community. We pay our respects to them, their cultures, and Elders past and present.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CD</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Compass Diversity</h3>
                <p className="text-secondary-300 text-sm">NDIS Provider</p>
              </div>
            </div>
            <p className="text-secondary-300 leading-relaxed">
              Dedicated NDIS provider committed to delivering high-quality, person-centred supports that empower individuals to live independently.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-secondary-300">NDIS Registered Provider</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-secondary-300">ABN: 89 680 930 796</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+61403093770" 
                className="flex items-start space-x-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:text-primary-400" />
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-sm">040 3093770</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@compassdiversity.com.au" 
                className="flex items-start space-x-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 group-hover:text-primary-400" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm">info@compassdiversity.com.au</div>
                </div>
              </a>
              
              <div className="flex items-start space-x-3 text-secondary-300">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm">Victoria, Australia</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-secondary-300">
                <Clock className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Business Hours</div>
                  <div className="text-sm">Mon-Fri: 9AM-5PM</div>
                  <div className="text-sm">24/7 Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              © 2024 Compass Diversity Pty Ltd. All rights reserved. 
            </p>
            <div className="text-secondary-400 text-sm">
              <span>Empowering lives through inclusive support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}