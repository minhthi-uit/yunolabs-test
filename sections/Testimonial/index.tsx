'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Testimonial } from '@/types'
import { useState } from 'react'

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / 2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    console.log('Next slide:', currentSlide)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    console.log('Previous slide:', currentSlide)
  }

  return (
    <section className="py-[112px] paddingX bg-brown-light text-grey">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-titleMd md:text-heading font-medium text-center mb-12 md:mb-20">
          Don&apos;t just take our word for it
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <div key={index} className="w-full flex-none grid md:grid-cols-2 gap-6 px-4">
                  {testimonials.slice(index * 2, index * 2 + 2).map((testimonial, i) => (
                    <Card key={i} className="bg-transparent border-none shadow-none">
                      <CardContent className="pt-6 text-center">
                        <blockquote className="mb-6 md:mb-8 text-base md:text-body font-normal">
                          {testimonial.quote}
                        </blockquote>
                        <div className="">
                          <div className="font-medium text-body md:text-titleMd">{testimonial.name}</div>
                          <div className="text-base md:text-body font-normal">{testimonial.position}, {testimonial.company}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label='Previous slide'
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            onClick={prevSlide}
          >
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="47.5" y="48.2085" width="47" height="47" rx="23.5" transform="rotate(180 47.5 48.2085)" stroke="#6B6356" />
              <path d="M24 32.7085L25.41 31.2985L19.83 25.7085H32V23.7085H19.83L25.41 18.1185L24 16.7085L16 24.7085L24 32.7085Z" fill="#6B6356" />
            </svg>
            <span className="sr-only">Previous slide</span>
          </button>

          <button
            aria-label='Next slide'
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            onClick={nextSlide}
          >
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1.2085" width="47" height="47" rx="23.5" stroke="#6B6356" />
              <path d="M24 16.7085L22.59 18.1185L28.17 23.7085H16V25.7085H28.17L22.59 31.2985L24 32.7085L32 24.7085L24 16.7085Z" fill="#6B6356" />
            </svg>
            <span className="sr-only">Next slide</span>
          </button>

          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors',
                  currentSlide === index ? 'bg-grey' : 'bg-neutral-light'
                )}
                onClick={() => {
                  setCurrentSlide(index)
                  console.log('Go to slide:', index)
                }}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}