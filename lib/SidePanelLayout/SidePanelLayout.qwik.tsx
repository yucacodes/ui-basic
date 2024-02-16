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
import { sidePanelSideFlagsOptions } from '../SidePanel/SidePanel.common'
import { SidePanel } from '../SidePanel/SidePanel.qwik'
import { selectedFlag } from '../Theme/selectedFlag'
import { CSidePanelLayoutProps } from './SidePanelLayout.common'
import styles from './SidePanelLayout.module.css'

const toogleElementId = 'yucacodes-ui-sidePanelLayout-toogleButton'

// ----------------------  Side Panel Layout Context ----------------------
export interface SidePanelLayoutContextProps {
  openPanel: boolean
}

export const sidePanelLayoutContext =
  createContextId<SidePanelLayoutContextProps>('yucacodes.ui.sidePanelLayout')

// ---------------------  Side Panel Layout --------------------------

export interface SidePanelLayoutProps extends CSidePanelLayoutProps {
  class?: ClassList
}

export const SidePanelLayout = component$((props: SidePanelLayoutProps) => {
  const contextState = useStore<SidePanelLayoutContextProps>({
    openPanel: false,
  })
  useContextProvider(sidePanelLayoutContext, contextState)
  const side = selectedFlag(props, sidePanelSideFlagsOptions)

  const mainRef = useSignal<HTMLElement>()
  const onDragSig = useSignal<boolean>(false)

  const location = useLocation()

  useTask$(({ track }) => {
    const pathname = track(() => location.url.pathname)
    // console.log({ pathname })
    mainRef.value?.scrollTo(0, 0)
  })

  const handleRootClick = $((event: MouseEvent) => {    

    if (
      !(event.target as HTMLElement)?.matches(
        `#${toogleElementId}, #${toogleElementId} *`,
      ) &&  !(event.target as HTMLElement)?.matches(
        `details > summary *`,

      )
    ) {
      contextState.openPanel = false
    }
  })


  return (
    <div
      class={[
        styles.root,
        props.class,
        onDragSig.value && styles.onDrag,
        styles[side ?? 'left'],
      ]}
   
      onClick$={handleRootClick}
    >
      <SidePanel
        staticOnPc
        open={contextState.openPanel}
        left={props.left}
        right={props.right}
       
      >
        <Slot name="panel" />
      </SidePanel>
      <div  class={styles.main} ref={mainRef}>
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
