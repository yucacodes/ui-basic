/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { selectedFlag } from '../Theme/selectedFlag'
import { CCounterDownProps } from './CounterDown.common'
import styles from './CounterDown.module.css'

export interface CounterDownProps extends CCounterDownProps {
  class?: ClassList
  style?: CSSProperties
  open?: boolean
  shadow?: boolean
  showIcon?: boolean
  name?: string
}

export const CounterDown = component$(
  ({ color, open, shadow, showIcon, name, ...props }: CounterDownProps) => {

    const themeColor = selectedFlag(props, colorFlagsOptions)

    let opened = open ?? false

    let hasShadow = shadow ?? false

    let isIcon = showIcon ?? true

    return (
     <div></div>
    )
  },
)


