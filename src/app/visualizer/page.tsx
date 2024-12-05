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
import Light from '@/components/light';

export default function Visualizer() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Visualizador Covid-19
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
                  <BreadcrumbPage className="text-grey-900">Visualizador</BreadcrumbPage>
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
                <img src="/images/CasesStudies/visualizer/visualizer400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este proyecto independiente fue realizado para la Start-ups Rukma.Digital con el objetivo de democratizar el acceso a la información oficial proporcionada por el Gobierno de Chile.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2">
                  Contexto
                </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-400 mb-12 text-lg">
                El proyecto se enfocó en entregar información de manera oportuna y accesible, especialmente para adultos mayores y usuarios con limitados conocimientos tecnológicos.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2">
                  Objetivos del proyecto
                </h2>
            </div>
            <div className="lg:col-span-2">
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Facilitar el acceso a la información oficial de manera constante y sencilla.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Asegurar la accesibilidad de la información para usuarios con diversas capacidades tecnológicas.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Contribuir positivamente en la sociedad durante tiempos difíciles como la pandemia.</li>
                </ul>
            </div>
          </div>




          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/visualizer/visualizer401.png" alt="" />
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
                <p className="text-xl font-semibold mb-4">Investigación y validación de hipótesis</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Estudio de usuarios:</span> Análisis de las necesidades de los usuarios, especialmente de adultos mayores y aquellos con menos habilidades tecnológicas.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Validación del MVP:</span> Pruebas y ajustes del producto mínimo viable basados en feedback real.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Diseño y desarrollo</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Diseño UX:</span> Creación de flujos de usuario y diseños de interfaz centrados en la accesibilidad y facilidad de uso.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Desarrollo ágil:</span> Implementación del proyecto en sprints, utilizando metodologías ágiles y DevOps.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Lanzamiento y monitoreo</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Implementación:</span> Despliegue de la solución con un enfoque en la accesibilidad y la comprensión del usuario.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Feedback continuo:</span> Recolección y análisis de comentarios de usuarios para mejoras iterativas.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/visualizer/visualizer403.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/visualizer/visualizer404.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/visualizer/visualizer405.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}