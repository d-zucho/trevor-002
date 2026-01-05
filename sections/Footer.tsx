import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-12'>
      <MaxWidthWrapper className=''>
        <div className='border-b border-white/10 flex justify-between pb-5'>
          <div>
            <div>
              <Link href='/' className='flex items-center gap-2 font-bold'>
                <span className='p-2 bg-primary flex items-center justify-center w-fit rounded-md text-sm'>
                  TW
                </span>
                <span className='shrink-0 text-lg'>Trevor Woodard</span>
              </Link>
            </div>
            <p className='text-muted-foreground text-sm max-w-xs pt-4'>
              Empowering you to live a stronger, healthier life through
              science-based training.
            </p>
          </div>

          <div className='flex justify-between gap-12'>
            <div>
              <h3 className='text-sm font-bold mb-'>Navigation</h3>
              {FOOTER_LINKS.Navigation.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-all ease-in-out duration-300 text-sm'
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h3 className='text-sm font-bold mb-'>Legal</h3>
              {FOOTER_LINKS.Legal.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-all ease-in-out duration-400 text-sm'
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-center py-5'>
          <span className='text-xs text-muted-foreground'>
            &copy; 2026 Trevor Woodard Fitness. All rights reserved.
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
