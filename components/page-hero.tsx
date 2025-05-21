import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <div className="relative bg-[#B05834] text-white">
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
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
