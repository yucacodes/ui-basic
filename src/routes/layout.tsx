import { component$, Slot, useSignal } from '@builder.io/qwik'
import {
  Button,
  CenterContentLayout,
  NavLink,
  SideNav,
  SidePanelLayout,
} from '@lib'

export default component$(() => {
  const openPanelSig = useSignal(false)
  return (
    <SidePanelLayout openPanel={openPanelSig.value}>
      <SideNav
        q:slot="panel"
        onClik$={() => {
          openPanelSig.value = false
        }}
      >
        <NavLink href="/Accordion/">Accordion</NavLink>
        <NavLink href="/Button/">Button</NavLink>
        <NavLink href="/TabsManager/">TabsManager</NavLink>
        <NavLink href="/SidePanel/">SidePanel</NavLink>
      </SideNav>
      <CenterContentLayout q:slot="main">
        <Button
          onClick$={() => {
            openPanelSig.value = !openPanelSig.value
          }}
        >
          Toggle
        </Button>
        <Slot />
      </CenterContentLayout>
    </SidePanelLayout>
  )
})
