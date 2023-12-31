import { CustomColor } from './CustomColor'
import { colorContrast } from './colorContrast'
import { colorString } from './colorString'
import { parseColor } from './parseColor'

export function customColorVariables(
  prefix: string,
  customColor?: CustomColor,
): any {
  if (!customColor) return undefined
  const color = parseColor(customColor)
  return (
    color &&
    ({
      [`--${prefix}-color`]: colorString(color),
      [`--${prefix}-color-rgb`]: `${color.r}, ${color.g}, ${color.b}`,
      [`--${prefix}-color-contrast`]: colorString(colorContrast(color)),
    } as any)
  )
}
