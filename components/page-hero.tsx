import Image from "next/image"
import { type ReactNode } from "react"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
}

export default function PageHero({ title, subtitle, backgroundImage, children }: PageHeroProps) {
  return (
    <div className="relative bg-brand-primary text-white">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
      )}
      <div className={`container mx-auto px-4 relative z-10 ${children ? 'pt-16 pb-12 md:pt-24 md:pb-16' : 'py-16 md:py-24'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
