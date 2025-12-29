import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { HERO_CARDS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='hero pb-20'>
      <MaxWidthWrapper>
        <div className='mt-12 flex flex-col sm:flex-row justify-between items-center gap-2'>
          {/* HERO CONTAINER */}
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <div className='hidden sm:block bg-secondary/50 w-fit rounded-full px-4 py-2 text-xs font-medium text-secondary-foreground'>
              Certified Strength & Condition Specialist
            </div>
            <div className='flex flex-col sm:mt-6 mt-10 gap-2 text-center sm:text-left'>
              <h1 className='font-black tracking-tight text-4xl md:text-[40px] lg:text-6xl leading-tight'>
                Transform your Body,
                <span className='block text-primary'>Sustainably</span>
              </h1>
              <p className='text-muted-foreground max-w-lg'>
                Elite personal training designed for champions. Build muscle,
                burn fat, and achieve the physique you've always dreamed of with
                scientifically-proven methods and personalized coaching.
              </p>
              <div className='flex gap-4 mt-6 flex-row justify-center items-center sm:justify-start'>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    variant: 'default',
                    className: '',
                  })}
                >
                  Start Your Journey
                </Link>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    variant: 'outline',
                    className: '',
                  })}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className='flex gap-15 mt-12 max-sm:justify-center'>
              {/* STATISTICS */}
              {HERO_CARDS.map((stat, index) => (
                <div key={index} className='max-w-18.75'>
                  <h3 className='text-2xl font-bold'>{stat.title}</h3>
                  <span className='text-sm text-muted-foreground'>
                    {stat.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className='order-first sm:order-last'>
            <Image
              src={'/images/Hero-Image.png'}
              alt='Trevor Woodard'
              width={300}
              height={500}
              className='max-sm:h-100 sm:w-full mx-auto'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
