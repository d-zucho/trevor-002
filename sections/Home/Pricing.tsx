import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PricingCard from '@/components/PricingCard'
import { PRICING_OPTIONS } from '@/constants'

const Pricing = () => {
  return (
    <section className='py-20'>
      <MaxWidthWrapper>
        <div>
          <h2 className='section-title text-center'>Simple Pricing</h2>
          <p className='text-muted-foreground mt-5 max-w-prose text-center mx-auto'>
            No hidden fees. Cancel Anytime.
          </p>
        </div>

        <div className='grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10'>
          {PRICING_OPTIONS.map((option, index) => (
            <PricingCard key={index} plan={option} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Pricing
