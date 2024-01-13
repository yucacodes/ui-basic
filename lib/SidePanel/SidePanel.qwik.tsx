/** @jsxImportSource @builder.io/qwik */

import { CSSProperties, ClassList, Slot, component$ } from '@builder.io/qwik'
import { Resizable } from '../Resizable/Resizable.qwik'
import styles from './SidePanel.module.css'
import { CSidePanelProps, sidePanelSideFlagsOptions } from './SidePanel.common'
import { selectedFlag } from '../Theme/selectedFlag'

export interface SidePanelProps extends CSidePanelProps {
  class?: ClassList
  style?: CSSProperties
}

export const SidePanel = component$((props: SidePanelProps) => {
  const side = selectedFlag(props, sidePanelSideFlagsOptions)

  return (
    <Resizable
      disabledY
      disabled={!props.resizable}
      class={[
        props.class,
        styles.root,
        props.open && styles.open,
        styles[side ?? 'left'],
        props.staticOnPc && styles.staticOnPc,
      ]}
      style={props.style}
    >
      <Slot />
    </Resizable>
  )
})
