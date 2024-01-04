/** @jsxImportSource @builder.io/qwik */

import { ClassList, PropFunction, component$ } from '@builder.io/qwik'
import { JSXNode } from '@builder.io/qwik/jsx-runtime'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { customColorVariables } from '../Theme/customColorVariables'
import { selectedFlag } from '../Theme/selectedFlag'
import { CButtonProps, buttonVariantFlagsOptions } from './Button.common'
import styles from './Button.module.css'

export interface ButtonProps extends CButtonProps {
  children?: JSXNode
  class?: ClassList
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLButtonElement) => any
  >
}

export const Button = component$(
  ({ children, color, loading, ...props }: ButtonProps) => {
    const variant = selectedFlag(props, buttonVariantFlagsOptions)
    const themeColor = selectedFlag(props, colorFlagsOptions)
    const colorVariables = customColorVariables('btn', color)

    return (
      <button
        type={props.type}
        disabled={props.disabled}
        style={{ ...colorVariables, fontSize: props.size }}
        onClick$={props.onClick$}
        class={[
          props.class,
          styles['button'],
          styles[themeColor ?? 'primary'],
          styles[variant ?? 'contained'],
          loading && styles['loading'],
        ]}
      >
        {children ?? 'Button'}
      </button>
    )
  },
)
