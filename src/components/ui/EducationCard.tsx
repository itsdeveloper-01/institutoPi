'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Definir los tipos de las props
interface EducationCardProps {
  title: string;
  image?: string;
  href: string;
  description?: string;
}

export default function EducationCard({ title, image, href, description }: EducationCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {/* Solo mostrar imagen si existe, no hay error, y se puede cargar */}
        {image && !imageError && (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        
        {/* Placeholder - se muestra si no hay imagen, hay error, o mientras carga */}
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center transition-opacity duration-300 ${
          !image || imageError || !imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 font-medium">{title}</p>
          </div>
        </div>
        
        {/* Overlay que aparece en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        )}
        <Link href={href}>
          <span className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors cursor-pointer">
            Conocer más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}