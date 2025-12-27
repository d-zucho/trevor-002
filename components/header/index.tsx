import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='h-20 flex items-center px-2 sm:px-6 md:px-12'>
      <nav className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-7'>
          <Link href='/' className='flex items-center gap-2 font-bold text-lg'>
            <span className='p-2 bg-primary flex items-center justify-center w-fit rounded-md'>
              TW
            </span>
            <span className='shrink-0 text-xl'>Trevor Woodard</span>
          </Link>
          <div className='hidden lg:flex gap-5'>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className='hover:text-primary transition-colors duration-300'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className={'flex items-center gap-4'}>
          <Link
            href={'/contact'}
            className={buttonVariants({
              variant: 'outline',
              className: 'max-lg:hidden',
            })}
          >
            Contact Me
          </Link>
          <Link
            href={'/contact'}
            className={buttonVariants({
              variant: 'default',
              className: 'text-white',
            })}
          >
            Book Free Consultation
          </Link>
          <div className='block lg:hidden'>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
