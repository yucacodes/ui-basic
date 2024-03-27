/** @jsxImportSource @builder.io/qwik */

import { PropFunction, component$ } from '@builder.io/qwik'
import { CSnackBarProps } from './SnackBar.common'
import styles from './SnackBar.module.css'
import { selectedFlag } from '../Theme/selectedFlag'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { CSSProperties } from 'react'
import { customColorVariables } from '../Theme/customColorVariables'

export interface SnackBarQwikProps extends CSnackBarProps {
  style?: CSSProperties
  onClick$?: PropFunction<
    (event: PointerEvent, element: HTMLParagraphElement) => any
  >
}

export const SnackBar = component$(
  ({ color, message, textAction, ...props }: SnackBarQwikProps) => {
    const themeColor = selectedFlag(props, colorFlagsOptions)
    const colorVariables = customColorVariables('snackBar', color)

    return (
      <div class={[styles.snackBar]}>
        <p class={[styles.textLabel]}>{message ?? 'Text Label'}</p>
        <p
          style={{ ...colorVariables, ...props.style }}
          class={[styles.textAction, styles[themeColor ?? 'primary']]}
          onClick$={props.onClick$}
        >
          {textAction ?? 'ACTION'}
        </p>
      </div>
    )
  },
)
