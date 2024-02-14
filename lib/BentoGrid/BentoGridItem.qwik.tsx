/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import { CBentoGridProps, } from './BentoGrid.common'
import styles from './BentoGrid.module.css'

export interface BentoGridItemProps extends CBentoGridProps {  
  class?: ClassList
  style?: CSSProperties
  colSpan?: number
  rowSpan?: number
}

export const BentoGridItem = component$(
  ({ colSpan,...props }: BentoGridItemProps) => {

    const gridColumn = colSpan ? `span ${colSpan} / span ${colSpan}` : 'span 1 / span 1'
    const gridRow = props.rowSpan ? `span ${props.rowSpan} / span ${props.rowSpan}` : 'span 1 / span 1'

    return (
      <div    
        style={{gridColumn, gridRow, ...props.style }}
        class={[
          props.class,
          styles.bentoGridItem,  
        ]}
      >
        <Slot></Slot>
      </div>
    )
  },
)
