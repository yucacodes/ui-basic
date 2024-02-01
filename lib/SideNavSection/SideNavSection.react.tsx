/** @jsxImportSource react */

import classNames from 'classnames'
import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { customColorVariables } from '../Theme/customColorVariables'
import { selectedFlag } from '../Theme/selectedFlag'
import { CSideNavSectionProps, buttonVariantFlagsOptions } from './SideNavSection.common'
import styles from './Button.module.css'

export interface SideNavSectionProps extends CSideNavSectionProps {
  style?: CSSProperties
  children?: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const SideNavSection = ({
  children,
  color,
  loading,
  className,
  ...props
}: SideNavSectionProps) => {
  const variant = selectedFlag(props, buttonVariantFlagsOptions)
  const themeColor = selectedFlag(props, colorFlagsOptions)
  const colorVariables = customColorVariables('btn', color)

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      style={{ ...colorVariables, fontSize: props.size, ...props.style }}
      onClick={props.onClick}
      className={classNames(
        className,
        styles['button'],
        styles[themeColor ?? 'primary'],
        styles[variant ?? 'contained'],
        loading && styles['loading'],
      )}
    >
      {children}
    </button>
  )
}
