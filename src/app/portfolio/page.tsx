import CardGrid from './card-grid'
import Light from '@/components/light'


const projects = [
  // {
  //   image: "/images/CasesStudies/logistic/home-logistic.png",
  //   alt: "RAG en Logística",
  //   title: "RAG en Logística",
  //   subtitle: "Ver en Behance",
  //   category: "Desktop",
  //   link: "#"
  // },
  {
    image: "/images/CasesStudies/delivery/home-delivery.png",
    alt: "Menú digital para pizzería",
    title: "Menú digital para pizzería",
    subtitle: "Ver en Behance",
    category: "App",
    link: "https://www.behance.net/gallery/165920723/Menu-digital-para-despachos-a-domicilio"
  },
  {
    image: "/images/CasesStudies/recruitment/home-recruitment.png",
    alt: "Plataforma de reclutamiento",
    title: "Plataforma de reclutamiento",
    subtitle: "Ver en Behance",
    category: "Desktop",
    link: "https://www.behance.net/gallery/165977975/Reclutamiento-Post-Pandemia"
  },
  {
    image: "/images/CasesStudies/events/home-events.png",
    alt: "Plataforma de Eventos",
    title: "Plataforma de Eventos",
    subtitle: "Ver en Behance",
    category: "Desktop",
    link: "https://www.behance.net/gallery/165977545/Interfaz-para-plataforma-de-eventos"
  },
  {
    image: "/images/CasesStudies/cyclists/home-cyclists.png",
    alt: "Comunidad de ciclismo",
    title: "Comunidad de ciclismo",
    subtitle: "Ver en Behance",
    category: "App",
    link: "https://www.behance.net/gallery/165978309/Comunidad-de-ciclismo-en-Santiago-de-Chile"
  },
  {
    image: "/images/CasesStudies/visualizer/home-visualizer.png",
    alt: "Visualizador Covid-19",
    title: "Visualizador Covid-19",
    subtitle: "Ver en Behance",
    category: "App",
    link: "https://www.behance.net/gallery/165894227/Visualizador-de-comunas-para-Chile-por-Covid-19"
  },
  {
    image: "/images/CasesStudies/allergies/home-allergies.png",
    alt: "Plataforma para alergias",
    title: "Plataforma para alergias",
    subtitle: "Ver en Behance",
    category: "App",
    link: "https://www.behance.net/gallery/165921549/Comunidad-para-usuarios-con-alergias-alimentarias"
  },
  // Add more projects as needed
]

export default function Portfolio() {
  return (

    <div className="bg-gray-950 text-white py-8">
    
    <Light/> 
      <div className="bg-gray-950 text-gray-200 py-2 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Portafolio
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Un espacio donde startups, emprendedores y algunos conceptos cobran vida.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12 px-4 pt-9">

        <div className="container mx-auto ">
          <CardGrid projects={projects} />
        </div>
      </div>

    </div>

  )
}