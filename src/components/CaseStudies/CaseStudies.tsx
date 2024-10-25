import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import projectsData from "./CaseStudies.json"

export default function CaseStudies() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-m font-regular text-teal-400 mb-2">
          Casos de estudio
        </p>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">Proyectos seleccionados</h1>
            <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
              Ver más casos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>

        
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-gray-900 text-white border-none rounded-3xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <CardTitle className="text-3xl mb-4">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-lg mb-6">
                      {project.description}
                    </CardDescription>
                    <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
                      Ver Caso de estudio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gray-800 flex items-center justify-center rounded-3xl">
                    <Image
                      src={project.imageUrl}
                      alt={`Imagen de ${project.title}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </article>
  )
}