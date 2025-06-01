'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/hero1.png',
    alt: 'Instituto Piaget - Instalaciones principales'
  },
  {
    src: '/images/hero2.png',
    alt: 'Estudiantes en el aula'
  },
  {
    src: '/images/hero3.png',
    alt: 'Actividades escolares'
  }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto avance de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Cambiar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Imágenes del carrusel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      
      {/* Controles del carrusel */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-300"
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-300"
          aria-label="Siguiente slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Indicadores de slides */}
      <div className="absolute bottom-5 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}