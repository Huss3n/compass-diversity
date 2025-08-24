import Image from 'next/image'

interface NDISLoveBadgeProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function NDISLoveBadge({ size = 'medium', className = '' }: NDISLoveBadgeProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} rounded-full overflow-hidden`}>
      <Image
        src="/img/ilovendis.webp"
        alt="I Love NDIS - Supporting the National Disability Insurance Scheme"
        width={96}
        height={96}
        className="w-full h-full object-cover"
        priority={size === 'large'}
      />
    </div>
  )
}