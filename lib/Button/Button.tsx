import classNames from 'classnames'
import type { MouseEventHandler, ReactNode } from 'react'
import { ColorFlags, colorFlagsOptions } from '../Theme/ColorFlags'
import { CustomColor } from '../Theme/CustomColor'
import { selectedFlag } from '../Theme/selectedFlag'
import { customColorVariables } from '../Theme/customColorVariables'
import styles from './Button.module.css'

export const buttonVariantFlagsOptions = [
  'text',
  'contained',
  'outlined',
] as const

export interface ButtonVariantFlags {
  text?: boolean
  contained?: boolean
  outlined?: boolean
}

export interface ButtonProps extends ColorFlags, ButtonVariantFlags {
  children?: ReactNode
  color?: CustomColor
  type?: 'submit' | 'button'
  disabled?: boolean
  className?: string
  loading?: boolean
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
      style={{ ...colorVariables }}
      className={classNames(
        className,
        styles[themeColor ?? 'primary'],
        styles[variant ?? 'contained'],
        loading && styles['loading'],
      )}
    >
      {children ?? 'Button'}
    </button>
  )
}
