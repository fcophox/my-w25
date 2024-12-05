/* eslint-disable @next/next/no-img-element */
"use client"
import {
  Calendar,
  CalendarClock,
  CalendarCog,
  Home,
}from "lucide-react"; // Importamos los iconos de lucide-react

const designSprint = [
  { name: "Día 1: Entender, definir y divergir", href: "#", icon: Calendar },
  { name: "Día 2: Decidir y prototipar", href: "#", icon: CalendarClock },
  { name: "Día 3: Probar y aprender", href: "#", icon: CalendarCog },
];

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Light from "@/components/light";



export default function Delivery() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light />
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Menú digital para pizzería
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
                  <BreadcrumbPage className="text-grey-900">Delivery</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 text-gray-200 py-2">
        <div className="max-w-4xl mx-auto px-0 m-8 px-4">
          
          <div className="max-w-4xl mx-auto m-24">
            {/* Contenedor de la Imagen Placeholder */}
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/CasesStudies/delivery/delivery400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Este proyecto fue desarrollado para una Pizzería Italiana, con el objetivo de crear un sistema de entrega eficiente dentro de la ciudad.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2">
                  Contexto
                </h2>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-8">
                El proyecto inicia con la aplicación de una <span className="text-teal-800">Design Sprint</span> para la ideación de un <span className="text-teal-800">MVP</span>, validar la idea y que el cliente pueda cotizar su aplicación en desarrollo.
              </h3>
              <p className="text-gray-400 mb-12 text-lg">
                La idea es poder tener certezas de como la tecnología puede ayudar al negocio en su día a día, ver funcionalidades y características, siempre cuidando la inversión del cliente.
              </p>

            </div>
          </div>


          <div className="max-w-4xl mx-auto mb-36 border border-gray-800 rounded-3xl p-12">
            <div className="flex flex-col items-center justify-center mb-16" >
              <h2 className="text-lg font-semibold text-gray-700 mb-8 text-center">
                Proceso Design Sprint híbrido de 3 días
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-4xl" >
                {designSprint.map((rubro) => {
                  const Icon = rubro.icon; 
                  return (
                    <div
                      key={rubro.name}
                      className="group flex flex-col items-center justify-center w-full h-40 pl-12 pr-12 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all"
                    >
                      <Icon className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                      <span className="text-white font-small mt-2 items-center justify-center text-center">{rubro.name}</span>
                    </div>
                  );
                })}
              </div>            
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                  <h2 className="text-lg text-gray-700 font-semibold mb-2">
                    ¿Qué es un Design Sprint?
                  </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-xl font-semibold mb-8">
                  El <span className="text-teal-800">Design Sprint</span> es una metodología creada por <span className="text-teal-800">Google Ventures</span> para resolver problemas y validar ideas. 
                </p>
                <p className="text-gray-400 mb-12 text-lg">
                  Proceso que se enfoca en entender, idear, decidir, prototipar y testear, permite trabajar de forma colaborativa, siempre poniendo al usuario en el centro de las decisiones.
                </p>
              </div>
            </div>


          </div>


          


          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                  Objetivos del proyecto
                </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="">
                <li className="text-gray-400 mb-12 text-lg mb-8">• Crear un MVP funcional para el sistema de entrega de la pizzería.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Diseñar una aplicación intuitiva para facilitar pedidos y entregas a domicilio.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Planificar la expansión futura de la aplicación para incluir pedidos en el local.</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                  Proceso de Design Sprint
                </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Día 1: Entender, definir y divergir</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Contexto del proyecto:</span> Revisión de los objetivos del proyecto y las necesidades del negocio.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Investigación y empatía:</span> Discusión sobre las necesidades de los usuarios.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Definición del problema</span>: Identificar y priorizar los problemas clave a resolver.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Brainstorming:</span> Sesión de generación de ideas para abordar los problemas identificados.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Selección de ideas:</span> Votación y selección de las ideas más prometedoras.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Día 2: Decidir y prototipar</p>
                <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Storyboarding:</span> Desarrollar storyboards y flujos de usuario.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Decisión final:</span> Elegir la ideas a prototipar por un Crazy 8`s.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Desarrollo de prototipos:</span> Crear un prototipo funcional de baja fidelidad.</li>
                </ul>
              </div>
              <div className="mb-16">
                <p className="text-xl font-semibold mb-4">Día 3: Probar y aprender</p>
                  <ul>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Testeo del prototipo:</span> Realizar pruebas de usabilidad con usuarios reales.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Recopilación de feedback:</span> Observar y registrar las reacciones y sugerencias.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Análisis de resultados:</span> Revisar y analizar el feedback y los datos recogidos.</li>
                  <li className="text-gray-400 mb-12 text-lg mb-8">• <span className="font-semibold "> Planificación de pasos futuros:</span> Decidir los siguientes pasos basándose en el feedback.</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/delivery/delivery401.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/delivery/delivery402.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/delivery/delivery403.png" alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto m-8">
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
              <img src="/images/CasesStudies/delivery/delivery44.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}