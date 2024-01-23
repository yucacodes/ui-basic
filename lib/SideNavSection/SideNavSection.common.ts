import { ColorFlags } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'

export const buttonVariantFlagsOptions = [
  'text',
  'contained',
  'outlined',
] as const

export interface ButtonVariantFlags {
  text?: boolean
  contained?: boolean
  outlined?: boolean
}

export interface CSideNavSectionProps extends ColorFlags, ButtonVariantFlags {
  color?: CustomColor
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  loading?: boolean
  size?: string
}
