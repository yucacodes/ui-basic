/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import { CBentoGridProps, } from './BentoGrid.common'
import styles from './BentoGrid.module.css'

export interface BentoGridProps extends CBentoGridProps {  
  class?: ClassList
  style?: CSSProperties
}

export const BentoGrid = component$(
  ({ ...props }: BentoGridProps) => {


    return (
      <div 
        style={props.style}  
        class={[
          props.class,
          styles.bentoGrid,  
        ]}
      >
        <Slot></Slot>
      </div>
    )
  },
)
