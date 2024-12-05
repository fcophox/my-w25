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
            Plataforma de Eventos
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
                  <BreadcrumbPage className="text-grey-900">Eventos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

        </div>
      </div>
    </div><div className="bg-gray-950 text-gray-200 py-2">
        <div className="max-w-4xl mx-auto px-0 m-8 px-4">

          <div className="max-w-4xl mx-auto m-24">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/events/events400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este proyecto se centró en el desarrollo de la interfaz de usuario (UI), una plataforma que permite a los usuarios descubrir y participar en eventos sociales.
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
                El enfoque principal fue <span className="text-teal-800">facilitar la conversión de usuarios</span> dentro de la aplicación, así como la compra de entradas y el canje de cupones, todo esto dispuesto para los usuarios con una actualización en la interfaz.
              </h3>
              <p className="text-gray-400 mb-12 text-lg">
                Cómo sabemos la mayoría de los talentos en <span className="text-teal-800">TI</span> trabajan de manera <span className="text-teal-800">híbrida</span> o <span className="text-teal-800">100% remota</span> pero algunas empresas aún requieren de talento presencial.
              </p>
            </div>
          </div>



          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                Objetivos del Proyecto
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-16">
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Diseñar una interfaz intuitiva que muestre eventos sociales con sus características.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Optimizar el proceso de conversión de usuarios dentro de la aplicación.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• Facilitar la compra de entradas y el canje de cupones.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto m-32">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/events/events401.png" alt="" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                Desarrollo de la Interfaz
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Investigación y análisis</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Análisis de usuarios:</span> Investigación sobre las preferencias y comportamientos de los usuarios de la plataforma.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Benchmarking:</span> Estudio de interfaces de usuario similares en el mercado para identificar mejores prácticas.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Diseño de Interfaz</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Wireframes y prototipos:</span> Desarrollo de wireframes y prototipos para esbozar la estructura de la interfaz.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Diseño visual:</span> Creación de un diseño visual atractivo y funcional, en línea con la identidad de marca de Vesti.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Flujos de Usuario</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Desarrollo de flujos de usuario:</span> Diseño de flujos intuitivos desde el inicio de la plataforma.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold">Optimización de la conversión:</span> Implementación de estrategias de diseño que incentiven la conversión.</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/events/events403.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/events/events404.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/events/events405.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}