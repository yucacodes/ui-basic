export const colorFlagsOptions = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'danger',
  'black',
  'white',
] as const

export interface ColorFlags {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  warning?: boolean
  danger?: boolean
  black?: boolean
  white?: boolean
}
