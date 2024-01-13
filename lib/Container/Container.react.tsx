/** @jsxImportSource react */

import { CSSProperties, ReactNode } from 'react'
import { selectedFlag } from '../Theme/selectedFlag'
import {
  CContainerProps,
  positionFlagsOptions,
  textAlignFlagsOptions,
} from './Container.common'

export interface ContainerProps extends CContainerProps {
  children?: ReactNode
  style?: CSSProperties
}

export function Container(props: ContainerProps) {
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
      {props.children}
    </div>
  )
}
