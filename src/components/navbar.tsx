"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
// import { div } from "framer-motion/client"

const menuItems = [
  {
    title: "Sobre mí",
    items: [
      { title: "Experiencia", href: "/experience" ,  imageUrl: "/images/Brand/experience-icon.svg" },
      // { title: "Habilidades", href: "/sobre-mi/habilidades" ,  imageUrl: "/images/Brand/avatar.png" },
      { title: "Educación", href: "/study" ,  imageUrl: "/images/Brand/study-icon.svg" },
    ],
  },
  {
    title: "Casos de estudio",
    items: [
      { title: "RAG en Logística", href: "/logistic" ,  imageUrl: "/images/CasesStudies/logistic/home-logistic.png" },
      { title: "Menú digital para pizzería", href: "/delivery" ,  imageUrl: "/images/CasesStudies/delivery/home-delivery.png" },
      { title: "Plataforma de reclutamiento", href: "/recruitment" ,  imageUrl: "/images/CasesStudies/recruitment/home-recruitment.png" },
      { title: "Plataforma de Eventos", href: "/events" ,  imageUrl: "/images/CasesStudies/events/home-events.png" },
      { title: "Comunidad de ciclismo", href: "/cyclists" ,  imageUrl: "/images/CasesStudies/cyclists/home-cyclists.png" },
      { title: "Visualizador Covid-19", href: "/visualizer" ,  imageUrl: "/images/CasesStudies/visualizer/home-visualizer.png" },
      { title: "Plataforma para alergias", href: "/allergies" ,  imageUrl: "/images/CasesStudies/allergies/home-allergies.png" }
    ],
  },
]

export function Navbar() {
  return (
    <div className="sticky bg-gray-950 top-0 z-50 py-6 w-full bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/40 ">
      <div className="max-w-7xl p-4 mx-auto container flex h-14 items-center">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">



            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base text-gray-300 hover:bg-gray-900 hover:text-gray-100 focus-visible:bg-gray-800 focus-visible:text-gray-100 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden h-14 w-14 rounded-3xl"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Alternar Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-gray-900 text-gray-100">
                <MobileNav />
              </SheetContent>
            </Sheet>


            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Brand/logotipo.svg"
                alt="Fcophox"
                width={48}
                height={48}
                className="rounded-sm"
              />
              <span className="font-bold text-gray-100 sm:inline-block">
                fcophox
              </span>
              <span className="text-xs text-gray-400  hidden md:flex">V3.0.0</span>
            </Link>
            

            
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="bg-inherit text-gray-300 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-800 focus:text-gray-100">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent >
                    <ul className="bg-gray-950 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <ListItem 
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                          imageUrl={subItem.imageUrl}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild >
                  <Link 
                    href="/portfolio" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-inherit	text-gray-300 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-800 focus:text-gray-100"
                    )}
                  >
                    Portafolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center md:flex">
            <Button className="bg-teal-400 hover:bg-gray-900 border-2 border-teal-400 border:bg-teal-500 text-gray-900 hover:text-teal-400 rounded-full">
              + Contacto
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-6">
      <Link href="/" className="flex justify-between items-center space-x-2">
        <Image
          src="/images/Brand/logotipo.svg"
          alt="Fcophox"
          width={32}
          height={32}
          className="rounded-sm"
        />
        {/* <span className="font-bold text-gray-100  hidden md:flex">fcophox</span>
        <span className="text-xs text-gray-400  hidden md:flex">V3.0.1</span> */}
      </Link>
      <Link href="/" className="font-medium text-gray-100">
        Ir al inicio
      </Link>
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col space-y-2">
          <h4 className="text-xs text-gray-600">{item.title}</h4>
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href}
              className="text-gray-100 text-sm hover:text-gray-100 m-4 p-1">
              {subItem.title}
            </Link>
          ))}
        </div>
      ))}

      <Link href="/portfolio" className="font-medium text-gray-100">
        Portafolio
      </Link>


      <div className="flex items-center">
        <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
          + Contacto
        </Button>
      </div>

          
    </div>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { imageUrl: string }
>(({ className, title, children, imageUrl, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 hover:bg-gray-900",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src={imageUrl}
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <div className="text-sm font-medium leading-none text-gray-100">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"