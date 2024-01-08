/** @jsxImportSource @builder.io/qwik */

import { Slot, component$ } from '@builder.io/qwik'
import { TsxHighLight } from '../TsxHighLight/TsxHighLight.qwik'

export interface TsxPreviewProps {
  code: string
}

export const TsxPreview = component$((props: TsxPreviewProps) => {
  return (
    <div>
      <TsxHighLight code={props.code} />
      <div>
        <Slot />
      </div>
    </div>
  )
})
