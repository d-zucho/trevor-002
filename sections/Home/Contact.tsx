import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CONTACT_INFO } from '@/constants'

const ContactSection = () => {
  return (
    <section className='py-20 bg-muted-bg'>
      <MaxWidthWrapper>
        <div className='grid sm:grid-cols-2 gap-5'>
          <div>
            <h2 className='section-title'>Let's Get Started</h2>
            <p className='text-muted-foreground my-2'>
              Ready to make a change? Fill out the form and I'll get back to you
              withing 24 hours to schedule your free consutlation
            </p>

            <div className='flex-col gap-4 mt-10 hidden sm:flex'>
              {CONTACT_INFO.map(({ icon, text }) => {
                const Icon = icon
                return (
                  <div key={text} className='flex gap-2 items-center'>
                    <Icon className='text-primary size-4' />
                    <span className='text-sm text-white/80'>{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className='flex-col gap-4 mt-10 flex items-center sm:hidden'>
          {CONTACT_INFO.map(({ icon, text }) => {
            const Icon = icon
            return (
              <div key={text} className='flex gap-2 items-center'>
                <Icon className='text-primary size-4' />
                <span className='text-sm text-white/80'>{text}</span>
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ContactSection
