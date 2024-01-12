/** @jsxImportSource @builder.io/qwik */

import {
  $,
  CSSProperties,
  ClassList,
  PropFunction,
  Slot,
  component$,
  useSignal,
  useTask$,
} from '@builder.io/qwik'
import styles from './Resizable.module.css'
import { CResizableProps } from './Resizable.common'

type ResizeType = 'Y' | 'X' | 'XY'

export interface ResizableProps extends CResizableProps {
  class?: ClassList
  style?: CSSProperties
  onSizeChange$?: PropFunction<
    (size: { width: number; height: number }) => void
  >
}

export const Resizable = component$((props: ResizableProps) => {
  const resizeTypeSig = useSignal<ResizeType>()
  const ref = useSignal<HTMLElement>()

  const handleMouse = $((event: MouseEvent) => {
    if (event.type === 'mousedown') {
      if (props.disabled || (props['disabled:x'] && props['disabled:y'])) return
      if (props['disabled:x']) resizeTypeSig.value = 'Y'
      else if (props['disabled:y']) resizeTypeSig.value = 'X'
      else resizeTypeSig.value = 'XY'
    } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
      resizeTypeSig.value = undefined
    } else if (event.type === 'mousemove' && ref.value && resizeTypeSig.value) {
      const root = ref.value
      let { left, top } = root.getBoundingClientRect()

      if (resizeTypeSig.value.includes('X')) {
        root.style.width = event.clientX - left + 'px'
      }
      if (resizeTypeSig.value.includes('Y')) {
        root.style.height = event.clientY - top + 'px'
      }
      if (props.onSizeChange$) {
        let { width, height } = root.getBoundingClientRect()
        props.onSizeChange$({ width, height })
      }
    }
  })

  useTask$(({ track, cleanup }) => {
    const resizeType = track(() => resizeTypeSig.value)
    if (resizeType) {
      document.addEventListener('mouseup', handleMouse)
      document.addEventListener('mouseleave', handleMouse)
      document.addEventListener('mousemove', handleMouse)
      document.body.classList.add(styles['onDrag' + resizeType])
      cleanup(() => {
        document.removeEventListener('mouseup', handleMouse)
        document.removeEventListener('mouseleave', handleMouse)
        document.removeEventListener('mousemove', handleMouse)
        document.body.classList.remove(styles['onDrag' + resizeType])
      })
    }
  })

  return (
    <div ref={ref} class={[props.class, styles.root]} style={props.style}>
      <Slot />
      {!props['disabled:x'] && !props.disabled && (
        <div
          class={[
            styles.dragBorderX,
            resizeTypeSig.value && styles['onDrag' + resizeTypeSig.value],
          ]}
          onMouseDown$={handleMouse}
        ></div>
      )}
      {!props['disabled:y'] && !props.disabled && (
        <div
          class={[
            styles.dragBorderY,
            resizeTypeSig.value && styles['onDrag' + resizeTypeSig.value],
          ]}
          onMouseDown$={handleMouse}
        ></div>
      )}
    </div>
  )
})
