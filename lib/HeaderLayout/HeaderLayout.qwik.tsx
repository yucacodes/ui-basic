/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './HeaderLayout.module.css'

export interface HeaderLayoutProps {
  hideHeaderOnPc?: boolean
  class?: ClassList
}

export const HeaderLayout = component$(({
  hideHeaderOnPc, ...props }: HeaderLayoutProps) => {

    let  isHideHeaderOnPc = hideHeaderOnPc ?? false

  return (
    <header
      class={[
        props.class,
        styles.root,
        isHideHeaderOnPc && styles.hideOnPc,
      ]}
    >
      <div class={[styles.header]}>
        <Slot name="header" />
      </div>
      <main class={styles.main}>
        <Slot />
      </main>
    </header>
  )
})
