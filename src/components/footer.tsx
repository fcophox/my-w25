import { Button } from "@/components/ui/button"
import AvatarFcophox from "@/components/AvatarFcophox"


import Link from "next/link"
import { Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">¿Tienes algún proyecto en mente?</h2>
          <p className="text-xl text-gray-400 mb-12 text-center ">
            Consultor en optimización de experiencia de usuario y usabilidad para productos digitales.
          </p>
          <div className="flex justify-center">
            <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
              Contáctame <span className="ml-2">+</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 pb-16">
          <div className="lg:col-span-2 space-y-4">

          <AvatarFcophox />

            <div className="pt-12">
              <h3 className="font-semibold mb-4">Contacto</h3>
              <Link href="mailto:hi@fcophox.com" className="text-teal-400 hover:text-teal-300 transition-colors flex items-center justify-start">
                <Send className="h-4 w-4 mr-2" />  hi@fcophox.com
              </Link>
            </div>
          </div>
         
          <div>
            <h3 className="font-semibold mb-4">Sitemaps</h3>
            <ul className="space-y-2">
              {["Sobre mi", "Estudio", "Metodología", "Casos de estudio", "Portafolio"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categoría</h3>
            <ul className="space-y-2">
              {["Medium", "Behance", "Linkedin", "Github"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">_fcoPhox - All rights pending - 2024</p>
          {/* <img src="/placeholder.svg" alt="fcoPhox logo" className="mx-auto mt-4 h-8" /> */}
        </div>
      </div>
    </footer>
  )
}