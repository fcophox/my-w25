'use client'

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const images = [
  { src: "./images/Bio/brand1.png", alt: "Mobile usage" },
  { src: "./images/Bio/brand2.png", alt: "Analytics dashboard" },
  { src: "./images/Bio/brand3.png", alt: "Code editor" },
]

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 660 && emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="">
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden bg-gray-800 border-0 rounded-3xl">
            <div className="relative aspect-[4/3] w-full h-[390px] rounded-3xl">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Card className="overflow-hidden mx-2 bg-gray-800 border-0 rounded-3xl">
                  <div className="relative aspect-[4/3] w-full h-[360px] rounded-3xl">
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full mx-1 transition-all duration-300 ease-in-out",
                index === selectedIndex ? "bg-teal-800" : "bg-gray-900"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

