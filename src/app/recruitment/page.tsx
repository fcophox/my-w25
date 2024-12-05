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



export default function Recruitment() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plataforma de reclutamiento
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
                  <BreadcrumbPage className="text-grey-900">Reclutamiento</BreadcrumbPage>
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
              <img src="/images/CasesStudies/recruitment/recruitment400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este es un proyecto desarrollado para el Diplomado Diseño basado en datos realizados entre julio 2022 hasta enero 2023 en la Universidad del Desarrollo.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2">
                  Contexto
                </h2>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-8">
                El tema seleccionado para trabajar fue la identificación de cómo afectó la pandemia dentro del proceso de reclutamiento TI.
              </h3>
              <p className="text-gray-400 mb-12 text-lg">
                Cómo sabemos la mayoría de los talentos en <span className="text-teal-800">TI</span> trabajan de manera <span className="text-teal-800">híbrida</span> o <span className="text-teal-800">100% remota</span> pero algunas empresas aún requieren de talento presencial.
              </p>
              <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• ¿Por qué existen estas variedades?</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• ¿Cómo el reclutamiento debe adaptarse a las nuevas necesidades de los talentos?</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• ¿Cómo incentivar a los talentos y disminuir la rotación?</li>
              </ul>
              <p className="mb-12 text-lg">
                Son problemáticas que se quisieron abordar dentro de este proyecto.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/recruitment/recruitment401.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Detalle de gráfico o visualización de datos.
            </p>
          </div>


          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                Proceso de investigación basado en datos
                </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Introducción a la investigación</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Definición del tema:</span> Establecimiento del enfoque del proyecto en la intersección de la pandemia y el reclutamiento TI.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Revisión de literatura: </span> Recopilación de información existente sobre el reclutamiento en TI y los efectos de la pandemia en el trabajo.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Diseño de Investigación</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Metodología:</span> Desarrollo de una metodología de investigación para recopilar y analizar datos relevantes.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Instrumentos de recolección de datos:</span> Creación de encuestas, entrevistas y otras herramientas para obtener información.</li>
                </ul>
              </div>

              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Ejecución y análisis de investigación</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Recolección de datos:</span> Implementación de la metodología y recopilación de datos.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Análisis de datos:</span> Evaluación y análisis de los datos recopilados para identificar tendencias y patrones.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Solución al problema de investigación</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Desarrollo de soluciones:</span> Propuesta de estrategias basadas en los hallazgos para mejorar el reclutamiento y retención de talentos en TI.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Recomendaciones:</span> Presentación de recomendaciones a empresas y organizaciones sobre cómo adaptarse a las nuevas dinámicas laborales.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/recruitment/recruitment403.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/recruitment/recruitment404.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/recruitment/recruitment405.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/recruitment/recruitment406.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}