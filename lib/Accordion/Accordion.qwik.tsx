/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  PropFunction,
  Slot,
  component$,
} from '@builder.io/qwik'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { customColorVariables } from '../Theme/customColorVariables'
import { selectedFlag } from '../Theme/selectedFlag'
import { CButtonProps, buttonVariantFlagsOptions } from './Accordion.common'
import styles from './Accordion.module.css'
import rippleAnimation from '../CssAnimations/ripple.module.css'

export interface AccordionProps extends CButtonProps {
  class?: ClassList
  style?: CSSProperties
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLButtonElement) => any
  >
}

export const Accordion = component$(
  ({ color, loading, ...props }: AccordionProps) => {

    const background = selectedFlag(props, colorFlagsOptions)
    const colorVariables = customColorVariables('btn', color)

    return (
      <section>
      <details open>
          <summary>Who is Eamonn?</summary>
          A guy from TN who makes content on the internet.
      </details>
      <details>
          <summary>What kind of content does he make?</summary>
          He focuses on productivity tips using coding and spreadsheets. He makes <a href="https://youtube.com/@eamonncottrell">YouTube</a> videos and writes articles on freeCodeCamp, <a href="https://www.linkedin.com/in/eamonncottrell/">LinkedIn</a> and his <a href="https://got-sheet.beehiiv.com/">personal newsletter</a>.
      </details>
      <details>
          <summary>What does he do for fun?</summary>
          Hangs out with his wife and four kids, and runs ultramarathons.
      </details>
  </section>
    )
  },
)
