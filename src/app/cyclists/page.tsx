/* eslint-disable @next/next/no-img-element */
"use client"
import {
  Home,
}from "lucide-react"; // Importamos los iconos de lucide-react


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Light from "@/components/light";



export default function Events() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light />
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comunidad de ciclismo
          </h1>
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex text-teal-900 items-center hover:text-teal-500">
                    <Home className="w-4 mr-2" />
                    <span>Home</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-grey-900">Casos de estudio</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-grey-900">Ciclismo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 text-gray-200 py-2">
        <div className="max-w-4xl mx-auto px-0 m-8 px-4">
          
          <div className="max-w-4xl mx-auto m-24">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/cyclists/cyclists400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este producto digital fue realizado como Consultor UX y Diseñador UI, con el objetivo de crear una aplicación que ofrezca un ambiente seguro e informativo para ciclistas urbanos.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2">
                  Contexto
                </h2>
            </div>
            <div className="lg:col-span-2">
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Desarrollar el UI una plataforma comunitaria para ciclistas.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Proveer datos confiables y actualizados para la creación y seguimiento de rutas.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Facilitar un sistema de soporte y seguridad para ciclistas.</li>
                </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/cyclists/cyclists401.png" alt="" />
              </div>
            </div>
          </div>




          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                  Proceso de desarrollo
                </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Investigación y análisis</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Entrevistas:</span> Realización de estudios para comprender las necesidades específicas de los ciclistas.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Benchmarking:</span> Evaluación de aplicaciones similares para identificar oportunidades de mejora y diferenciación.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Diseño de interfaz y UX</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Wireframes y prototipos:</span> Creación de diseños preliminares para establecer la estructura y el flujo de la aplicación.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Diseño visual y UI:</span> Desarrollo de un diseño atractivo y funcional que mejora la experiencia del usuario.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Entregables</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Prototipo funcional en Figma</span> La aplicación se entrega en un enlace funcional para la evaluación de equipos de desarrollo.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/cyclists/cyclists403.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/cyclists/cyclists404.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}