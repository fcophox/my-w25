import Header from '@/components/Header'
import Bio from '@/components/Bio';
import CaseStudies from '@/components/CaseStudies/CaseStudies'
import MediumArticles from '@/components/MediumArticles/MediumArticles';
import Services from '@/components/services';


export default function Home() {
    return (
      <div>
        <Header />
        <Bio />
        <CaseStudies />
        <MediumArticles />
        <Services/>
      </div>
    )
  }