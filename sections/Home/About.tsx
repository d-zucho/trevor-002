import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { HOME_ABOUT_STATS } from '@/constants'
import Image from 'next/image'

const About = () => {
  return (
    <section className='bg-muted-bg max-w-screen py-20'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center sm:flex-row gap-10'>
          <div className='lg:flex-1 max-w-full w-112.5'>
            <div className='sm:h-100 rounded-2xl overflow-hidden mx-auto sm:mx-0 lg:size-100'>
              <h2 className='section-title text-center sm:hidden mb-10'>
                More than Just a Trainer
              </h2>
              <Image
                src={'/images/HomeAbout.png'}
                alt=''
                width={300}
                height={600}
                className='w-full object-cover object-center h-full'
              />
            </div>
          </div>
          <div className='text-center sm:text-left mx-auto'>
            <h2 className='section-title max-sm:hidden'>
              More than Just a Trainer
            </h2>
            <div className='text-muted-foreground flex flex-col gap-4 mt-4 max-sm:max-w-md max-w-lg lg:max-w-prose'>
              <p className='mx-auto'>
                My philosophy is simple: fitness should enhance your life, not
                consume it. I’ve spent the last decade refining methods that
                deliver maximum results with efficient time investment.
              </p>
              <p>
                Whether you’re looking to shed 20 pounds, run your first
                marathon, or simply keep up with your kids, we build a roadmap
                that fits your lifestyle, not the other way around.
              </p>
            </div>

            <div className='flex flex-wrap max-sm:justify-center gap-5 mt-10 mx-auto sm:mx-0 md:max-w-sm md:justify-between'>
              {HOME_ABOUT_STATS.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className='flex shrink-0 items-center gap-2 w-fit'
                  >
                    <div className='p-2 rounded-full bg-background flex items-center justify-center'>
                      <Icon className='inline-block w-5 h-5 text-primary' />
                    </div>
                    <div className='text-left'>
                      <span className='font-bold text-sm'>{stat.title}</span>
                      <p className='text-muted-foreground text-sm'>
                        {stat.info}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default About
