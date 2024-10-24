import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Services() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">Proyectos seleccionados</h1>
          <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
            Ver más casos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="text-xl text-gray-400 mb-12">
          Un vistazo a algunos de mis proyectos desde el año 2018 hasta hoy.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
            <Card className="bg-gray-950 text-white border border-gray-900 rounded-3xl p-6">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <CardTitle className="text-3xl mb-4">
                        Servicios en los que puedo ayudarte
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg mb-6">
                    The Joke Tax
                    </CardDescription>
                    <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
                        Revisa los servicios
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gray-800 flex items-center justify-center">
              


                  </div>
                </div>
              </CardContent>
            </Card>
      
        </div>
      </div>
    </article>
  )
}