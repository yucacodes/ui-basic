import { ReactNode } from 'react'
import styles from './Page.module.css'

export interface PageProps {
  children?: ReactNode
}

export function Page(props: PageProps) {
  return <div className={styles.root}>{props.children}</div>
}
