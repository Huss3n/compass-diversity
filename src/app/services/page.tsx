import { ServicesSection } from '@/components/ServicesSection'
import { CTASection } from '@/components/CTASection'

export const metadata = {
  title: 'NDIS Services - Compass Diversity',
  description: 'Comprehensive NDIS services including personal care, community participation, respite care, life skills development, and transport services in Victoria.',
}

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <ServicesSection />
      <CTASection />
    </div>
  )
}