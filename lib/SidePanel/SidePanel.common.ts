export const sidePanelSideFlagsOptions = ['left', 'right'] as const

export interface SidePanelSideFlags {
  left?: boolean
  right?: boolean
}

export interface CSidePanelProps extends SidePanelSideFlags {
  open: boolean
  staticOnPc?: boolean
}
