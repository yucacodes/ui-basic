/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './HeaderLayout.module.css'

export interface HeaderLayoutProps {
  'hideHeader:pc'?: boolean
  class?: ClassList
}

export const HeaderLayout = component$((props: HeaderLayoutProps) => {
  return (
    <div class={[props.class, styles.root]}>
      <div class={[styles.header, props['hideHeader:pc'] && styles.hideOnPc]}>
        <Slot name="header" />
      </div>
      <div class={styles.main}>
        <Slot />
      </div>
    </div>
  )
})
