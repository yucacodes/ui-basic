/** @jsxImportSource @builder.io/qwik */

import { CSSProperties, Slot, component$ } from '@builder.io/qwik'
import {
  sizeOptions,
  CSubTitleProps
} from './SubTitle.common'
import { selectedFlag } from '../Theme/selectedFlag'

export interface SubTitleProps extends CSubTitleProps {
  style?: CSSProperties
}

export const SubTitle = component$((props: SubTitleProps) => {
  const size = selectedFlag(props, sizeOptions)

  return (
    <div
      style={{
        fontSize: size,
        color: props.color,
        fontWeight: props.weight,
        ...props.style,
      }}
    >
      <Slot />
    </div>
  )
})
