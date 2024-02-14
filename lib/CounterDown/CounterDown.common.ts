import { ColorFlags } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'

export const counterVariantFlagsOptions = [
  'counterdown',
  'clock',
  'full',
] as const

export interface counterVariantFlags  {
  counterdown?: boolean ,
  clock?:boolean,
  full?: boolean,
}

export interface CCounterDownProps extends counterVariantFlags {
  color?: CustomColor
  disabled?: boolean
  size?: string
}
