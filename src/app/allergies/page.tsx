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



export default function Allergies() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light />
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plataforma para alergias
          </h1>
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex text-teal-900  items-center">
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
                  <BreadcrumbPage className="text-grey-900">Alergias</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 text-gray-200 py-2">
        <div className="max-w-4xl mx-auto px-0 m-8 px-4">
          
          <div className="max-w-4xl mx-auto m-36">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/allergies/allergies400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este producto digital fue desarrollado como parte del Diplomado en UX Design en la Universidad Finis Terrae en la entrega final el año 2019.
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
                Se enfocó en la creación de una aplicación destinada a formar una comunidad para personas con alergias o intolerancias alimentarias, abordando un área poco explorada en el mundo del delivery.
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
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Crear una plataforma comunitaria para personas con restricciones alimentarias.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Proporcionar información confiable y de primera mano sobre alimentos seguros.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Mejorar la accesibilidad a opciones de alimentos para este grupo específico de usuarios.</li>
                </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies405.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies406.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies407.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies409.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies408.png" alt="" />
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
                <p className="text-xl font-semibold mb-4">Empatía y definición de la problemática</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Empatía con los usuarios:</span> Uso de herramientas UX para entender profundamente las necesidades y desafíos de las personas con alergias o intolerancias alimentarias.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Definición del problema:</span> Identificación clara de la necesidad de mejores opciones de alimentos para este grupo.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Investigación y desarrollo</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Investigación de usuarios:</span> Estudios y análisis de las preferencias y necesidades de las personas con restricciones alimentarias.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Desarrollo de Wireframes y Prototipos:</span> Creación de diseños preliminares y prototipos funcionales para estructurar la aplicación.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Pruebas con usuarios y refinamiento</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Testeo con usuarios reales:</span> Realización de pruebas de usabilidad para recoger feedback directo de los usuarios.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Iteraciones de diseño:</span> Ajustes y mejoras del diseño basados en los resultados de las pruebas.</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies401.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies402.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies403.png" alt="" />
              </div>
            </div>
          </div>

          
          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/allergies/allergies404.gif" alt="" />
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}