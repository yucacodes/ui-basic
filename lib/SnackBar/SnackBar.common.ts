import { ColorFlags } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'

export interface CSnackBarProps extends ColorFlags {
  color?: CustomColor
  message: string
  textAction: string
}
