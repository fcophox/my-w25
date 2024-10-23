"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function AvatarFcophox() {
    return ( 
        <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="https://www.fcophox.com/assets/imagen/icons/fcophox.png" alt="Francisco" />
                <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Francisco</p>
              <p className="text-sm text-gray-400">Senior Product Designer</p>
              <p className="text-xs text-gray-500">Trabajo 100% remoto</p>
            </div>
        </div>
     )
}