// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">¿Tienes algún proyecto en mente?</h2>
          <p className="text-center text-gray-400 mb-6">
            Consultor en optimización de experiencia de usuario y usabilidad para productos digitales.
          </p>
          <div className="flex justify-center">
            {/* <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900">
              Contáctame <span className="ml-2">+</span>
            </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            {/* <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg" alt="Francisco" />
              <AvatarFallback>FC</AvatarFallback>
            </Avatar> */}
            <div>
              <h3 className="font-semibold">Francisco</h3>
              <p className="text-sm text-gray-400">Senior Product Designer</p>
              <p className="text-sm text-gray-400">Trabajo 100% remoto</p>
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

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <Link href="mailto:hi@fcophox.com" className="text-teal-400 hover:text-teal-300 transition-colors">
              hi@fcophox.com
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">_fcoPhox - All rights pending - 2024</p>
          <img src="/placeholder.svg" alt="fcoPhox logo" className="mx-auto mt-4 h-8" />
        </div>
      </div>
    </footer>
  )
}