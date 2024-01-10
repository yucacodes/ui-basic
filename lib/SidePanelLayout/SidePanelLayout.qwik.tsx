/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './SidePanelLayout.module.css'

export interface SidePanelLayoutProps {
  class?: ClassList
}

export const SidePanelLayout = component$((props: SidePanelLayoutProps) => {
  return (
    <div class={[styles.root, props.class]}>
      <div class={styles.sidePanel}>
        <Slot name="panel" />
      </div>
      <div class={styles.main}>
        <Slot name="main" />
      </div>
    </div>
  )
})
