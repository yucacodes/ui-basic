/** @jsxImportSource react */

import type { CSSProperties, ReactNode } from 'react'
import { CAccordionProps } from './Accordion.common'
import styles from './Accordion.module.css'

export interface AccordionReactProps extends CAccordionProps {
  style?: CSSProperties
  children?: ReactNode
  className?: string
  title: string
  open?: boolean
  shadow?: boolean
}

export function Accordion({
  title,
  className,
  shadow,
  ...props
}: AccordionReactProps) {
  const opened = props.open ?? false
  let hasShadow = shadow ?? false

  return (
    <details
      open={opened}
      style={{
        boxShadow: hasShadow ? styles.shadow : 'none',
        ...props.style,
      }}
      className={className}
    >
      <summary>{title}</summary>
      {props.children}
    </details>
  )
}
