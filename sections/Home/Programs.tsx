import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProgramCard from '@/components/ProgramCard'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TRAINING_PROGRAMS } from '@/constants'
import Link from 'next/link'

const ProgramsSection = () => {
  return (
    <section className='w-full py-32'>
      <MaxWidthWrapper className='relative'>
        <div className='text-right'>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'link',
              className: 'text-primary text-sm font-semibold ',
            })}
          >
            View all services
          </Link>
        </div>

        <div className='mt-10'>
          <h2 className='section-title text-center'>Training Programs</h2>
          <p className='text-muted-foreground mt-5 max-w-prose text-center mx-auto'>
            Choose the path that fits your goals and schedule. All plans include
            custom assessments and personalized{' '}
          </p>
        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10 justify-items-center'>
          {TRAINING_PROGRAMS.map((program, index) => {
            return <ProgramCard key={index} program={program} />
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ProgramsSection
