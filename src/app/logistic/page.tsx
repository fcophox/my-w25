/* eslint-disable @next/next/no-img-element */
"use client"
import {
  Home,
  Truck,
  GitMerge,
  MessageSquareMore,
  BadgeCheck,
}from "lucide-react"; // Importamos los iconos de lucide-react

const rubros = [
  { name: "Reportes - Facturas", href: "#", icon: Truck },
  { name: "División de contenido", href: "#", icon: GitMerge },
  { name: "Prompt del solicitante", href: "#", icon: MessageSquareMore },
  { name: "Información entregada", href: "#", icon: BadgeCheck },
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



export default function Logistic() {
  return (
    <div className="bg-gray-950 text-white py-8">
      <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            RAG en Logística
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
                  <BreadcrumbPage className="text-grey-900">Logística</BreadcrumbPage>
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
                <img src="/images/CasesStudies/logistic/logistic400.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-m mt-4 text-center">
              Una empresa logística internacional maneja una gran cantidad de información relacionada con estados logísticos, facturas y datos de repartidores. Junto al área de innovación y tecnología, requieren de una solución con IA generativa.
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
                Se crea una solución digital donde se sube la información logística de la empresa y se dispone por medio de una plataforma con inteligencia artificial. Esta solución corresponde a un <span className="text-teal-800">RAG</span> o <span className="text-teal-800">Retrieval-Augmented Generation</span>.
              </h3>
              <p className="text-gray-400 mb-12 text-lg">
                Esta plataforma con <span className="text-teal-800">Inteligencia Artificial</span> permitirá a los administradores y colaboradores consultar sobre productos específicos, obteniendo información sobre facturas, estados logísticos y visualización de PDFs.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-36 border border-gray-800 rounded-3xl p-12">
            <div className="flex flex-col items-center justify-center mb-16">
              <h2 className="text-lg font-semibold text-gray-700 mb-8 text-center">
                Proceso RAG o Retrieval-Augmented Generation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full max-w-4xl" >
                {rubros.map((rubro) => {
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
                    ¿Qué hace un RAG?
                  </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-xl font-semibold mb-8">
                  <span className="text-teal-800">RAG</span> o <span className="text-teal-800">Retrieval-Augmented Generation o Generación aumentada por recuperación</span>. 
                  Imagina que tienes una biblioteca enorme con todos los libros que puedas necesitar. 
                </p>
                <p className="text-gray-400 mb-12 text-lg">
                  Cuando tienes una pregunta, no solo te gustaría que alguien la respondiera, 
                  sino que también busque en los libros para darte la mejor respuesta posible. Eso es básicamente lo que hace un <span className="text-teal-800">RAG</span>.
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
                <li className="text-gray-400 mb-12 text-lg mb-8">• Acceso rápido y eficiente a la información logística y de facturas.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Un sistema centralizado y fácil de usar para gestionar y consultar datos.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Reducción del tiempo empleado en la búsqueda y verificación de información.</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                  Problemáticas a resolver con Inteligencia Artificial
                </h2>
            </div>
            <div className="lg:col-span-2">

              <ul>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Innovar y ser evangelizadores en soluciones digitales con IA en la empresa.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Optimizar procesos manuales y repetitivos que consumen mucho tiempo.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Facilitar la búsqueda de información específica de manera rápida.</li>
                <li className="text-gray-400 mb-12 text-lg mb-8">• Gobernabilidad de información dispersa en múltiples sistemas y formatos digitales y manuales.</li>
              </ul>

            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-700 font-semibold mb-2 ">
                  Prototipo en Figma
                </h2>
                <iframe
                    width="100%" 
                    height="610" 
                  src="https://embed.figma.com/proto/C15hMkk2ROQG4gKPzr8gJk/%F0%9F%9A%9A-Producto-%3A%3A-Log%C3%ADstico?content-scaling=fixed&kind=proto&node-id=107-323&page-id=104%3A3890&scaling=scale-down-width&starting-point-node-id=107%3A323&embed-host=share"></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}