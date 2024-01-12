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
import { useLocation } from '@builder.io/qwik-city'
import styles from './SidePanelLayout.module.css'
import { Resizable } from '../Resizable/Resizable.qwik'

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

  const mainRef = useSignal<HTMLElement>()
  const onDragSig = useSignal<boolean>(false)

  const location = useLocation()

  useTask$(({ track }) => {
    const pathname = track(() => location.url.pathname)
    console.log({ pathname })
    mainRef.value?.scrollTo(0, 0)
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
      class={[styles.root, props.class, onDragSig.value && styles.onDrag]}
      onClick$={handleRootClick}
    >
      <Resizable
        disabled:y
        class={[styles.sidePanel, contextState.openPanel && styles.open]}
      >
        <Slot name="panel" />
      </Resizable>
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
