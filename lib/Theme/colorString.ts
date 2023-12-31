import { RGBColor } from './CustomColor'

export function colorString({ r, g, b, a }: RGBColor): string {
  if (a !== undefined) return `rgba(${r}, ${g}, ${b}, ${a})`
  return `rgb(${r}, ${g}, ${b})`
}
