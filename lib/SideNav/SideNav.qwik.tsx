/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  PropFunction,
  Slot,
  component$,
} from '@builder.io/qwik'
import styles from './SideNav.module.css'

export interface SideNavProps {
  class?: ClassList
  style?: string | CSSProperties
  onClik$?: PropFunction<(event: PointerEvent, element: HTMLElement) => any>
}

export const SideNav = component$((props: SideNavProps) => {
  return (
    <div
      class={[props.class, styles.root]}
      style={props.style}
      onClick$={props.onClik$}
    >
      <Slot />
    </div>
  )
})
