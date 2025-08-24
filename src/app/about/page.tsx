import { AboutSection } from '@/components/AboutSection'
import { ValuesSection } from '@/components/ValuesSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'

export const metadata = {
  title: 'About Us - Compass Diversity NDIS Provider',
  description: 'Learn about Compass Diversity, a dedicated NDIS provider in Victoria committed to delivering person-centred disability support services with cultural understanding.',
}

export default function AboutPage() {
  return (
    <div className="pt-32">
      <AboutSection />
      <ValuesSection />
      <WhyChooseUsSection />
    </div>
  )
}