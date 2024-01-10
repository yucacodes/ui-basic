import { component$, Slot } from '@builder.io/qwik'
import { CenterContentLayout, NavLink, SideNav, SidePanelLayout } from '@lib'

export default component$(() => {
  return (
    <SidePanelLayout>
      <SideNav q:slot="panel">
        <NavLink href="/Button">Button</NavLink>
        <NavLink href="/TabsManager">TabsManager</NavLink>
      </SideNav>
      <CenterContentLayout q:slot="main">
        <Slot />
      </CenterContentLayout>
    </SidePanelLayout>
  )
})