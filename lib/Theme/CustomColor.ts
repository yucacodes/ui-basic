export interface RGBColor {
  r: number
  g: number
  b: number
  a?: number
}

export type CustomColor = string | RGBColor
