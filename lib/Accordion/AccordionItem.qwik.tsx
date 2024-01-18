/** @jsxImportSource @builder.io/qwik */

import {
    CSSProperties,
    ClassList,
    Slot,
    component$
} from '@builder.io/qwik'
import styles from './AccordionItem.module.css'
  
  export interface AccordionItemProps {
    class?: ClassList
    style?: CSSProperties
    open: boolean
  }
  
  export const AccordionItem = component$(
    ({ open = false, ...props }: AccordionItemProps) => {
    
      return (
          <details open={open}
          class={[
            styles.sumary,
            props.class
          ]}>
            <summary> 
             <Slot name="title"></Slot>    
            </summary>
            <Slot />
          </details>
      )
    },
  )
  