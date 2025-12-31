import About from '@/sections/Home/About'
import Hero from '@/sections/Home/Hero'
import Pricing from '@/sections/Home/Pricing'
import ProgramsSection from '@/sections/Home/Programs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <About />
      <ProgramsSection />
      <Pricing />
    </div>
  )
}
