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
import { customColorVariables } from '../Theme/customColorVariables'
import { selectedFlag } from '../Theme/selectedFlag'
import { colorFlagsOptions } from '../Theme/ColorFlags'

export interface SideNavSectionProps extends CSideNavSectionProps {
  class?: ClassList
  style?: CSSProperties
  collapsed?: boolean
}

export const SideNavSection = component$(
  ({ color, loading, ...props }: SideNavSectionProps) => {
    const colorVariables = customColorVariables('accordion', color)
    const themeColor = selectedFlag(props, colorFlagsOptions)
    return (
      <>
      {
        props.collapsed ?
        <Accordion
        style={{ ...colorVariables, ...props.style }}
        class={[
          styles[themeColor ?? 'primary'],
          props.class,
        ]}>
            <span q:slot="title">
           <Slot name="title" >

           </Slot>
            </span>
          <Slot />
        </Accordion>
        :
        <h2 
        style={{ ...colorVariables, ...props.style }}
        class={[
          props.class,
          styles.title,
          styles[themeColor ?? 'primary'],
        ]}>
          <span class="text-base-content">
            <Slot name="icon" />
          </span>
          <Slot />
        </h2>
      }
      
      </>
    )
  },
)
