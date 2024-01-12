/** @jsxImportSource @builder.io/qwik */

import {
  $,
  CSSProperties,
  ClassList,
  Slot,
  component$,
  useSignal,
  useTask$,
} from '@builder.io/qwik'
import styles from './Resizable.module.css'

export interface ResizableProps {
  class?: ClassList
  style?: CSSProperties
}

export const Resizable = component$((props: ResizableProps) => {
  const onDragSig = useSignal<boolean>(false)
  const ref = useSignal<HTMLElement | undefined>()

  const handleMouse = $((event: MouseEvent) => {
    if (event.type === 'mousedown') {
      onDragSig.value = true
    } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
      onDragSig.value = false
    } else if (event.type === 'mousemove' && ref.value && onDragSig.value) {
      const panelElement = ref.value
      const { clientX } = event
      panelElement.style.width = clientX + 'px'
    }
  })

  useTask$(({ track, cleanup }) => {
    const onDrag = track(() => onDragSig.value)
    if (onDrag) {
      document.addEventListener('mouseup', handleMouse)
      document.addEventListener('mouseleave', handleMouse)
      document.addEventListener('mousemove', handleMouse)
      document.body.classList.add(styles.onDrag)
      cleanup(() => {
        document.removeEventListener('mouseup', handleMouse)
        document.removeEventListener('mouseleave', handleMouse)
        document.removeEventListener('mousemove', handleMouse)
        document.body.classList.remove(styles.onDrag)
      })
    }
  })

  return (
    <div ref={ref} class={[props.class, styles.root]} style={props.style}>
      <Slot />
      <div class={styles.dragBorder} onMouseDown$={handleMouse}></div>
    </div>
  )
})
