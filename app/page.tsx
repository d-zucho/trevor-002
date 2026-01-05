import About from '@/sections/Home/About'
import ContactSection from '@/sections/Home/Contact'
import Hero from '@/sections/Home/Hero'
import Pricing from '@/sections/Home/Pricing'
import ProgramsSection from '@/sections/Home/Programs'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <About />
      <ProgramsSection />
      <Pricing />
      <ContactSection />
    </div>
  )
}
