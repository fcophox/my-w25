"use client"
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const projects = [
  { id: 1, image: '/images/Bio/brand1.png', alt: 'Brand 1' },
  { id: 2, image: '/images/Bio/brand2.png', alt: 'Brand 2' },
  { id: 3, image: '/images/Bio/brand3.png', alt: 'Brand 3' },
  { id: 4, image: '/images/Bio/brand1.png', alt: 'Brand 4' },
  { id: 5, image: '/images/Bio/brand2.png', alt: 'Brand 5' },
  { id: 6, image: '/images/Bio/brand3.png', alt: 'Brand 6' },
]

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white py-8 min-h-screen">
 
      <div className="max-w-4xl mx-auto mb-12 px-8 pt-9">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.id} className="bg-gray-800 overflow-hidden border-0  rounded-3xl">
              <div className="aspect-square relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  layout="fill"
                  className="rounded-3xl"
                  />
              </div>
            </Card>
          ))}
          <Card className="bg-gray-800 overflow-hidden md:col-span-2 border-0 rounded-3xl">
            <div className="aspect-[2/1] relative">
              <Image
                src={projects[2].image}
                alt={projects[2].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </Card>
          {projects.slice(3, 5).map((project) => (
            <Card key={project.id} className="bg-gray-800 overflow-hidden border-0  rounded-3xl">
              <div className="aspect-square relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  layout="fill"
                  className="rounded-3xl"
                  />
              </div>
            </Card>
          ))}
          <Card className="bg-gray-800 overflow-hidden md:col-span-2 border-0 rounded-3xl">
            <div className="aspect-[2/1] relative">
              <Image
                src={projects[5].image}
                alt={projects[5].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </Card>

        </div>




      </div>
    </div>
  )
}