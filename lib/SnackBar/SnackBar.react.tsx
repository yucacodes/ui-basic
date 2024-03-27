/** @jsxImportSource react */

import { CSSProperties, MouseEventHandler } from 'react'
import { CSnackBarProps } from './SnackBar.common'
import { selectedFlag } from '../Theme/selectedFlag'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { customColorVariables } from '../Theme/customColorVariables'
import styles from './SnackBar.module.css'
import classNames from 'classnames'

export interface SnackBarReactProps extends CSnackBarProps {
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLParagraphElement>
}

export function SnackBar({
  color,
  message,
  textAction,
  ...props
}: SnackBarReactProps) {
  const themeColor = selectedFlag(props, colorFlagsOptions)
  const colorVariables = customColorVariables('snackBar', color)

  return (
    <div className={classNames([styles.snackBar])}>
      <p className={classNames([styles.textLabel])}>
        {message ?? 'Text Label'}
      </p>
      <p
        style={{ ...colorVariables, ...props.style }}
        className={classNames([
          styles.textAction,
          styles[themeColor ?? 'primary'],
        ])}
        onClick={props.onClick}
      >
        {textAction ?? 'ACTION'}
      </p>
    </div>
  )
}
