import { TTrainingProgram } from '@/lib/types'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { buttonVariants } from './ui/button'

interface ProgramCardProps {
  program: TTrainingProgram
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const Icon = program.icon
  return (
    <Card className='w-full max-w-sm hover:border-primary/50 hover:scale-105 transition-all duration-300'>
      <CardHeader>
        <div className='bg-primary p-3 w-fit rounded-full mb-3'>
          <Icon />
        </div>
        <CardTitle>{program.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{program.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'link',
              className: 'text-primary hover:no-underline! no-underline group',
            })}
          >
            <span className='group-hover:scale-105 transition-all duration-300'>
              Learn more
            </span>
            <ArrowRight className='group-hover:animate-wiggle group-hover:scale-105' />
          </Link>
        </CardAction>
      </CardFooter>
    </Card>
  )
}

export default ProgramCard
