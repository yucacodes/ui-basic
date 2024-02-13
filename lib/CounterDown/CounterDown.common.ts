import { ColorFlags } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'


export interface CCounterDownProps extends ColorFlags {
  color?: CustomColor
  disabled?: boolean
  size?: string
}
