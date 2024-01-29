import { ColorFlags } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'


export interface CAccordionProps extends ColorFlags {
  color?: CustomColor
  disabled?: boolean
  size?: string
}
