/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './SideNav.module.css'

export interface SideNavProps {
  class?: ClassList
}

export const SideNav = component$((props: SideNavProps) => {
  return (
    <div class={[props.class, styles.root]}>
      <Slot />
    </div>
  )
})
