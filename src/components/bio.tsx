import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Bio() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diseño de productos desde UX
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Con más de 12 años dedicados a la gestión y desarrollo de proyectos digitales.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-2 ">
                    Acerca de mi
                </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="rounded-full">
                  <img src="/images/Brand/uxpm.svg" alt="" />
                </div>
                <p className="text-teal-800 ">
                  Certificado en Experiencia de usuario en la UX Alliance por Ayer Viernes Chile.
                </p>
              </div>
              <h3 className="text-lg font-semibold mb-6">
                Consultor en optimización de experiencia de usuario y usabilidad para productos digitales.
              </h3>
              <p className="text-gray-400 mb-8">
                Investigando y descubriendo la visión del negocio, la realidad del mercado y los voz de los usuario.
              </p>
              
              <Link href="https://www.linkedin.com/in/fcophox/" target="_blank" passHref>
                <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
                  Visita mi LinkedIn
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>

          </div>
      </div>
    </article>
  )
}