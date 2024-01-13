/** @jsxImportSource @builder.io/qwik */

import { CSSProperties, Slot, component$ } from '@builder.io/qwik'
import { selectedFlag } from '../Theme/selectedFlag'
import {
  CContainerProps,
  positionFlagsOptions,
  textAlignFlagsOptions,
} from './Container.common'

export interface ContainerProps extends CContainerProps {
  style?: CSSProperties
}

export const Container = component$((props: ContainerProps) => {
  const position = selectedFlag(props, positionFlagsOptions)
  let textAlign = selectedFlag(props, textAlignFlagsOptions)
    ?.substring(4)
    .toLowerCase() as any

  let width = undefined
  let height = undefined
  let minWidth = undefined
  let minHeight = undefined

  if (props.fullWidth || props.fullSize) {
    minWidth = width = '100%'
    minHeight = height = '100%'
  }
  return (
    <div
      style={{
        position,
        width,
        minWidth,
        height,
        minHeight,
        overflow: 'hidden',
        textAlign,
        ...props.style,
      }}
    >
      <Slot />
    </div>
  )
})
