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

const menuItems = [
  {
    title: "Sobre mí",
    items: [
      { title: "Experiencia", href: "/about-me/experience" },
      { title: "Habilidades", href: "/about-me/skills" },
      { title: "Educación", href: "/about-me/study/" },
    ],
  },
  {
    title: "Casos de estudio",
    items: [
      { title: "Proyecto 1", href: "/case-studies/proyecto-1" },
      { title: "Proyecto 2", href: "/case-studies/proyecto-2" },
      { title: "Proyecto 3", href: "/case-studies/proyecto-3" },
      { title: "Proyecto 4", href: "/case-studies/proyecto-4" },
      { title: "Proyecto 5", href: "/case-studies/proyecto-5" },
      { title: "Proyecto 6", href: "/case-studies/proyecto-6" }
    ],
  },
]

export function Navbar() {
  return (
    <div className="sticky bg-gray-950 top-0 z-50 py-6 w-full bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/75 ">
      <div className="max-w-4xl p-4 mx-auto container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
        <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base text-gray-300 hover:bg-gray-900 hover:text-gray-100 focus-visible:bg-gray-800 focus-visible:text-gray-100 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
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
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4495 19.9745L15.9414 7.46627L18.0031 5.40454L35.4888 22.8901H17.3689V19.9745H28.4495Z" fill="url(#paint0_linear_8847_560)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52734 28.0921L27.9656 8.65381L30.0273 10.7156L10.589 30.1538L8.52734 28.0921Z" fill="#00FFE0"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0L43 21.5L21.5 43L0 21.5L21.5 0ZM21.5 4.12347L4.12349 21.5L21.5 38.8765L38.8765 21.5L21.5 4.12347Z" fill="#00FFE0"/>
              <defs>
              <linearGradient id="paint0_linear_8847_560" x1="15.2688" y1="21.2863" x2="28.7831" y2="21.2863" gradientUnits="userSpaceOnUse">
              <stop offset="0.0153515" stop-color="#00FFE0" stop-opacity="0"/>
              <stop offset="0.5" stop-color="#01FFE0"/>
              </linearGradient>
              </defs>
            </svg>

            <div>
              <span className="font-bold text-gray-100 sm:inline-block">
                fcophox <span className="text-xs text-gray-400 font-thin">V3.0.0</span>
              </span>
            </div>
          </Link>

        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-gray-950 text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-800 focus:text-gray-100">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-800">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/portfolio" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-gray-950 text-gray-300 hover:bg-gray-800 hover:text-gray-100 focus:bg-gray-800 focus:text-gray-100"
                  )}
                >
                  Portafolio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
          <Button className="bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-full">
            + Contacto
          </Button>
        </div>
      </div>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Fcophox Logo"
          width={32}
          height={32}
          className="rounded-sm"
        />
        <span className="font-bold text-gray-100">fcophox</span>
        <span className="text-xs text-gray-400">V3.0.0</span>
      </Link>
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col space-y-2">
          <h4 className="font-medium text-gray-100">{item.title}</h4>
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href}
              className="bg-gray-950 text-gray-300 hover:text-gray-100"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      ))}
      <Link href="/portfolio" className="bg-gray-950 font-medium text-gray-100">
        Portafolio
      </Link>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "bg-gray-950 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-100">{title}</div>
          <p className="bg-gray-950 line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"