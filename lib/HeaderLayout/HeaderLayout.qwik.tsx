/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './HeaderLayout.module.css'

export interface HeaderLayoutProps {
  hideHeaderOnPc?: boolean
  class?: ClassList
}

export const HeaderLayout = component$((props: HeaderLayoutProps) => {
  return (
    <div
      class={[
        props.class,
        styles.root,
        props.hideHeaderOnPc && styles.hideOnPc,
      ]}
    >
      <div class={[styles.header]}>
        <Slot name="header" />
      </div>
      <div class={styles.main}>
        <Slot />
      </div>
    </div>
  )
})
