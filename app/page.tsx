import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Formations from '@/components/sections/Formations'
import Tarifs from '@/components/sections/Tarifs'
import Gallery from '@/components/sections/Gallery'
import Equipe from '@/components/sections/Equipe'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Formations />
        <Tarifs />
        <Gallery />
        <Equipe />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  )
}
