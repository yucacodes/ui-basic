/** @jsxImportSource @builder.io/qwik */

import { ClassList, Slot, component$ } from '@builder.io/qwik'
import styles from './CenterContentLayout.module.css'

export interface CenterContentLayoutProps {
  class?: ClassList
}

export const CenterContentLayout = component$(
  (props: CenterContentLayoutProps) => {
    return (
      <div class={[props.class, styles.root]}>
        <div class={styles.main}>
          <Slot />
        </div>
      </div>
    )
  },
)
