"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType } from "embla-carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"
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
  }[]
  className?: string
}

export function Carousel({
  slides,
  className,
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
    align: "start",
    slidesToScroll: 1
  })
  
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  const scrollNext = React.useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
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
    
    onSelect()
    updateButtonDisabled()
    
    return () => {
      if (!emblaMainApi) return
      emblaMainApi.off('select', onSelect)
      emblaMainApi.off('reInit', onSelect)
      emblaMainApi.off('select', updateButtonDisabled)
      emblaMainApi.off('reInit', updateButtonDisabled)
    }
  }, [emblaMainApi, onSelect, updateButtonDisabled])

  if (!slides?.length) return null

  return (
    <div className={cn("relative", className)}>
      {/* Main Carousel */}
      <div className="relative rounded-lg overflow-hidden">
        <div ref={emblaMainRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                className="relative flex-[0_0_100%] min-w-0 h-[550px] md:h-[500px] flex flex-col md:flex-row"
                key={index}
              >
                <div className="w-full md:w-1/2 h-[250px] md:h-full relative bg-brand-accent flex items-center justify-center">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain p-4"
                  />
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-full bg-brand-primary px-6 md:px-16 py-6 md:py-8 flex flex-col text-white">
                  <div className="w-full max-w-xl h-full overflow-y-auto md:mt-auto md:mb-auto md:max-h-[80%]">
                    <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">{slide.title}</h3>
                    {slide.description && (
                      <p className="text-sm md:text-base mb-4 md:mb-6">{slide.description}</p>
                    )}
                    {slide.date && (
                      <div className="mb-4 md:mb-6">
                        <span className="text-sm bg-brand-accent-orange px-3 py-1 rounded-full">
                          {slide.date}
                        </span>
                      </div>
                    )}
                    {slide.link && (
                      <div>
                        <Button
                          asChild
                          className="bg-brand-accent-orange hover:bg-brand-accent-orange/90 text-white"
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