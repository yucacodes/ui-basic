import classNames from 'classnames'
import type { MouseEventHandler, ReactNode } from 'react'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { customColorVariables } from '../Theme/customColorVariables'
import { selectedFlag } from '../Theme/selectedFlag'
import { CButtonProps, buttonVariantFlagsOptions } from './Button.common'
import styles from './Button.module.css'

export interface ButtonProps extends CButtonProps {
  children?: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
  children,
  color,
  loading,
  className,
  ...props
}: ButtonProps) => {
  const variant = selectedFlag(props, buttonVariantFlagsOptions)
  const themeColor = selectedFlag(props, colorFlagsOptions)
  const colorVariables = customColorVariables('btn', color)

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      style={{ ...colorVariables, fontSize: props.size }}
      className={classNames(
        className,
        styles['button'],
        styles[themeColor ?? 'primary'],
        styles[variant ?? 'contained'],
        loading && styles['loading'],
      )}
    >
      {children ?? 'Button'}
    </button>
  )
}
