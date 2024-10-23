import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Bio() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diseño de productos desde UX
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Con más de 12 años dedicados a la gestión y desarrollo de proyectos digitales.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-2 ">
                    Acerca de mi
                </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-teal-400 rounded-full">
                
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8855_1914)">
                    <mask id="mask0_8855_1914" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                    <path d="M60 0H0V60H60V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_8855_1914)">
                    <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#00FFE0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1017 38.7812L15 44.6802L21.1857 45.1711L22.74 42.215C20.9989 41.3434 19.431 40.1769 18.1017 38.7812ZM22.74 42.215L21.1857 45.1711L25.0965 49.989L28.3145 43.8687C26.3305 43.6437 24.4515 43.0717 22.74 42.215ZM31.9745 43.8854L35.2158 49.9999L39.1099 45.169L45.2939 44.6574L42.2363 38.8895C39.5768 41.6325 35.9863 43.4677 31.9745 43.8854Z" fill="#020617"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2224 41.4837C38.0879 41.4837 44.4642 35.1074 44.4642 27.2419C44.4642 19.3763 38.0879 13 30.2224 13C22.3568 13 15.9805 19.3763 15.9805 27.2419C15.9805 35.1074 22.3568 41.4837 30.2224 41.4837ZM26.1192 32.537L29.183 27.4384L26.0499 22.0476L23.0565 27.2323L26.1192 32.537ZM36.6896 26.229L30.9604 26.2293L27.9665 21.0781H33.7158L36.6896 26.229ZM28.1104 33.3864L31.1226 28.3736L36.6101 28.3733L33.7158 33.3864H28.1104ZM25.3716 18.9339L20.5806 27.2323L25.3716 35.5307H34.9538L39.7449 27.2323L34.9538 18.9339H25.3716Z" fill="#020617"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_8855_1914">
                    <rect width="60" height="60" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>


                </div>
                <p className="text-gray-400">
                  Certificado en Experiencia de usuario en la UX Alliance por Ayer Viernes Chile.
                </p>
              </div>
              <h3 className="text-lg font-semibold mb-6">
                Consultor en optimización de experiencia de usuario y usabilidad para productos digitales.
              </h3>
              <p className="text-gray-400 mb-8">
                Investigando y descubriendo la visión del negocio, la realidad del mercado y los voz de los usuario.
              </p>
              
              <Link href="https://www.linkedin.com/in/fcophox/" target="_blank" passHref>
                <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
                  Visita mi LinkedIn
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </article>
  )
}