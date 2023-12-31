import { RGBColor } from './CustomColor'

const white = { r: 255, g: 255, b: 255 }
const black = { r: 0, g: 0, b: 0 }

export function colorContrast({ r, g, b }: RGBColor): RGBColor {
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? black : white
}
