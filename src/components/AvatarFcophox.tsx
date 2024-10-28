"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarFcophox() {
    return ( 
        <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/images/Brand/avatar.png" alt="Francisco" />
                <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Francisco</p>
              <p className="text-sm text-gray-400">Senior Product Designer</p>
              <p className="text-xs text-teal-800">Trabajo 100% remoto</p>
            </div>
        </div>
     )
}

