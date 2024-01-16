/** @jsxImportSource react */

import { CSSProperties, ReactNode } from 'react'
import { selectedFlag } from '../Theme/selectedFlag'
import {
sizeOptions,
CSubTitleProps
} from './SubTitle.common'

export interface SubTitleProps extends CSubTitleProps {
  style?: CSSProperties,
  children?: ReactNode
}


export function SubTitle(props: SubTitleProps) {
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
    {props.children}
  </div>

  )
}
