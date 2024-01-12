/** @jsxImportSource @builder.io/qwik */

import {
  $,
  ClassList,
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
  useStore,
  useTask$,
} from '@builder.io/qwik'
import styles from './SidePanelLayout.module.css'
import { useLocation } from '@builder.io/qwik-city'

const toogleElementId = 'yucacodes-ui-sidePanelLayout-toogleButton'

// ----------------------  Side Panel Layout Context ----------------------
export interface SidePanelLayoutContextProps {
  openPanel: boolean
}

export const sidePanelLayoutContext =
  createContextId<SidePanelLayoutContextProps>('yucacodes.ui.sidePanelLayout')

// ---------------------  Side Panel Layout --------------------------

export interface SidePanelLayoutProps {
  class?: ClassList
}

export const SidePanelLayout = component$((props: SidePanelLayoutProps) => {
  const contextState = useStore<SidePanelLayoutContextProps>({
    openPanel: false,
  })
  useContextProvider(sidePanelLayoutContext, contextState)

  const panelRef = useSignal<HTMLElement | undefined>()
  const mainRef = useSignal<HTMLElement>()
  const onDrag = useSignal<boolean>(false)

  const location = useLocation()

  useTask$(({ track }) => {
    const pathname = track(() => location.url.pathname)
    console.log({ pathname })
    mainRef.value?.scrollTo(0, 0)
  })

  const handleMouse = $((event: MouseEvent) => {
    if (event.type === 'mousedown') onDrag.value = true
    else if (event.type === 'mouseup' || event.type === 'mouseleave')
      onDrag.value = false
    else if (event.type === 'mousemove' && panelRef.value && onDrag.value) {
      const panelElement = panelRef.value
      const { clientX } = event
      panelElement.style.width = clientX + 'px'
    }
  })

  const handleRootClick = $((event: MouseEvent) => {
    if (
      !(event.target as HTMLElement)?.matches(
        `#${toogleElementId},#${toogleElementId} *`,
      )
    ) {
      contextState.openPanel = false
    }
  })

  return (
    <div
      class={[styles.root, props.class, onDrag.value && styles.onDrag]}
      onMouseUp$={handleMouse}
      onMouseLeave$={handleMouse}
      onMouseMove$={handleMouse}
      onClick$={handleRootClick}
    >
      <div
        ref={panelRef}
        class={[styles.sidePanel, contextState.openPanel && styles.open]}
      >
        <Slot name="panel" />
        <div
          class={[styles.sideBorder, onDrag.value && styles.focus]}
          onMouseDown$={handleMouse}
        ></div>
      </div>
      <div class={styles.main} ref={mainRef}>
        <Slot />
      </div>
    </div>
  )
})

// ---------------------  Side Panel Layout --------------------------

export const ToogleSidePanel = component$(() => {
  const contextState = useContext(sidePanelLayoutContext)
  return (
    <span
      id={toogleElementId}
      onClick$={() => {
        contextState.openPanel = !contextState.openPanel
      }}
    >
      <Slot />
    </span>
  )
})
