'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
// import { div } from 'framer-motion/client'

export default function Component() {
  const items = [
    { text: 'Investigación en Experiencias de usuario', color: 'bg-gray-900' },
    { text: 'Revisión de arquitectura de la información', color: 'bg-gray-900' },
    { text: 'Desarrollo de productos digitales', color: 'bg-gray-900' },
    { text: 'Diseño de interfaces', color: 'bg-gray-900' },
    { text: 'Facilitación de Talleres en UX', color: 'bg-gray-900' },
    { text: 'Implementación de Design System', color: 'bg-gray-900' },
    { text: 'Consultoría en IA e Innovación', color: 'bg-gray-900' }
  ]

  const totalHeight = items.length * 100 // 36px es la altura de cada elemento

  return (

    <div className="max-w-4xl mx-auto mb-12 px-4 pt-4">
      <div className="grid grid-cols-1 gap-8">
        <Card className="bg-gray-950 text-white border border-gray-900 rounded-3xl">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="space-y-2 p-12">
                <h2 className="text-3xl font-bold mb-4">Servicios en los que puedo ayudarte</h2>
                {/* <p className="text-xl text-gray-400">The Joke Tax</p> */}
                <Button className="bg-teal-400 hover:bg-gray-900 border-2 border-teal-400 border:bg-teal-500 text-gray-900 hover:text-teal-400 rounded-full">
                  <a href="/experience"> Revisa la experiencia</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-1/1 h-80 overflow-hidden relative text-center">
                <motion.div
                  animate={{
                    y: [-totalHeight, 40],
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: items.length * 1.4, // 1 segundo por elemento
                      ease: "linear"
                    }
                  }}
                  className="absolute"
                >
                  {[...items, ...items].map((item, index) => (
                    <motion.div
                      key={`${item.text}-${index}`}
                      className={`inline-block items-center justify-center rounded-full ${item.color} p-4 mb-4`}>
                      <span className="font-semibold whitespace-nowrap    
                      text-xs sm:text-lg md:text-m lg:text-lg 
                      ">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}