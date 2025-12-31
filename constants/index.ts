import { TNav_Item, TPricingOption, TTrainingProgram } from '@/lib/types'
import { Dumbbell, ForkKnifeCrossed, Laptop, Star, Users } from 'lucide-react'
import { title } from 'process'

export const NAV_LINKS: TNav_Item[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/results' },
  { label: 'Pricing', href: '/pricing' },
]

export const MOBILE_NAV_LINKS: TNav_Item[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Services & Programs',
    href: '/services',
  },
  {
    label: 'Client Results',
    href: '/results',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
]

export const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/trevorwoodard.fit/',
    icon: '/instagram.svg',
    iconFill: '#FF0069',
  },
  {
    label: 'X',
    href: '/',
    icon: '/x.svg',
  },
  {
    label: 'Mail',
    href: '/',
    icon: '/mail.svg',
  },
]

export const HERO_CARDS = [
  {
    title: '10+',
    subtitle: 'Years Experience',
  },
  {
    title: '500+',
    subtitle: 'Transformed Clients',
  },
  {
    title: 'NASM',
    subtitle: 'Certified',
  },
]

export const HOME_ABOUT_STATS = [
  {
    icon: Star,
    title: 'Top Rated',
    info: '5-Star Average',
  },
  {
    icon: Users,
    title: 'Community',
    info: 'Supportive Network',
  },
]

export const TRAINING_PROGRAMS: TTrainingProgram[] = [
  {
    icon: Dumbbell,
    title: '1:1 Personal Training',
    description:
      'Hands-on coaching in a private studio. Perfect for mastering form and pushing limits safely.',
  },
  {
    icon: Laptop,
    title: 'Online Coaching',
    description:
      'Custom work-out delivered to your phone with weekly check-ins and video form reviews.',
  },
  {
    icon: ForkKnifeCrossed,
    title: 'Nutrition Planning',
    description:
      'Sustainable macronutrient plans tailored to your tastes. No restrictive fad diets.',
  },
]

export const PRICING_OPTIONS: TPricingOption[] = [
  {
    option: 'Basic Online',
    price: '$199/mo',
    description: 'Self-guided plan with monthly updated.',
    stats: [
      'Customized Workout App',
      'Monthly Program Updates',
      'Macro Guidance',
    ],
    favorite: false,
  },
  {
    option: 'Hybrid Coaching',
    price: '$349/mo',
    description: 'Weekly check-ins and video form analysis',
    stats: [
      'All Basic Features',
      'Weekly Check-in Calls',
      'Form Correction Videos',
      'Direct Message Support',
    ],
    favorite: true,
  },
  {
    option: '1:1 In-Person',
    price: '$99/session',
    description: 'Hands on guidance in the studio',
    stats: [
      '60-Minute Sessions',
      'Real Time Feedback',
      'Assisted Stretching',
      'Nutrition Plan Included',
    ],
    favorite: false,
  },
]
