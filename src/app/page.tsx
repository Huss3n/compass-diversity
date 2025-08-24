import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection' 
import { AboutSection } from '@/components/AboutSection'
import { ValuesSection } from '@/components/ValuesSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  )
}