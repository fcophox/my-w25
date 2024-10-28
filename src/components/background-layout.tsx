import { ReactNode } from 'react'

export default function BackgroundLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Círculo con blur */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB] rounded-full opacity-50 blur-3xl"
        aria-hidden="true"
      />
      
      {/* Contenido de la página */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}