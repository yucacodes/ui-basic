import { CustomColor, RGBColor } from './CustomColor'

function parseHexColor(hexColor: string): RGBColor {
  if (hexColor.length !== 7 && hexColor.length !== 9)
    throw new Error(`Invalid hex color ${hexColor}`)
  const hexR = hexColor.substring(1, 3)
  const hexG = hexColor.substring(3, 5)
  const hexB = hexColor.substring(5, 7)
  const hexA = hexColor.substring(7, 9)
  return {
    r: parseInt(hexR, 16),
    g: parseInt(hexG, 16),
    b: parseInt(hexB, 16),
    a: hexA ? parseInt(hexR, 16) / 255.0 : undefined,
  }
}

export function parseColor(customColor: CustomColor): RGBColor {
  if (typeof customColor == 'object') return customColor
  if (customColor.startsWith('#')) return parseHexColor(customColor)
  throw new Error(`Not supported color format ${customColor}`)
}
