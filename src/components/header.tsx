"use client"
import { Card, CardContent } from "@/components/ui/card"
import AvatarFcophox from "@/components/AvatarFcophox"

export default function Header() {
  return (
    <div className="bg-gray-950 text-white py-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-12 px-8 pt-9">

        <div className="text-center py-32 my-16">
          <h1 className="text-7xl font-bold mb-4">
            Optimización de experiencias digitales
            </h1>
          <p className="text-xl text-gray-400">
            Senior Product Designer • Consultor UX • Analista CRO
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2">Hola, soy Francisco</h2>
            <p className="text-gray-400">Trabajando remoto de Santiago de Chile.</p>
          </div>
          <AvatarFcophox />
        </div>


        <div className="grid grid-cols-3 gap-4">
          
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-gray-900">
              <CardContent className="p-4 h-48 flex items-center justify-center">
                <span className="text-gray-600">Placeholder {i}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}