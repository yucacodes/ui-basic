/** @jsxImportSource @builder.io/qwik */

import {
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
import { CTabsManagerProps } from './TabsManager.common'
import styles from './TabsManager.module.css'

// ----------------------  Tabs Context ----------------------
export interface TabsContextProps {
  registeredTabs: Set<string>
  registeredPanels: Set<string>
  selected: string
}

export const tabsContext =
  createContextId<TabsContextProps>('yucacodes.ui.tabs')

// ---------------------  Tab Manager --------------------------
export interface TabsManagerProps extends CTabsManagerProps {
  class?: ClassList
}

export const TabsManager = component$((props: TabsManagerProps) => {
  const contextState = useStore<TabsContextProps>({
    registeredTabs: new Set(),
    registeredPanels: new Set(),
    selected: props.selected?.toString() ?? '0',
  })
  useContextProvider(tabsContext, contextState)

  return (
    <div class={[styles.tabs, props.class]}>
      <Slot />
    </div>
  )
})

// ----------------------  Tab ----------------------

export interface TabProps {
  class?: ClassList
}

export const Tab = component$((props: TabProps) => {
  const contextState = useContext(tabsContext)
  const nameSig = useSignal<string>('')

  useTask$(({ track }) => {
    const registeredTabs = track(() => contextState.registeredTabs)
    if (!nameSig.value) {
      const name = registeredTabs.size.toString()
      registeredTabs.add(name)
      nameSig.value = name
    }
  })

  return (
    <div
      class={[
        styles.tab,
        props.class,
        contextState.selected === nameSig.value && styles.selected,
      ]}
      onClick$={() => {
        contextState.selected = nameSig.value
      }}
    >
      <Slot />
    </div>
  )
})

// ----------------------  Tab List ----------------------

export interface TabsListProps {
  class?: ClassList
}

export const TabList = component$((props: TabsListProps) => {
  return (
    <div class={[props.class, styles.tabList]}>
      <Slot />
    </div>
  )
})

// ----------------------  Tab Panel ----------------------

export interface TabPanelProps {
  class?: ClassList
}

export const TabPanel = component$((props: TabPanelProps) => {
  const contextState = useContext(tabsContext)
  const nameSig = useSignal<string>('')

  useTask$(({ track }) => {
    const registeredPanels = track(() => contextState.registeredPanels)
    if (!nameSig.value) {
      const name = registeredPanels.size.toString()
      registeredPanels.add(name)
      nameSig.value = name
    }
  })

  return (
    <div
      class={[
        props.class,
        styles.tabPanel,
        contextState.selected === nameSig.value && styles.selected,
      ]}
    >
      <Slot />
    </div>
  )
})
