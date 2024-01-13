/** @jsxImportSource react */

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Resizable.module.css'
import classnames from 'classnames'
import { CResizableProps } from './Resizable.common'

type ResizeType = 'Y' | 'X' | 'XY'

export interface ResizableProps extends CResizableProps {
  className?: string
  style?: CSSProperties
  onSizeChange?: (size: { width: number; height: number }) => void
  children?: ReactNode
}

export function Resizable(props: ResizableProps) {
  const [resizeType, setResizeType] = useState<ResizeType | undefined>()
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMouse = (event: React.MouseEvent<HTMLElement> | MouseEvent) => {
    if (event.type === 'mousedown') {
      if (props.disabled || (props['disabledX'] && props['disabledY'])) return
      if (props['disabledX']) setResizeType('Y')
      else if (props['disabledY']) setResizeType('X')
      else setResizeType('XY')
    } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
      setResizeType(undefined)
    } else if (event.type === 'mousemove' && ref.current && resizeType) {
      const root = ref.current
      let { left, top } = root.getBoundingClientRect()

      if (resizeType.includes('X')) {
        root.style.width = event.clientX - left + 'px'
      }
      if (resizeType.includes('Y')) {
        root.style.height = event.clientY - top + 'px'
      }
      if (props.onSizeChange) {
        let { width, height } = root.getBoundingClientRect()
        props.onSizeChange({ width, height })
      }
    }
  }

  useEffect(() => {
    if (resizeType) {
      document.addEventListener('mouseup', handleMouse)
      document.addEventListener('mouseleave', handleMouse)
      document.addEventListener('mousemove', handleMouse)
      document.body.classList.add(styles['onDrag' + resizeType])
      return () => {
        document.removeEventListener('mouseup', handleMouse)
        document.removeEventListener('mouseleave', handleMouse)
        document.removeEventListener('mousemove', handleMouse)
        document.body.classList.remove(styles['onDrag' + resizeType])
      }
    }
  }, [resizeType])

  return (
    <div
      ref={ref}
      className={classnames([props.className, styles.root])}
      style={props.style}
    >
      {props.children}
      {!props['disabledX'] && !props.disabled && (
        <div
          className={classnames([
            styles.dragBorderX,
            resizeType && styles['onDrag' + resizeType],
          ])}
          onMouseDown={handleMouse}
        ></div>
      )}
      {!props['disabledY'] && !props.disabled && (
        <div
          className={classnames([
            styles.dragBorderY,
            resizeType && styles['onDrag' + resizeType],
          ])}
          onMouseDown={handleMouse}
        ></div>
      )}
    </div>
  )
}
