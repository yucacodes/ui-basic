/** @jsxImportSource react */

import classnames from 'classnames'
import { CSSProperties, ReactNode } from 'react'
import { Resizable } from '../Resizable/Resizable.react'
import { selectedFlag } from '../Theme/selectedFlag'
import { CSidePanelProps, sidePanelSideFlagsOptions } from './SidePanel.common'
import styles from './SidePanel.module.css'

export interface SidePanelProps extends CSidePanelProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export function SidePanel(props: SidePanelProps) {
  const side = selectedFlag(props, sidePanelSideFlagsOptions)

  return (
    <Resizable
      disabledY
      disabled={!props.resizable}
      className={classnames([
        props.className,
        styles.root,
        props.open && styles.open,
        styles[side ?? 'left'],
        props.staticOnPc && styles.staticOnPc,
      ])}
      style={props.style}
    >
      {props.children}
    </Resizable>
  )
}
