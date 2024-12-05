'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import projectsData from "./CaseStudies.json"


// Define the type for a project
type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}


export default function CaseStudies() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold">Proyectos seleccionados</h2>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Un vistazo a algunos de mis proyectos desde el año 2018 hasta hoy.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <AnimatedCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </article>
  )
}

function AnimatedCard({ project }: { project: Project }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      
      <Card key={project.id} className="bg-gray-900 hover:bg-gray-950 text-white rounded-3xl transition duration-200 border-2 border-gray-900 hover:border-gray-900">
        <a href={project.link} className="hover:text-teal-800 ">
          <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-6"> 
                  <CardTitle className="lg:text-3xl mb-4 sm:text-1xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-lg mb-12 hidden md:block">
                    {project.description}
                  </CardDescription>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-teal-800 rounded-full">
                    {/* <a href={project.link}> */}
                    Ver caso de estudio
                    {/* </a> */}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gray-800 flex items-center justify-center rounded-3xl overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`Imagen de ${project.title}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-3xl rounded-tl-sm hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
            </a>
        </Card>
    </motion.div>
  )
}