/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  PropFunction,
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
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLButtonElement) => any
  >
}

export const Accordion = component$(
  ({ color, ...props }: AccordionProps) => {

    const themeColor = selectedFlag(props, colorFlagsOptions)


    return (
      <section class={[
        props.class,
        styles.accordion,
        styles[themeColor ?? 'primary'],]}>
        <Slot />
      </section>
    )
  },
)
