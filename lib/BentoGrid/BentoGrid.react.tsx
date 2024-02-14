/** @jsxImportSource react */

import classNames from 'classnames'
import type { CSSProperties } from 'react'
import { CBentoGridProps } from './BentoGrid.common'
import styles from './BentoGrid.module.css'

export interface BentoGridProps extends CBentoGridProps {  
  className?: string
  style?: CSSProperties
}


export const BentoGrid = ({
  className,
  ...props
}: BentoGridProps) => {


  return (
  <div> </div>
 
  )
}
