/** @jsxImportSource @builder.io/qwik */

import { CSSProperties } from 'react'
import { ClassList, Slot, component$ } from '@builder.io/qwik'
import { TsxHighLight } from '../TsxHighLight/TsxHighLight.qwik'
import { CTsxPreviewProps } from './TsxPreview.common'
import styles from './TsxPreview.module.css'

export interface TsxPreviewProps extends CTsxPreviewProps {
  class?: ClassList
  style?: CSSProperties
}

export const TsxPreview = component$((props: TsxPreviewProps) => {
  return (
    <div class={[props.class, styles.root]}>
      <TsxHighLight class={styles.tsxhl} code={props.code} />
      <div class={styles.preview} style={{ ...props.style }}>
        <Slot />
      </div>
    </div>
  )
})
