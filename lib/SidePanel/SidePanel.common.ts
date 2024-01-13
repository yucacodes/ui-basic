export const sidePanelSideFlagsOptions = ['left', 'right'] as const

export interface SidePanelSideFlags {
  left?: boolean
  right?: boolean
}

export interface CSidePanelProps extends SidePanelSideFlags {
  resizable?: boolean
  open: boolean
  staticOnPc?: boolean
}
