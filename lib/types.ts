import { title } from 'process'
import { LucideIcon } from 'lucide-react'

export type TNav_Item = {
  label: string
  href: string
}

export type TSocial = {
  label: string
  href: string
  icon: string
  iconFill?: string
}

export type TTrainingProgram = {
  icon: LucideIcon
  title: string
  description: string
}

export type TPricingOption = {
  option: string
  price: string
  description: string
  stats: string[]
  favorite: boolean
}
