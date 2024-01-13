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
import { CButtonProps, buttonVariantFlagsOptions } from './Button.common'
import styles from './Button.module.css'
import rippleAnimation from '../CssAnimations/ripple.module.css'

export interface ButtonProps extends CButtonProps {
  class?: ClassList
  style?: CSSProperties
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLButtonElement) => any
  >
}

export const Button = component$(
  ({ color, loading, ...props }: ButtonProps) => {
    const variant = selectedFlag(props, buttonVariantFlagsOptions)
    const themeColor = selectedFlag(props, colorFlagsOptions)
    const colorVariables = customColorVariables('btn', color)

    return (
      <button
        type={props.type}
        disabled={props.disabled}
        style={{ ...colorVariables, fontSize: props.size, ...props.style }}
        onClick$={props.onClick$}
        class={[
          props.class,
          styles.button,
          rippleAnimation.root,
          styles[themeColor ?? 'primary'],
          styles[variant ?? 'contained'],
          loading && styles['loading'],
        ]}
      >
        <Slot></Slot>
      </button>
    )
  },
)
