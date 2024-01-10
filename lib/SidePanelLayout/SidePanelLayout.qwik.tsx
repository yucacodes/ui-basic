/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './SidePanelLayout.module.css'

export interface SidePanelLayoutProps {
  class?: ClassList
  openPanel?: boolean
}

export const SidePanelLayout = component$((props: SidePanelLayoutProps) => {
  return (
    <div class={[styles.root, props.class]}>
      <div class={[styles.sidePanel, props.openPanel && styles.open]}>
        <Slot name="panel" />
      </div>
      <div class={styles.main}>
        <Slot name="main" />
      </div>
    </div>
  )
})
