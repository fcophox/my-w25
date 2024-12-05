"use client"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import mediumBlog from "../MediumArticles/MediumArticles.json"


export default function MediumArticles() {
  return (
    <article className="bg-gray-950 text-gray-200 py-12 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold">Artículos de Medium</h2>
        </div>
        <p className="text-xl text-gray-400 mb-12">
            Por que cada historia tienes una reflexión, una observación o una experiencia.
        </p>
        <div className="grid grid-cols-1 gap-8">
        {mediumBlog.map((article) => (

          // eslint-disable-next-line react/jsx-key
          <ul className="space-y-4">
              <li className="">
                <a href={article.imageLink} target="_blank" className="flex items-center justify-between border-b border-gray-800 pb-4 hover:text-teal-800">
                  <div>
                    <p className="text-sm text-gray-400">{article.date}</p>
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                  </div>
                  <Button className="bg-gray-900 hover:bg-gray-900 border-1 border-teal-400 border:bg-teal-500 text-teal-400 rounded-full px-3">
                    <ArrowUpRight className="h-4 w-4"/>
                  </Button>
                </a>
              </li>
          </ul>
          ))}
        </div>
      </div>
    </article>
  )
}