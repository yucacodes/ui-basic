/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { selectedFlag } from '../Theme/selectedFlag'
import { CAccordionProps } from './Accordion.common'
import styles from './Accordion.module.css'

export interface AccordionProps extends CAccordionProps {
  class?: ClassList
  style?: CSSProperties
  open?: boolean
  shadow?: boolean
}

export const Accordion = component$(
  ({ color, open, shadow, ...props }: AccordionProps) => {

    const themeColor = selectedFlag(props, colorFlagsOptions)

    let opened = open ?? false

    let hasShadow = shadow ?? false

    return (
      <details open={opened}
      class={[
        styles.accordion,
        hasShadow && styles.shadow,
        props.class,
        styles[themeColor ?? 'primary'],
      ]}>
        <summary> 
         <Slot name="title"></Slot>    
        </summary>
        <Slot />
      </details>
    )
  },
)
