import { TPricingOption } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Check } from 'lucide-react'

interface PricingCardProps {
  plan: TPricingOption
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card className='max-w-sm w-full  relative group even:border-t-primary/80 max-sm:min-w-xs '>
      <CardHeader>
        <CardTitle>{plan.option}</CardTitle>
        <div className='font-bold text-2xl'>{plan.price}</div>
        {plan.favorite && (
          <div className='absolute -top-3 -right-2 px-2 py-1 bg-primary/80 border-white/40 border rounded-full text-sm font-bold group-hover:shadow-md group-hover:shadow-primary/60 transition-all ease-in-out animate-wiggle'>
            Favorite
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription>{plan.description}</CardDescription>

        <div className='space-y-3 mt-5'>
          {plan.stats.map((stat, index) => (
            <div key={index} className='flex gap-3 items-center'>
              <Check className='size-4 text-primary' />
              {stat}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PricingCard
