/* eslint-disable @next/next/no-img-element */
"use client"

import Light from "@/components/light";
import {
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Package,
  ShieldCheck,
}from "lucide-react"; // Importamos los iconos de lucide-react

const rubros = [
  { name: "Retail", href: "#", icon: ShoppingCart },
  { name: "Banca", href: "#", icon: ShoppingCart },
  { name: "Salud", href: "#", icon: Stethoscope },
  { name: "Educación", href: "#", icon: GraduationCap },
  { name: "Ecommerce", href: "#", icon: Package },
  { name: "Seguros", href: "#", icon: ShieldCheck },
];



export default function Habilidades() {
  return (
    <div className="bg-gray-950 text-white py-8">
     <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Habilidades
            </h1>
            {/* <p className="text-xl text-gray-400 mb-12">
              Con más de 12 años dedicados a la gestión y desarrollo de proyectos digitales.
            </p> */}
          </div>
        </div>
      </div>

      <div className="bg-gray-950 text-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-0 m-8">
          
          

        </div>
      </div>

    </div>
  )
}