import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function Header() {
  return (
    <div className="bg-gray-950 text-white p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Optimización de experiencias digitales</h1>
        <p className="text-xl mb-12">Senior Product Designer • Consultor UX • Analista CRO</p>
        
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Hola, soy Francisco</h2>
            <p className="text-gray-400">The Joke Tax</p>
          </div>
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Francisco" />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Francisco</p>
              <p className="text-sm text-gray-400">Senior Product Designer</p>
              <p className="text-xs text-gray-500">Trabajo 100% remoto</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (

          
            <Card key={i} className="bg-gray-900">
              <CardContent className="p-4 h-48 flex items-center justify-center">
                <span className="text-gray-600">Placeholder {i}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}