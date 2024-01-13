export const positionFlagsOptions = [
  'static',
  'relative',
  'absolute',
  'fixed',
] as const

export interface PositionFlags {
  static?: boolean
  relative?: boolean
  absolute?: boolean
  fixed?: boolean
}

export const textAlignFlagsOptions = [
  'textLeft',
  'textCenter',
  'textRight',
] as const

export interface TextAlignFlags {
  textLeft?: boolean
  textCenter?: boolean
  textRight?: boolean
}

export interface CContainerProps extends PositionFlags, TextAlignFlags {
  fullWidth?: boolean
  fullHeight?: boolean
  fullSize?: boolean
}
