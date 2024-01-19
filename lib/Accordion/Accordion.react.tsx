/** @jsxImportSource react */

import type { CSSProperties, ReactNode } from 'react'
import { CAccordionProps } from './Accordion.common'

export interface AccordionProps extends CAccordionProps {
  style?: CSSProperties
  children?: ReactNode
  className?: string
  title?: string | ReactNode
  open?: boolean
}

export const Accordion = ({
  children,
  title,
  className,
  ...props
}: AccordionProps) => {

  const opened = props.open ?? false

  return (
    <details open={opened}
      style={{
        ...props.style,
      }}>
      <summary>
        {
          title && title
        }
      </summary>
      {children}
    </details>
  )
}
