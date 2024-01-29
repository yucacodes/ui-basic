/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import {
  CSideNavSectionProps
} from './SideNavSection.common'
import styles from './SideNavSection.module.css'
import { Accordion } from '../Accordion/Accordion.qwik'

export interface SideNavSectionProps extends CSideNavSectionProps {
  class?: ClassList
  style?: CSSProperties
  collapsed?: boolean
}

export const SideNavSection = component$(
  ({ color, loading, ...props }: SideNavSectionProps) => {


    return (
      <>
      {
        props.collapsed ?
        <Accordion>
            <span q:slot="title">
           <Slot name="title" >

           </Slot>
            </span>
          <Slot />
        </Accordion>
        :
        <h2  class={[
          props.class,
          styles.title,
        ]}>
          <span class="text-base-content">
            <Slot name="icon" />
          </span>{' '}
          <Slot />
        </h2>
      }
      
      </>
    )
  },
)
