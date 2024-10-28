"use client"
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import AvatarFcophox from "@/components/AvatarFcophox"


const projects = [
  { id: 1, image: '/images/Bio/brand1.png', alt: 'Brand 1' },
  { id: 2, image: '/images/Bio/brand2.png', alt: 'Brand 2' },
  { id: 3, image: '/images/Bio/brand3.png', alt: 'Brand 3' },
]

export default function Header() {
  return (
    <div className="bg-gray-950 text-white py-8 min-h-screen">
      <div className="max-w-7xl mx-auto mb-12 px-8 pt-9">

        <div className="text-center py-32 my-16">
          <h1 className="text-8xl font-semibold mb-4">
            Optimización de experiencias digitales
            </h1>
          <p className="text-xl text-gray-400">
            Senior Product Designer • Consultor UX • Analista CRO
            </p>
        </div>

       
      </div>

      <div className="max-w-4xl mx-auto mb-12 px-8 pt-9">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2">Hola, soy Francisco</h2>
            <p className="text-gray-400">Trabajando remoto de Santiago de Chile.</p>
          </div>
          <AvatarFcophox />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-800 overflow-hidden border-0 rounded-3xl">
              <div className="h-[390px] relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}