"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType } from "embla-carousel"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CarouselProps {
  slides: {
    src: string
    title: string
    description?: string
    link?: string
    date?: string
    time?: string
  }[]
  className?: string
}

export function Carousel({
  slides,
  className,
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    loop: true
  })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
    align: "start",
    slidesToScroll: 1
  })
  
  // Autoplay ref to avoid state updates
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null)

  // Start autoplay
  const startAutoplay = React.useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      if (emblaMainApi) emblaMainApi.scrollNext()
    }, 7000)
  }, [emblaMainApi])

  // Stop autoplay on user interaction
  const stopAutoplay = React.useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])
  
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.scrollPrev()
      // Reset autoplay timer after manual navigation
      startAutoplay()
    }
  }, [emblaMainApi, startAutoplay])

  const scrollNext = React.useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.scrollNext()
      // Reset autoplay timer after manual navigation
      startAutoplay()
    }
  }, [emblaMainApi, startAutoplay])

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
      // Reset autoplay timer after manual navigation
      startAutoplay()
    },
    [emblaMainApi, emblaThumbsApi, startAutoplay]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi])

  const updateButtonDisabled = React.useCallback(() => {
    if (!emblaMainApi) return
    setPrevBtnDisabled(!emblaMainApi.canScrollPrev())
    setNextBtnDisabled(!emblaMainApi.canScrollNext())
  }, [emblaMainApi])

  React.useEffect(() => {
    if (!emblaMainApi) return

    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
    emblaMainApi.on('select', updateButtonDisabled)
    emblaMainApi.on('reInit', updateButtonDisabled)
    
    // Start autoplay when component mounts
    startAutoplay()
    
    // Setup interaction listeners
    emblaMainApi.on('pointerDown', stopAutoplay)
    emblaMainApi.on('pointerUp', startAutoplay)
    
    onSelect()
    updateButtonDisabled()
    
    return () => {
      if (!emblaMainApi) return
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      emblaMainApi.off('select', onSelect)
      emblaMainApi.off('reInit', onSelect)
      emblaMainApi.off('select', updateButtonDisabled)
      emblaMainApi.off('reInit', updateButtonDisabled)
      emblaMainApi.off('pointerDown', stopAutoplay)
      emblaMainApi.off('pointerUp', startAutoplay)
    }
  }, [emblaMainApi, onSelect, updateButtonDisabled, startAutoplay, stopAutoplay])

  if (!slides?.length) return null

  return (
    <div className={cn("relative", className)}>
      {/* Main Carousel */}
      <div 
        className="relative rounded-lg overflow-hidden"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div ref={emblaMainRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                className="relative flex-[0_0_100%] min-w-0 h-[550px] md:h-[500px] flex flex-col md:flex-row"
                key={index}
              >
                <div className="w-full md:w-1/2 h-[250px] md:h-full relative bg-brand-primary flex items-center justify-center">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain p-4"
                  />
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-full bg-brand-accent px-6 md:px-16 py-6 md:py-8 flex flex-col text-brand-primary">
                  <div className="w-full max-w-xl h-full overflow-y-auto md:overflow-visible md:mt-auto md:mb-auto md:h-auto">
                    <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">{slide.title}</h3>
                    {slide.description && (
                      <p className="text-sm md:text-base mb-4 md:mb-6 text-brand-text-muted">{slide.description}</p>
                    )}
                    <div className="space-y-2 mb-4 md:mb-6">
                      {slide.date && (
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{slide.date}</span>
                        </div>
                      )}
                      {slide.time && (
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{slide.time}</span>
                        </div>
                      )}
                    </div>
                    {slide.link && (
                      <div>
                        <Button
                          asChild
                          className="bg-brand-accent-orange hover:bg-brand-primary text-white"
                        >
                          <Link href={slide.link} target="_blank">
                            Register
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute left-4 right-4 top-[125px] md:top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            disabled={prevBtnDisabled}
            className={cn(
              "h-8 w-8 rounded-full bg-white/80 hover:bg-white pointer-events-auto transition-opacity shadow-sm",
              prevBtnDisabled && "opacity-50 cursor-not-allowed hover:bg-white/80"
            )}
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            disabled={nextBtnDisabled}
            className={cn(
              "h-8 w-8 rounded-full bg-white/80 hover:bg-white pointer-events-auto transition-opacity shadow-sm",
              nextBtnDisabled && "opacity-50 cursor-not-allowed hover:bg-white/80"
            )}
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="relative mt-4">
        <div ref={emblaThumbsRef} className="overflow-hidden px-3">
          <div className="flex gap-4 py-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => onThumbClick(index)}
                  className={cn(
                    "relative flex-[0_0_auto] w-[160px] md:w-[200px] cursor-pointer transition-all",
                    selectedIndex === index 
                      ? "opacity-100 ring-2 ring-brand-accent-orange ring-offset-2 rounded-lg" 
                      : "opacity-70 hover:opacity-100"
                  )}
                  type="button"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-brand-accent shadow-sm">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                </button>
              ))}
          </div>
        </div>
        {/* Thumbnail Navigation Hints */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}