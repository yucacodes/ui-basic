/** @jsxImportSource @builder.io/qwik */

import { CSSProperties, ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './SideNav.module.css'

export interface SideNavProps {
  class?: ClassList
  style?: string | CSSProperties
}

export const SideNav = component$((props: SideNavProps) => {
  return (
    <div class={[props.class, styles.root]} style={props.style}>
      <Slot />
    </div>
  )
})
