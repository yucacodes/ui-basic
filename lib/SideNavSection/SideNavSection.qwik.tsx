/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  PropFunction,
  Slot,
  component$
} from '@builder.io/qwik'
import {
  CSideNavSectionProps
} from './SideNavSection.common'
import styles from './SideNavSection.module.css'

export interface SideNavSectionProps extends CSideNavSectionProps {
  class?: ClassList
  style?: CSSProperties
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLButtonElement) => any
  >
}

export const SideNavSection = component$(
  ({ color, loading, ...props }: SideNavSectionProps) => {


    return (
      <h2  class={[
        props.class,
        styles.title,
      ]}>
        <span class="text-base-content">
          <Slot name="icon" />
        </span>{' '}
        <Slot />
      </h2>
    )
  },
)
