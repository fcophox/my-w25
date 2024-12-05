"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from '@/lib/utils'


interface Project {
  image: string
  alt: string
  title: string
  subtitle: string
  category: string
  link: string
}

interface HoverCardProps {
  project: Project
}

function HoverCard({ project }: HoverCardProps) {
  return (
    <Card className="bg-gray-800 overflow-hidden rounded-3xl transition duration-200 border-2 border-gray-900 hover:border-gray-900 group relative">
      <div className="aspect-[2/1] relative">
        <a href={project.link}  target="_blank" className="block w-full h-[19rem]">
          <Image
            src={project.image}
            alt={project.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-white text-lg">{project.subtitle}</p>
          </div>
        </a>
      </div>
    </Card>
  )
}

interface FilterableCardGridProps {
  projects: Project[]
}

export default function FilterableCardGrid({ projects }: FilterableCardGridProps) {
  const [activeCategory, setActiveCategory] = useState('Todos')

  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return <div>No hay proyectos para mostrar.</div>
  }

  const categories = ['Todos', ...new Set(projects.map(project => project.category))]

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="space-y-8 ">
      <Tabs defaultValue="Todos" onValueChange={setActiveCategory} className="bg-gray-900 rounded-3xl">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-3 lg:w-auto bg-gray-900 rounded-3xl text-gray-500">
          {categories.map((category) => (
            <TabsTrigger 
            key={category} 
            value={category} 
            className={cn(
              "flex-1 capitalize transition-all",
              "data-[state=active]:bg-gray-950 data-[state=active]:text-primary-foreground rounded-3xl"
              )}
            >
            {category}
          </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${
                index % 3 === 2 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <HoverCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

