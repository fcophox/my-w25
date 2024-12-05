import Header from '@/components/Header'
import Bio from '@/components/Bio';
import CaseStudies from '@/components/CaseStudies/CaseStudies'
import MediumArticles from '@/components/MediumArticles/MediumArticles';
import Services from '@/components/services';
import Light from '@/components/light';


export default function Home() {
    return (
      <div>   
        <Light />
        <Header />
        <Bio />
        <CaseStudies />
        <MediumArticles />
        <Services/>
      </div>
    )
  }