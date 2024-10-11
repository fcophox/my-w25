'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronRight } from "lucide-react"

export function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[990px] px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-teal-500" />
            <span className="text-xl font-bold">Nombre</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:text-teal-500">Sobre mí</Link></li>
              <li><Link href="#" className="hover:text-teal-500">Casos de estudio</Link></li>
              <li><Link href="#" className="hover:text-teal-500">Artículos</Link></li>
            </ul>
          </nav>
          <Button className="bg-teal-500 hover:bg-teal-600">Contacto</Button>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="mb-10 text-5xl font-bold leading-tight">Optimización de<br />experiencias digitales</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-3xl bg-gray-800" />
            ))}
          </div>
        </section>

        {/* UX Design Section */}
        <section className="py-20">
          <h2 className="mb-6 text-3xl font-bold">Diseño de productos desde UX</h2>
          <p className="mb-8 text-gray-400">Descripción del proceso de diseño y metodología empleada.</p>
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>Certificado en experiencia de usuario y UX</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descripción de la certificación y su relevancia en el campo del diseño UX.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                Conoce más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Selected Projects */}
        <section className="py-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Proyectos seleccionados</h2>
            <Button variant="link" className="text-teal-500">
              Ver todos <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-8">
            {['Proceso RAG en Logística', 'Este es el nombre del proyecto', 'Este es el nombre del proyecto'].map((project, index) => (
              <Card key={index} className="bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle>{project}</CardTitle>
                  <CardDescription className="text-gray-400">
                    Descripción breve del proyecto y sus objetivos principales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg bg-gray-800" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                    Ver caso de estudio
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Servicios en los que puedo ayudarte</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {['Diseño de productos digitales', 'Diseño de interfaces', 'Facilitación de Talleres de UX'].map((service, index) => (
              <Card key={index} className="bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">{service}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="p-0 text-teal-500">
                    Conoce más <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Artículos de blog</h2>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div>
                  <p className="text-sm text-gray-400">2 Junio 2023</p>
                  <h3 className="text-lg font-semibold">Taxing Laughter: The Joke Tax Chronicles</h3>
                </div>
                <div className="h-3 w-3 rounded-full bg-teal-500" />
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">¿Tienes algún proyecto en mente?</CardTitle>
              <CardDescription className="text-gray-400">
                Descripción de cómo puedes ayudar en proyectos de diseño UX y desarrollo de productos digitales.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="bg-teal-500 hover:bg-teal-600">Contáctame</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Nombre</h3>
              <p className="text-sm text-gray-400">© 2023 Todos los derechos reservados.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Sitemap</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-teal-500">Inicio</Link></li>
                <li><Link href="#" className="hover:text-teal-500">Sobre mí</Link></li>
                <li><Link href="#" className="hover:text-teal-500">Proyectos</Link></li>
                <li><Link href="#" className="hover:text-teal-500">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Sígueme</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
                <div className="h-6 w-6 rounded-full bg-gray-700" />
                <div className="h-6 w-6 rounded-full bg-gray-700" />
                <div className="h-6 w-6 rounded-full bg-gray-700" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}