import { MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={styles.root}>
      {props.children} Hello
    </button>
  )
}
