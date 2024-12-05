"use client"
import AvatarFcophox from "@/components/AvatarFcophox"
import { motion } from 'framer-motion'
import ImageSlider from './ImageSlider'


export default function Header() {
  return (
    <div className="bg-gray-950 text-white py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center py-32 my-16">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
              >
              <h1 className="text-4xl sm:text-7xl md:text-m lg:text-8xl mb-4 font-semibold">
               <span className="text-teal-500">Optimización</span> de experiencias digitales
              </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
              >
              <p className="text-lg text-gray-400 sm:text-m md:text-m lg:text-xl mb-4  ">
                Senior Product Designer <span className="text-teal-800">•</span> Consultor UX <span className="text-teal-800">•</span> Analista CRO
              </p>
            </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2">Hola, soy Francisco</h2>
            <p className="text-gray-400">Preparando mis redes sociales...</p>
          </div>
          <AvatarFcophox />
        </div>

      <ImageSlider/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12"> 
       
          </div>
        </div>

    </div>
    </div>
  )
}