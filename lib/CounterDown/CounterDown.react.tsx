/** @jsxImportSource react */

import type { CSSProperties, ReactNode } from 'react'
import { CCounterDownProps } from './CounterDown.common'
import styles from './Accordion.module.css'

export interface CounterDownReactProps extends CCounterDownProps {
  style?: CSSProperties
  children?: ReactNode
  className?: string
  title: string
  open?: boolean
  showIcon?: boolean
  shadow?: boolean
  name?: string
}

export function CounterDown({
  title,
  className,
  shadow,
  showIcon,
  name,
  ...props
}: CounterDownReactProps) {
  const opened = props.open ?? false
  let hasShadow = shadow ?? false

  let isIcon = showIcon ?? true

  return (
   <div></div>
  )
}
