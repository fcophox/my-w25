/* eslint-disable @next/next/no-img-element */
"use client"
import Bio from '@/components/Bio'
import experiences from "./experience.json"
import services from "./services.json"




import {
  ShoppingCart,
  HandCoins,
  Stethoscope,
  GraduationCap,
  Package,
  ShieldCheck,
  Home
}from "lucide-react"; // Importamos los iconos de lucide-react
import Light from '@/components/light';

const rubros = [
  { name: "Retail", href: "#", icon: ShoppingCart },
  { name: "Banca", href: "#", icon: HandCoins },
  { name: "Salud", href: "#", icon: Stethoscope },
  { name: "Educación", href: "#", icon: GraduationCap },
  { name: "Ecommerce", href: "#", icon: Package },
  { name: "Seguros", href: "#", icon: ShieldCheck },
];

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function Experience() {
  return (
    <div className="bg-gray-950 text-white py-8">
     <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">
              Experiencia
            </h1>

            <div className="mb-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="flex text-teal-900  items-center hover:text-teal-500">
                      <Home className="w-4 mr-2" />
                      <span>Home</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-grey-900">Sobre mi</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 text-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-0 m-8">
          <Bio/>
          <div className="max-w-4xl mx-auto px-4 m-36">
            {/* Contenedor de la Imagen Placeholder */}
            <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <img src="/images/Brand/place.png" alt="" className="rounded-xl" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
             
             Mi espacio de trabajo es más que un lugar: es donde nacen ideas, se toman decisiones y se enfrentan retos. Un rincón para crear, soñar y celebrar cada triunfo y disfrutar de los procesos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 px-4 m-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-2 ">
                  Experience
                </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {experiences.map((experiences) => (
                // eslint-disable-next-line react/jsx-key
                <ul className="space-y-4">
                    <li className="">
                      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div>
                          <p className="text-sm text-gray-400">{experiences.date}</p>
                          <h3 className="text-xl font-semibold">{experiences.position}</h3>
                        </div>
                      </div>
                    </li>
                </ul>
                ))}
              </div>
            </div>
          </div>
              
          <div className="max-w-4xl mx-auto px-4 m-36">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-semibold text-gray-400 mb-8 text-center">
                Rubros en los cuales he colaborado
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                {rubros.map((rubro) => {
                  const Icon = rubro.icon; // Asignamos el icono dinámicamente
                  return (
                    <div
                      key={rubro.name}
                      className="group flex flex-col items-center justify-center w-full h-24 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all"
                    >
                      <Icon className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                      <span className="text-white font-medium mt-2">{rubro.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 px-4 m-36">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-2 ">
                    Servicios
                </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {services.map((services) => (
                // eslint-disable-next-line react/jsx-key
                <ul className="space-y-4">
                    <li className="">
                      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div>
                          {/* <p className="text-sm text-gray-400">{services.date}</p> */}
                          <h3 className="text-xl font-semibold">{services.nameService}</h3>
                        </div>
                      </div>
                    </li>
                </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}